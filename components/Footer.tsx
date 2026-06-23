import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        {/* Logo flanked by quick links and contact info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start border-b border-white/15 pb-10 mb-12">
          {/* Quick Links */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col items-center md:items-start">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Our Work", href: "/work" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-block text-white/80 text-sm hover:text-[var(--color-accent)] transition-colors py-1"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-center text-center order-1 md:order-2">
            <Image
              src="/images/logo-white-full.png"
              width={300}
              height={163}
              alt="LA Roofing (Exeter) Ltd logo"
              className="w-[220px] sm:w-[260px] md:w-[280px] h-auto object-contain"
              priority={false}
            />
            <p className="text-white/80 text-sm md:text-base mt-4 max-w-xs leading-relaxed">
              Exeter&apos;s trusted roofing specialists. Quality work, guaranteed results.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left order-3">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3 items-center md:items-start">
              {/* Phone */}
              <div className="flex items-start gap-2 max-w-xs md:max-w-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 flex-shrink-0 mt-0.5 text-white/80"
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
                <span className="text-white/80 text-sm">07791 052508</span>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2 max-w-xs md:max-w-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 flex-shrink-0 mt-0.5 text-white/80"
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
                <span className="text-white/80 text-sm">info@laroofing.com</span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2 max-w-xs md:max-w-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 flex-shrink-0 mt-0.5 text-white/80"
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
                <span className="text-white/80 text-sm">
                  2 Kingfisher Court, Pinhoe Trading Est, Pinhoe, Exeter EX4 8JN
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center text-center max-w-md mx-auto mb-12">
          <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
            Stay Updated
          </h4>
          <p className="text-white/80 text-sm">
            Subscribe for roofing tips and seasonal maintenance reminders.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 w-full mt-3">
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address for newsletter"
              className="flex-1 bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white placeholder-white/60 focus:outline-none focus:border-[var(--color-accent)]"
            />
            <button className="border border-[var(--color-accent)] text-[var(--color-accent)] text-sm font-semibold py-2 px-5 rounded hover:bg-[var(--color-accent)] hover:text-[var(--color-trust)] transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/70 text-sm">
          <span>© 2026 LA Roofing. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
