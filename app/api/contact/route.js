import { NextResponse } from "next/server";

// Fallback direct Brevo REST API sender if nodemailer is not available in environment
async function sendViaBrevoApi({ fromEmail, adminEmail, name, phone, email, service, message, htmlContent }) {
  const apiKey = process.env.SMTP_PASSWORD;
  if (!apiKey) throw new Error("Brevo SMTP_PASSWORD / API key not found");

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: {
        name: "Frontline Pest Control Website",
        email: fromEmail,
      },
      to: [
        {
          email: adminEmail,
          name: "Admin",
        },
      ],
      replyTo: email ? { email, name } : undefined,
      subject: `🚨 New Enquiry from ${name} - Frontline Pest Control`,
      htmlContent: htmlContent,
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Brevo API error (${response.status}): ${errText}`);
  }

  return await response.json();
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || "smtp-relay.brevo.com";
    const port = parseInt(process.env.SMTP_PORT || "587", 10);
    const user = process.env.SMTP_USER || "7a3825001@smtp-brevo.com";
    const pass = process.env.SMTP_PASSWORD;
    const fromEmail = process.env.FROM_EMAIL || "codeshorts007@gmail.com";
    const adminEmail = process.env.ADMIN_EMAIL || "codeshorts007@gmail.com";

    const selectedService = service || "General Enquiry / Free Inspection";
    const userMsg = message ? message.trim() : "No additional notes provided.";
    const userEmail = email ? email.trim() : "Not provided";
    const formattedDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Clean Phone number for direct click to call / whatsapp
    const cleanPhone = phone.replace(/[^0-9+]/g, "");

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Pest Control Enquiry</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f7f6; margin: 0; padding: 20px; color: #1a2e2b; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 1px solid #e2e8e5; }
        .header { background: linear-gradient(135deg, #092f31 0%, #0d4649 100%); color: #ffffff; padding: 32px 28px; text-align: center; }
        .badge { display: inline-block; background: #84cc16; color: #092f31; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px; }
        .title { margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; }
        .content { padding: 32px 28px; }
        .summary-box { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 18px 20px; margin-bottom: 24px; }
        .summary-box p { margin: 0; font-size: 14px; color: #166534; font-weight: 600; }
        .table-info { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
        .table-info td { padding: 12px 14px; font-size: 14px; border-bottom: 1px solid #edf2f0; }
        .table-info td.label { width: 35%; font-weight: 600; color: #5f7d79; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; }
        .table-info td.value { width: 65%; font-weight: 600; color: #092f31; }
        .message-box { background: #f8faf9; border-radius: 12px; padding: 18px 20px; border-left: 4px solid #0d9488; margin-bottom: 28px; }
        .message-title { font-size: 12px; font-weight: 700; color: #0d9488; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
        .message-text { font-size: 14px; line-height: 1.6; color: #334155; margin: 0; white-space: pre-wrap; }
        .actions { display: flex; gap: 12px; justify-content: center; margin-top: 10px; }
        .btn { display: inline-block; padding: 12px 24px; font-size: 14px; font-weight: 700; text-decoration: none; border-radius: 8px; text-align: center; }
        .btn-call { background: #0d9488; color: #ffffff !important; }
        .btn-wa { background: #22c55e; color: #ffffff !important; margin-left: 10px; }
        .footer { background: #f8faf9; padding: 20px 28px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #edf2f0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="badge">New Lead Notification</div>
          <h1 class="title">Frontline Pest Control</h1>
          <p style="margin: 8px 0 0 0; color: #cfe6e6; font-size: 13px;">Website Enquiry Received on ${formattedDate}</p>
        </div>

        <div class="content">
          <div class="summary-box">
            <p>🎯 Customer is requesting a callback / free inspection.</p>
          </div>

          <table class="table-info">
            <tr>
              <td class="label">Customer Name</td>
              <td class="value"><strong>${name}</strong></td>
            </tr>
            <tr>
              <td class="label">Phone Number</td>
              <td class="value"><a href="tel:${cleanPhone}" style="color: #0d9488; text-decoration: none; font-weight: 700;">${phone}</a></td>
            </tr>
            <tr>
              <td class="label">Email Address</td>
              <td class="value">${email ? `<a href="mailto:${email}" style="color: #0d9488; text-decoration: none;">${email}</a>` : '<span style="color:#94a3b8;">Not provided</span>'}</td>
            </tr>
            <tr>
              <td class="label">Service Required</td>
              <td class="value"><span style="display:inline-block; background:#e0f2fe; color:#0369a1; padding:3px 10px; border-radius:6px; font-size:13px; font-weight:600;">${selectedService}</span></td>
            </tr>
          </table>

          <div class="message-box">
            <div class="message-title">Customer Message / Details</div>
            <p class="message-text">${userMsg}</p>
          </div>

          <div style="text-align: center; padding-top: 10px;">
            <a href="tel:${cleanPhone}" class="btn btn-call">📞 Call Customer</a>
            <a href="https://wa.me/${cleanPhone.replace('+', '')}" class="btn btn-wa">💬 WhatsApp Customer</a>
          </div>
        </div>

        <div class="footer">
          Sent automatically from Frontline Pest Control website form.<br/>
          Server time: ${formattedDate}
        </div>
      </div>
    </body>
    </html>
    `;

    let emailSent = false;
    let sendMethod = "none";
    let lastError = null;

    // 1. Try sending via nodemailer
    try {
      const nodemailer = await import("nodemailer").then((m) => m.default || m);
      if (nodemailer && typeof nodemailer.createTransport === "function") {
        const transporter = nodemailer.createTransport({
          host: host,
          port: port,
          secure: port === 465,
          auth: {
            user: user,
            pass: pass,
          },
          tls: {
            rejectUnauthorized: false,
          },
        });

        await transporter.sendMail({
          from: `"Frontline Pest Control" <${fromEmail}>`,
          to: adminEmail,
          replyTo: email ? `"${name}" <${email}>` : undefined,
          subject: `🚨 New Enquiry: ${name} (${selectedService})`,
          text: `New Enquiry Received:\nName: ${name}\nPhone: ${phone}\nEmail: ${userEmail}\nService: ${selectedService}\nMessage: ${userMsg}\nDate: ${formattedDate}`,
          html: htmlContent,
        });

        emailSent = true;
        sendMethod = "nodemailer";
      }
    } catch (err) {
      console.warn("Nodemailer transport attempt error:", err.message);
      lastError = err;
    }

    // 2. If nodemailer not available or failed, fallback to Brevo Direct API
    if (!emailSent) {
      try {
        await sendViaBrevoApi({
          fromEmail,
          adminEmail,
          name,
          phone,
          email,
          service: selectedService,
          message: userMsg,
          htmlContent,
        });
        emailSent = true;
        sendMethod = "brevo-api";
      } catch (err) {
        console.error("Brevo API fallback failed:", err.message);
        lastError = err;
      }
    }

    if (!emailSent) {
      return NextResponse.json(
        {
          success: false,
          error: "Failed to send email. " + (lastError?.message || "Please try again later."),
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully! Our team will contact you soon.",
      method: sendMethod,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
