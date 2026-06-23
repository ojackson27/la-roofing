# Services Hero — Scroll-Scrubbed Tiles Video

## Goal
Replace the static image in the Services page hero with a GSAP ScrollTrigger-driven video: tiles falling onto a real roofing project, scrubbed by scroll position, with the headline fading in once the tiles land.

## Asset
- Copy `C:\Users\ollie\Downloads\hf_20260622_234533_dddd3430-5dbc-4be4-ac12-11f2d33c1937 (1).mp4` (7s, 1280x720) to `public/video/services-tiles.mp4`.

## Dependencies
- `npm install gsap @gsap/react`.

## Component changes (`components/ServicesHero.tsx`)
- Becomes a client component using `useGSAP` (scoped to a section ref) and `gsap.matchMedia`.
- **Desktop + motion-OK** (`(min-width: 768px) and (prefers-reduced-motion: no-preference)`):
  - `<video>` muted, `playsInline`, `preload="auto"`, no `autoPlay`/`loop`, paused by default.
  - `ScrollTrigger.create({ trigger: section, pin: true, scrub: 1, end: "+=100%" })`, `onUpdate` sets `video.currentTime = self.progress * video.duration` (guarded for `video.duration` being available via `loadedmetadata`).
  - Headline/subtext start at `opacity: 0, y: 20`; tweened to visible once scroll progress passes ~0.8, driven by the same ScrollTrigger's progress (e.g. a separate `gsap.to` with `scrollTrigger: { ...same config, start/end mapped so the tween plays over the final 20% }`, or a manual progress check in `onUpdate`).
- **Mobile or reduced-motion fallback:** plain `autoPlay loop muted playsInline` video (matches `HeroVideo.tsx` pattern), headline always visible at full opacity, no ScrollTrigger/pin created at all.
- `gsap.matchMedia` handles the responsive/reduced-motion split and reverts cleanly on breakpoint changes; `useGSAP`'s scope handles teardown on unmount.

## Layout
- Keep existing overlay (`bg-black/55`) and headline markup/copy unchanged.
- Section sizing during pin is handled automatically by `ScrollTrigger`'s `pin: true` — no manual height changes.

## Out of scope
- `HeroVideo.tsx` (homepage) is untouched.
- No GSAP usage added to other pages/components.
