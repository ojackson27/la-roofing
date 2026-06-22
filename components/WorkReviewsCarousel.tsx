import Image from "next/image";

const reviews = [
  {
    image: "/images/White%20roof.jpg",
    alt: "White roof project",
    stars: "★★★★★",
    quote:
      "LA Roofing replaced our entire roof in just two days. The crew was professional, clean, and the result looks fantastic — we couldn't be happier.",
    reviewer: "Maria T., Brentwood",
  },
  {
    image: "/images/unnamed.jpg",
    alt: "Roofing project",
    stars: "★★★★★",
    quote:
      "After years of leaks, LA Roofing finally solved the problem for good. Fair pricing and honest communication throughout the whole process.",
    reviewer: "James K., Culver City",
  },
  {
    image: "/images/unnamed%20(1).jpg",
    alt: "Roofing project",
    stars: "★★★★★",
    quote:
      "They showed up on time, finished ahead of schedule, and left the site spotless. Our new roof looks incredible and the warranty gives us real peace of mind.",
    reviewer: "Sandra L., Sherman Oaks",
  },
];

export default function WorkReviewsCarousel() {
  return (
    <section className="w-full bg-[var(--color-surface)] border-t border-b border-[var(--color-surface-variant)] py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 flex flex-col gap-8">
        <h2 className="text-2xl font-bold text-[var(--color-trust)] text-center">
          Our Work &amp; Reviews
        </h2>
        <div
          className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 md:w-80 bg-white border border-[var(--color-surface-variant)] rounded shadow-sm flex flex-col snap-start overflow-hidden"
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
                <span className="text-[var(--color-accent)] text-lg">
                  {review.stars}
                </span>
                <p className="text-[var(--color-body-teal)] leading-relaxed text-sm">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-[var(--color-trust)]">
                  — {review.reviewer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
