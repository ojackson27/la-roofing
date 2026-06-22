const services = [
  {
    title: "Industrial Roofing and Cladding",
    description:
      "Large-scale industrial roofing and cladding installation and replacement, engineered to withstand Devon's coastal weather and built for long-term durability.",
    bullets: [
      "New build and replacement cladding",
      "High-performance weatherproof systems",
      "Minimal disruption to operations",
      "Built to industrial safety standards",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Roofer",
    description:
      "Full roofing services for homes and businesses across Exeter, from damaged roof repairs to complete re-roofing, carried out with care and precision.",
    bullets: [
      "Roof repairs and replacements",
      "Leak detection and waterproofing",
      "Free inspection and estimate",
      "Licensed and insured team",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3v-6h6v6h3a1 1 0 001-1V10" />
      </svg>
    ),
  },
  {
    title: "Slate and Tiling",
    description:
      "Traditional slate and tile roofing that combines classic Devon character with modern weatherproofing techniques for a lasting, premium finish.",
    bullets: [
      "Natural slate and clay/concrete tiles",
      "Period and heritage property work",
      "Precision flashing and ridge work",
      "Full warranty on installation",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: "Single Ply Roofing",
    description:
      "Lightweight, flexible, and cost-effective single-ply membrane systems for flat and low-slope roofs, using high-grade synthetic materials.",
    bullets: [
      "TPO and EPDM membrane systems",
      "Ideal for flat and low-slope roofs",
      "Fast installation, minimal downtime",
      "Long-term weather resistance",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16v4H4V6zM4 14h16v4H4v-4z" />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 flex flex-col gap-12">
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-4 p-8 border border-[var(--color-surface-variant)] bg-white rounded transition-shadow duration-200 hover:shadow-md"
            >
              <div className="w-14 h-14 bg-[var(--color-surface)] rounded flex items-center justify-center text-[var(--color-primary)]">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--color-trust)]">{service.title}</h3>
              <p className="text-base text-[var(--color-body-teal)] leading-relaxed">{service.description}</p>
              <ul className="list-disc list-inside space-y-1.5 text-base text-[var(--color-body-teal)]">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
