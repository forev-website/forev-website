"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  "20+ Years of Manufacturing Experience",
  "Production for Turkey and International Markets",
  "OEM / Private Label Manufacturing",
  "Modern Production Facilities",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* LEFT - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-100 shadow-2xl">
            <Image
              src="/images/welsoft/welsoft.png"
              alt="Forev Textile Welsoft Quilt Manufacturing"
              width={900}
              height={1000}
              className="h-[620px] w-full object-cover transition duration-700 hover:scale-105"
            />

            {/* IMAGE CAPTION */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
                FOREV TEXTILE
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                Premium Home Textile Manufacturing
              </h3>
            </div>
          </div>

          {/* EXPERIENCE CARD */}
          <div className="absolute -bottom-8 -right-6 rounded-[28px] bg-[#153B63] px-8 py-7 text-white shadow-2xl lg:-right-8">
            <p className="text-sm font-medium uppercase tracking-widest text-white/70">
              Experience
            </p>

            <h3 className="mt-1 text-5xl font-black">
              20+
            </h3>

            <p className="mt-1 text-lg">
              Years of
              <br />
              Manufacturing
            </p>
          </div>
        </motion.div>

        {/* RIGHT - ABOUT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold tracking-wide text-[#153B63]">
            ABOUT FOREV
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
            A Reliable
            <br />
            <span className="text-[#153B63]">
              Home Textile Manufacturer
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Forev Textile is a Turkish home textile manufacturer
            producing quilts, bedspreads, mattress protectors,
            baby textiles and hotel textile products for
            wholesalers, retailers and e-commerce sellers.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            With more than 20 years of manufacturing experience,
            we provide reliable production, OEM and private-label
            solutions for customers in Turkey and international markets.
          </p>

          {/* FEATURES */}
          <div className="mt-10 space-y-5">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#153B63]/10">
                  <CheckCircle2 className="h-5 w-5 text-[#153B63]" />
                </div>

                <span className="text-lg font-medium text-slate-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <Link
            href="#contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#153B63] px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0F2F4F] hover:shadow-lg"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}