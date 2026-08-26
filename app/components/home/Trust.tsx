"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Globe2,
  Award,
  ShieldCheck,
  Users,
  PackageCheck,
} from "lucide-react";

const items = [
  {
    icon: Factory,
    number: "20+",
    title: "Years of Experience",
    text: "More than two decades of experience in home textile manufacturing.",
  },
  {
    icon: Globe2,
    number: "30+",
    title: "Export Countries",
    text: "Supplying customers across Europe and international markets.",
  },
  {
    icon: PackageCheck,
    number: "500,000+",
    title: "Products Manufactured",
    text: "High production capacity supported by modern manufacturing facilities.",
  },
  {
    icon: Award,
    number: "OEM",
    title: "Private Label",
    text: "Custom manufacturing solutions developed for your brand.",
  },
  {
    icon: ShieldCheck,
    number: "100%",
    title: "Quality Control",
    text: "Quality checks throughout every stage of the production process.",
  },
  {
    icon: Users,
    number: "100%",
    title: "Customer Satisfaction",
    text: "Building long-term business relationships through reliable service.",
  },
];

export default function Trust() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold tracking-wide text-[#153B63]">
            WHY FOREV?
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            A Reliable Manufacturing Partner
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
            With more than 20 years of experience, Forev Textile provides
            reliable home textile manufacturing solutions for wholesalers,
            retailers, e-commerce sellers and private-label brands.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="group rounded-[30px] border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#153B63]/10 transition duration-300 group-hover:bg-[#153B63]">
                  <Icon
                    size={32}
                    className="text-[#153B63] transition duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-8 text-5xl font-black text-[#153B63]">
                  {item.number}
                </h3>

                <h4 className="mt-3 text-2xl font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-4 leading-7 text-slate-500">
                  {item.text}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}