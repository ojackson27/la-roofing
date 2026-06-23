import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-28">
      <div className="reveal relative w-full h-[320px] md:h-[420px] overflow-hidden">
        <Image
          fill
          src="/images/about-banner.jpg"
          alt="Close-up of a freshly installed tiled roof"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--color-trust)]/55" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
            About LA Roofing
          </h2>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 pt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <p className="reveal text-[var(--color-body-teal)] text-lg leading-relaxed max-w-prose">
          LA Roofing has been serving Exeter and the surrounding areas of
          Devon for over a decade, delivering expert roofing solutions for
          homes and businesses across the region. Our licensed and insured
          team brings precision to every project, no matter the size.
        </p>
        <p className="reveal text-[var(--color-body-teal)] text-lg leading-relaxed max-w-prose">
          We believe in transparent pricing, clear communication, and work
          that stands the test of time. When you choose LA Roofing, you get a
          partner who treats your property with the same care we&apos;d give
          our own.
        </p>
      </div>
    </section>
  );
}
