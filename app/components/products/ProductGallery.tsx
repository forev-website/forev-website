"use client";

import { useEffect, useState } from "react";

type Props = {
  images: string[];
  title: string;
};

export default function ProductGallery({
  images,
  title,
}: Props) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setSelected(0);
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-slate-50 shadow-xl">
        <div className="flex aspect-square w-full items-center justify-center">
          <p className="text-sm text-slate-400">
            No product images available.
          </p>
        </div>
      </div>
    );
  }

  const thumbnailColumns =
    images.length === 1
      ? "grid-cols-1 max-w-[140px]"
      : images.length === 2
        ? "grid-cols-2 max-w-[280px]"
        : images.length === 3
          ? "grid-cols-3 max-w-[420px]"
          : images.length === 4
            ? "grid-cols-4 max-w-[560px]"
            : "grid-cols-5";

  return (
    <div>

      {/* MAIN PRODUCT IMAGE */}

      <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-slate-50 shadow-xl">
        <div className="aspect-square w-full">

          <img
            src={images[selected]}
            alt={title}
            className="h-full w-full object-cover transition duration-300"
          />

        </div>
      </div>

      {/* PRODUCT GALLERY */}

      <div
        className={`mt-5 grid gap-3 ${thumbnailColumns}`}
      >
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setSelected(index)}
            className={`aspect-square overflow-hidden rounded-2xl border transition-all duration-300 ${
              selected === index
                ? "border-[#153B63] ring-2 ring-[#153B63]"
                : "border-slate-200 hover:border-[#153B63]"
            }`}
          >

            <img
              src={image}
              alt={`${title} image ${index + 1}`}
              className="h-full w-full object-cover"
            />

          </button>
        ))}
      </div>

    </div>
  );
}