export default function HeroVideo() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/white-roof.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/55" />

      <div className="reveal-load relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <h1 className="text-4xl md:text-6xl font-bold font-[var(--font-montserrat)] leading-tight">
          LA Roofing. Built to Last.
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl">
          Professional roofing services across Los Angeles. Quality craftsmanship, guaranteed.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center min-h-[44px] bg-[var(--color-accent)] text-[var(--color-trust)] font-semibold px-8 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Get Estimate
          </a>
          <a
            href="#services"
            className="inline-flex items-center min-h-[44px] border-2 border-white text-white font-semibold px-8 py-3 rounded hover:bg-white hover:text-[var(--color-trust)] transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>

      <a
        href="#services"
        aria-label="Scroll to services"
        className="scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white transition-colors"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}
