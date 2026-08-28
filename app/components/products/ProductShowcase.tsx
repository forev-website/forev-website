"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  MessageCircle,
  ArrowRight,
  Ruler,
} from "lucide-react";
import ProductGallery from "./ProductGallery";

type Product = {
  slug: string;
  title: string;
  images: string[];
  short: string;
  description: string;
  features: string[];
};

type SupabaseImage = {
  id: string;
  design_id: string;
  image_url: string;
  is_main: boolean;
  sort_order: number;
};

type SupabaseDesign = {
  id: string;
  name: string;
  slug: string;
  images: SupabaseImage[];
};

type Props = {
  product: Product;
  designs: SupabaseDesign[];
};

export default function ProductShowcase({
  product,
  designs,
}: Props) {
  const [selectedDesignId, setSelectedDesignId] =
    useState<string | null>(
      designs.length > 0
        ? designs[0].id
        : null
    );

  // --------------------------------------------------
  // SEÇİLİ DESEN
  // --------------------------------------------------

  const selectedDesign = useMemo(() => {
    if (!selectedDesignId) {
      return null;
    }

    return (
      designs.find(
        (design) =>
          design.id === selectedDesignId
      ) ?? null
    );
  }, [
    designs,
    selectedDesignId,
  ]);

  // --------------------------------------------------
  // DESEN SÜTUN SAYISI
  // --------------------------------------------------

  const designGridColumns =
    designs.length >= 17
      ? "grid-cols-5"
      : designs.length >= 10
        ? "grid-cols-4"
        : designs.length >= 5
          ? "grid-cols-3"
          : "grid-cols-2";

  // --------------------------------------------------
  // GALERİ GÖRSELLERİ
  // --------------------------------------------------

  const galleryImages = useMemo(() => {
    if (
      selectedDesign &&
      selectedDesign.images.length > 0
    ) {
      return [...selectedDesign.images]
        .sort(
          (a, b) =>
            a.sort_order -
            b.sort_order
        )
        .map(
          (image) =>
            image.image_url
        );
    }

    return product.images;
  }, [
    selectedDesign,
    product.images,
  ]);

  // --------------------------------------------------
  // DESEN ANA GÖRSELİ
  // --------------------------------------------------

  function getDesignMainImage(
    design: SupabaseDesign
  ) {
    const main =
      design.images.find(
        (image) =>
          image.is_main
      );

    return (
      main?.image_url ??
      design.images[0]
        ?.image_url ??
      null
    );
  }

  return (
    <div>

      {/* ==================================================
          ÜST ANA ALAN
      ================================================== */}

      <div className="grid items-start gap-10 xl:grid-cols-[0.75fr_1.5fr_1.5fr]">

        {/* ==================================================
            SOL - ÜRÜN BİLGİLERİ
            MOBİLDE 3. SIRA
            MASAÜSTÜNDE 1. SIRA
        ================================================== */}

        <div className="order-3 xl:order-1">

          <span className="inline-flex rounded-full bg-[#153B63]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#153B63]">
            FOREV COLLECTION
          </span>

          <h1 className="mt-5 text-4xl font-black leading-tight text-slate-900">
            {product.title}
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-600">
            {product.description}
          </p>

          {/* FEATURES */}

          <div className="mt-8 space-y-4">

            {product.features.map(
              (feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 border-b border-slate-100 pb-3"
                >

                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#153B63]/10">

                    <CheckCircle
                      size={17}
                      className="text-[#153B63]"
                    />

                  </div>

                  <span className="text-sm font-medium text-slate-700">
                    {feature}
                  </span>

                </div>
              )
            )}

          </div>

          {/* CUSTOM SIZE */}

          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#153B63]/10">

                <Ruler
                  size={22}
                  className="text-[#153B63]"
                />

              </div>

              <div>

                <h3 className="font-bold text-slate-900">
                  Custom Sizes Available
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Products can be manufactured
                  according to your required
                  dimensions and specifications.
                </p>

              </div>

            </div>

          </div>

          {/* BUTTONS */}

          <div className="mt-6 space-y-3">

            <Link
              href="/#contact"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#153B63] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#0F2F4F] hover:shadow-lg"
            >
              Request a Quote
              <ArrowRight
                size={18}
              />
            </Link>

            <a
              href="https://wa.me/905050879999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-700 transition hover:border-[#153B63] hover:text-[#153B63]"
            >
              <MessageCircle
                size={18}
              />

              Contact via WhatsApp
            </a>

          </div>

        </div>

        {/* ==================================================
            ORTA - BÜYÜK ÜRÜN GALERİSİ
            MOBİLDE 1. SIRA
            MASAÜSTÜNDE 2. SIRA
        ================================================== */}

        <div className="order-1 xl:order-2">

          <ProductGallery
            images={galleryImages}
            title={
              selectedDesign
                ? `${product.title} - ${selectedDesign.name}`
                : product.title
            }
          />

        </div>

        {/* ==================================================
            SAĞ - DESENLER / VARYANTLAR
            MOBİLDE 2. SIRA
            MASAÜSTÜNDE 3. SIRA
        ================================================== */}

        <div className="order-2 xl:order-3">

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#153B63]">
            AVAILABLE DESIGNS
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900">
            Choose Your Design
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Select a color or design to view
            its product images.
          </p>

          {/* ==================================================
              DESIGN GRID
          ================================================== */}

          {designs.length > 0 ? (

            <div
              className={`mt-7 grid ${designGridColumns} gap-3`}
            >

              {designs.map(
                (design) => {
                  const mainImage =
                    getDesignMainImage(
                      design
                    );

                  const isSelected =
                    selectedDesignId ===
                    design.id;

                  return (
                    <button
                      key={design.id}
                      type="button"
                      onClick={() =>
                        setSelectedDesignId(
                          design.id
                        )
                      }
                      className="group min-w-0 text-left"
                    >

                      {/* DESIGN IMAGE */}

                      <div
                        className={`relative aspect-square overflow-hidden rounded-xl border-2 bg-slate-100 transition-all duration-300 ${
                          isSelected
                            ? "border-[#153B63] shadow-lg ring-2 ring-[#153B63]/20"
                            : "border-slate-200 hover:border-[#153B63] hover:shadow-md"
                        }`}
                      >

                        {mainImage ? (

                          <Image
                            src={mainImage}
                            alt={
                              design.name
                            }
                            fill
                            sizes="(max-width: 1280px) 15vw, 170px"
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />

                        ) : (

                          <div className="flex h-full items-center justify-center text-xs text-slate-400">
                            No image
                          </div>

                        )}

                        {/* SELECTED */}

                        {isSelected && (

                          <div className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#153B63] text-white shadow-lg">

                            <CheckCircle
                              size={14}
                              fill="currentColor"
                            />

                          </div>

                        )}

                      </div>

                      {/* DESIGN NAME */}

                      <p
                        className={`mt-2 truncate text-[11px] font-bold leading-tight ${
                          isSelected
                            ? "text-[#153B63]"
                            : "text-slate-800"
                        }`}
                      >
                        {design.name}
                      </p>

                    </button>
                  );
                }
              )}

            </div>

          ) : (

            <div className="mt-7 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-7 text-center">

              <p className="font-semibold text-slate-700">
                No product designs available.
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Designs will appear here
                when they are added from
                the admin panel.
              </p>

            </div>

          )}

        </div>

      </div>

      {/* ==================================================
          ALT BİLGİ ALANI
      ================================================== */}

      <div className="mt-16 border-t border-slate-200 pt-10">

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-slate-50 p-5">

            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Production
            </p>

            <p className="mt-2 font-semibold text-slate-900">
              Direct Manufacturing
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Manufactured in Turkey according
              to customer requirements.
            </p>

          </div>

          <div className="rounded-2xl bg-slate-50 p-5">

            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Customization
            </p>

            <p className="mt-2 font-semibold text-slate-900">
              Custom Sizes & Private Label
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Custom dimensions, production
              and private-label solutions.
            </p>

          </div>

          <div className="rounded-2xl bg-slate-50 p-5">

            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Wholesale
            </p>

            <p className="mt-2 font-semibold text-slate-900">
              Wholesale & Export
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Production for retailers,
              wholesalers and international
              markets.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}