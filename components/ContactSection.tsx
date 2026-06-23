export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-24 bg-[var(--color-trust)]">
      <div className="max-w-[960px] mx-auto px-4 md:px-10">
        <h2 className="reveal text-3xl md:text-4xl font-extrabold text-white mb-12 text-center">
          Get in Touch
        </h2>

        <div className="reveal flex flex-col md:flex-row gap-10 border-2 border-[var(--color-accent)]/40 bg-[var(--color-primary)] p-8 rounded-lg">
          {/* Left column */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <h3 className="text-xl font-extrabold text-white">
              Contact Information
            </h3>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <span className="w-9 h-9 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)] text-[var(--color-accent)] flex-shrink-0 flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 5V5z"
                  />
                </svg>
              </span>
              <span className="text-white text-base mt-1.5">07791 052508</span>
            </div>

            {/* Mail */}
            <div className="flex items-start gap-3">
              <span className="w-9 h-9 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)] text-[var(--color-accent)] flex-shrink-0 flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <span className="text-white text-base mt-1.5">info@laroofing.com</span>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3">
              <span className="w-9 h-9 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)] text-[var(--color-accent)] flex-shrink-0 flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <span className="text-white text-base mt-1.5">
                2 Kingfisher Court, Pinhoe Trading Est, Pinhoe, Exeter EX4 8JN
              </span>
            </div>

            {/* Map placeholder */}
            <div className="mt-auto h-48 bg-[var(--color-trust)] border border-[var(--color-accent)]/40 rounded flex items-center justify-center text-sm text-white/70">
              Map coming soon
            </div>
          </div>

          {/* Right column — Contact form */}
          <div className="w-full md:w-1/2 bg-[var(--color-trust)] p-6 border border-[var(--color-accent)]/40 rounded-lg">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-semibold text-white">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white border border-[var(--color-surface-variant)] rounded px-3 py-2.5 text-base text-[var(--color-trust)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-semibold text-white">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-white border border-[var(--color-surface-variant)] rounded px-3 py-2.5 text-base text-[var(--color-trust)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm font-semibold text-white">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full bg-white border border-[var(--color-surface-variant)] rounded px-3 py-2.5 text-base text-[var(--color-trust)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-sm font-semibold text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white border border-[var(--color-surface-variant)] rounded px-3 py-2.5 text-base text-[var(--color-trust)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--color-accent)] text-[var(--color-trust)] font-bold py-3 rounded hover:bg-white transition-colors mt-2 min-h-[44px]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
