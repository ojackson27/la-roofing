# LA Roofing — Project Context

## Live Site & Repo
- **Production:** https://la-roofing.vercel.app
- **GitHub:** https://github.com/ojackson27/la-roofing

## Project Summary

Marketing homepage for **LA Roofing**, a Los Angeles roofing company. Built in Next.js 15 (App Router) with Tailwind v4, deployed on Vercel, connected to GitHub.

**Design system:** Teal Monochromatic Foundation — deep teal (`#0A4E46`), near-black (`#0A1F1C`), body teal (`#0B6258`), Electric Mint accent (`#15EAC9`), surface (`#F3F4F6`). Fonts: Montserrat (headings) + Inter (body).

**Homepage sections built:**
1. Navbar (sticky, backdrop-blur, mobile hamburger)
2. HeroVideo (full-screen FPV drone video, overlaid CTAs)
3. MissionServices (mission block + tabbed services: Residential / Commercial / Repair / Maintenance)
4. WorkReviewsCarousel (horizontal snap-scroll, real photos + reviews)
5. AboutSection (two-column: photo + copy)
6. OurWorkBento (bento photo grid — "Recent Projects")
7. WhyChooseUs (4-card feature grid with inline SVGs)
8. Testimonials (3-card review grid)
9. ContactSection (contact info + static form)
10. Footer (4-column: brand, quick links, contact, newsletter)

**Pages not yet built:** Services, Our Work, About Us, Contact (separate pages).

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

The Next.js project lives in the git worktree at:
```
C:/Users/ollie/cj-websites/la-roofing/.worktrees/homepage
```
Branch: `feature/homepage` (merged to `main` for deploys).

To work on the site, make edits in `.worktrees/homepage/`, run `npm run build` to verify, then merge to `main` and run `vercel --prod` from that directory to deploy.

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
