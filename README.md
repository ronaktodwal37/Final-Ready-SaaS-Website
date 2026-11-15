# FlowPilot — SaaS Marketing Website

A responsive, frontend-only SaaS marketing website built with React, Vite, React Router, Tailwind CSS, Framer Motion, and Lucide React.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Getting started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Available scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Run Oxlint
```

## Routes

- `/` — Home
- `/features` — Features
- `/pricing` — Pricing and billing toggle
- `/about` — About
- `/faq` — Searchable FAQ accordion
- `/contact` — Frontend-only demo form

## Important notes

- The Contact form is a UI demonstration only. It does not send or store submitted information because no backend or form service is connected.
- Product metrics, sample social proof, and contact details are illustrative placeholders, not verified company claims.
- Tailwind CSS 3 is configured through `tailwind.config.cjs` and `postcss.config.cjs`.
