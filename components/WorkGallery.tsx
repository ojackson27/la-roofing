"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const projects = [
  {
    src: "/images/photo-5.png",
    alt: "Re-roofing project in Exeter",
    title: "Emergency Leak Repair",
    category: "Roof Repair",
    location: "Exeter",
    duration: "Completed in 6 days",
    description:
      "A holiday-period leak was reported on a Wednesday evening. Our team diagnosed the cause, sourced materials over the break, and had the repair fully completed within the week — no further leaks since.",
    reviewer: "Stuart Kew",
    quote:
      "We are so grateful of your super fast efficient, smooth service of work that you've provided us after finding a leak last Wednesday evening over a holiday period and getting it fixed within 6 days.",
  },
  {
    src: "/images/photo-3.jpg",
    alt: "Slate and tiling work",
    title: "Flat Roof & Slate Replacement",
    category: "Slate & Tiling",
    location: "Topsham",
    duration: "Completed in 4 days",
    description:
      "Full replacement of an ageing flat roof section alongside re-slating of the main roof. The homeowner was kept informed at every stage and work was carried out quickly with minimal disruption.",
    reviewer: "Simon Wills",
    quote:
      "Highly recommended. Excellent replacement flat roof and main roof with new slates. Kept informed and work carried out quickly.",
  },
  {
    src: "/images/photo-8.png",
    alt: "Single ply roofing project",
    title: "Single Ply Roof Repair",
    category: "Single Ply Roofing",
    location: "Heavitree",
    duration: "Completed in 1 day",
    description:
      "A reported leak was traced to a failed membrane seam. We replaced the affected section the same week, leaving the homeowner with a fully watertight roof and a tidy finish.",
    reviewer: "sadie harris",
    quote:
      "Recently had my roof fixed by La Roofing and received an amazing service, brilliant job done in fixing the problem. Would definitely recommend.",
  },
  {
    src: "/images/photo-2.jpg",
    alt: "Roof repair in progress",
    title: "Storm Damage Roof Repair",
    category: "Roof Repair",
    location: "Pinhoe",
    duration: "Completed within half a day",
    description:
      "Called out during heavy rain after a sudden leak. A team was on site within half an hour, identified the fault, and replaced the damaged section before the weather could cause further harm.",
    reviewer: "Paul Baber",
    quote:
      "Thank you for fixing my leaking roof within half hour of my phone call. A team of guys turned up to repair my leaking roof in heavy rain and quickly identified the fault.",
  },
  {
    src: "/images/photo-9.png",
    alt: "Industrial roofing and cladding",
    title: "Industrial Cladding Upgrade",
    category: "Industrial Roofing",
    location: "Marsh Barton, Exeter",
    duration: "Completed in 2 weeks",
    description:
      "Full cladding refurbishment for a commercial unit, including replacement of corroded panels and improved insulation. Carried out around the client's operating hours to avoid downtime.",
    reviewer: "Ali Clark",
    quote:
      "Brilliant service, can't recommend this company enough — even after they had finished and a new problem arose on another part of my roof, they were straight back and it was sorted.",
  },
  {
    src: "/images/white-roof.jpg",
    alt: "Completed white roof installation",
    title: "New Roof Installation",
    category: "New Roof",
    location: "Crediton",
    duration: "Completed in 2 days",
    description:
      "Complete roof replacement on a residential property, finished with a clean, modern roofline and full guttering check. The crew left the site spotless on completion.",
    reviewer: "Adrian Irimescu",
    quote: "Brilliant service. Would recommend to everyone!!!",
  },
  {
    src: "/images/photo-1.jpg",
    alt: "Roofing project in Devon",
    title: "Leaking Roof Diagnosis & Repair",
    category: "Roof Repair",
    location: "Cranbrook",
    duration: "Completed in 3 days",
    description:
      "Years of intermittent leaks were traced to a poorly flashed chimney junction. We resolved the root cause rather than patching symptoms, with fair, transparent pricing throughout.",
    reviewer: "Paul Baber",
    quote:
      "...they quickly identified the fault and replaced the damage. Fair pricing and honest communication throughout the whole process.",
  },
];

export default function WorkGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? projects[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 flex flex-col gap-8">
        <h2 className="reveal text-3xl font-bold text-[var(--color-trust)] text-center">
          Project Gallery
        </h2>
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setActiveIndex(i)}
              className="group relative aspect-square rounded overflow-hidden border border-[var(--color-surface-variant)] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
            >
              <Image
                fill
                src={project.src}
                alt={project.alt}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-sm font-semibold">{project.title}</p>
                <p className="text-white/80 text-xs">{project.location}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close project details"
              className="absolute top-3 right-3 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/90 text-[var(--color-trust)] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
            >
              ✕
            </button>
            <div className="relative w-full aspect-video">
              <Image
                fill
                src={active.src}
                alt={active.alt}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-block bg-[var(--color-surface)] text-[var(--color-trust)] text-xs font-semibold px-3 py-1 rounded-full border border-[var(--color-surface-variant)]">
                  {active.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-trust)]">{active.title}</h3>
              <div className="flex flex-wrap gap-6 text-sm text-[var(--color-body-teal)]">
                <span>📍 {active.location}</span>
                <span>⏱ {active.duration}</span>
              </div>
              <p className="text-[var(--color-body-teal)] leading-relaxed">{active.description}</p>
              <div className="mt-2 border-t border-[var(--color-surface-variant)] pt-4">
                <span className="text-[var(--color-primary)] text-lg" aria-label="5 out of 5 stars">
                  ★★★★★
                </span>
                <p className="text-[var(--color-body-teal)] italic leading-relaxed mt-1">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-[var(--color-trust)] mt-2">
                  — {active.reviewer}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
