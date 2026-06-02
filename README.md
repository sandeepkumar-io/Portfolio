# AI Creative Portfolio

Modern Next.js portfolio for Sandeep Kumar with AI-themed sections, animated 3D-style visuals, Framer Motion interactions, and a working contact form endpoint.

## Getting Started

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:3000`.

## Contact Form Setup

The contact form posts to `app/api/contact/route.ts` and sends email through Resend.

Create `.env.local` in this folder:

```bash
RESEND_API_KEY=re_your_api_key_here
CONTACT_TO_EMAIL=your-email@example.com
CONTACT_FROM_EMAIL="Sandeep Portfolio <onboarding@resend.dev>"
```

Use `CONTACT_TO_EMAIL` for the inbox where you want to receive messages. For production, replace `CONTACT_FROM_EMAIL` with a verified sender/domain from your Resend account.

After changing environment variables, restart the dev server.

## Scripts

```bash
npm run lint
npm run build
```
