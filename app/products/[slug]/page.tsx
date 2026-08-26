import { notFound } from "next/navigation";
import { productData } from "@/app/data/productData";
import ProductShowcase from "@/app/components/products/ProductShowcase";
import { supabase } from "@/lib/supabase";

type Props = {
  params: Promise<{
    slug: string;
  }>;
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

export default async function ProductPage({
  params,
}: Props) {
  const { slug } = await params;

  // --------------------------------------------------
  // PRODUCT DATA
  // --------------------------------------------------

  const product = productData.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  // --------------------------------------------------
  // SUPABASE PRODUCT
  // --------------------------------------------------

  let supabaseDesigns: SupabaseDesign[] = [];

  try {
    const { data: supabaseProduct } =
      await supabase
        .from("products")
        .select("id")
        .eq("slug", slug)
        .maybeSingle();

    if (supabaseProduct) {

      // ------------------------------------------------
      // DESIGNS
      // ------------------------------------------------

      const { data: designs } =
        await supabase
          .from("designs")
          .select("id, name, slug")
          .eq(
            "product_id",
            supabaseProduct.id
          )
          .order("created_at", {
            ascending: true,
          });

      if (designs && designs.length > 0) {

        const designIds =
          designs.map(
            (design) => design.id
          );

        // ------------------------------------------------
        // DESIGN IMAGES
        // ------------------------------------------------

        const { data: images } =
          await supabase
            .from("design_images")
            .select(
              "id, design_id, image_url, is_main, sort_order"
            )
            .in(
              "design_id",
              designIds
            )
            .order("sort_order", {
              ascending: true,
            });

        // ------------------------------------------------
        // DESIGNS + IMAGES BİRLEŞTİR
        // ------------------------------------------------

        supabaseDesigns =
          designs.map((design) => ({
            id: design.id,
            name: design.name,
            slug: design.slug,

            images:
              images?.filter(
                (image) =>
                  image.design_id ===
                  design.id
              ) ?? [],
          }));
      }
    }

  } catch (error) {

    console.error(
      "SUPABASE PRODUCT ERROR:",
      error
    );

  }

  // --------------------------------------------------
  // PRODUCT SHOWCASE
  // --------------------------------------------------

  return (
    <main className="min-h-screen bg-white">

      <section className="py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-6">

          <ProductShowcase
            product={product}
            designs={supabaseDesigns}
          />

        </div>

      </section>

    </main>
  );
}