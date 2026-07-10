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
    title: "Years Experience",
    desc: "Over two decades of manufacturing expertise.",
  },
  {
    icon: PackageCheck,
    value: "15+",
    title: "Product Groups",
    desc: "Wide range of premium home textile collections.",
  },
  {
    icon: Globe2,
    value: "30+",
    title: "Export Countries",
    desc: "Supplying partners in Türkiye and international markets.",
  },
  {
    icon: BadgeCheck,
    value: "100%",
    title: "Quality Control",
    desc: "Every product passes strict quality inspection.",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm uppercase tracking-[0.25em] text-gray-500">
            Trusted Manufacturer
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Built on Quality,
            <br />
            Trusted Worldwide
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            Forev Textile manufactures premium home textile collections
            for wholesalers, retailers and private label brands with
            modern production standards.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .1,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-black hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-8 text-5xl font-bold">
                  {item.value}
                </h3>

                <h4 className="mt-4 text-xl font-semibold">
                  {item.title}
                </h4>

                <p className="mt-4 text-gray-600 leading-7">
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