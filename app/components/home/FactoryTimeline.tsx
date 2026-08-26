"use client";

import { motion } from "framer-motion";
import {
  PenTool,
  Scissors,
  Shirt,
  ShieldCheck,
  PackageCheck,
  Truck,
} from "lucide-react";

const steps = [
  {
    icon: PenTool,
    number: "01",
    title: "Product Development",
    text: "Product designs and specifications are developed according to customer requirements and target markets.",
  },
  {
    icon: Scissors,
    number: "02",
    title: "Fabric Cutting",
    text: "Fabrics are precisely cut using modern equipment to maintain consistent dimensions and quality.",
  },
  {
    icon: Shirt,
    number: "03",
    title: "Sewing & Production",
    text: "Experienced production teams manufacture each product according to approved specifications.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Quality Control",
    text: "Every product is carefully inspected before packaging to ensure consistent quality and reliable results.",
  },
  {
    icon: PackageCheck,
    number: "05",
    title: "Professional Packaging",
    text: "Products are prepared with packaging suitable for wholesale, retail and private-label requirements.",
  },
  {
    icon: Truck,
    number: "06",
    title: "Worldwide Shipment",
    text: "Finished orders are prepared for reliable delivery to customers in Turkey and international markets.",
  },
];

export default function FactoryTimeline() {
  return (
    <section
      id="production-process"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold tracking-wide text-[#153B63]">
            PRODUCTION PROCESS
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
            From Production
            <span className="block text-[#153B63]">
              To Final Delivery
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We carefully manage every stage of production to provide
            reliable quality, consistent results and professional delivery
            for our wholesale and private-label customers.
          </p>
        </motion.div>

        {/* PRODUCTION STEPS */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-[30px] border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl"
              >
                <div className="flex items-start justify-between">

                  {/* ICON */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#153B63]/10 transition duration-300 group-hover:bg-[#153B63]">
                    <Icon className="h-8 w-8 text-[#153B63] transition duration-300 group-hover:text-white" />
                  </div>

                  {/* NUMBER */}
                  <span className="text-4xl font-black text-slate-200">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500">
                  {step.text}
                </p>
              </motion.div>
            );
          })}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-4xl rounded-[30px] bg-[#153B63] p-8 text-center text-white shadow-xl"
        >
          <h3 className="text-2xl font-bold">
            Ready to Start Your Production?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-white/75">
            Tell us about your product, quantity, packaging and brand
            requirements. We can prepare a wholesale or private-label
            production solution for you.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex rounded-full bg-white px-7 py-3 font-semibold text-[#153B63] transition hover:-translate-y-1 hover:shadow-lg"
          >
            Request a Quote
          </a>
        </motion.div>

      </div>
    </section>
  );
}