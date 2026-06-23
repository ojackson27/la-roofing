"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectModal from "@/components/ProjectModal";

// Only the 3 most recent projects show on the homepage; the full
// set lives on the Our Work page.
const FEATURED_PROJECTS = projects.slice(0, 3);
const CARD_WIDTH_STYLE = "calc((100% - 7rem) / 3)";

export default function OurWorkCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const active = activeIndex !== null ? FEATURED_PROJECTS[activeIndex] : null;

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const cardWidth = card?.offsetWidth ?? el.clientWidth / 3;
    el.scrollBy({ left: direction * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section className="w-full py-20 bg-[var(--color-surface)]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 flex flex-col gap-8">
        <h2 className="reveal text-3xl font-bold text-[var(--color-trust)] text-center">
          Recent Projects
        </h2>

        <div className="reveal relative">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            aria-label="Scroll to previous project"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-11 h-11 items-center justify-center rounded-full bg-white text-[var(--color-trust)] border border-[var(--color-surface-variant)] hover:bg-[var(--color-surface)] disabled:opacity-0 disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            aria-label="Scroll to next project"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-11 h-11 items-center justify-center rounded-full bg-white text-[var(--color-trust)] border border-[var(--color-surface-variant)] hover:bg-[var(--color-surface)] disabled:opacity-0 disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
          >
            ›
          </button>

          <div
            ref={trackRef}
            onScroll={updateScrollState}
            className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {FEATURED_PROJECTS.map((project, i) => (
              <button
                key={project.title}
                data-card
                type="button"
                onClick={() => setActiveIndex(i)}
                style={{ width: CARD_WIDTH_STYLE, height: 320, minWidth: 240 }}
                className="group relative flex-shrink-0 snap-start rounded overflow-hidden border border-[var(--color-surface-variant)] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
              >
                <Image
                  fill
                  src={project.src}
                  alt={project.alt}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 85vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-base font-semibold">{project.title}</p>
                  <p className="text-white/80 text-sm">{project.location}</p>
                </div>
              </button>
            ))}

            <Link
              href="/work"
              aria-label="View more of our work"
              style={{ height: 320 }}
              className="peek-tab group flex-shrink-0 snap-start flex items-center overflow-hidden rounded bg-[var(--color-trust)] w-16 transition-[width] duration-300 ease-out hover:w-[280px] focus-within:w-[280px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
            >
              <span className="flex items-center gap-3 px-5 whitespace-nowrap text-white">
                <span
                  aria-hidden="true"
                  className="text-2xl transition-transform duration-300 group-hover:translate-x-1"
                >
                  ›
                </span>
                <span className="text-sm font-semibold opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200">
                  View more of our work
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActiveIndex(null)} />}
    </section>
  );
}
