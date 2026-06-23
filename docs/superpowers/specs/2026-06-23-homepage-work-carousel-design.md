# Homepage "Recent Projects" Carousel — Design

## Goal
Replace the static `OurWorkBento` grid on the homepage with a large horizontal carousel of real projects, matching the project layout used on the `/work` page. Clicking a slide opens the same project-detail modal used on `/work`. The carousel ends with a black "peek" tab that expands on hover to link to `/work`.

## Shared data & modal
- `lib/projects.ts` — extract the `projects` array (image, alt, title, category, location, duration, description, reviewer, quote) currently inline in `WorkGallery.tsx`. Single source of truth for both pages.
- `components/ProjectModal.tsx` — extract the project-detail dialog currently inline in `WorkGallery.tsx` into `ProjectModal({ project, onClose })`. Keeps existing markup/behavior (Escape to close, backdrop click to close, focus-visible ring).
- `WorkGallery.tsx` updated to import `projects` from `lib/projects.ts` and render `<ProjectModal />` instead of its inline dialog. No visual change to `/work`.

## New component: `OurWorkCarousel.tsx`
Replaces `OurWorkBento.tsx` in `app/page.tsx`.

- Section heading "Recent Projects" (same as today).
- Horizontal snap-scroll track: `flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory`, scrollbar hidden — same pattern as `WorkReviewsCarousel`.
- Cards: one per project from `lib/projects.ts`, larger than the `/work` grid cards (~320–420px wide, ~320px tall), `snap-start`, image with bottom gradient + title/location overlay (same visual language as `WorkGallery` cards).
- Clicking a card sets `activeIndex` state and renders `<ProjectModal project={projects[activeIndex]} onClose={...} />` — same interaction as `/work`.
- Prev/next arrow buttons: circular, ≥44px, teal/mint per design system, positioned over the track (e.g. absolutely positioned at vertical center, left/right edges of the section). `scrollBy({ left: ±cardWidth, behavior: "smooth" })` on the track ref. Disabled (reduced opacity, `pointer-events-none`) at start/end of scroll using scroll position state.
- Last item in the track: the "peek" tab (see below) — not a project card, always renders after the last project.

## "View more of our work" peek tab
- Rendered as the final flex child in the same scroll track, `snap-start`, full card height.
- Default state: black rectangle, ~64px wide, vertically centered chevron icon (or rotated label).
- Hover/focus-within: width transitions 64px → ~280px (`transition-[width] duration-300`), reveals "View more of our work" text + arrow icon, white text on black.
- Implemented as a Next.js `Link` to `/work` wrapping the whole tab, so it's keyboard-focusable and the expand-on-hover also triggers on focus (`group-focus-within` / `:focus-within`).
- Respect `prefers-reduced-motion`: skip the width transition (instant show) — use the existing reduced-motion handling pattern already in the codebase (CSS `@media (prefers-reduced-motion: reduce)` override, consistent with other animated components).

## CLAUDE.md updates
- Move "Our Work" and "Contact" from "Pages not yet built" to documented built pages (mirroring the Services/About page documentation style already in the file).
- Update the homepage section list: replace "OurWorkBento (bento photo grid — 'Recent Projects')" with a description of the new `OurWorkCarousel`.

## Out of scope
- No new project content/photos — reuses the existing 7 projects from `WorkGallery`.
- No changes to `/work` page layout beyond the data/modal extraction (purely internal refactor, same rendered output).
