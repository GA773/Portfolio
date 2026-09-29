import nodemailer from 'nodemailer';

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]));

const emailPattern = /^[^\s<>@,;]+@[^\s<>@,;]+\.[^\s<>@,;]+$/;

export function contactEmail({ name, email, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>');
  const safeReplySubject = encodeURIComponent(`Re: Portfolio Inquiry from ${name}`);
  const mailtoUrl = `mailto:${encodeURIComponent(email)}?subject=${safeReplySubject}`;

  return {
    subject: `[Portfolio Message] ${name} (${email})`,
    text: `New Portfolio Message Received\n──────────────────────────────────────\nFrom:    ${name} <${email}>\n\nMessage:\n${message}\n\n──────────────────────────────────────\nReply to this email to contact the sender directly (${email}).`,
    html: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Message</title>
</head>
<body style="margin:0;padding:0;background-color:#0d0c0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;color:#ede5d8;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#0d0c0a;padding:40px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background-color:#171511;border:1px solid #2e281f;border-radius:18px;overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,0.65);">
          
          <!-- Top Gradient Accent Bar -->
          <tr>
            <td height="4" style="background:linear-gradient(90deg,#e5a400 0%,#f59e0b 50%,#d97706 100%);line-height:4px;font-size:4px;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding:28px 32px 22px;border-bottom:1px solid #252018;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td valign="middle">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="width:40px;height:40px;background:linear-gradient(135deg,#e5a400,#b45309);border-radius:10px;text-align:center;vertical-align:middle;font-weight:800;font-size:16px;color:#0d0c0a;font-family:monospace;letter-spacing:-0.5px;">
                          GK
                        </td>
                        <td style="padding-left:14px;">
                          <div style="font-size:15px;font-weight:700;color:#f5f0e6;letter-spacing:0.04em;text-transform:uppercase;">Gaurav Kumar</div>
                          <div style="font-size:11px;color:#a39480;letter-spacing:0.08em;text-transform:uppercase;font-family:monospace;">Full-Stack Portfolio</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="right" valign="middle">
                    <span style="display:inline-block;padding:5px 12px;background-color:rgba(229,164,0,0.12);border:1px solid rgba(229,164,0,0.32);border-radius:20px;font-size:10px;font-weight:700;color:#e5a400;text-transform:uppercase;letter-spacing:0.08em;font-family:monospace;">
                      ● New Inquiry
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding:32px;">
              <h1 style="margin:0 0 10px;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;line-height:1.3;">
                Let’s build something together.
              </h1>
              <p style="margin:0 0 24px;font-size:14px;line-height:1.6;color:#a89c8a;">
                A visitor submitted a new message through your portfolio contact form:
              </p>

              <!-- Sender Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#1f1b15;border:1px solid #332b20;border-radius:12px;margin-bottom:24px;">
                <tr>
                  <td style="padding:20px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="padding-bottom:14px;border-bottom:1px solid #2e261c;">
                          <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#8e806c;font-family:monospace;">Sender Name</div>
                          <div style="margin-top:4px;font-size:17px;font-weight:700;color:#ffffff;">${safeName}</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top:14px;">
                          <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#8e806c;font-family:monospace;">Email Address</div>
                          <div style="margin-top:4px;font-size:15px;font-weight:500;">
                            <a href="mailto:${safeEmail}" style="color:#e5a400;text-decoration:none;word-break:break-all;">${safeEmail}</a>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message Section -->
              <div style="margin-bottom:8px;">
                <span style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#8e806c;font-family:monospace;">Message Content</span>
              </div>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#13110d;border-left:3px solid #e5a400;border-radius:6px;margin-bottom:28px;">
                <tr>
                  <td style="padding:18px 20px;font-size:15px;line-height:1.7;color:#f2ece0;word-break:break-word;">
                    ${safeMessage}
                  </td>
                </tr>
              </table>

              <!-- Action CTA Button -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="border-radius:10px;background:linear-gradient(135deg,#f5b014,#d67c19);box-shadow:0 4px 16px rgba(229,164,0,0.35);">
                    <a href="${mailtoUrl}" style="display:inline-block;padding:14px 30px;font-size:14px;font-weight:700;color:#0d0c0a;text-decoration:none;border-radius:10px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;letter-spacing:0.02em;">
                      Reply directly to ${safeName} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:22px 32px;background-color:#13110d;border-top:1px solid #252018;font-size:12px;line-height:1.6;color:#786e5e;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    Sent securely via the contact form on your portfolio.<br>
                    You can also reply directly from your email client using <strong>Reply</strong> to contact <span style="color:#c4b59f;">${safeEmail}</span>.
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  };
}

export function createContactHandler({ env = process.env, createTransport = nodemailer.createTransport, now = Date.now } = {}) {
  // Best-effort per-instance guard; use Vercel Firewall for cross-instance limits.
  const attempts = new Map();
  const DEFAULT_ORIGINS = 'https://portfolio-mu-nine-56.vercel.app,http://localhost:3000,http://localhost:5173';

  return async function handler(req, res) {
    res.setHeader('Cache-Control', 'no-store');
    const reply = (status, error) => res.status(status).json(error ? { error } : { ok: true });
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return reply(405, 'Method not allowed.');
    }

    const originsConfig = env.CONTACT_ORIGIN !== undefined ? env.CONTACT_ORIGIN : DEFAULT_ORIGINS;
    const allowedOrigins = (originsConfig || '').split(',').map(o => o.trim()).filter(Boolean);
    const reqOrigin = req.headers.origin;
    const isOriginAllowed = allowedOrigins.length > 0 && (
      allowedOrigins.includes(reqOrigin) ||
      allowedOrigins.includes('*') ||
      (!env.CONTACT_ORIGIN && reqOrigin && reqOrigin.endsWith('.vercel.app'))
    );
    if (!isOriginAllowed) return reply(403, 'Request not allowed.');

    if (!req.headers['content-type']?.startsWith('application/json')) return reply(415, 'Use JSON.');
    if (Number(req.headers['content-length']) > 20000) return reply(413, 'Message is too large.');
    let body;
    try { body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body; } catch { return reply(400, 'Invalid message.'); }
    if (!body || typeof body !== 'object' || Array.isArray(body)) return reply(400, 'Invalid message.');
    if (body.website) return reply(200);
    const { name, email, message } = body;
    if ([name, email, message].some(value => typeof value !== 'string') ||
        !name.trim() || name.length > 80 || [...name].some(char => char.charCodeAt(0) < 32) ||
        email.length > 254 || !emailPattern.test(email) ||
        message.trim().length < 10 || message.length > 5000) return reply(400, 'Please enter a valid name, email and message (10–5,000 characters).');
    const timestamp = now();
    for (const [key, value] of attempts) if (timestamp - value.start >= 600000) attempts.delete(key);
    const ip = req.headers['x-vercel-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
    const entry = attempts.get(ip) || { start: timestamp, count: 0 };
    if (entry.count >= 5 || attempts.size >= 10000) {
      res.setHeader('Retry-After', '600');
      return reply(429, 'Too many messages. Please try again in 10 minutes.');
    }
    entry.count += 1;
    attempts.set(ip, entry);

    const smtpUser = env.SMTP_USER || env.SMTP_USERNAME || '';
    const smtpPass = env.SMTP_PASS || env.SMTP_PASSWORD || '';
    const recipient = env.CONTACT_TO || smtpUser;

    if (!emailPattern.test(smtpUser || '') || !smtpPass || !emailPattern.test(recipient || '')) return reply(503, 'Email is temporarily unavailable. Please use the email link.');
    try {
      const smtpHost = env.SMTP_HOST || 'smtp.gmail.com';
      const smtpPort = Number(env.SMTP_PORT) || 465;
      const smtpSecure = env.SMTP_SECURE !== undefined
        ? (env.SMTP_SECURE === 'true' || env.SMTP_SECURE === true)
        : (smtpPort === 465);

      const transport = createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: { user: smtpUser, pass: smtpPass.replace(/\s/g, '') },
        connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 15000,
        disableFileAccess: true, disableUrlAccess: true,
      });
      await transport.sendMail({
        from: { name: `${name.trim()} via Portfolio`, address: smtpUser },
        to: recipient,
        replyTo: { name: name.trim(), address: email.trim() },
        priority: 'high',
        headers: {
          'X-Priority': '1',
          'Importance': 'high',
        },
        ...contactEmail({ name: name.trim(), email: email.trim(), message: message.trim() }),
      });
      return reply(200);
    } catch {
      // Never return or log SMTP credentials or visitor message content.
      return reply(502, 'Could not send your message. Please try again or use the email link.');
    }
  };
}
