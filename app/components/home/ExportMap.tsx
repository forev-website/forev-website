"use client";

import { motion } from "framer-motion";
import { Globe2, Plane, Ship, Truck } from "lucide-react";

const countries = [
  "Germany",
  "France",
  "Netherlands",
  "Belgium",
  "United Arab Emirates",
  "Saudi Arabia",
  "Iraq",
  "United Kingdom",
];

export default function ExportMap() {
  return (
    <section
      id="export"
      className="bg-white py-28"
    >
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
            GLOBAL EXPORT
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            From Turkey
            <span className="block text-[#153B63]">
              To International Markets
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
            We manufacture and supply home textile products to wholesale
            customers, retailers, e-commerce sellers and private-label
            brands across Europe and international markets.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* EXPORT NETWORK */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[30px] bg-[#153B63] p-10 text-white shadow-xl"
          >
            <div className="flex items-center gap-4">
              <Globe2 size={46} />

              <h3 className="text-3xl font-bold">
                Export Network
              </h3>
            </div>

            <p className="mt-5 leading-7 text-white/70">
              Our production capabilities allow us to serve customers
              in multiple international markets.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">

              {countries.map((country) => (
                <div
                  key={country}
                  className="rounded-xl bg-white/10 px-4 py-3 text-sm backdrop-blur transition hover:bg-white/20"
                >
                  🌍 {country}
                </div>
              ))}

            </div>
          </motion.div>

          {/* SHIPPING OPTIONS */}
          <div className="grid gap-6">

            {/* AIR */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Plane
                className="text-[#153B63]"
                size={36}
              />

              <h3 className="mt-4 text-2xl font-bold text-slate-900">
                Air Freight
              </h3>

              <p className="mt-2 leading-7 text-slate-500">
                Fast delivery solutions for urgent orders and
                time-sensitive shipments.
              </p>
            </motion.div>

            {/* SEA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Ship
                className="text-[#153B63]"
                size={36}
              />

              <h3 className="mt-4 text-2xl font-bold text-slate-900">
                Sea Freight
              </h3>

              <p className="mt-2 leading-7 text-slate-500">
                Cost-effective shipping solutions for large-volume
                wholesale and export orders.
              </p>
            </motion.div>

            {/* ROAD */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Truck
                className="text-[#153B63]"
                size={36}
              />

              <h3 className="mt-4 text-2xl font-bold text-slate-900">
                Road Freight
              </h3>

              <p className="mt-2 leading-7 text-slate-500">
                Reliable deliveries to European markets and
                neighboring countries.
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}