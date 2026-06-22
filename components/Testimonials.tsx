const testimonials = [
  {
    stars: 5,
    quote:
      "LA Roofing replaced our entire roof in two days. The crew was professional, clean, and the result looks incredible. Highly recommend!",
    name: "Sarah M., Westside",
  },
  {
    stars: 5,
    quote:
      "After a storm damaged our commercial unit, LA Roofing had us covered — literally. Fast response, fair pricing, and quality work.",
    name: "David K., Downtown LA",
  },
  {
    stars: 4,
    quote:
      "Great communication throughout the process. They found issues our previous roofer had missed and fixed everything properly.",
    name: "Linda T., San Fernando Valley",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="text-[var(--color-accent)] text-lg">
      {Array.from({ length: 5 }, (_, i) => (i < count ? "★" : "☆")).join("")}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full py-20 bg-[var(--color-surface)]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-[var(--color-trust)] text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-[var(--color-surface-variant)] p-6 flex flex-col gap-4 rounded shadow-sm"
            >
              <Stars count={t.stars} />
              <p className="text-[var(--color-body-teal)] text-sm leading-relaxed italic flex-grow">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-sm font-semibold text-[var(--color-trust)] mt-auto">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
