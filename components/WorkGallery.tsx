"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/projects";
import ProjectModal from "@/components/ProjectModal";

export default function WorkGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 flex flex-col gap-8">
        <h2 className="reveal text-3xl font-bold text-[var(--color-trust)] text-center">
          Project Gallery
        </h2>
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setActiveIndex(i)}
              className="group relative aspect-[4/3] rounded overflow-hidden border border-[var(--color-surface-variant)] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
            >
              <Image
                fill
                src={project.src}
                alt={project.alt}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/0" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white text-2xl md:text-3xl font-extrabold leading-tight">{project.title}</p>
                <p className="text-white/90 text-sm md:text-base font-medium mt-1">{project.location}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActiveIndex(null)} />}
    </section>
  );
}
