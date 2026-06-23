const reviews = [
  {
    name: "Stuart Kew",
    meta: "3 reviews",
    quote:
      "We are so grateful of your super fast efficient, smooth service of work that you've provided us after finding a leak last Wednesday (December 29th) evening over a holiday period and getting it fixed within 6 days (January 5th) in that time …",
  },
  {
    name: "sadie harris",
    meta: "1 review",
    quote:
      "Recently had my roof fixed by La Roofing and received an amazing service, brilliant job done in fixing the problem. Would definitely recommend. I will be using them again. Thank you to all the guys!",
  },
  {
    name: "Simon Wills",
    meta: "5 reviews",
    quote:
      "Highly recommended. Excellent replacement flat roof and main roof with new slates. Kept informed and work carried out quickly. Thanks very much …",
  },
  {
    name: "Paul Baber",
    meta: "2 reviews · 13 photos",
    quote:
      "Thank you L A Roofing for fixing my leaking roof with in half hour of my phone call to your offices a team of guys turned up to repair my leaking roof in heavy rain at the time..... they quickly identified the fault and replaced the damage …",
  },
  {
    name: "Ali Clark",
    meta: "13 reviews",
    quote:
      "Brilliant service can't recommend this company enough and even after they had finished and a new problem arose on another part of my roof they were straight back and it was sorted 😊",
  },
  {
    name: "Adrian Irimescu",
    meta: "1 review",
    quote: "Brilliant service. Would recommend to everyone!!!",
  },
];

function Stars() {
  return (
    <div className="text-amber-400 text-lg" aria-label="5 out of 5 stars">
      ★★★★★
    </div>
  );
}

export default function RealReviews() {
  return (
    <section className="relative w-full py-20 bg-[var(--color-surface)] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--color-trust) 0, var(--color-trust) 1px, transparent 1px, transparent 64px)",
        }}
      />
      <svg
        className="pointer-events-none absolute -top-16 -left-16 w-72 h-72 text-[var(--color-trust)]/20 animate-[spin-slow_60s_linear_infinite]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <polygon points="100,10 190,60 190,140 100,190 10,140 10,60" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="100,50 150,75 150,125 100,150 50,125 50,75" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg
        className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 text-[var(--color-accent)]/25 animate-[spin-slow-reverse_70s_linear_infinite]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <rect x="20" y="20" width="160" height="160" stroke="currentColor" strokeWidth="1.5" />
        <line x1="20" y1="20" x2="180" y2="180" stroke="currentColor" strokeWidth="1" />
        <line x1="180" y1="20" x2="20" y2="180" stroke="currentColor" strokeWidth="1" />
      </svg>
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-16 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="reveal text-3xl font-bold text-[var(--color-trust)]">
            What Our Customers Say
          </h2>
          <p className="reveal text-[var(--color-body-teal)]">
            4.9 average · 7 Google reviews
          </p>
        </div>
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white border border-[var(--color-surface-variant)] p-6 flex flex-col gap-4 rounded"
            >
              <Stars />
              <p className="text-[var(--color-body-teal)] text-base leading-relaxed italic flex-grow">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="mt-auto">
                <p className="text-sm font-semibold text-[var(--color-trust)]">{r.name}</p>
                <p className="text-xs text-[var(--color-body-teal)]">{r.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
