"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100 blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-slate-100 blur-[140px]" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-[#153B63] shadow-sm">
            <CheckCircle2 size={16} />
            Turkish Home Textile Manufacturer
          </div>

          <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 lg:text-7xl">
            Your Home Textile
            <span className="block text-[#153B63]">
              Manufacturing Partner
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            We manufacture premium home textile products for e-commerce
            sellers, wholesalers, retailers and private-label brands
            across Europe and worldwide.
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-500">
            Direct production from Turkey with wholesale, OEM, private label
            and custom packaging solutions.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#products"
              className="inline-flex items-center gap-3 rounded-full bg-[#153B63] px-8 py-4 font-semibold text-white transition hover:bg-[#0F2F4F]"
            >
              View Product Catalog
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#contact"
              className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-800 transition hover:border-[#153B63] hover:text-[#153B63]"
            >
              Request Wholesale Quote
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
            <div>
              <h3 className="text-4xl font-black text-[#153B63]">
                20+
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Years Manufacturing
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-[#153B63]">
                30+
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Export Countries
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-[#153B63]">
                OEM
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Private Label
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Background Glow */}
          <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-blue-100 blur-[120px]" />

          {/* Main Product Card */}
          <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.15)]">
            <Image
              src="/images/welsoft/welsoft.png"
              alt="Forev Welsoft Quilt"
              width={900}
              height={900}
              priority
              className="h-[620px] w-full object-cover transition duration-700 hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-8 pt-32">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                FOREV TEXTILE
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                Premium Welsoft Quilts
              </h2>

              <p className="mt-2 text-white/80">
                Wholesale • OEM • Private Label
              </p>
            </div>
          </div>

          {/* Floating Manufacturer Card */}
          <div className="absolute -bottom-7 -left-7 hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-xl sm:block">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Direct Manufacturer
            </p>

            <p className="mt-2 font-bold text-[#153B63]">
              Made in Turkey
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}