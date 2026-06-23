import Image from "next/image";

const reviews = [
  {
    image: "/images/white-roof.jpg",
    alt: "White roof project",
    stars: "★★★★★",
    quote:
      "We are so grateful for your super fast, efficient, smooth service after finding a leak last Wednesday evening over the holiday period — fixed within 6 days.",
    reviewer: "Stuart Kew",
  },
  {
    image: "/images/photo-1.jpg",
    alt: "Roofing project",
    stars: "★★★★★",
    quote:
      "Highly recommended. Excellent replacement flat roof and main roof with new slates. Kept informed and work carried out quickly.",
    reviewer: "Simon Wills",
  },
  {
    image: "/images/photo-2.jpg",
    alt: "Roofing project",
    stars: "★★★★★",
    quote:
      "Thank you L A Roofing for fixing my leaking roof within half an hour of my phone call — a team of guys turned up to repair my leaking roof in heavy rain and quickly identified the fault.",
    reviewer: "Paul Baber",
  },
  {
    image: "/images/photo-1.jpg",
    alt: "Roofing project",
    stars: "★★★★★",
    quote:
      "Recently had my roof fixed by L A Roofing and received an amazing service, brilliant job done in fixing the problem. Would definitely recommend. I will be using them again.",
    reviewer: "Sadie Harris",
  },
  {
    image: "/images/photo-2.jpg",
    alt: "Roofing project",
    stars: "★★★★★",
    quote:
      "Brilliant service, can't recommend this company enough. Even after they had finished and a new problem arose on another part of my roof, they were straight back and it was sorted.",
    reviewer: "Ali Clark",
  },
  {
    image: "/images/white-roof.jpg",
    alt: "White roof project",
    stars: "★★★★★",
    quote: "Brilliant service. Would recommend to everyone!",
    reviewer: "Adrian Irimescu",
  },
];

export default function WorkReviewsCarousel() {
  return (
    <section id="our-work" className="w-full bg-[var(--color-surface)] border-t border-b border-[var(--color-surface-variant)] py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 flex flex-col gap-8">
        <div className="reveal flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold text-[var(--color-trust)] text-center">
            Our Work and Reviews
          </h2>
          <p className="text-[var(--color-body-teal)] text-base">
            Rated 4.9 out of 5 on Google, based on real reviews from customers across Exeter and Devon.
          </p>
        </div>
        <div
          className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 md:w-80 bg-white border border-[var(--color-surface-variant)] rounded flex flex-col snap-start overflow-hidden"
            >
              <div className="relative aspect-video">
                <Image
                  fill
                  src={review.image}
                  alt={review.alt}
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, 320px"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-grow">
                <span className="text-[var(--color-primary)] text-lg" aria-label="5 out of 5 stars">
                  {review.stars}
                </span>
                <p className="text-[var(--color-body-teal)] leading-relaxed text-base">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-[var(--color-trust)]">
                  {review.reviewer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
