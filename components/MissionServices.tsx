'use client';

import { useState } from 'react';

type TabId = 'residential' | 'commercial' | 'repair' | 'maintenance';

const tabs: { id: TabId; label: string }[] = [
  { id: 'residential', label: 'Residential Roofing' },
  { id: 'commercial', label: 'Commercial Roofing' },
  { id: 'repair', label: 'Roof Repair' },
  { id: 'maintenance', label: 'Maintenance' },
];

const tabContent: Record<TabId, { title: string; description: string; bullets: string[] }> = {
  residential: {
    title: 'Residential Roofing',
    description:
      'From new installations to full replacements, we handle all types of residential roofing with precision and care.',
    bullets: [
      'Asphalt shingles & tiles',
      'Flat & low-slope roofing',
      'Leak detection & waterproofing',
      'Full warranty on all work',
    ],
  },
  commercial: {
    title: 'Commercial Roofing',
    description:
      'We provide durable, cost-effective roofing solutions for commercial properties of all sizes.',
    bullets: [
      'TPO & EPDM membrane systems',
      'Built-up roofing (BUR)',
      'Roof coatings & restoration',
      'Minimal disruption scheduling',
    ],
  },
  repair: {
    title: 'Roof Repair',
    description:
      'Fast, reliable repairs to stop leaks and extend the life of your existing roof.',
    bullets: [
      'Emergency leak repair',
      'Storm & wind damage',
      'Flashing & gutter repair',
      'Free inspection & estimate',
    ],
  },
  maintenance: {
    title: 'Maintenance Plans',
    description:
      'Protect your investment with regular maintenance that catches problems before they become costly.',
    bullets: [
      'Annual inspection packages',
      'Debris & moss removal',
      'Sealant reapplication',
      'Priority service scheduling',
    ],
  },
};

export default function MissionServices() {
  const [activeTab, setActiveTab] = useState<TabId>('residential');
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
          </div>
        </div>
      </div>
    </section>
  );
}
