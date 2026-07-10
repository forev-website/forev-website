"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  title: string;
};

export default function ProductGallery({
  images,
  title,
}: Props) {
  const [selected, setSelected] = useState(0);

  return (
    <div>

      <div className="overflow-hidden rounded-[30px] border bg-slate-50 shadow-xl">

        <Image
          src={images[selected]}
          alt={title}
          width={900}
          height={900}
          priority
          className="w-full object-cover transition duration-300"
        />

      </div>

      <div className="mt-5 grid grid-cols-4 gap-4">

        {images.map((image, index) => (

          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              selected === index
                ? "border-[#153B63] ring-2 ring-[#153B63]"
                : "border-slate-200 hover:border-[#153B63]"
            }`}
          >

            <Image
              src={image}
              alt={`${title}-${index}`}
              width={250}
              height={250}
              className="aspect-square object-cover"
            />

          </button>

        ))}

      </div>

    </div>
  );
}