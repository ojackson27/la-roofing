# LA Roofing — Project Context

## Live Site & Repo
- **Production:** https://la-roofing.vercel.app
- **GitHub:** https://github.com/ojackson27/la-roofing

## Project Summary

Marketing site for **LA Roofing (Exeter) Ltd**, a roofing company based in Exeter, Devon, England (2 Kingfisher Court, Pinhoe Trading Est, Pinhoe, Exeter EX4 8JN · 07791 052508 · 4.97 Google reviews). Built in Next.js 15 (App Router) with Tailwind v4, deployed on Vercel, connected to GitHub.

Real service categories (from Google Business): Industrial Roofing and Cladding, Roofer (general roofing/repairs), Slate and Tiling, Single Ply Roofing.

**Design system:** Teal Monochromatic Foundation — deep teal (`#0A4E46`), near-black (`#0A1F1C`), body teal (`#0B6258`), Electric Mint accent (`#15EAC9`), surface (`#F3F4F6`). Fonts: Montserrat (headings) + Inter (body).

**Homepage sections built:**
1. Navbar (sticky, backdrop-blur, mobile hamburger)
2. HeroVideo (full-screen FPV drone video, overlaid CTAs)
3. MissionServices (mission block + tabbed services: Industrial Roofing & Cladding / Roofer / Slate & Tiling / Single Ply Roofing, with a "View all services" link to `/services`)
4. WorkReviewsCarousel (horizontal snap-scroll, real photos + reviews)
5. AboutSection (two-column: photo + copy)
6. OurWorkCarousel ("Recent Projects" — large snap-scroll carousel with prev/next arrows, shares project data and the click-to-open detail modal with the Our Work page; ends with a black "peek" tab that expands on hover/focus to "View more of our work", linking to `/work`)
7. WhyChooseUs (4-card feature grid with inline SVGs)
8. Testimonials (3-card review grid)
9. ContactSection (contact info + static form)
10. Footer (4-column: brand, quick links, contact, newsletter)

**Services page built (`app/services/page.tsx`):**
- ServicesHero (real roofer photo banner, dark overlay, headline)
- Intro section (Google Business "About" blurb)
- ServicesGrid (4 cards — Industrial Roofing and Cladding, Roofer, Slate and Tiling, Single Ply Roofing — each with a brand-teal header band, white bold title/icon, description + bullets on white body)
- ContactSection (reused from homepage)

**About Us page built (`app/about/page.tsx`):**
- AboutHero (photo-1.jpg banner, dark overlay, "Who We Are" headline)
- AboutIntro (two-column: photo-7.jpg real branded van/team photo + real Google Business blurb, "Rooted in Exeter")
- AboutTrustStrip (3-card strip: Fully Insured / Quality Workmanship / Local to Exeter & Devon — dedicated copy, not a reuse of homepage WhyChooseUs)
- ServiceAreas (photo-9.jpg + checklist: Exeter, Devon, Pinhoe, Heavitree, surrounding areas)
- ContactSection (reused from homepage)

**Our Work page built (`app/work/page.tsx`):**
- WorkHero (banner, "Our Work" headline)
- WorkGallery (4-col photo grid of all projects; click a project to open the shared `ProjectModal` with description + real Google review). Project data lives in `lib/projects.ts`, shared with the homepage `OurWorkCarousel`.
- RealReviews
- ContactSection (reused from homepage)

**Contact page built (`app/contact/page.tsx`):**
- ContactHero
- ContactSection (contact info + form)

## Asset Locations

All source assets are in `C:/Users/ollie/cj-websites/la-roofing/`:

| Asset | Path |
|---|---|
| Design system | `Sttich exports & Design.md/DESIGN.md` |
| Stitch page exports | `Sttich exports & Design.md/*.txt` |
| Logo (transparent PNG) | `Logo designs/Logo transparent.png` |
| Hero video (FPV drone) | `Gemini generations/Cinematic_FPV_drone_shot_smoot.mp4` |
| Business photos | `Photos/` |

In the built project (`public/`):
- `public/video/hero.mp4` — hero video
- `public/images/logo.png` — logo
- `public/images/white-roof.jpg`, `photo-1.jpg` through `photo-9.png` — business photos

## Working Directory

The Next.js project lives at the repo root: `C:/Users/ollie/cj-websites/la-roofing`.

For multi-step feature work, create a fresh git worktree (e.g. `.worktrees/<feature-name>` on a `feature/<name>` branch) per `superpowers:using-git-worktrees`, make edits there, run `npm run build` to verify, then merge to `main` (locally or via PR) and run `vercel --prod` from the repo root to deploy. Don't leave stale uncommitted edits in a worktree's working directory — commit real content changes (like this file) so they survive merges; past sessions lost CLAUDE.md corrections this way.

## Skills to Use

**Always invoke these skills when making design changes or additions:**

- `/impeccable` — production-grade design quality (polish, critique, craft). Run before shipping any new page or section.
- `ui-ux-pro-max` — design system and taste. Run `python3 "C:/Users/ollie/.claude/skills/ui-ux-pro-max/scripts/search.py" "<keywords>" --design-system` for any new page or component.
- `superpowers:subagent-driven-development` — dispatch subagents per task for implementation.
- `superpowers:writing-plans` — write an implementation plan before touching code on multi-step tasks.

**Design rules (non-negotiable):**
- Match the Stitch design system in `DESIGN.md` — do not invent new colours or fonts
- All body text must meet WCAG AA contrast (≥4.5:1)
- No gradient text, no glassmorphism decoration, no emoji icons, no ghost-card pattern (border + wide shadow together)
- Use Electric Mint (`#15EAC9`) only as background/border accent — never as text on white
- Touch targets ≥44px, `prefers-reduced-motion` respected on all animations
- When adding new pages, reference the matching Stitch export in `Sttich exports & Design.md/`
