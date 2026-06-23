import Image from "next/image";

export default function WorkHero() {
  return (
    <section className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/photo-6.png"
        alt="Completed commercial roofing project by LA Roofing"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="reveal-load relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">Our Work</h1>
        <p className="text-lg md:text-xl text-white/90 mt-4">
          Real projects, real reviews from homes and businesses across Exeter and Devon.
        </p>
      </div>
    </section>
  );
}
