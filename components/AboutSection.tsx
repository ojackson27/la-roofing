"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const cards = [
  {
    body: "LA Roofing has been serving Exeter and the surrounding areas of Devon for over a decade, delivering expert roofing solutions for homes and businesses across the region. Our licensed and insured team brings precision to every project, no matter the size.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    body: "We believe in transparent pricing, clear communication, and work that stands the test of time. When you choose LA Roofing, you get a partner who treats your property with the same care we'd give our own.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.97-4.03 9-9 9a8.96 8.96 0 01-4.5-1.2L3 21l1.2-3.5A8.96 8.96 0 013 12c0-4.97 4.03-9 9-9s9 4.03 9 9z" />
      </svg>
    ),
  },
  {
    body: "Every roof we install is backed by premium materials and a workmanship guarantee, so the job is done right the first time and stays that way for years. It's the same standard of quality we'd want for our own homes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const banner = bannerRef.current;
    const imgWrap = imgWrapRef.current;
    if (!banner || !imgWrap) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const rect = banner.getBoundingClientRect();
        const offset = Math.max(-100, Math.min(100, rect.top * 0.25));
        imgWrap.style.transform = `translate3d(0, ${offset}px, 0)`;
        frame = 0;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="about" className="w-full py-28">
      <div
        ref={bannerRef}
        className="reveal relative w-full h-[420px] md:h-[560px] overflow-hidden"
      >
        <div
          ref={imgWrapRef}
          className="absolute -top-28 -bottom-28 left-0 right-0 will-change-transform"
        >
          <Image
            fill
            src="/images/about-banner.jpg"
            alt="Close-up of a freshly installed tiled roof"
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[var(--color-trust)]/55" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
            About LA Roofing
          </h2>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 pt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="reveal rounded-lg bg-[var(--color-surface)] border border-[var(--color-accent)] p-8 shadow-[0_0_0_1px_rgba(21,234,201,0.15),0_8px_20px_-8px_rgba(21,234,201,0.35)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(21,234,201,0.25),0_14px_28px_-10px_rgba(21,234,201,0.5)]"
          >
            <div className="w-12 h-12 mb-5 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)]">
              {card.icon}
            </div>
            <p className="text-[var(--color-body-teal)] text-lg leading-relaxed">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
