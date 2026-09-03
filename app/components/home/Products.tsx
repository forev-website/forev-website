"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Package,
  Tags,
  Factory,
} from "lucide-react";

const products = [
  {
    id: "fitted-sheet-set",
    title: "Satin Fitted Sheet Set",
    description:
      "High-quality fitted sheet set collections designed for retail, wholesale and private-label production.",
    image: "/images/fitted-sheet-set/fitted-sheet-set.png",
  },

  {
    id: "welsoft",
    title: "Welsoft Quilts",
    description:
      "Soft, comfortable and high-volume quilt collections designed for European markets.",
    image: "/images/welsoft/welsoft.png",
  },

  {
    id: "pike",
    title: "Bedspreads & Pique",
    description:
      "Modern bedspread and pique collections available in different sizes, colors and designs.",
    image: "/images/pike/pike.png",
  },

  {
    id: "towels",
    title: "Towels",
    description:
      "Premium towel collections including hand towel sets, hammam sets and bath towels.",
    image: "/images/towels/towels.png",
  },

  {
    id: "bornoz",
    title: "Bathrobes",
    description:
      "Comfortable and high-quality bathrobe collections suitable for retail, wholesale and hospitality businesses.",
    image: "/images/bornoz/bornoz.png",
  },

  {
    id: "satin",
    title: "Satin",
    description:
      "Elegant and smooth satin collections designed for premium home textile, wholesale and private-label production.",
    image: "/images/satin/satin.png",
  },

  {
    id: "alez",
    title: "Mattress Protectors",
    description:
      "Practical mattress protection products suitable for retail and e-commerce sales.",
    image: "/images/alez/alez.png",
  },

  {
    id: "kids-bathrobes",
    title: "Kids Bathrobes",
    description:
      "Soft and comfortable kids bathrobe collections available in different age groups.",
    image: "/images/kids-bathrobes/kids-bathrobes.png",
  },

  {
    id: "dish-cloths",
    title: "Dish Cloths",
    description:
      "Practical and high-quality dish cloth collections designed for everyday kitchen use, wholesale and retail markets.",
    image: "/images/dish-cloths/dish-cloths.png",
  },

  {
    id: "kitchen-towels",
    title: "Kitchen Towels",
    description:
      "High-quality kitchen towel collections designed for everyday use, retail, wholesale and private-label production.",
    image: "/images/kitchen-towels/kitchen-towels.png",
  },

  {
    id: "bebek",
    title: "Baby Textile",
    description:
      "Soft and carefully produced baby textile collections for retailers and private labels.",
    image: "/images/bebek/bebek.png",
  },

  {
    id: "bath-mats",
    title: "Bath Mats",
    description:
      "Premium bath mat collections designed for comfort, absorbency and everyday bathroom use.",
    image: "/images/bath-mats/bath-mats.png",
  },

  {
    id: "welsoft-bathrobes",
    title: "Welsoft Dressing Gowns",
    description:
      "Soft and comfortable welsoft dressing gown collections designed for retail, wholesale and private-label production.",
    image: "/images/welsoft-bathrobes/welsoft-bathrobes.png",
  },

  {
    id: "otel",
    title: "Hotel Textile",
    description:
      "Professional textile solutions manufactured for hotels and hospitality businesses.",
    image: "/images/otel/otel.png",
  },

  {
    id: "tv-blankets",
    title: "Welsoft TV Blankets & Throws",
    description:
      "Soft and comfortable welsoft TV blanket and throw collections designed for everyday use, retail, wholesale and private-label production.",
    image: "/images/tv-blankets/tv-blankets.png",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-white py-28"
    >
      {/* BACKGROUND */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-50 blur-[140px]" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-slate-100 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#153B63]/10 px-4 py-2 text-sm font-bold tracking-[0.2em] text-[#153B63]">
            PRODUCT CATALOG
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
            Home Textile
            <span className="text-[#153B63]">
              {" "}
              Collections
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore our core product groups manufactured for wholesalers,
            retailers, e-commerce sellers and private-label brands.
          </p>

          {/* CATALOG TABS */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-[#153B63] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0F2F4F]"
            >
              Product Catalog
            </a>

            <a
              href="#product-videos"
              className="inline-flex items-center justify-center rounded-full border border-[#153B63]/20 bg-white px-6 py-3 text-sm font-semibold text-[#153B63] shadow-sm transition hover:bg-[#153B63]/5"
            >
              Our Product Videos
            </a>

          </div>
        </motion.div>

        {/* PRODUCT CARDS */}

        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* IMAGE */}

              <Link
                href={`/products/${product.id}`}
                className="block"
                aria-label={`View ${product.title}`}
              >
                <div className="relative aspect-square overflow-hidden bg-slate-100">

                  {product.id === "satin" ||
                  product.id === "fitted-sheet-set" ? (

                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                  ) : (

                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                  )}

                  <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#153B63] shadow-sm">
                    FOREV
                  </div>

                </div>
              </Link>

              {/* CONTENT */}

              <div className="p-7">

                <h3 className="text-2xl font-bold text-slate-900">
                  {product.title}
                </h3>

                <p className="mt-3 min-h-[72px] leading-7 text-slate-600">
                  {product.description}
                </p>

                {/* TAGS */}

                <div className="mt-6 flex flex-wrap gap-2">

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                    <Factory size={13} />
                    Wholesale
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                    <Tags size={13} />
                    Private Label
                  </span>

                </div>

                {/* LINK */}

                <Link
                  href={`/products/${product.id}`}
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-[#153B63] transition hover:gap-3"
                >
                  View Product
                  <ArrowRight size={18} />
                </Link>

              </div>

            </motion.div>
          ))}

        </div>

        {/* PRODUCT VIDEOS */}

        <motion.div
          id="product-videos"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-24"
        >

          {/* VIDEO HEADER */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-[#153B63]/10 px-4 py-2 text-sm font-bold tracking-[0.2em] text-[#153B63]">
              OUR PRODUCT VIDEOS
            </span>

            <h2 className="mt-6 text-3xl font-black text-slate-900 md:text-4xl">
              See Our Products in Detail
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Take a closer look at some of our home textile collections.
            </p>

          </div>

          {/* MAIN PRODUCT VIDEOS */}

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {/* SATIN */}

            <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">

              <video
                controls
                preload="metadata"
                className="aspect-video w-full object-cover"
              >
                <source
                  src="/videos/satin.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="p-6">

                <h3 className="text-xl font-bold text-slate-900">
                  Satin
                </h3>

                <p className="mt-2 leading-6 text-slate-600">
                  Explore our satin textile collection.
                </p>

              </div>

            </div>

            {/* WELSOFT QUILT */}

            <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">

              <video
                controls
                preload="metadata"
                className="aspect-video w-full object-cover"
              >
                <source
                  src="/videos/welsoft-quilt.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="p-6">

                <h3 className="text-xl font-bold text-slate-900">
                  Welsoft Quilts
                </h3>

                <p className="mt-2 leading-6 text-slate-600">
                  Discover our soft and comfortable welsoft quilt collection.
                </p>

              </div>

            </div>

            {/* BATHROBES */}

            <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">

              <video
                controls
                preload="metadata"
                className="aspect-video w-full object-cover"
              >
                <source
                  src="/videos/bathrobe.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="p-6">

                <h3 className="text-xl font-bold text-slate-900">
                  Bathrobes
                </h3>

                <p className="mt-2 leading-6 text-slate-600">
                  Take a closer look at our bathrobe collection.
                </p>

              </div>

            </div>

          </div>

          {/* MATTRESS PROTECTOR VIDEOS */}

          <div className="mt-12">

            <div className="mb-7 text-center">

              <h3 className="text-2xl font-bold text-slate-900">
                Mattress Protectors
              </h3>

              <p className="mt-2 text-slate-600">
                Explore our mattress protector collection.
              </p>

            </div>

            <div className="mx-auto grid max-w-4xl gap-7 md:grid-cols-2">

              {/* MICRO PROTECTOR */}

              <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">

                <video
                  controls
                  preload="metadata"
                  className="aspect-video w-full object-cover"
                >
                  <source
                    src="/videos/micro-protector.mp4"
                    type="video/mp4"
                  />
                </video>

                <div className="p-6">

                  <h3 className="text-xl font-bold text-slate-900">
                    Micro Protector
                  </h3>

                  <p className="mt-2 leading-6 text-slate-600">
                    Explore our micro mattress protector collection.
                  </p>

                </div>

              </div>

              {/* QUILTED PROTECTOR */}

              <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">

                <video
                  controls
                  preload="metadata"
                  className="aspect-video w-full object-cover"
                >
                  <source
                    src="/videos/quilted-protector.mp4"
                    type="video/mp4"
                  />
                </video>

                <div className="p-6">

                  <h3 className="text-xl font-bold text-slate-900">
                    Quilted Protector
                  </h3>

                  <p className="mt-2 leading-6 text-slate-600">
                    Explore our quilted mattress protector collection.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

        {/* BOTTOM CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-16 rounded-[32px] border border-slate-200 bg-slate-50 p-8 md:flex md:items-center md:justify-between md:p-10"
        >

          <div className="flex items-start gap-5">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#153B63] text-white">
              <Package size={26} />
            </div>

            <div>

              <h3 className="text-2xl font-bold text-slate-900">
                Looking for a specific product?
              </h3>

              <p className="mt-2 max-w-2xl leading-7 text-slate-600">
                Explore our product collections and contact us directly
                for wholesale inquiries and product information.
              </p>

            </div>

          </div>

          <Link
            href="#contact"
            className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#153B63] px-7 py-4 font-semibold text-white transition hover:bg-[#0F2F4F] md:mt-0"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>

        </motion.div>

      </div>
    </section>
  );
}