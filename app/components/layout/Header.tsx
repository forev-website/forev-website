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
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}

        <Link href="/">
          <h1 className="cursor-pointer text-3xl font-black tracking-[0.25em] text-[#153B63]">
            FOREV
          </h1>
        </Link>

        {/* MENU */}

        <nav className="hidden items-center gap-8 lg:flex">
          {menu.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="font-medium text-slate-600 transition hover:text-[#153B63]"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-3">

          {/* LANGUAGE */}

          <div className="hidden items-center rounded-full border border-slate-200 bg-slate-50 p-1 sm:flex">

            <button
              type="button"
              className="rounded-full bg-[#153B63] px-3 py-1.5 text-xs font-bold text-white"
            >
              EN
            </button>

            <button
              type="button"
              className="rounded-full px-3 py-1.5 text-xs font-semibold text-slate-500 transition hover:text-[#153B63]"
            >
              TR
            </button>

          </div>

          {/* QUOTE BUTTON */}

          <Link href="/#contact">
            <Button className="rounded-full bg-[#153B63] px-6 font-semibold hover:bg-[#0F2F4F]">
              Request a Quote
            </Button>
          </Link>

        </div>

      </div>
    </header>
  );
}