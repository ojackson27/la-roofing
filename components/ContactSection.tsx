'use client';

import { useState, type FormEvent } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nextErrors: FormErrors = {};

    if (!name) {
      nextErrors.name = 'Please enter your name.';
    }
    if (!email) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!emailPattern.test(email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!message) {
      nextErrors.message = 'Please enter a message.';
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus('submitting');
    window.setTimeout(() => {
      setStatus('success');
    }, 600);
  }

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
              <a
                href="tel:+447791052508"
                className="text-white text-base mt-1.5 hover:underline hover:text-[var(--color-accent)]"
              >
                07791 052508
              </a>
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
              <a
                href="mailto:info@laroofing.com"
                className="text-white text-base mt-1.5 hover:underline hover:text-[var(--color-accent)]"
              >
                info@laroofing.com
              </a>
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
            {status === 'success' ? (
              <div
                role="status"
                className="flex flex-col items-center justify-center text-center gap-3 h-full min-h-[320px]"
              >
                <span className="w-12 h-12 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)] text-[var(--color-accent)] flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <h3 className="text-xl font-extrabold text-white">Message sent</h3>
                <p className="text-white/80 text-base">
                  Thanks for getting in touch — we&apos;ll get back to you as soon as we can.
                </p>
              </div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-sm font-semibold text-white">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className="w-full bg-white border border-[var(--color-surface-variant)] rounded px-3 py-2.5 text-base text-[var(--color-trust)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]"
                  />
                  {errors.name && (
                    <p id="name-error" className="text-sm text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-sm font-semibold text-white">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="w-full bg-white border border-[var(--color-surface-variant)] rounded px-3 py-2.5 text-base text-[var(--color-trust)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]"
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="phone" className="text-sm font-semibold text-white">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
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
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your project..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className="w-full bg-white border border-[var(--color-surface-variant)] rounded px-3 py-2.5 text-base text-[var(--color-trust)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]"
                  />
                  {errors.message && (
                    <p id="message-error" className="text-sm text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[var(--color-accent)] text-[var(--color-trust)] font-bold py-3 rounded hover:bg-white transition-colors mt-2 min-h-[44px] disabled:opacity-70"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
