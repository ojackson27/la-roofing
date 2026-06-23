import Image from "next/image";

const pinIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="22" height="22">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const clockIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="22" height="22">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const approachIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="22" height="22">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const facts = [
  {
    icon: pinIcon,
    title: "Based in Pinhoe",
    body: "Operating out of Kingfisher Court on the Pinhoe Trading Estate, working across Exeter, Pinhoe, Heavitree and the wider Devon area.",
  },
  {
    icon: clockIcon,
    title: "A decade of roofs",
    body: "Over 10 years of hands-on roofing behind us, built up job by job into a 4.97-star reputation across Exeter and Devon.",
  },
  {
    icon: approachIcon,
    title: "Our approach",
    body: "Every job starts with a proper site survey and a straight-talking quote, then a dedicated crew that sees it through to a tidy finish.",
  },
];

export default function AboutIntro() {
  return (
    <section className="relative w-full py-28 overflow-hidden bg-[var(--color-background)]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="reveal w-full">
          <div className="relative aspect-[3/4] rounded overflow-hidden">
            <Image
              fill
              src="/images/photo-7.png"
              alt="The LA Roofing (Exeter) Ltd team with their branded van"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="reveal flex flex-col gap-6" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-3xl font-bold text-[var(--color-trust)]">Rooted in Exeter</h2>
          <p className="text-[var(--color-body-teal)] text-lg leading-relaxed max-w-prose">
            Whether you need your damaged roof repaired or need a complete re-roofing
            service, we can help. At LA Roofing (Exeter) Ltd, we are passionate about
            what we do. Our dedicated team of roofers will go out of their way to
            provide a great service. With years of experience, we are rightly placed
            to make a positive difference. We cater to customers in Exeter and the
            surrounding areas of Devon.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-16 mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {facts.map((fact, i) => (
          <div
            key={fact.title}
            className="reveal flex flex-col gap-4 p-6 rounded-lg bg-white border border-[var(--color-surface-variant)]"
            style={{ animationDelay: `${0.15 + i * 0.1}s` }}
          >
            <div className="w-12 h-12 flex-shrink-0 rounded bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-primary)]">
              {fact.icon}
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold text-[var(--color-trust)]">{fact.title}</p>
              <p className="text-base text-[var(--color-body-teal)] leading-relaxed">{fact.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal max-w-[1280px] mx-auto px-4 md:px-16 mt-6">
        <div className="rounded-lg overflow-hidden border border-[var(--color-surface-variant)]">
          <iframe
            title="LA Roofing (Exeter) Ltd location"
            src="https://maps.google.com/maps?q=2+Kingfisher+Court,+Pinhoe+Trading+Estate,+Pinhoe,+Exeter+EX4+8JN&output=embed"
            width="100%"
            height="340"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
