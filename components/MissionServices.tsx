'use client';

import { useState } from 'react';

type TabId = 'industrial' | 'roofer' | 'slate' | 'singleply';

const tabs: { id: TabId; label: string }[] = [
  { id: 'industrial', label: 'Industrial Roofing & Cladding' },
  { id: 'roofer', label: 'Roofer' },
  { id: 'slate', label: 'Slate & Tiling' },
  { id: 'singleply', label: 'Single Ply Roofing' },
];

const tabContent: Record<TabId, { title: string; description: string; bullets: string[] }> = {
  industrial: {
    title: 'Industrial Roofing & Cladding',
    description:
      'Large-scale industrial roofing and cladding installation and replacement, built for durability in Devon’s coastal weather.',
    bullets: [
      'New build and replacement cladding',
      'High-performance weatherproof systems',
      'Minimal disruption to operations',
      'Built to industrial safety standards',
    ],
  },
  roofer: {
    title: 'Roofer',
    description:
      'Full roofing services for homes and businesses across Exeter, from damaged roof repairs to complete re-roofing.',
    bullets: [
      'Roof repairs and replacements',
      'Leak detection and waterproofing',
      'Free inspection and estimate',
      'Licensed and insured team',
    ],
  },
  slate: {
    title: 'Slate & Tiling',
    description:
      'Traditional slate and tile roofing combining classic Devon character with modern weatherproofing techniques.',
    bullets: [
      'Natural slate and clay/concrete tiles',
      'Period and heritage property work',
      'Precision flashing and ridge work',
      'Full warranty on installation',
    ],
  },
  singleply: {
    title: 'Single Ply Roofing',
    description:
      'Lightweight, flexible, and cost-effective single-ply membrane systems for flat and low-slope roofs.',
    bullets: [
      'TPO and EPDM membrane systems',
      'Ideal for flat and low-slope roofs',
      'Fast installation, minimal downtime',
      'Long-term weather resistance',
    ],
  },
};

export default function MissionServices() {
  const [activeTab, setActiveTab] = useState<TabId>('industrial');
  const content = tabContent[activeTab];

  return (
    <section id="services" className="w-full bg-white border-t border-b border-[var(--color-surface-variant)] py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 flex flex-col gap-14">
        {/* Mission block */}
        <div className="reveal text-center max-w-2xl mx-auto flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-[var(--color-trust)]">What We Stand For</h2>
          <p className="text-[var(--color-body-teal)] text-lg leading-relaxed">
            At LA Roofing, we are committed to quality, safety, and structural integrity in every
            project we undertake. From residential repairs to large commercial installations, our
            team delivers lasting results backed by years of expertise and a dedication to our
            community.
          </p>
        </div>

        {/* Services tabs */}
        <div className="reveal">
          {/* Tab bar */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 bg-[var(--color-surface)] border border-[var(--color-surface-variant)] border-b-0 p-4 rounded-t">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={activeTab === tab.id}
                className={`pb-2 min-h-[44px] text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-[var(--color-primary)] text-[var(--color-primary)]'
                    : 'border-transparent text-[var(--color-body-teal)] hover:text-[var(--color-primary)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content panel */}
          <div className="bg-white min-h-[200px] border border-[var(--color-surface-variant)] p-8 rounded-b">
            <h3 className="text-xl font-bold text-[var(--color-trust)] mb-3">{content.title}</h3>
            <p className="text-[var(--color-body-teal)] text-base leading-relaxed mb-4">{content.description}</p>
            <ul className="list-disc list-inside space-y-1.5 text-base text-[var(--color-body-teal)]">
              {content.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <a
              href="/services"
              className="inline-flex items-center gap-1 mt-6 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent-ink)] transition-colors"
            >
              View all services
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
