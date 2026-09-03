"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

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
    title: "Product Videos",
    href: "/#product-videos",
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

const productGroups = [
  {
    title: "Welsoft Quilts",
    href: "/products/welsoft",
  },
  {
    title: "Bedspreads & Pique",
    href: "/products/pike",
  },
  {
    title: "Towels",
    href: "/products/towels",
  },
  {
    title: "Bathrobes",
    href: "/products/bornoz",
  },
  {
    title: "Mattress Protectors",
    href: "/products/alez",
  },
  {
    title: "Kids Bathrobes",
    href: "/products/kids-bathrobes",
  },
  {
    title: "Dish Cloths",
    href: "/products/dish-cloths",
  },
  {
    title: "Kitchen Towels",
    href: "/products/kitchen-towels",
  },
  {
    title: "Baby Textile",
    href: "/products/bebek",
  },
  {
    title: "Bath Mats",
    href: "/products/bath-mats",
  },
  {
    title: "Welsoft Dressing Gowns",
    href: "/products/welsoft-bathrobes",
  },
  {
    title: "Hotel Textile",
    href: "/products/otel",
  },
  {
    title: "TV Blankets & Throws",
    href: "/products/tv-blankets",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
    setProductsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/20 bg-slate-900/40 backdrop-blur-md">

      {/* HEADER BAR */}

      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}

        <Link
          href="/"
          onClick={closeMenu}
          className="flex h-24 w-40 items-center overflow-hidden"
        >
          <img
            src="/images/gl.png"
            alt="Forev Textile"
            className="h-32 w-auto max-w-none object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}

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

          {/* DESKTOP QUOTE */}

          <Link
            href="/#contact"
            className="hidden sm:block"
          >
            <Button className="rounded-full bg-white px-6 font-semibold text-[#153B63] hover:bg-slate-100">
              Request a Quote
            </Button>
          </Link>

          {/* MOBILE HAMBURGER */}

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open navigation menu"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 lg:hidden"
          >
            {mobileOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "max-h-[85vh] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="max-h-[85vh] overflow-y-auto px-6 py-6">

          {/* MAIN LINKS */}

          <div className="space-y-1">

            {menu.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center rounded-xl px-4 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                {item.title}
              </Link>
            ))}

          </div>

          {/* PRODUCT GROUPS */}

          <div className="mt-2 border-t border-white/10 pt-2">

            <button
              type="button"
              onClick={() =>
                setProductsOpen(!productsOpen)
              }
              className="flex w-full items-center justify-between rounded-xl px-4 py-4 text-left text-base font-semibold text-white transition hover:bg-white/10"
            >

              <span>
                Product Groups
              </span>

              {productsOpen ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}

            </button>

            {/* PRODUCT LIST */}

            <div
              className={`overflow-hidden transition-all duration-300 ${
                productsOpen
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >

              <div className="ml-3 border-l border-white/10 pl-3">

                {productGroups.map(
                  (product) => (
                    <Link
                      key={product.title}
                      href={product.href}
                      onClick={closeMenu}
                      className="block rounded-lg px-4 py-3 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                    >
                      {product.title}
                    </Link>
                  )
                )}

              </div>

            </div>

          </div>

          {/* MOBILE QUOTE */}

          <div className="mt-6 border-t border-white/10 pt-6">

            <Link
              href="/#contact"
              onClick={closeMenu}
              className="block"
            >
              <Button className="h-12 w-full rounded-full bg-white font-semibold text-[#153B63] hover:bg-slate-100">
                Request a Quote
              </Button>
            </Link>

          </div>

          {/* MOBILE LANGUAGE */}

          <div className="mt-4 flex justify-center gap-2">

            <button
              type="button"
              className="rounded-full bg-[#153B63] px-5 py-2 text-xs font-bold text-white"
            >
              EN
            </button>

            <button
              type="button"
              className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold text-white/70"
            >
              TR
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}