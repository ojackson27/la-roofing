import Image from "next/image";

const areas = ["Exeter", "Devon", "Pinhoe", "Heavitree", "Surrounding local areas"];

export default function ServiceAreas() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-[var(--color-trust)]">
      <div className="absolute inset-0">
        <Image
          fill
          src="/images/photo-9.png"
          alt="The LA Roofing team on a roof, recommended by local businesses"
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--color-trust)]/80" />
      </div>
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-16 flex flex-col items-start gap-8">
        <div className="reveal flex flex-col gap-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-white">
            Proudly Serving Exeter &amp; Surrounding Areas
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-prose">
            From Pinhoe to Heavitree and everywhere in between, our team is on the
            road across Exeter and Devon every week.
          </p>
        </div>
        <ul
          className="reveal flex flex-wrap gap-3"
          style={{ animationDelay: "0.1s" }}
        >
          {areas.map((area) => (
            <li
              key={area}
              className="flex items-center gap-2 rounded-full border-2 border-[var(--color-accent)]/40 bg-[var(--color-trust)] px-5 py-2.5 text-white text-base font-semibold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18" className="text-[var(--color-accent)] flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
