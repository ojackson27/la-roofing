"use client";

import { useEffect, useState } from "react";

const MATERIAL_RATES = {
  "Single Ply Membrane": 45,
  "Slate & Tile": 55,
  "Corrugated Steel": 35,
} as const;

type Material = keyof typeof MATERIAL_RATES;

export default function EstimateModal({ onClose }: { onClose: () => void }) {
  const [area, setArea] = useState(150);
  const [material, setMaterial] = useState<Material>("Single Ply Membrane");

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const estimatedCost = area * MATERIAL_RATES[material];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Get a Quick Estimate"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close estimate calculator"
          className="absolute top-3 right-3 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/90 text-[var(--color-trust)] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
        >
          ✕
        </button>

        <div className="p-6 md:p-8 flex flex-col gap-6">
          <h2 className="text-2xl font-bold font-[var(--font-montserrat)] text-[var(--color-trust)]">
            Get a Quick Estimate
          </h2>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="roof-area"
              className="text-sm font-semibold text-[var(--color-trust)]"
            >
              Approximate Roof Area (sq meters)
            </label>
            <input
              id="roof-area"
              type="range"
              min={50}
              max={1000}
              step={10}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full h-11 cursor-pointer accent-[var(--color-primary)]"
            />
            <span className="text-sm text-[var(--color-body-teal)]">
              {area.toLocaleString("en-GB")} sqm
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="roofing-material"
              className="text-sm font-semibold text-[var(--color-trust)]"
            >
              Roofing Material
            </label>
            <select
              id="roofing-material"
              value={material}
              onChange={(e) => setMaterial(e.target.value as Material)}
              className="w-full min-h-[44px] rounded border border-[var(--color-surface-variant)] bg-white px-3 text-[var(--color-trust)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
            >
              {Object.keys(MATERIAL_RATES).map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-[var(--color-surface)] rounded p-4">
            <h3 className="text-xl font-bold text-[var(--color-trust)]">
              Estimated Cost: £{estimatedCost.toLocaleString("en-GB")}
            </h3>
          </div>

          <div className="flex flex-col gap-4 border-t border-[var(--color-surface-variant)] pt-4">
            <p className="text-sm text-[var(--color-body-teal)]">
              This is a rough estimate for demo purposes. For a precise quote, please contact our team.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center min-h-[44px] bg-[var(--color-primary)] text-white font-semibold px-8 py-3 rounded hover:opacity-90 transition-opacity"
            >
              Book Site Survey
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
