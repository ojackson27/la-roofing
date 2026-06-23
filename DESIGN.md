---
name: LA Roofing
description: Marketing site for LA Roofing (Exeter) Ltd — a trusted, local, sturdy roofing trade brand
colors:
  deep-teal: "#0A4E46"
  near-black-trust: "#0A1F1C"
  body-teal: "#0B6258"
  electric-mint: "#15EAC9"
  mint-ink: "#0A4E46"
  surface: "#F3F4F6"
  surface-variant: "#E1E2E4"
  background: "#F8F9FB"
typography:
  display:
    fontFamily: "var(--font-montserrat), sans-serif"
    fontWeight: 800
    fontSize: "clamp(2rem, 5vw, 3rem)"
    lineHeight: 1.1
  headline:
    fontFamily: "var(--font-montserrat), sans-serif"
    fontWeight: 800
    fontSize: "1.75rem"
    lineHeight: 1.2
  body:
    fontFamily: "var(--font-inter), sans-serif"
    fontWeight: 400
    fontSize: "1rem"
    lineHeight: 1.6
  label:
    fontFamily: "var(--font-inter), sans-serif"
    fontWeight: 600
    fontSize: "0.875rem"
rounded:
  sm: "4px"
  lg: "8px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.deep-teal}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "10px 24px"
  button-primary-hover:
    backgroundColor: "{colors.electric-mint}"
    textColor: "{colors.near-black-trust}"
  button-cta:
    backgroundColor: "{colors.electric-mint}"
    textColor: "{colors.near-black-trust}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-cta-hover:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.near-black-trust}"
  card-contact:
    backgroundColor: "{colors.deep-teal}"
    textColor: "#FFFFFF"
    rounded: "{rounded.lg}"
    padding: "32px"
---

# Design System: LA Roofing

## 1. Overview

**Creative North Star: "The Trade Yard"**

LA Roofing's interface should feel like the company itself: a working trade yard, not a tech showroom. Deep teal reads like powder-coated sheet metal and ridge cladding; near-black grounds the page like asphalt and steel; Electric Mint is used the way a hi-vis strip is used on site gear, a flash of attention on exactly the thing that needs it, never as wallpaper. Surfaces stay flat and bordered rather than soft and shadowed, because this is a sturdy, no-nonsense local trade business in Exeter and Devon, not a SaaS startup. Every section should earn trust through real photos of real jobs and real reviews, not through abstraction, gradients, or decorative flourish.

This system explicitly rejects: hero-metric stat blocks, tiny uppercase tracked eyebrows stacked above every section, identical icon-card grids, gradient text, and glassmorphism. None of those read as a Devon roofing contractor; they read as a startup pretending to be one.

**Key Characteristics:**
- Deep, saturated teal as the dominant brand color, not a pale tint of it
- Electric Mint reserved for accents: borders, icon badges, primary CTAs — never as text on white
- Flat surfaces with borders for definition, not soft drop shadows
- Bold, heavy display type (Montserrat 800) for hierarchy, not size alone
- Real business photography over illustration or iconography wherever possible

## 2. Colors

The palette is a tight teal-and-black monochrome with a single saturated accent, deliberately restrained rather than multi-color.

### Primary
- **Deep Teal** (#0A4E46): The brand's dominant color — navbar CTAs, card backgrounds (services headers, contact panel), primary buttons at rest.
- **Body Teal** (#0B6258): A slightly lighter teal used for body-level brand surfaces and panel fills where Deep Teal would be too dark to differentiate from Near-Black Trust nearby.

### Secondary
- **Electric Mint** (#15EAC9): The hi-vis accent. Used as borders (`/40` opacity on contact panels), icon badge backgrounds (`/15` opacity), hover states, and the contact form's submit button fill. Never used as text color on a white or light background.
- **Mint Ink** (#0A4E46): The on-light, AA-safe variant of the accent — used when accent-colored *text* is needed against a light surface, since raw Electric Mint fails contrast there.

### Neutral
- **Near-Black Trust** (#0A1F1C): Footer background, contact section background, dark form panels — the "grounding" near-black that anchors trust-heavy sections.
- **Surface** (#F3F4F6): Light card/section backgrounds.
- **Surface Variant** (#E1E2E4): Borders and dividers on light surfaces (navbar border, input borders).
- **Background** (#F8F9FB): Page background (`body`), the lightest neutral.

### Named Rules
**The Hi-Vis Rule.** Electric Mint is a flash of attention, not a fill color. It appears as a border, an icon badge, or a CTA button — never as a body background and never as text directly on white or Surface.

## 3. Typography

**Display Font:** Montserrat (with sans-serif fallback) — `var(--font-montserrat)`
**Body Font:** Inter (with sans-serif fallback) — `var(--font-inter)`

**Character:** Montserrat carries all weight and authority (headings are font-weight 800, near-black or white, often `text-wrap: balance`); Inter stays quiet and functional for everything read at length. The pairing is geometric-sans-meets-humanist-sans: deliberately restrained to two families, no display serif, no script.

### Hierarchy
- **Display** (800, `clamp(2rem, 5vw, 3rem)`, 1.1 line-height): Page-level section headings ("Get in Touch", "Who We Are").
- **Headline** (800, 1.75rem–2rem, 1.2 line-height): Card/component-level titles, e.g. service card names (Industrial Roofing and Cladding, Roofer, Slate and Tiling, Single Ply Roofing).
- **Body** (400, 1rem, 1.6 line-height): Paragraph copy, capped near 65–75ch on text-heavy sections.
- **Label** (600, 0.875rem): Nav links, form labels, button text, small UI labels.

### Named Rules
**The Heavy-or-Quiet Rule.** Headings are always 800-weight Montserrat; body copy is always 400-weight Inter. There is no mid-weight no-man's-land between them — hierarchy comes from this hard contrast plus scale, not from a gradual weight ramp.

## 4. Elevation

This system is flat by default. Depth is conveyed through solid color blocks and 1–2px borders (commonly `border-2 border-[var(--color-accent)]/40` on dark panels), not box-shadow. No component in the current system pairs a border with a soft wide shadow. This is intentional: a trade business reads as more credible when its UI is direct and graphic rather than soft and "lifted," and it sidesteps the ghost-card pattern entirely.

### Named Rules
**The Flat-By-Default Rule.** Surfaces sit at one level. Definition comes from a border or a solid color change, never from `box-shadow`. If a future component feels like it needs a shadow to "pop," reach for a border or background-color shift instead.

## 5. Components

### Buttons
- **Shape:** Sharp-edged, barely rounded (4px, `rounded` / `--radius-DEFAULT`).
- **Primary (nav "Get a Quote"):** Deep Teal background, white text, 24px horizontal / ~10px vertical padding; hover swaps to Electric Mint background with Near-Black Trust text.
- **CTA (contact form submit):** Electric Mint background, Near-Black Trust text, full-width in its container, `min-h-[44px]` enforced for touch target; hover fades to white background, text stays Near-Black Trust.
- **Hover / Focus:** Color-swap transitions only (`transition-colors`), no transform/scale, consistent with the Flat-By-Default Rule.

### Cards / Containers
- **Corner Style:** 8px (`rounded-lg`) on contact/feature panels; sharper 4px on smaller chips.
- **Background:** Deep Teal (contact info panel) or Near-Black Trust (form panel), never plain white when the section sits on a dark Near-Black Trust section background.
- **Shadow Strategy:** None — see Elevation. Definition comes from a `border-2 border-[var(--color-accent)]/40` outline.
- **Border:** Electric Mint at 40% opacity is the standard card border on dark sections.
- **Internal Padding:** 32px (`p-8`) for primary panels, 24px (`p-6`) for nested sub-panels.

### Inputs / Fields
- **Style:** White background, Surface Variant border, 4px radius, generous padding (`px-3 py-2.5`).
- **Focus:** Border and ring both switch to Electric Mint (`focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]`) — the one place accent-as-fill-adjacent is allowed, since it's a thin ring, not a body fill.
- **Labels:** White, semibold, 14px, sitting on the dark form panel.

### Navigation
- **Style:** Sticky top bar, white at 80% opacity with backdrop-blur, bottom border in Surface Variant. Logo at top-left (120×40 in the navbar, distinct from the larger logo-banner treatment used in the Footer). Nav links in Label type, Near-Black Trust, hover to Deep Teal. "Get a Quote" CTA button on the right (desktop); full-width 44px-tall link rows in the mobile dropdown.

### Footer (signature component)
The footer breaks from a standard 4-column layout in favor of a logo-led structure: a centered logo banner (responsive 200–300px wide) with a tagline sits at the top of the footer on its own, separated by a border, followed by a 3-column row (Quick Links / Contact Us / Stay Updated) beneath it, then a bottom copyright bar. The logo is the visual anchor of the footer, not one column competing equally with the others.

## 6. Do's and Don'ts

### Do:
- **Do** use Deep Teal (#0A4E46) and Near-Black Trust (#0A1F1C) as the dominant surface colors on brand-heavy sections (contact, footer).
- **Do** use Electric Mint (#15EAC9) only as a border, icon badge, button fill, or focus ring — never as text directly on white/Surface.
- **Do** define depth with borders and solid color blocks, never `box-shadow`.
- **Do** use real business photography (job sites, the warehouse, completed work) as the proof mechanism, not icons or illustration, wherever a section needs visual weight.
- **Do** keep headings at Montserrat 800 and body copy at Inter 400; let that hard weight contrast carry hierarchy.
- **Do** enforce ≥44px touch targets and `prefers-reduced-motion` fallbacks on every interactive element and animation (the project already does this via a global reduced-motion media query in `globals.css`).

### Don't:
- **Don't** pair a 1px+ border with a soft wide box-shadow on the same element (the ghost-card pattern) — this system never does, keep it that way.
- **Don't** add a tiny uppercase tracked eyebrow above every section heading; that's startup-marketing grammar, not trade-business grammar.
- **Don't** build identical icon-card grids as the default answer for any "list of things" section — vary card size/structure (see the Footer and AboutTrustStrip's asymmetric panel layout for the alternative).
- **Don't** use gradient text or glassmorphism decoration anywhere on the site.
- **Don't** round cards or sections beyond 8px (`rounded-lg`); full-pill rounding is reserved for chips/pills only, never cards.
- **Don't** let Electric Mint exceed roughly 10% of any given section's surface area; its power is in its rarity.
