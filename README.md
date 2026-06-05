# CWP Strategy Microsite

Private strategy microsite for Detroit AI Works to present a repositioning strategy to Cleaning With Purpose.

This is not the public customer-facing Cleaning With Purpose website. It is a private single-page presentation site with anchor navigation for aligning the senior-friendly category, the Peace-of-Mind Home Visit offer, trust stack, pricing, family journey, visit summary workflow, launch roadmap, and Detroit AI Works build proposal.

## Strategy Direction

Cleaning With Purpose is repositioned from a general cleaning company to a senior-friendly home cleaning and family peace-of-mind service.

Core idea:

```text
Cleaning is how the service is delivered. Peace of mind is what the family buys.
```

Primary buyer: the adult child, caregiver, niece, nephew, or family member worried about an aging parent's home.

Service recipient: the older adult living at home.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Netlify-ready static build

No Supabase, backend, authentication, paid APIs, or copyrighted templates are included.

## Project Structure

```text
src/
  components/          One focused component per presentation section
  data/                Editable strategy, pricing, trust, journey, and roadmap copy
  App.tsx              Page composition
  index.css            Tailwind entry and global styles
  main.tsx             React entry
public/
  assets/              Project images and static assets
```

Presentation copy is split across:

```text
src/data/strategyContent.ts
src/data/packages.ts
src/data/trustStack.ts
src/data/roadmap.ts
src/data/journey.ts
```

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints, usually:

```text
http://localhost:5173
```

## Build

```bash
npm run build
```

The production build outputs to:

```text
dist/
```

## Netlify Deployment

This repo includes `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

Connect the GitHub repo to Netlify and use the default build settings. No environment variables are required for this static microsite.

## Editing Notes

- Update strategy copy in the files inside `src/data/`.
- Replace images in `public/assets/`.
- Use `client-entry-email.md` as the send-off email after deploying the Netlify link.
- Keep future backend, auth, database, and paid API work out of this phase unless the project scope changes.
