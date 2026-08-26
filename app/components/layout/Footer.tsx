"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          {/* BRAND */}
          <div>
            <Link href="/">
              <h2 className="text-3xl font-black tracking-[0.25em] text-white">
                FOREV
              </h2>
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              Turkish home textile manufacturer serving wholesalers,
              retailers and international customers.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">

              <a
                href="#products"
                className="block text-slate-400 transition hover:text-white"
              >
                Products
              </a>

              <a
                href="#about"
                className="block text-slate-400 transition hover:text-white"
              >
                About Us
              </a>

              <a
                href="#production"
                className="block text-slate-400 transition hover:text-white"
              >
                Production
              </a>

              <a
                href="#export"
                className="block text-slate-400 transition hover:text-white"
              >
                Export
              </a>

              <a
                href="#contact"
                className="block text-slate-400 transition hover:text-white"
              >
                Contact
              </a>

            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-slate-400">

              <p>
                Denizli, Turkey
              </p>

              <p>
                info@forevtekstil.com
              </p>

              <p className="font-medium text-slate-300">
                Phone
              </p>

              <a
                href="tel:+905050879999"
                className="block transition hover:text-white"
              >
                +90 505 087 9999
              </a>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-white/10 pt-6">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Forev Textile. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}