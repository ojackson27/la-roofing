import Image from 'next/image';

const services = [
  {
    title: 'Industrial Roofing & Cladding',
    image: '/images/services/industrial.jpg',
  },
  {
    title: 'Roofer',
    image: '/images/services/roofer.jpg',
  },
  {
    title: 'Slate & Tiling',
    image: '/images/services/slate.jpg',
  },
  {
    title: 'Single Ply Roofing',
    image: '/images/services/singleply.jpg',
  },
];

export default function MissionServices() {
  return (
    <section id="services" className="w-full bg-white border-t border-b border-[var(--color-surface-variant)] py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 flex flex-col gap-14">
        {/* Mission block */}
        <div className="reveal text-center max-w-2xl mx-auto flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-[var(--color-trust)]">What We Stand For</h2>
          <p className="text-[var(--color-body-teal)] text-lg leading-relaxed">
            At LA Roofing, we are committed to quality, safety, and structural integrity in every
            project we undertake. From residential repairs to large commercial installations, our
            team delivers lasting results backed by years of expertise and a dedication to our
            community.
          </p>
        </div>

        {/* Service boxes */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <a
              key={service.title}
              href="/services"
              className="group flex flex-col overflow-hidden rounded border border-[var(--color-surface-variant)] transition-shadow hover:shadow-lg"
            >
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex min-h-[44px] items-center justify-center bg-[var(--color-primary)] px-4 py-4">
                <span className="text-center text-base font-bold text-white">{service.title}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
