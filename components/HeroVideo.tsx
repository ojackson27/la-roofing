export default function HeroVideo() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <h1 className="text-4xl md:text-6xl font-bold font-[var(--font-montserrat)] leading-tight">
          LA Roofing — Built to Last
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl">
          Professional roofing services across Los Angeles. Quality craftsmanship, guaranteed.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="bg-[var(--color-accent)] text-[var(--color-trust)] font-semibold px-8 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Get Estimate
          </a>
          <a
            href="#services"
            className="border-2 border-white text-white font-semibold px-8 py-3 rounded hover:bg-white hover:text-[var(--color-trust)] transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
