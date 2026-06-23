const insuredIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const workmanshipIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const localIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function AboutTrustStrip() {
  return (
    <section className="relative w-full py-20 bg-[var(--color-surface)] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Accent panel — wider, dark, anchors the section */}
          <div className="reveal md:col-span-2 md:row-span-2 relative flex flex-col justify-between gap-6 p-8 rounded-lg bg-[var(--color-trust)] text-white overflow-hidden">
            <div className="relative z-10 w-14 h-14 rounded-full bg-[var(--color-accent)]/15 flex items-center justify-center text-[var(--color-accent)]">
              {localIcon}
            </div>
            <div className="relative z-10 flex flex-col gap-3">
              <p className="text-2xl font-bold leading-snug">Local to Exeter &amp; Devon</p>
              <p className="text-base text-white/80 leading-relaxed">
                A local team who knows the area, the building codes, and the weather.
              </p>
            </div>
          </div>

          {/* Two smaller cards stacked beside the panel */}
          <div
            className="reveal md:col-span-3 flex items-start gap-5 p-6 rounded-lg bg-white border border-[var(--color-surface-variant)]"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-12 h-12 flex-shrink-0 rounded bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-primary)]">
              {insuredIcon}
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold text-[var(--color-trust)]">Fully Insured</p>
              <p className="text-base text-[var(--color-body-teal)] leading-relaxed">
                Complete protection for your property and full peace of mind on every job.
              </p>
            </div>
          </div>

          <div
            className="reveal md:col-span-3 flex items-start gap-5 p-6 rounded-lg bg-white border border-[var(--color-surface-variant)]"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-12 h-12 flex-shrink-0 rounded bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-primary)]">
              {workmanshipIcon}
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold text-[var(--color-trust)]">Quality Workmanship</p>
              <p className="text-base text-[var(--color-body-teal)] leading-relaxed">
                Years of hands-on experience delivering roofing that&apos;s built to last.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
