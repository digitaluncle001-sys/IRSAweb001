# 2026 IRSA Election Portal

Official one-page information portal for the 2026 International Relations
Students' Association (IRSA) Election.

Built with **Next.js (App Router) + React** — fully Vercel-ready. No backend,
no database, no environment variables required.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

## Deploy to Vercel

1. Push this folder to a GitHub/GitLab repository.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no extra configuration is needed.
4. Deploy.

Or deploy directly from the CLI:

```bash
npm i -g vercel
vercel
```

## Editing election content (no design changes needed)

**All editable content lives in one file: [`data/election.js`](data/election.js).**

| What to change                  | Where in `data/election.js` |
| ------------------------------- | --------------------------- |
| Election status                 | `election.status`           |
| Countdown target                | `election.countdownTarget`  |
| Voting URL (activates buttons)  | `election.votingUrl`        |
| Application details URL         | `election.applicationUrl`   |
| Complaint URL                   | `election.complaintUrl`     |
| Timeline dates                  | `timeline` array            |
| Eligibility text & requirements | `eligibility`               |
| Positions / levels table        | `positions` array           |
| Candidates (add objects)        | `candidates` array          |
| Results (add objects)           | `results` array             |
| FAQ entries                     | `faqs` array                |
| Election rules                  | `rules` array               |
| Committee members & contact     | `committee`                 |

### Current placeholder states (to be confirmed)

- `election.status` → `[TO BE CONFIRMED]`
- Screening timeline entry → `[SCREENING DATE TO BE CONFIRMED]`
- Voting link → `null` (button stays locked until you add the URL)
- Application details URL → `null`
- Complaint URL → `null`
- Candidates array → empty (placeholder state shows automatically)
- Results array → empty (placeholder state shows automatically)
- Committee chairman / secretary / contact → `[TO BE CONFIRMED]`

## Project structure

```
├── app/
│   ├── layout.js          # Root layout, SEO metadata, font
│   ├── page.js            # Assembles all sections
│   ├── globals.css        # Full design system (logo-derived palette)
│   └── components/        # One component per section
├── data/
│   └── election.js        # ← ALL editable content
├── public/
│   └── IRSA_Logo.png      # Official logo (unchanged)
├── next.config.mjs
└── package.json
```

## Brand palette

Colours are derived from the official IRSA logo and defined as CSS variables
in `app/globals.css` (`:root`): gold `#b8860b`, deep blue `#16306e`,
red `#a6192e`, warm cream background `#fbf7ee`.
