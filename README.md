# Outfit Theory — Promotional Website

Simple React landing page matching the client outfit-page wireframe: featured look, product tiles, shop CTA, and email signup popup.

## Setup

```bash
cd outfit-theory-promotional-website
npm install
npm run dev
```

Default URL: http://localhost:5173

## What's included

- **Home:** “Promotion coming soon” banner + 2×3 looks grid (Old Money, Boss Mode, …) with orange gradient **Shop** buttons
- **Outfit detail:** opens when you click Shop on a look (hero, pieces, Shop CTA)
- Header: logo, **Early Access** badge, account icon; Back on detail view
- Email signup modal: auto after ~5s on home, and whenever Shop / Shop all / product is clicked
- Brand orange gradient CTAs (same motion as main site Try It On)

## Email storage

Signups POST to `POST /api/v1/newsletter/signup`.

1. Saved in Postgres (`PromoSignup`)
2. Thank-you email sent via Brevo SMTP
3. Optionally appended to Google Sheets via Apps Script webhook

See `outfit-theory-backend/scripts/GOOGLE_SHEETS_SETUP.md` for sheet setup.

Set `VITE_API_URL=http://localhost:3001/api/v1` in `.env`.
