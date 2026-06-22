# Services Page + Exeter Content Correction — Design Spec

Date: 2026-06-22

## Background

LA Roofing's real identity is **LA Roofing (Exeter) Ltd**, a roofing company in Exeter, Devon, England (4.97 Google reviews). The homepage currently in place was built with invented Los Angeles placeholder content (LA Sunset Blvd address, `(213)` phone, "Los Angeles" copy, and four invented service names: Residential/Commercial/Repair/Maintenance). None of that matches the real business.

Real business facts (from Google Business profile):
- Name: LA Roofing (Exeter) Ltd
- Address: 2, Kingfisher Court, Pinhoe Trading Est, Pinhoe, Exeter EX4 8JN
- Phone: 07791 052508
- Hours: closed Monday, opens 8am Tuesday (treat as standard UK trade week — Mon closed, Tue–Fri 8am–5pm, Sat 8am–12pm, Sun closed, matching the pattern already used in the Stitch export footer)
- Areas served: Exeter and the surrounding areas of Devon
- Real service categories: **Industrial Roofing and Cladding**, **Roofer** (general roofing/repairs), **Slate and Tiling**, **Single Ply Roofing**
- About blurb (Google): "Whether you need your damaged roof repaired or need a complete re-roofing service, we can help. At LA Roofing (Exeter) Ltd, we are passionate about what we do. Our dedicated team of roofers will go out of their way to provide a great service. With years of experience, we are rightly placed to make a positive difference. We cater to customers in Exeter and the surrounding areas of Devon."
- A hero photo (roofer on a roof truss frame, blue sky) has been supplied and is ready to use now. Other images are still being refined in Higgsfield and must NOT be added yet — keep existing placeholder images/icons everywhere else.

## Goals

1. Build a new `/services` page covering the 4 real service categories in depth.
2. Correct all placeholder Los Angeles content across the existing homepage components to the real Exeter business facts.
3. Add the one supplied hero photo to the Services page banner.

## Out of scope

- Adding any other new images (waiting on Higgsfield).
- Building Our Work or About Us pages (separate future tasks).
- Real Google Maps embed (keep "Map coming soon" placeholder pattern).
- Changing the HeroVideo's actual video asset.

## Architecture

### New files
- `app/services/page.tsx` — the Services page, composed of section components below.
- `components/ServicesHero.tsx` — banner section with the supplied roofer photo as background, dark overlay (for WCAG AA text contrast), and "Our Services" headline.
- `components/ServicesGrid.tsx` — the 4 service cards (icon, title, description, no modal — full text inline per earlier decision).
- `components/ContactSection.tsx` is reused as-is on the Services page (already exported as a standalone component; will be imported into `app/services/page.tsx` directly, not duplicated).

### Modified files
- `components/Navbar.tsx` — "Services" link should point to `/services` instead of `#services` (the in-page anchor on the homepage), since it now has its own page. Other links stay as homepage anchors.
- `components/Footer.tsx` — replace address/phone with real Exeter values; "Quick Links" Services link → `/services`.
- `components/ContactSection.tsx` — replace phone/address with real Exeter values.
- `components/HeroVideo.tsx` — copy: "Professional roofing services across Los Angeles." → "Professional roofing services across Exeter and Devon." Headline "LA Roofing. Built to Last." stays (brand name, not a location claim).
- `components/AboutSection.tsx` — "has been serving the Los Angeles community..." → Exeter/Devon equivalent.
- `components/WhyChooseUs.tsx` — "Locally Owned" card body: "A Los Angeles business serving our neighbors..." → Exeter/Devon equivalent.
- `components/MissionServices.tsx` — replace the 4 invented tabs (Residential/Commercial/Repair/Maintenance) with the real 4 categories (Industrial Roofing and Cladding, Roofer, Slate and Tiling, Single Ply Roofing), each with a short description and 3-4 bullets, consistent with the longer copy on the new Services page. The "Services" tab CTA area should link through to `/services` for full detail (e.g., a "View all services" link under the tab panel).
- `app/layout.tsx` — metadata description: "Professional roofing services in Los Angeles" → Exeter/Devon equivalent.
- `public/images/` — add the supplied roofer photo (copied from `C:\Users\ollie\Downloads\hf_20260622_211242_48590319-ee86-4917-8314-158a872f20da (1).png`), saved as `public/images/services-hero.jpg` (converted/renamed, no other processing).

## Page content detail

### ServicesHero
- Full-width banner, supplied photo as background (`object-cover`), `bg-black/55` overlay (matches HeroVideo's existing overlay value for consistency and contrast safety).
- Headline: "Our Services" (Montserrat, headline-xl scale, white text).
- Sits below the sticky Navbar — same `pt` spacing pattern other sections use isn't needed here since this isn't a `<main>` top-of-page hero on `/`, but the global Navbar is `sticky`, not `fixed`, so no extra top padding is required (confirmed from `Navbar.tsx` — it's `sticky top-0`, in normal flow).

### Intro section
- Centered, max-w-3xl, headline "Quality You Can Trust" + the real Google About blurb (reworded slightly to drop the repeated "Exeter and the surrounding areas of Devon" redundancy already in the hero/footer, keep it as the lead paragraph), small accent divider — matches the Stitch export's intro pattern.

### ServicesGrid — 4 cards
Each card: icon in a circular `--color-surface` badge, title (headline-md), 2-3 sentence original description, 3-4 bullet list. Card style matches `WhyChooseUs.tsx` card pattern (white bg, `--color-surface-variant` border, hover shadow) for visual consistency with the rest of the site, NOT the Stitch export's modal-trigger card.

Draft copy (final wording written during implementation, kept within this voice):
1. **Industrial Roofing and Cladding** — large-scale industrial roof and cladding installation/replacement built for durability in Devon's coastal weather.
2. **Roofer** (general roofing) — full roofing service: repairs, replacements, leak detection and waterproofing for homes and businesses.
3. **Slate and Tiling** — traditional slate and tile roofing combining classic Devon aesthetics with modern weatherproofing techniques.
4. **Single Ply Roofing** — lightweight, durable single-ply membrane systems for flat and low-slope roofs.

### Contact/CTA section
- Reuse `ContactSection.tsx` unchanged in structure (just gets the address/phone fix applied site-wide).

## Testing/verification

- `npm run build` in the worktree must pass with no type errors.
- Manually verify in dev server (`npm run dev`):
  - `/services` renders all 4 cards, hero image loads, nav highlights correctly.
  - Navbar "Services" link from homepage and from `/services` both resolve correctly.
  - Footer/Contact sections show the real Exeter address and phone on both `/` and `/services`.
- Run `/impeccable` and the `ui-ux-pro-max` design-system search against the new page before considering it shippable, per project CLAUDE.md.
- Check WCAG AA contrast on the hero overlay text (white on `black/55` over a photo — same pattern already used and presumably already validated on the homepage hero, but verify against the new photo's brightness).
