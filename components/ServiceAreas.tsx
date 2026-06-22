import Image from "next/image";

const areas = ["Exeter", "Devon", "Pinhoe", "Heavitree", "Surrounding local areas"];

export default function ServiceAreas() {
  return (
    <section className="w-full py-28">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="reveal w-full order-2 md:order-1">
          <div className="relative aspect-[4/3] rounded overflow-hidden">
            <Image
              fill
              src="/images/photo-9.png"
              alt="The LA Roofing team on a roof, recommended by local businesses"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="reveal flex flex-col gap-6 order-1 md:order-2">
          <h2 className="text-3xl font-bold text-[var(--color-trust)]">
            Proudly Serving Exeter &amp; Surrounding Areas
          </h2>
          <ul className="flex flex-col gap-3">
            {areas.map((area) => (
              <li key={area} className="flex items-center gap-3 text-[var(--color-body-teal)] text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="22" height="22" className="text-[var(--color-accent-ink)] flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
