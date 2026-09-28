export interface ContactEmailPayload {
  name: string;
  email: string;
  message: string;
}

export function contactEmail(payload: ContactEmailPayload): {
  subject: string;
  text: string;
  html: string;
};

export function createContactHandler(options?: {
  env?: Record<string, string | undefined>;
  createTransport?: any;
  now?: () => number;
}): (req: any, res: any) => Promise<void>;
