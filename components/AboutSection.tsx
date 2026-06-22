import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <div className="relative aspect-video md:aspect-square rounded overflow-hidden shadow-sm">
            <Image
              fill
              src="/images/photo-3.jpg"
              alt="LA Roofing team at work"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-[var(--color-trust)]">
            About LA Roofing
          </h2>
          <p className="text-[var(--color-body-teal)] leading-relaxed">
            LA Roofing has been serving the Los Angeles community for over a
            decade, delivering expert roofing solutions for homes and businesses
            across the region. Our licensed and insured team brings precision to
            every project, no matter the size.
          </p>
          <p className="text-[var(--color-body-teal)] leading-relaxed">
            We believe in transparent pricing, clear communication, and work
            that stands the test of time. When you choose LA Roofing, you get a
            partner who treats your property with the same care we&apos;d give
            our own.
          </p>
        </div>
      </div>
    </section>
  );
}
