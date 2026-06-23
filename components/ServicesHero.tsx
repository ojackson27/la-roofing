"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

function clamp(min: number, max: number, value: number) {
  return Math.min(max, Math.max(min, value));
}

export default function ServicesHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      // 0 = section just entering from the bottom, 1 = section has fully scrolled past the top
      const progress = clamp(
        0,
        1,
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
      );
      const positionY = 20 + progress * 60; // pans the visible crop window from 20% to 80%
      const scale = 1 + progress * 0.06; // gentle zoom-in to match
      image.style.objectPosition = `center ${positionY}%`;
      image.style.transform = `scale(${scale})`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[480px] md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Image
        ref={imageRef}
        src="/images/services-hero.jpg"
        alt="Tudor-style house with a newly completed tiled roof"
        fill
        priority
        className="object-cover will-change-transform"
        style={{ objectPosition: "center 20%" }}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="reveal-load relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-white/90 mt-4 drop-shadow-md">
          Industrial, residential, and commercial roofing across Exeter and Devon.
        </p>
      </div>
    </section>
  );
}
