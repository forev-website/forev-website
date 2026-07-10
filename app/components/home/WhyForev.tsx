"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Leaf,
  Factory,
  Globe2,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    text: "Every product is manufactured with carefully selected fabrics and strict quality control to ensure long-lasting comfort.",
  },
  {
    icon: Factory,
    title: "Modern Production",
    text: "Our advanced production process combines craftsmanship with modern technology for consistent excellence.",
  },
  {
    icon: Leaf,
    title: "Sustainable Approach",
    text: "Responsible manufacturing and environmentally conscious materials support a better future.",
  },
  {
    icon: Globe2,
    title: "Global Standards",
    text: "Designed and produced to meet international expectations for home textile collections.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
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
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-[#153B63]/10 px-4 py-2 text-sm font-semibold tracking-widest text-[#153B63]">
            WHY FOREV
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Designed for Everyday Luxury
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Combining elegant design, premium materials and reliable
            manufacturing to create home textile collections that last.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-2xl"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#153B63] text-white transition-all duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}