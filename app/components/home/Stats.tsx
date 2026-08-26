"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Globe2,
  PackageCheck,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    icon: Factory,
    value: "20+",
    title: "Years of Experience",
    desc: "More than two decades of home textile manufacturing experience.",
  },
  {
    icon: PackageCheck,
    value: "15+",
    title: "Product Groups",
    desc: "A wide range of home textile products for wholesale and retail.",
  },
  {
    icon: Globe2,
    value: "30+",
    title: "Export Countries",
    desc: "Supplying customers across Europe and international markets.",
  },
  {
    icon: BadgeCheck,
    value: "100%",
    title: "Quality Focus",
    desc: "Careful quality control throughout the production process.",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      {/* Background */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-100/60 blur-[140px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-slate-200/70 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#153B63]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#153B63]">
            OUR EXPERIENCE
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
            Built on Experience,
            <span className="block text-[#153B63]">
              Trusted Worldwide
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our manufacturing experience, product range and international
            reach allow us to support wholesalers, retailers, e-commerce
            sellers and private-label brands.
          </p>
        </motion.div>

        {/* STATS */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#153B63] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Icon size={26} />
                </div>

                <h3 className="mt-8 text-5xl font-black text-[#153B63]">
                  {item.value}
                </h3>

                <h4 className="mt-4 text-xl font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-4 leading-7 text-slate-500">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}