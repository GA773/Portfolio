import { createContactHandler } from '../server/contact.js';

const handler = createContactHandler();

export default async function contactApi(req, res) {
  return handler(req, res);
}
