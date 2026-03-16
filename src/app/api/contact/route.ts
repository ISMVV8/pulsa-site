import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nom, email et message sont requis." },
        { status: 400 }
      );
    }

    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!serviceKey) {
      return NextResponse.json(
        { error: "Configuration serveur manquante." },
        { status: 500 }
      );
    }

    const supabase = createClient(
      "https://cbbivknkhmwmrtnofiqi.supabase.co",
      serviceKey
    );

    // 1. Save to CRM as a new contact/lead
    const { data: contact, error: contactError } = await supabase
      .from("contacts")
      .insert({
        name: name.trim(),
        email,
        phone: phone || null,
        company: company || null,
        source: "other",
        status: "lead",
        notes: [
          "Source: Site web pulsacreatives.com",
          service ? `Service: ${service}` : "",
          budget ? `Budget: ${budget}` : "",
          `Message: ${message}`,
        ]
          .filter(Boolean)
          .join("\n"),
      })
      .select("id")
      .single();

    if (contactError) {
      console.error("CRM insert error:", contactError);
    }

    // 2. Log activity if contact was created
    if (contact?.id) {
      await supabase.from("activity_log").insert({
        contact_id: contact.id,
        type: "note",
        description: `Nouveau lead depuis le site web — ${service || "Service non spécifié"} — Budget: ${budget || "Non spécifié"}`,
      });

      // 3. Create a deal in pipeline if service is specified
      if (service) {
        const { data: stages } = await supabase
          .from("pipeline_stages")
          .select("id")
          .order("position", { ascending: true })
          .limit(1);

        if (stages && stages.length > 0) {
          await supabase.from("deals").insert({
            contact_id: contact.id,
            title: `${service} — ${name}`,
            stage_id: stages[0].id,
            value:
              budget === "< 500€"
                ? 499
                : budget === "500€ — 1 500€"
                  ? 1000
                  : budget === "1 500€ — 3 000€"
                    ? 2000
                    : budget === "3 000€+"
                      ? 3000
                      : 0,
            notes: message,
          });
        }
      }
    }

    // 4. Send email notification via Resend (if configured)
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Pulsa Site <notifications@pulsacreatives.com>",
          to: ["contact@pulsacreatives.com"],
          subject: `🔔 Nouveau lead — ${name} (${service || "Site web"})`,
          html: `
            <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #111;">Nouveau lead depuis le site</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #666; width: 120px;">Nom</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
                ${phone ? `<tr><td style="padding: 8px 0; color: #666;">Téléphone</td><td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td></tr>` : ""}
                ${company ? `<tr><td style="padding: 8px 0; color: #666;">Entreprise</td><td style="padding: 8px 0;">${company}</td></tr>` : ""}
                ${service ? `<tr><td style="padding: 8px 0; color: #666;">Service</td><td style="padding: 8px 0;">${service}</td></tr>` : ""}
                ${budget ? `<tr><td style="padding: 8px 0; color: #666;">Budget</td><td style="padding: 8px 0;">${budget}</td></tr>` : ""}
              </table>
              <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
                <strong style="color: #666;">Message :</strong>
                <p style="margin: 8px 0 0; white-space: pre-wrap;">${message}</p>
              </div>
              <p style="margin-top: 24px; color: #999; font-size: 12px;">
                ${contact?.id ? `Contact CRM créé — ID: ${contact.id}` : "⚠️ Contact non enregistré dans le CRM"}
              </p>
            </div>
          `,
        }),
      });
    }

    return NextResponse.json({
      success: true,
      message: "Votre demande a bien été envoyée.",
      contactId: contact?.id || null,
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
