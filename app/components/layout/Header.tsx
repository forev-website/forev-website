"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const menu = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "/#products",
  },
  {
    title: "About Us",
    href: "/#about",
  },
  {
    title: "Production",
    href: "/#production",
  },
  {
    title: "Export",
    href: "/#export",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/20 bg-slate-900/40 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}
        <Link
          href="/"
          className="flex h-24 w-40 items-center overflow-hidden"
        >
          <img
            src="/images/gl.png"
            alt="Forev Textile"
            className="h-32 w-auto max-w-none object-contain"
          />
        </Link>

        {/* MENU */}
        <nav className="hidden items-center gap-8 lg:flex">
          {menu.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="font-medium text-white transition hover:text-white/70"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* LANGUAGE */}
          <div className="hidden items-center rounded-full border border-white/30 bg-white/10 p-1 backdrop-blur-sm sm:flex">
            <button
              type="button"
              className="rounded-full bg-[#153B63] px-3 py-1.5 text-xs font-bold text-white"
            >
              EN
            </button>

            <button
              type="button"
              className="rounded-full px-3 py-1.5 text-xs font-semibold text-white/80 transition hover:text-white"
            >
              TR
            </button>
          </div>

          {/* QUOTE BUTTON */}
          <Link href="/#contact">
            <Button className="rounded-full bg-white px-6 font-semibold text-[#153B63] hover:bg-slate-100">
              Request a Quote
            </Button>
          </Link>

        </div>

      </div>
    </header>
  );
}