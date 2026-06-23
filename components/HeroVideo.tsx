"use client";

import { useState } from "react";
import Image from "next/image";
import EstimateModal from "@/components/EstimateModal";

export default function HeroVideo() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/white-roof.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute top-6 right-4 md:top-8 md:right-8 z-20">
        <button
          type="button"
          onClick={() => setShowModal((open) => !open)}
          aria-expanded={showModal}
          className="inline-flex items-center min-h-[44px] bg-[var(--color-accent)] text-[var(--color-trust)] font-semibold px-5 md:px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Calculate Your Roof Cost
        </button>

        {showModal && <EstimateModal onClose={() => setShowModal(false)} />}
      </div>

      <div className="reveal-load relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <Image
          src="/images/logo-white-full.png"
          alt="LA Roofing"
          width={2816}
          height={1536}
          priority
          className="w-64 md:w-96 h-auto"
        />

        <p className="text-lg md:text-xl text-white/90 max-w-2xl">
          Professional roofing services across Exeter and Devon. Quality craftsmanship, guaranteed.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center min-h-[44px] bg-[var(--color-accent)] text-[var(--color-trust)] font-semibold px-8 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Get Estimate
          </a>
          <a
            href="#services"
            className="inline-flex items-center min-h-[44px] border-2 border-white text-white font-semibold px-8 py-3 rounded hover:bg-white hover:text-[var(--color-trust)] transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>

      <a
        href="#services"
        aria-label="Scroll to services"
        className="scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white transition-colors"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}
