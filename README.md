# personal-folio

My personal portfolio site — a single scrolling page with a hand-written
particle system behind it.

**[Live → portfolio-ddxplayzs-projects.vercel.app](https://portfolio-ddxplayzs-projects.vercel.app)**

---

## What it is

One page: welcome, about, projects, experience, music, contact. The background
is `src/components/portfolio/ParticleSystem.tsx` — a canvas particle field
written for this site rather than pulled from a library — with a scroll
progress indicator over it.

**The shell was scaffolded with Lovable.** The layout, the shadcn/ui component
set (49 vendored components) and the initial section structure came from a
generator; the particle system, the copy and the project data are written.

This is the weaker of two portfolio surfaces. The other one is
[github.com/DDXPlayz](https://github.com/DDXPlayz) itself, and it carries more
weight.

---

## Three things that were wrong, and are fixed

Worth recording, because all three shipped to production and two of them were
visible to everyone who shared a link:

1. **The Open Graph tags were the generator's.** `og:title` was the raw build
   UUID `ba0b7cf6-fe23-49a4-b627-f47a66661529` and `og:description` read
   *"Lovable Generated Project"* — so every time the link was posted anywhere,
   that is what rendered. The preview image and the Twitter handle pointed at
   `lovable.dev` too. All replaced or removed.
2. **The age framing.** "15-year-old developer" appeared in the meta
   description, the hero, the about section and the footer. It dates badly, and
   it invites the work to be judged as precocious rather than as work.
3. **The projects section described projects that do not exist.** It advertised
   an *"AI Study Planner — smart AI-powered study scheduler that adapts to
   student learning patterns"*, built in *"Python, AI/ML, Flask, Data
   Analytics"*, linking to a repository that is a deterministic TypeScript
   scheduler with no AI, no Python and no Flask in it. It also linked to a repo
   that is now private and to a superseded one.

The list now holds six real projects, each description checked against what the
code does, and the repository link is omitted rather than dead when a project
is private.

---

## Getting started

```bash
git clone https://github.com/DDXPlayz/personal-folio.git
cd personal-folio
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

No environment variables, no backend.

---

## Status & verification

**Status:** live. Updated as the portfolio changes.

| Claim | How it was checked |
|---|---|
| Live at `portfolio-ddxplayzs-projects.vercel.app` | HTTP 200, checked 2026-11-21 |
| Builds from a bare clone | `npm install && npm run build` — **run, passes** |
| The OG tags no longer reference the generator | **run in a browser** against the built output; no `lovable.dev` reference remains in `index.html` |
| No age framing left | grepped the whole of `src/` and `index.html` — zero matches |
| Every project link resolves | **run in a browser** — five repository links rendered for the five public projects, and none for the private one, which is the guard working |

**Not verified:** there is no Open Graph image, so a shared link renders as a
small card with no picture. That is better than the generator's branded image
but it is not finished. No tests.

---

## Credits

Written by **Dhruva Goyal**. Scaffolded with Lovable. shadcn/ui components are
MIT; the particle system is mine.

---

## Licence

No licence — all rights reserved. This is a personal site rather than something
to reuse; read it, borrow ideas from it, but the content is not open-licensed.
