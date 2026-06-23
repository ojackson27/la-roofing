import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/services-hero.jpg"
        alt="Tudor-style house with a newly completed tiled roof"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="reveal-load relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-white/90 mt-4 drop-shadow-md">
          Industrial, residential, and commercial roofing across Exeter and Devon.
        </p>
      </div>
    </section>
  );
}
