"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const menu = [
  {
    title: "Ana Sayfa",
    href: "#",
  },
  {
    title: "Ürünler",
    href: "#products",
  },
  {
    title: "Hakkımızda",
    href: "#about",
  },
  {
    title: "Üretim",
    href: "#production",
  },
  {
    title: "İletişim",
    href: "#contact",
  },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/">
          <h1 className="cursor-pointer text-3xl font-bold tracking-[0.25em] text-[#153B63]">
            FOREV
          </h1>
        </Link>

        {/* Menü */}
        <nav className="hidden items-center gap-10 lg:flex">
          {menu.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="font-medium text-slate-700 transition hover:text-[#153B63]"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Sağ */}
        <div className="flex items-center gap-3">

          <button className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-100">
            TR
          </button>

          <button className="rounded-full px-4 py-2 text-sm text-slate-500 hover:bg-slate-100">
            EN
          </button>

          <button className="rounded-full px-4 py-2 text-sm text-slate-500 hover:bg-slate-100">
            AR
          </button>

          <Button className="rounded-full bg-[#153B63] px-6 hover:bg-[#0F2F4F]">
            Teklif Al
          </Button>

        </div>

      </div>
    </header>
  );
}