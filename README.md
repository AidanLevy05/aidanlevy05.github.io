# aidanlevy05.github.io

Personal portfolio for Aidan Levy, built with **Next.js**, **TypeScript**, and **Tailwind CSS**,
and statically exported for GitHub Pages.

## Development

```bash
npm install
npm run dev     # local dev server at http://localhost:3000
npm run build   # static export to ./out
npm run lint
```

All site content lives in a single typed file: [`src/data/content.ts`](src/data/content.ts).
Edit it to update copy — the components render from that data.

## Structure

```
src/app/          layout, page, global styles + design tokens
src/components/    section components (Hero, Experience, Projects, …)
src/components/ui/ primitives (Container, Section, Tag, ThemeToggle, …)
src/data/          content.ts — single source of truth (from résumé)
public/            résumé PDF, image, robots.txt, sitemap.xml, Google verification
```

## Deployment

Pushes to `main` are built and published by the GitHub Actions workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

**One-time setup:** in the repository settings, set **Settings → Pages → Build and deployment →
Source** to **GitHub Actions**. (Previously this repo served a hand-written `index.html` from the
branch root; the site is now built from source instead.)
