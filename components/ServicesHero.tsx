"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const video = videoRef.current;
          if (!video) return;

          video.pause();
          gsap.set(textRef.current, { opacity: 0, y: 20 });
          const setTextOpacity = gsap.quickSetter(textRef.current, "opacity");
          const setTextY = gsap.quickSetter(textRef.current, "y", "px");

          const onUpdate = (self: ScrollTrigger) => {
            if (video.duration) {
              video.currentTime = self.progress * video.duration;
            }
            // headline fades/slides in only over the final 20% of the scrub
            const textProgress = gsap.utils.clamp(
              0,
              1,
              gsap.utils.mapRange(0.8, 1, 0, 1, self.progress)
            );
            setTextOpacity(textProgress);
            setTextY(20 * (1 - textProgress));
          };

          const onLoaded = () => {
            const st = ScrollTrigger.create({
              trigger: sectionRef.current,
              start: "top top",
              end: "+=100%",
              pin: true,
              scrub: 1,
              onUpdate,
            });

            return () => st.kill();
          };

          if (video.readyState >= 1) {
            onLoaded();
          } else {
            video.addEventListener("loadedmetadata", onLoaded, { once: true });
          }

          return () => {
            video.removeEventListener("loadedmetadata", onLoaded);
          };
        }
      );

      mm.add(
        "(max-width: 767px), (prefers-reduced-motion: reduce)",
        () => {
          videoRef.current?.play().catch(() => {});
          gsap.set(textRef.current, { opacity: 1, y: 0 });
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[420px] md:h-screen flex items-center justify-center overflow-hidden"
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/services-hero.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/services-tiles.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/55" />

      <div
        ref={textRef}
        className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">Our Services</h1>
        <p className="text-lg md:text-xl text-white/90 mt-4">
          Industrial, residential, and commercial roofing across Exeter and Devon.
        </p>
      </div>
    </section>
  );
}
