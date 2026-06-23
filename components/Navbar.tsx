'use client';

import { useState } from 'react';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/work' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[var(--color-surface-variant)]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="/" className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]">
          <Image
            src="/images/logo.png"
            alt="LA Roofing logo"
            width={120}
            height={40}
            loading="eager"
          />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[var(--color-trust)] hover:text-[var(--color-primary)] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center">
          {/* Get a Quote button — desktop only */}
          <a
            href="/contact"
            className="hidden md:inline-flex items-center min-h-[44px] px-6 py-2.5 text-sm font-semibold rounded bg-[var(--color-primary)] text-white hover:bg-[var(--color-accent)] hover:text-[var(--color-trust)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            Get a Quote
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 text-[var(--color-trust)] rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-[var(--color-surface-variant)] flex flex-col py-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 min-h-[44px] flex items-center text-base text-[var(--color-trust)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-primary)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
