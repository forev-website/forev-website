"use client";

import { motion } from "framer-motion";
import {
  Scissors,
  Shirt,
  ShieldCheck,
  PackageCheck,
  Truck,
  Factory,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Shirt,
    title: "Fabric Selection",
    description:
      "We carefully select fabrics according to product requirements, quality standards and customer specifications.",
  },
  {
    number: "02",
    icon: Scissors,
    title: "Cutting & Sewing",
    description:
      "Modern production equipment enables precise cutting and professional sewing for consistent product quality.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Quality Control",
    description:
      "Every product goes through detailed quality checks before packaging and shipment.",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Packaging",
    description:
      "Products are professionally packaged according to wholesale, retail and private-label requirements.",
  },
  {
    number: "05",
    icon: Truck,
    title: "Worldwide Shipment",
    description:
      "Finished orders are prepared for reliable delivery to customers in Turkey and international markets.",
  },
];

export default function Production() {
  return (
    <section
      id="production"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* BAŞLIK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold tracking-wide text-[#153B63]">
            OUR PRODUCTION
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
            Reliable Production
            <span className="block text-[#153B63]">
              From Turkey to the World
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From fabric selection to final shipment, every stage of our
            production process is carefully managed to deliver consistent
            quality for wholesalers, retailers and private-label brands.
          </p>
        </motion.div>

        {/* ÜRETİM BİLGİSİ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
        >

          {/* SOL KART */}
          <div className="relative overflow-hidden rounded-[32px] bg-[#153B63] p-10 text-white shadow-2xl">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                <Factory className="h-8 w-8" />
              </div>

              <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                Turkish Manufacturing
              </p>

              <h3 className="mt-4 text-4xl font-black leading-tight">
                Production Built
                <br />
                for Wholesale
              </h3>

              <p className="mt-6 max-w-md text-lg leading-8 text-white/75">
                We support wholesale orders, e-commerce sellers,
                retailers and private-label brands with flexible
                production and packaging solutions.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-3xl font-black">
                    20+
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    Years Experience
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-3xl font-black">
                    30+
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    Export Countries
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* SAĞ - AŞAMALAR */}
          <div className="space-y-4">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group flex items-start gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* NUMARA */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#153B63]/10 text-sm font-black text-[#153B63]">
                    {step.number}
                  </div>

                  {/* İKON */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-[#153B63] transition duration-300 group-hover:bg-[#153B63] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* METİN */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-500">
                      {step.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}

          </div>
        </motion.div>

      </div>
    </section>
  );
}