import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  try {
    const form = await request.formData();

    // 1) Honeypot: bots fill hidden "company"
    const honey = form.get("company");
    if (honey) {
      return NextResponse.redirect(new URL("/contact?sent=1", request.url), 302);
    }

    // 2) Fields
    const name = (form.get("name") || "").toString().trim();
    const phone = (form.get("phone") || "").toString().trim();
    const email = (form.get("email") || "").toString().trim();
    const time = (form.get("time") || "").toString().trim();
    const message = (form.get("message") || "").toString().trim();

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
    }

    // 3) Email via Resend
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.TO_EMAIL || "miller.76.robin@gmail.com";

    if (apiKey) {
      const resend = new Resend(apiKey);

      // a) Send to you
      await resend.emails.send({
        from: "Robin’s Touch Senior Care <onboarding@resend.dev>", // fine for testing
        to,
        reply_to: email || undefined,
        subject: `New inquiry from ${name}`,
        text: [
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Email: ${email || "—"}`,
          `Preferred time: ${time || "—"}`,
          "",
          "Message:",
          message || "—",
        ].join("\n"),
      });

      // b) Optional auto-reply to visitor
      if (email) {
        await resend.emails.send({
          from: "Robin’s Touch Senior Care <onboarding@resend.dev>",
          to: email,
          subject: "We received your message ✔",
          text:
            `Hi ${name || "there"},\n\n` +
            `Thanks for reaching out to Robin’s Touch Senior Care. We’ll contact you shortly at ${phone}.\n\n` +
            `If it’s urgent, call us at 720-690-8765 or WhatsApp: +1 720-690-8765.\n\n— Robin`,
        });
      }
    } else {
      console.warn("RESEND_API_KEY missing — skipping email send.");
    }

    // 4) Redirect back with success flag
    return NextResponse.redirect(new URL("/contact?sent=1", request.url), 302);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
