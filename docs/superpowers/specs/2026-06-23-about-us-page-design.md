# About Us Page — Design Spec

Date: 2026-06-23

## Summary

Build a new `/about` page for LA Roofing (Exeter) Ltd, following the existing Services page pattern (`app/services/page.tsx`). Content must reflect the real business (Exeter, Devon — not the Stitch export's leftover Los Angeles framing), reuse the existing design system, and reuse real photos already in `public/images/`.

## Source material

- Stitch export: `Sttich exports & Design.md/About us page.txt` — used for section structure only. Contains placeholder content that must NOT ship as-is: fake phone `(555) 123-4567`, fake email `info@laroofing.com`, "the California sun", "Los Angeles" wording, empty map placeholder box, generic Google-hosted stock image URLs.
- Real business facts (verified, from Google Business profile):
  - LA Roofing (Exeter) Ltd, 2 Kingfisher Court, Pinhoe Trading Est, Pinhoe, Exeter EX4 8JN, 07791 052508
  - Real about blurb: "Whether you need your damaged roof repaired or need a complete re-roofing service, we can help. At LA Roofing (Exeter) Ltd, we are passionate about what we do. Our dedicated team of roofers will go out of their way to provide a great service. With years of experience, we are rightly placed to make a positive difference. We cater to customers in Exeter and the surrounding areas of Devon."
  - Service areas: Exeter, Devon, Pinhoe, Heavitree, surrounding areas
- No real facts exist about founding date, exact years trading, or team size beyond "years of experience" — do not invent specific numbers.

## Routes & files

- New route: `app/about/page.tsx` (metadata + composes sections, mirrors `app/services/page.tsx` structure)
- New components in `components/`:
  - `AboutHero.tsx`
  - `AboutIntro.tsx`
  - `AboutTrustStrip.tsx`
  - `ServiceAreas.tsx`
- Reused components: `ContactSection.tsx` (as used on Services page), shared `Navbar`/`Footer` via root layout.

## Sections

### 1. AboutHero
Full-width banner section, mirrors `ServicesHero.tsx` sizing/overlay pattern.
- Background image: `public/images/photo-1.jpg` (wide shot of roofer/crew on a roof frame)
- Dark gradient overlay (black/70 → transparent) for text legibility
- Headline: "Who We Are" (Montserrat, headline-xl)

### 2. AboutIntro
Two-column section (image + text), pattern matches homepage `AboutSection.tsx`.
- Left: `public/images/photo-7.png` (real LA Roofing branded van and team photo)
- Right: heading "Rooted in Exeter" + the real Google Business blurb verbatim (see above)
- No invented stats (no "over a decade", no team size, no founding year)

### 3. AboutTrustStrip
New 3-card icon strip (not a reuse of homepage `WhyChooseUs`, to avoid duplicating that section verbatim across two pages a visitor may browse back-to-back). Cards:
1. **Fully Insured** — "Complete protection for your property and full peace of mind on every job."
2. **Quality Workmanship** — "Years of hands-on experience delivering roofing that's built to last."
3. **Local to Exeter & Devon** — "A local team who knows the area, the building codes, and the weather."

Visual style matches existing card pattern used in `WhyChooseUs.tsx` (icon in tinted circle/square, bold title, body copy, white card, subtle border, hover shadow) for visual consistency, but with only 3 cards and About-specific copy.

### 4. ServiceAreas
Replaces the Stitch export's empty "Service Area Map" placeholder box (no real map asset exists) with a photo + list layout instead:
- One column: `public/images/photo-9.png` (real photo of the LA Roofing team on a roof with a "Local Businesses Recommended By You" sign)
- Other column: heading "Proudly Serving Exeter & Surrounding Areas" + checklist: Exeter, Devon, Pinhoe, Heavitree, Surrounding local areas

### 5. ContactSection
Reuse the existing shared `ContactSection.tsx` component as-is (already used on the Services page) for consistency and to avoid duplicating contact info maintenance in multiple places.

## Design system compliance

- Colors/typography/spacing: per `Sttich exports & Design.md/DESIGN.md` (Teal Monochromatic Foundation) — already in use via existing CSS vars (`--color-trust`, `--color-body-teal`, `--color-primary`, `--color-accent`, `--color-surface`, `--color-surface-variant`) per existing components; no new colors introduced.
- No gradient text, no glassmorphism, no ghost-card pattern (border + wide shadow together), no emoji icons — inline SVGs only, matching `WhyChooseUs.tsx` convention.
- Electric Mint (`#15EAC9`) used only as accent/border, never as body text on white.
- All body text meets WCAG AA contrast.
- Touch targets ≥44px; animations respect `prefers-reduced-motion` (reuse existing `.reveal` scroll-in convention used elsewhere in the codebase).

## Out of scope

- No new photography/asset generation — only existing files in `public/images/`.
- No real map embed — replaced with photo + list per above.
- No invented company history, team bios, or founding date.
