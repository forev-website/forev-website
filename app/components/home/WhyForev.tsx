"use client";

import { motion } from "framer-motion";
import {
  Factory,
  BadgeDollarSign,
  Tags,
  PackageCheck,
  Truck,
  Boxes,
} from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "Direct Manufacturer",
    text: "Buy directly from a Turkish home textile manufacturer without unnecessary intermediaries.",
  },
  {
    icon: BadgeDollarSign,
    title: "Wholesale Pricing",
    text: "Competitive production costs designed for e-commerce sellers, wholesalers and retailers.",
  },
  {
    icon: Tags,
    title: "Private Label",
    text: "Build your own brand with custom labels, products and private-label manufacturing.",
  },
  {
    icon: PackageCheck,
    title: "Custom Packaging",
    text: "We can prepare packaging, labels and product presentation according to your requirements.",
  },
  {
    icon: Truck,
    title: "European Export",
    text: "Reliable production and export support for customers across Europe and international markets.",
  },
  {
    icon: Boxes,
    title: "Flexible Production",
    text: "Choose from our existing collections or develop products according to your specifications.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function WhyForev() {
  return (
    <section
      id="why-forev"
      className="relative overflow-hidden bg-slate-50 py-28"
    >
      {/* Background */}
      <div className="absolute left-[-180px] top-[-180px] h-[450px] w-[450px] rounded-full bg-blue-100/60 blur-[140px]" />
      <div className="absolute bottom-[-180px] right-[-180px] h-[450px] w-[450px] rounded-full bg-slate-200/70 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#153B63]/10 px-4 py-2 text-sm font-bold tracking-[0.2em] text-[#153B63]">
            WHY FOREV
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
            Built for
            <span className="text-[#153B63]"> E-commerce Sellers</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From wholesale production to private label and custom packaging,
            Forev helps online sellers source reliable home textile products
            directly from Turkey.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{ y: -8 }}
                className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#153B63]/20 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#153B63] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Icon size={26} />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 rounded-[32px] bg-[#153B63] px-8 py-10 text-center shadow-xl md:px-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            YOU SELL. WE MANUFACTURE.
          </p>

          <h3 className="mt-3 text-3xl font-black text-white md:text-4xl">
            Your brand. Our production.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
            Whether you sell on Amazon, Allegro, bol.com or your own online
            store, we provide the production support you need to grow your
            home textile business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}