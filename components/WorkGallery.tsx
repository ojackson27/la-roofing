import Image from "next/image";

const cards = [
  {
    src: "/images/photo-5.png",
    alt: "Roofing project in Exeter",
    label: "Re-Roofing",
    className:
      "relative md:col-span-2 md:row-span-2 rounded overflow-hidden border border-[var(--color-surface-variant)]",
    sizes: "(max-width: 768px) 100vw, 66vw",
  },
  {
    src: "/images/photo-3.jpg",
    alt: "Slate and tiling work",
    label: "Slate & Tiling",
    className:
      "relative rounded overflow-hidden border border-[var(--color-surface-variant)]",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    src: "/images/photo-8.png",
    alt: "Single ply roofing project",
    label: "Single Ply Roofing",
    className:
      "relative rounded overflow-hidden border border-[var(--color-surface-variant)]",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    src: "/images/photo-2.jpg",
    alt: "Roof repair in progress",
    label: "Roof Repairs",
    className:
      "relative rounded overflow-hidden border border-[var(--color-surface-variant)]",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    src: "/images/photo-9.png",
    alt: "Industrial roofing and cladding",
    label: "Industrial Cladding",
    className:
      "relative rounded overflow-hidden border border-[var(--color-surface-variant)]",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    src: "/images/white-roof.jpg",
    alt: "Completed white roof installation",
    label: "New Roof Installation",
    className:
      "relative rounded overflow-hidden border border-[var(--color-surface-variant)]",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
];

export default function WorkGallery() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 flex flex-col gap-8">
        <h2 className="reveal text-3xl font-bold text-[var(--color-trust)] text-center">
          Project Gallery
        </h2>
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
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
