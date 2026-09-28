# Portfolio contact email

The contact form posts to `/api/contact`, a Vercel Node.js function using Nodemailer.
Messages go only to your configured inbox. The visitor is Reply-To, never the sender
or recipient. No automatic emails are sent to unverified visitor addresses.

## Setup

1. Revoke the app password exposed in the shared screenshot. Generate a replacement
   yourself in your Google account; do not paste it into chat or source code.
2. In Vercel → project → Settings → Environment Variables, set:
   - `SMTP_USER`: `gauravkumar9282@gmail.com`
   - `SMTP_PASS`: your new Gmail app password
   - `CONTACT_TO`: `gauravkumar9282@gmail.com`
   - `CONTACT_ORIGIN`: `https://portfolio-mu-nine-56.vercel.app` (no trailing slash)
3. Enable the variables for Production and redeploy the updated code. For Preview,
   configure CONTACT_ORIGIN to match the exact preview origin you want to test.
4. Submit one test message yourself and confirm receipt and Reply-To in your inbox.

Never use a `VITE_` prefix for these secrets. `.env` files are ignored by Git;
`.env.example` contains placeholders only. SMTP errors are not exposed or logged.

## Local development

`npm run dev` now supports `/api/contact` natively via Vite middleware using `.env` or `.env.local`.
Ensure `CONTACT_ORIGIN` includes your local development URL (e.g. `http://localhost:3000`).

## Abuse protection

The API validates origin, method, content type, field lengths, email format, and
escapes HTML. A hidden honeypot and a five-attempt/ten-minute per-instance guard
reduce spam. In-memory limits reset on cold starts and are not global. Configure
Vercel Firewall rate limiting for POST `/api/contact` before public launch; for
heavier traffic, add a server-verified challenge or a shared rate-limit store.

## Verification

Run `node --test server/contact.test.js` (mocked SMTP, no email sent) and
`npm run build`. Actual delivery requires the server variables above.

References: https://nodemailer.com/smtp and https://vercel.com/docs/functions/runtimes/node-js
