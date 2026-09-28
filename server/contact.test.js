import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createContactHandler, contactEmail } from './contact.js';

const env = { SMTP_USER: 'owner@example.com', SMTP_PASS: 'test-only', CONTACT_ORIGIN: 'https://example.com' };
const body = { name: 'Visitor', email: 'visitor@example.com', message: 'Hello, I would like to discuss a project.' };
function request(overrides = {}) { return { method: 'POST', headers: { origin: env.CONTACT_ORIGIN, 'content-type': 'application/json' }, body, ...overrides }; }
async function run(handler, req = request()) {
  const res = { headers: {}, setHeader(k, v) { this.headers[k] = v; }, status(n) { this.code = n; return this; }, json(data) { this.data = data; return this; } };
  await handler(req, res); return res;
}
test('sends only to owner and sets visitor Reply-To', async () => {
  let mail;
  const handler = createContactHandler({ env, createTransport: () => ({ sendMail: async value => { mail = value; } }) });
  assert.equal((await run(handler)).code, 200);
  assert.equal(mail.to, env.SMTP_USER);
  assert.equal(mail.replyTo.address, body.email);
  assert.equal(mail.from.address, env.SMTP_USER);
});
test('escapes HTML in template and retains plain text', () => {
  const mail = contactEmail({ ...body, name: '<script>', message: '<img src=x>\nHello' });
  assert.ok(mail.html.includes('&lt;script&gt;'));
  assert.ok(!mail.html.includes('<img src=x>'));
  assert.ok(mail.text.includes('<img src=x>'));
});
test('rejects invalid requests without SMTP', async () => {
  const handler = createContactHandler({ env, createTransport: () => { throw new Error('must not send'); } });
  for (const [req, code] of [
    [request({ method: 'GET' }), 405],
    [request({ headers: { origin: 'https://other.example' } }), 403],
    [request({ body: '{' }), 400],
    [request({ body: { ...body, email: 'bad\r\nBcc:x@y.com' } }), 400],
    [request({ body: { ...body, name: 'bad\nname' } }), 400],
    [request({ body: { ...body, message: 'x'.repeat(5001) } }), 400],
    [request({ body: { ...body, website: 'bot' } }), 200],
  ]) assert.equal((await run(handler, req)).code, code);
});
test('fails safely when credentials are missing', async () => {
  assert.equal((await run(createContactHandler({ env: { ...env, SMTP_PASS: '' } }))).code, 503);
});
test('does not expose SMTP errors or falsely report success', async () => {
  const handler = createContactHandler({ env, createTransport: () => ({ sendMail: async () => { throw new Error('private-secret'); } }) });
  const res = await run(handler);
  assert.equal(res.code, 502);
  assert.ok(!JSON.stringify(res.data).includes('private-secret'));
});
test('limits requests and expires the window', async () => {
  let time = 0;
  const handler = createContactHandler({ env, now: () => time, createTransport: () => ({ sendMail: async () => {} }) });
  for (let i = 0; i < 5; i++) assert.equal((await run(handler)).code, 200);
  assert.equal((await run(handler)).code, 429);
  time = 600001;
  assert.equal((await run(handler)).code, 200);
});
