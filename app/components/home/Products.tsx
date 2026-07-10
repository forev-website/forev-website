"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "welsoft",
    title: "Welsoft Yorgan",
    description: "4 Mevsim Premium Üretim",
    image: "/images/welsoft/welsoft.png",
  },
  {
    id: "pike",
    title: "Pike Takımı",
    description: "Tek ve Çift Kişilik",
    image: "/images/pike/pike.png",
  },
  {
    id: "alez",
    title: "Alez",
    description: "Sıvı Geçirmez Koruma",
    image: "/images/alez/alez.png",
  },
  {
    id: "bebek",
    title: "Bebek Tekstili",
    description: "Uyku Setleri",
    image: "/images/bebek/bebek.png",
  },
  {
    id: "otel",
    title: "Otel Tekstili",
    description: "Profesyonel Üretim",
    image: "/images/otel/otel.png",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="bg-gradient-to-b from-white to-slate-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#153B63]">
            ÜRÜN GRUPLARIMIZ
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Ürün Grupları
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            Forev Tekstil olarak ev tekstili sektörüne yönelik
            birçok farklı kategoride profesyonel üretim yapıyoruz.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {products.map((product, index) => (

            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[30px] border bg-white shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.title}
                  width={700}
                  height={500}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <p className="text-sm font-semibold uppercase tracking-widest text-[#153B63]">
                  FOREV
                </p>

                <h3 className="mt-3 text-3xl font-bold">
                  {product.title}
                </h3>

                <p className="mt-4 text-slate-500">
                  {product.description}
                </p>

                <Link href={`/products/${product.id}`}>

                  <button className="mt-8 flex items-center gap-2 rounded-full bg-[#153B63] px-6 py-3 font-semibold text-white transition hover:bg-[#0F2F4F]">

                    Detayları Gör

                    <ArrowRight size={18} />

                  </button>

                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}