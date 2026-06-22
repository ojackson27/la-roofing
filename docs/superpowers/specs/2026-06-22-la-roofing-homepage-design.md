# LA Roofing — Homepage Design Spec

**Date:** 2026-06-22  
**Scope:** Homepage only (`/`). Other pages (Services, Our Work, About, Contact) are out of scope for this iteration.

---

## Overview

A Next.js 14 (App Router) marketing homepage for **LA Roofing**, a roofing company. The design is a direct port of the Stitch wireframe (`home page.txt`) into production-quality React components, using the Stitch design system (`DESIGN.md`) faithfully — no creative divergence.

---

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS with custom config (matches Stitch design tokens) |
| Fonts | `next/font/google` — Montserrat + Inter |
| Deployment | Vercel (free tier), connected to GitHub repo `la-roofing` |
| Icons | Material Symbols Outlined (Google CDN) |

---

## Design System

Sourced directly from `DESIGN.md` (Teal Monochromatic Foundation).

**Key colours:**
- Primary / dark teal: `#0A4E46`
- Trust / near-black: `#0A1F1C`
- Body teal: `#0F8B7F`
- Action / Electric Mint accent: `#15EAC9`
- Surface: `#F3F4F6`
- Background: `#F8F9FB`

**Fonts:**
- Headings: Montserrat 700 (xl: 48px, lg: 36px, md: 24px)
- Body: Inter 400 (lg: 18px, md: 16px)

**Radii:** 4px default on all components  
**Spacing:** 4px base scale (xs: 8, sm: 16, md: 24, lg: 48, xl: 80)  
**Grid:** 12-col desktop (1024px+), 4-col mobile. Max width: 1280px. Gutters: 24px.

---

## File Structure

```
app/
  layout.tsx          ← global layout: Navbar + Footer, font providers
  page.tsx            ← homepage: composes all sections
  globals.css         ← Tailwind base + any global overrides
components/
  Navbar.tsx
  HeroVideo.tsx
  MissionServices.tsx
  WorkReviewsCarousel.tsx
  AboutSection.tsx
  OurWorkBento.tsx
  WhyChooseUs.tsx
  Testimonials.tsx
  ContactSection.tsx
  Footer.tsx
public/
  video/
    hero.mp4          ← Cinematic_FPV_drone_shot_smoot.mp4 (renamed)
  images/
    logo.png          ← Logo transparent.png (renamed)
    white-roof.jpg
    photo-1.jpg ... photo-n.jpg   ← Photos folder contents (renamed sequentially)
tailwind.config.ts    ← full design token config
```

---

## Homepage Sections (top to bottom)

### 1. Navbar (sticky, `z-50`)
- White background, 1px bottom border (`surface-variant`)
- Left: `<Image>` with transparent logo PNG, links to `/`
- Centre (desktop): nav links — Home, Services, Our Work, About Us, Contact. Colour `#0F8B7F`, hover Electric Mint.
- Right: "Get a Quote" button — `#0A4E46` bg, white text, hover → Electric Mint bg / dark text
- Mobile: hamburger icon, links collapse into a dropdown drawer

### 2. Hero (`min-h-screen`)
- `<video>` tag: `autoPlay muted loop playsInline`, `object-cover`, fills full viewport
- Dark overlay: `bg-black/50` absolute layer
- Overlaid content (centered, white text):
  - H1: "LA Roofing — Built to Last" (Montserrat 700, 48px)
  - Subheadline: short trust statement (Inter 18px, white/80)
  - Two CTAs: "Get Estimate" (Electric Mint) + "Our Services" (outline white)
- Video source: `public/video/hero.mp4`

### 3. Mission + Services Tabs
- White section, centered max-width container
- "What We Stand For" H2 + paragraph of company mission copy
- Tabbed panel: Residential Roofing / Commercial Roofing / Roof Repair / Maintenance
  - Active tab: Electric Mint bottom border
  - Each tab panel: title + description paragraph + bullet list of key points
- Tab switching handled with React `useState`

### 4. Our Work & Reviews Carousel
- Light surface (`#F3F4F6`) background section
- Horizontal snap-scroll strip of cards
- Each card: real project photo (aspect-video) + 5-star rating + quote snippet + customer name
- Left/right chevron buttons for controlled scroll
- Photos sourced from `public/images/`

### 5. About Section
- Two-column (desktop): photo left, text right
- Photo: one of the real business photos, rounded, shadow
- Text: "About LA Roofing" H2 + 2 paragraphs of company background copy

### 6. Our Work Bento Grid
- 3-column grid, `auto-rows-[250px]`
- 1 large card spanning 2 cols × 2 rows + 2 standard cards
- Each card: real photo filling the card + caption label
- All photos from `public/images/`

### 7. Why Choose Us
- 4-column card grid
- Cards: Material Symbol icon + title + 1–2 sentence description
- Topics: Licensed & Insured, Expert Craftsmanship, 24/7 Support, Locally Owned
- White card, subtle shadow, 4px radius

### 8. Testimonials
- 3 review cards in a row (stack on mobile)
- Light surface section background
- Each: star rating + review text + reviewer name

### 9. Contact Section
- Two-column: info left, form right
- Left: address, phone, email (with Material icons), placeholder map image
- Right: form fields — Name, Email, Phone, Message + Submit button
- Form is static for now (no backend)

### 10. Footer
- Deep teal background (`#0A4E46`), white text
- 4 columns: Logo + blurb | Quick Links | Contact Info | Newsletter signup (static)
- Bottom bar: copyright + Privacy Policy / Terms links

---

## Assets

| Asset | Source | Destination |
|---|---|---|
| Hero video | `Gemini generations/Cinematic_FPV_drone_shot_smoot.mp4` | `public/video/hero.mp4` |
| Logo | `Logo designs/Logo transparent.png` | `public/images/logo.png` |
| Photos | `Photos/*.jpg / *.png` | `public/images/photo-{n}.jpg` |

The "grass" video (`Slow_sweeping_jib_shot_tiltin.mp4`) is excluded.

---

## Out of Scope

- 3D scroll animation (placeholder section removed; replaced with full-screen video hero)
- Other pages (Services, Our Work, About, Contact) — future iterations
- Contact form backend / email sending
- CMS or dynamic content
- Mobile nav drawer animation (functional but unstyled for now)
