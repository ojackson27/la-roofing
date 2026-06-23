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
    <div className="text-[var(--color-primary)] text-lg" aria-label="5 out of 5 stars">
      ★★★★★
    </div>
  );
}

export default function RealReviews() {
  return (
    <section className="w-full py-20 bg-[var(--color-surface)]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 flex flex-col gap-8">
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
