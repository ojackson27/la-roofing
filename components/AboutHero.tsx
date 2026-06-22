import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/photo-1.jpg"
        alt="Roofing crew framing a roof truss against a blue sky"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="reveal-load relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">Who We Are</h1>
        <p className="text-lg md:text-xl text-white/90 mt-4">
          A local roofing team based in Exeter, serving Devon with care and precision.
        </p>
      </div>
    </section>
  );
}
