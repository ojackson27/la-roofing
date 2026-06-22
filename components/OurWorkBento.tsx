import Image from "next/image";

const cards = [
  {
    src: "/images/unnamed%20(1).png",
    alt: "Commercial roofing project",
    label: "Commercial Installation",
    className:
      "relative md:col-span-2 md:row-span-2 rounded overflow-hidden shadow-sm border border-[var(--color-surface-variant)]",
    sizes: "(max-width: 768px) 100vw, 66vw",
  },
  {
    src: "/images/unnamed%20(2).png",
    alt: "Residential roof",
    label: "Residential Roofing",
    className:
      "relative rounded overflow-hidden shadow-sm border border-[var(--color-surface-variant)]",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    src: "/images/unnamed%20(3).jpg",
    alt: "Roof repair",
    label: "Roof Repair",
    className:
      "relative rounded overflow-hidden shadow-sm border border-[var(--color-surface-variant)]",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
];

export default function OurWorkBento() {
  return (
    <section className="w-full py-20 bg-[var(--color-surface)]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-[var(--color-trust)] text-center">
          Our Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {cards.map((card, i) => (
            <div key={i} className={card.className}>
              <Image
                fill
                src={card.src}
                alt={card.alt}
                className="object-cover"
                sizes={card.sizes}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 text-white text-sm font-semibold">
                {card.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
