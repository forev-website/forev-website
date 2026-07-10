"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-gray-100 blur-3xl opacity-70" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-gray-200 blur-3xl opacity-50" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 pb-20">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >
            <span className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700">
              Premium Home Textile Manufacturer
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-gray-900 lg:text-7xl">
              Premium
              <br />
              Home Textile
              <br />
              Manufacturer
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
              Forev Textile manufactures premium bedding,
              quilts, bedspreads, hotel textiles and private label
              collections for domestic and international partners.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="#products"
                className="rounded-full bg-black px-8 py-4 text-white transition hover:bg-gray-800"
              >
                Products
              </Link>

              <Link
                href="#contact"
                className="flex items-center gap-2 rounded-full border border-gray-300 px-8 py-4 transition hover:bg-gray-100"
              >
                Get Offer
                <ArrowRight size={18} />
              </Link>

            </div>

            <div className="mt-16 grid grid-cols-3 gap-8">

              <div>
                <h3 className="text-3xl font-bold">20+</h3>
                <p className="text-gray-500 mt-2">Years Experience</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">100+</h3>
                <p className="text-gray-500 mt-2">Business Partners</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">15+</h3>
                <p className="text-gray-500 mt-2">Product Groups</p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7, delay: .2 }}
            className="relative"
          >

            <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-gray-100 blur-3xl" />
            <div className="absolute -right-8 bottom-10 h-52 w-52 rounded-full bg-gray-200 blur-3xl" />

            <div className="relative overflow-hidden rounded-[40px] bg-gray-100 p-8 shadow-2xl">

              <Image
                src="/images/hero-product.png"
                alt="Forev Textile"
                width={900}
                height={900}
                priority
                className="mx-auto object-contain"
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}