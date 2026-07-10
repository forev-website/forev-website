import { notFound } from "next/navigation";
import { productData } from "@/app/data/productData";
import ProductGallery from "@/app/components/products/ProductGallery";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = productData.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-start gap-16 lg:grid-cols-2">

          {/* Sol */}
          <ProductGallery
            images={product.images}
            title={product.title}
          />

          {/* Sağ */}
          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#153B63]">
              FOREV COLLECTION
            </span>

            <h1 className="mt-6 text-5xl font-bold">
              {product.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {product.description}
            </p>

            <div className="mt-10 space-y-4">
              {product.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    size={22}
                    className="text-[#153B63]"
                  />

                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-3xl border p-6">

              <h3 className="text-xl font-bold">
                Ölçüler
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="rounded-full bg-slate-100 px-5 py-2"
                  >
                    {size}
                  </span>
                ))}
              </div>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button className="rounded-full bg-[#153B63] px-8 hover:bg-[#0F2F4F]">
                Teklif Al
              </Button>

              <Button
                variant="outline"
                className="rounded-full"
              >
                Katalog İndir
              </Button>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}