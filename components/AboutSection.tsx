"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

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
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 pt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="reveal rounded-lg bg-[var(--color-surface)] p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
          <p className="text-[var(--color-body-teal)] text-lg leading-relaxed max-w-prose">
            LA Roofing has been serving Exeter and the surrounding areas of
            Devon for over a decade, delivering expert roofing solutions for
            homes and businesses across the region. Our licensed and insured
            team brings precision to every project, no matter the size.
          </p>
        </div>
        <div className="reveal rounded-lg bg-[var(--color-surface)] p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
          <p className="text-[var(--color-body-teal)] text-lg leading-relaxed max-w-prose">
            We believe in transparent pricing, clear communication, and work
            that stands the test of time. When you choose LA Roofing, you get a
            partner who treats your property with the same care we&apos;d give
            our own.
          </p>
        </div>
      </div>
    </section>
  );
}
