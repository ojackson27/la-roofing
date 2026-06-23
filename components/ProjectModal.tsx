"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-[var(--color-surface-variant)] rounded"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-3 right-3 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/90 text-[var(--color-trust)] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
        >
          ✕
        </button>
        <div className="relative w-full aspect-video">
          <Image
            fill
            src={project.src}
            alt={project.alt}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-block bg-[var(--color-surface)] text-[var(--color-trust)] text-xs font-semibold px-3 py-1 rounded-full border border-[var(--color-surface-variant)]">
              {project.category}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[var(--color-trust)]">{project.title}</h3>
          <div className="flex flex-wrap gap-6 text-sm text-[var(--color-body-teal)]">
            <span className="inline-flex items-center gap-1.5">
              <svg className="w-4 h-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {project.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg className="w-4 h-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {project.duration}
            </span>
          </div>
          <p className="text-[var(--color-body-teal)] leading-relaxed">{project.description}</p>
          <div className="mt-2 border-t border-[var(--color-surface-variant)] pt-4">
            <span className="text-[var(--color-primary)] text-lg" aria-label="5 out of 5 stars">
              ★★★★★
            </span>
            <p className="text-[var(--color-body-teal)] italic leading-relaxed mt-1">
              &ldquo;{project.quote}&rdquo;
            </p>
            <p className="text-sm font-semibold text-[var(--color-trust)] mt-2">
              — {project.reviewer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
