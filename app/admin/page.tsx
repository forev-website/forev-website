"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Image as ImageIcon,
  Package,
  Plus,
  Save,
  X,
  Pencil,
  Trash2,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

const productCategories = [
  { slug: "welsoft", name: "Welsoft Quilts", image: "/images/welsoft/welsoft.png" },
  { slug: "pike", name: "Bedspreads & Pique", image: "/images/pike/pike.png" },
  { slug: "towels", name: "Towels", image: "/images/towels/towels.png" },
  { slug: "bornoz", name: "Bathrobes", image: "/images/bornoz/bornoz.png" },
  { slug: "alez", name: "Mattress Protectors", image: "/images/alez/alez.png" },
  { slug: "kids-bathrobes", name: "Kids Bathrobes", image: "/images/kids-bathrobes/kids-bathrobes.png" },
  { slug: "dish-cloths", name: "Dish Cloths", image: "/images/dish-cloths/dish-cloths.png" },
  { slug: "kitchen-towels", name: "Kitchen Towels", image: "/images/kitchen-towels/kitchen-towels.png" },
  { slug: "bebek", name: "Baby Textile", image: "/images/bebek/bebek.png" },
  { slug: "bath-mats", name: "Bath Mats", image: "/images/bath-mats/bath-mats.png" },
  { slug: "welsoft-bathrobes", name: "Welsoft Dressing Gowns", image: "/images/welsoft-bathrobes/welsoft-bathrobes.png" },
  { slug: "otel", name: "Hotel Textile", image: "/images/otel/otel.png" },
  { slug: "tv-blankets", name: "Welsoft TV Blankets & Throws", image: "/images/tv-blankets/tv-blankets.png" },

  // NEW PRODUCT
  { slug: "satin", name: "Satin Duvet Cover", image: "/images/satin/satin.png" },
  { slug: "fitted-sheet-set", name: "Fitted Sheet Set", image: "/images/fitted-sheet-set/fitted-sheet-set.png" },
];

type DesignImage = {
  id: string;
  design_id: string;
  image_url: string;
  is_main: boolean;
  sort_order: number;
};

type Design = {
  id: string;
  product_id: string;
  name: string;
  slug: string;
  description: string | null;
  images: DesignImage[];
};

function createSlug(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// --------------------------------------------------
// GÖRSEL SIKIŞTIRMA
// --------------------------------------------------

async function compressImage(file: File): Promise<File> {
  const MAX_SIZE = 2000;
  const QUALITY = 0.85;

  const image = new Image();
  const objectUrl = URL.createObjectURL(file);

  try {
    await new Promise<void>((resolve, reject) => {
      image.onload = () => resolve();

      image.onerror = () =>
        reject(
          new Error("Image could not be loaded.")
        );

      image.src = objectUrl;
    });

    let width = image.naturalWidth;
    let height = image.naturalHeight;

    if (
      width > MAX_SIZE ||
      height > MAX_SIZE
    ) {
      if (width > height) {
        height = Math.round(
          (height / width) * MAX_SIZE
        );

        width = MAX_SIZE;
      } else {
        width = Math.round(
          (width / height) * MAX_SIZE
        );

        height = MAX_SIZE;
      }
    }

    const canvas =
      document.createElement("canvas");

    canvas.width = width;
    canvas.height = height;

    const context =
      canvas.getContext("2d");

    if (!context) {
      throw new Error(
        "Could not create image processing canvas."
      );
    }

    context.drawImage(
      image,
      0,
      0,
      width,
      height
    );

    const blob =
      await new Promise<Blob | null>(
        (resolve) => {
          canvas.toBlob(
            resolve,
            "image/webp",
            QUALITY
          );
        }
      );

    if (!blob) {
      throw new Error(
        "Image compression failed."
      );
    }

    const newFileName =
      file.name.replace(
        /\.[^/.]+$/,
        ""
      ) + ".webp";

    return new File(
      [blob],
      newFileName,
      {
        type: "image/webp",
        lastModified: Date.now(),
      }
    );
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

export default function AdminPage() {
  const [selectedProduct, setSelectedProduct] =
    useState(
      productCategories[0].slug
    );

  const [showForm, setShowForm] =
    useState(false);

  const [editingDesign, setEditingDesign] =
    useState<Design | null>(null);

  const [designName, setDesignName] =
    useState("");

  const [designDescription, setDesignDescription] =
    useState("");

  const [mainImage, setMainImage] =
    useState<File | null>(null);

  const [galleryImages, setGalleryImages] =
    useState<File[]>([]);

  const [designs, setDesigns] =
    useState<Design[]>([]);

  const [loadingDesigns, setLoadingDesigns] =
    useState(false);

  const [saving, setSaving] =
    useState(false);

  const [errorMessage, setErrorMessage] =
    useState("");

  const selectedProductData =
    productCategories.find(
      (product) =>
        product.slug === selectedProduct
    );

  const selectedProductName =
    selectedProductData?.name ?? "";

  const selectedProductImage =
    selectedProductData?.image ?? "";

  // --------------------------------------------------
  // TASARIMLARI GETİR
  // --------------------------------------------------

  async function loadDesigns() {
    setLoadingDesigns(true);
    setErrorMessage("");

    try {
      const {
        data: product,
        error: productError,
      } = await supabase
        .from("products")
        .select("id")
        .eq("slug", selectedProduct)
        .single();

      if (
        productError ||
        !product
      ) {
        throw new Error(
          productError?.message ||
            "Product collection could not be found in Supabase."
        );
      }

      const {
        data: designData,
        error: designError,
      } = await supabase
        .from("designs")
        .select(
          "id, product_id, name, slug, description"
        )
        .eq(
          "product_id",
          product.id
        )
        .order("created_at", {
          ascending: true,
        });

      if (designError) {
        throw new Error(
          `Designs could not be loaded: ${designError.message}`
        );
      }

      if (
        !designData ||
        designData.length === 0
      ) {
        setDesigns([]);
        return;
      }

      const designIds =
        designData.map(
          (design) =>
            design.id
        );

      const {
        data: imageData,
        error: imageError,
      } = await supabase
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

      if (imageError) {
        throw new Error(
          `Design images could not be loaded: ${imageError.message}`
        );
      }

      const combinedDesigns: Design[] =
        designData.map(
          (design) => ({
            id: design.id,
            product_id:
              design.product_id,
            name: design.name,
            slug: design.slug,
            description:
              design.description ?? "",
            images:
              imageData?.filter(
                (image) =>
                  image.design_id ===
                  design.id
              ) ?? [],
          })
        );

      setDesigns(
        combinedDesigns
      );
    } catch (error) {
      console.error(
        "LOAD DESIGNS ERROR:",
        error
      );

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Designs could not be loaded."
      );

      setDesigns([]);
    } finally {
      setLoadingDesigns(false);
    }
  }

  useEffect(() => {
    loadDesigns();
  }, [selectedProduct]);

  // --------------------------------------------------
  // GALERİ SEÇ
  // --------------------------------------------------

  function handleGalleryChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    if (!event.target.files) {
      return;
    }

    setGalleryImages(
      Array.from(
        event.target.files
      )
    );
  }

  function removeGalleryImage(
    index: number
  ) {
    setGalleryImages(
      (current) =>
        current.filter(
          (_, imageIndex) =>
            imageIndex !== index
        )
    );
  }

  // --------------------------------------------------
  // YENİ TASARIM
  // --------------------------------------------------

  function openNewDesignForm() {
    setEditingDesign(null);

    setDesignName("");
    setDesignDescription("");

    setMainImage(null);
    setGalleryImages([]);

    setShowForm(true);
  }

  // --------------------------------------------------
  // EDIT
  // --------------------------------------------------

  function openEditDesign(
    design: Design
  ) {
    setEditingDesign(
      design
    );

    setDesignName(
      design.name
    );

    setDesignDescription(
      design.description ?? ""
    );

    setMainImage(null);
    setGalleryImages([]);

    setShowForm(true);
  }

  // --------------------------------------------------
  // FORM KAPAT
  // --------------------------------------------------

  function closeForm() {
    if (saving) {
      return;
    }

    setShowForm(false);
    setEditingDesign(null);

    setDesignName("");
    setDesignDescription("");

    setMainImage(null);
    setGalleryImages([]);
  }

  // --------------------------------------------------
  // TASARIM KAYDET / GÜNCELLE
  // --------------------------------------------------

  async function handleSave() {
    if (saving) {
      return;
    }

    if (!designName.trim()) {
      alert(
        "Please enter a design name."
      );

      return;
    }

    setSaving(true);

    try {
      // ------------------------------------------------
      // GÖRSELLERİ SIKIŞTIR
      // ------------------------------------------------

      let compressedMainImage:
        File | null = null;

      if (mainImage) {
        compressedMainImage =
          await compressImage(
            mainImage
          );
      }

      const compressedGalleryImages =
        await Promise.all(
          galleryImages.map(
            (image) =>
              compressImage(image)
          )
        );

      // ------------------------------------------------
      // PRODUCT BUL
      // ------------------------------------------------

      const {
        data: product,
        error: productError,
      } = await supabase
        .from("products")
        .select("id")
        .eq(
          "slug",
          selectedProduct
        )
        .single();

      if (
        productError ||
        !product
      ) {
        throw new Error(
          productError?.message ||
            "Product collection could not be found in Supabase."
        );
      }

      // ------------------------------------------------
      // EDIT MODE
      // ------------------------------------------------

      if (editingDesign) {
        const newSlug =
          createSlug(
            designName
          );

        if (!newSlug) {
          throw new Error(
            "Please enter a valid design name."
          );
        }

        // ------------------------------------------------
        // AYNI SLUG KONTROLÜ
        // ------------------------------------------------

        const {
          data: duplicateDesign,
          error: duplicateError,
        } = await supabase
          .from("designs")
          .select("id")
          .eq(
            "product_id",
            product.id
          )
          .eq(
            "slug",
            newSlug
          )
          .neq(
            "id",
            editingDesign.id
          )
          .maybeSingle();

        if (duplicateError) {
          throw new Error(
            `Design lookup failed: ${duplicateError.message}`
          );
        }

        if (duplicateDesign) {
          throw new Error(
            "Another design already uses this name."
          );
        }

        // ------------------------------------------------
        // DESIGN GÜNCELLE
        // ------------------------------------------------

        const {
          error: updateError,
        } = await supabase
          .from("designs")
          .update({
            name:
              designName.trim(),

            slug: newSlug,

            description:
              designDescription.trim() ||
              null,
          })
          .eq(
            "id",
            editingDesign.id
          );

        if (updateError) {
          throw new Error(
            `Design update failed: ${updateError.message}`
          );
        }

        // ------------------------------------------------
        // YENİ ANA GÖRSEL
        // ------------------------------------------------

        if (
          compressedMainImage
        ) {
          const mainFileName =
            `${crypto.randomUUID()}-${compressedMainImage.name}`;

          const {
            error: uploadError,
          } =
            await supabase.storage
              .from(
                "product-images"
              )
              .upload(
                mainFileName,
                compressedMainImage
              );

          if (uploadError) {
            throw new Error(
              `Main image upload failed: ${uploadError.message}`
            );
          }

          const mainUrl =
            supabase.storage
              .from(
                "product-images"
              )
              .getPublicUrl(
                mainFileName
              )
              .data
              .publicUrl;

          const {
            error:
              oldMainError,
          } =
            await supabase
              .from(
                "design_images"
              )
              .update({
                image_url:
                  mainUrl,
              })
              .eq(
                "design_id",
                editingDesign.id
              )
              .eq(
                "is_main",
                true
              );

          if (
            oldMainError
          ) {
            throw new Error(
              `Main image update failed: ${oldMainError.message}`
            );
          }
        }

        // ------------------------------------------------
        // YENİ GALERİ GÖRSELLERİ
        // ------------------------------------------------

        if (
          compressedGalleryImages.length >
          0
        ) {
          const currentGallery =
            editingDesign.images.filter(
              (image) =>
                !image.is_main
            );

          let nextSortOrder =
            currentGallery.length >
            0
              ? Math.max(
                  ...currentGallery.map(
                    (image) =>
                      image.sort_order
                  )
                ) + 1
              : 1;

          for (
            let index = 0;
            index <
            compressedGalleryImages.length;
            index++
          ) {
            const image =
              compressedGalleryImages[
                index
              ];

            const fileName =
              `${crypto.randomUUID()}-${image.name}`;

            const {
              error:
                uploadError,
            } =
              await supabase.storage
                .from(
                  "product-images"
                )
                .upload(
                  fileName,
                  image
                );

            if (
              uploadError
            ) {
              throw new Error(
                `Gallery image upload failed: ${uploadError.message}`
              );
            }

            const imageUrl =
              supabase.storage
                .from(
                  "product-images"
                )
                .getPublicUrl(
                  fileName
                )
                .data
                .publicUrl;

            const {
              error:
                imageError,
            } =
              await supabase
                .from(
                  "design_images"
                )
                .insert({
                  design_id:
                    editingDesign.id,

                  image_url:
                    imageUrl,

                  is_main:
                    false,

                  sort_order:
                    nextSortOrder +
                    index,
                });

            if (
              imageError
            ) {
              throw new Error(
                `Gallery image database error: ${imageError.message}`
              );
            }
          }
        }

        closeForm();

        await loadDesigns();

        alert(
          "Design updated successfully!"
        );

        return;
      }

      // ------------------------------------------------
      // NEW DESIGN MODE
      // ------------------------------------------------

      if (!compressedMainImage) {
        alert(
          "Please select a main image."
        );

        setSaving(false);

        return;
      }

      if (
        compressedGalleryImages.length ===
        0
      ) {
        alert(
          "Please select at least one gallery image."
        );

        setSaving(false);

        return;
      }

      const designSlug =
        createSlug(
          designName
        );

      if (!designSlug) {
        throw new Error(
          "Please enter a valid design name."
        );
      }

      // ------------------------------------------------
      // MEVCUT DESIGN KONTROLÜ
      // ------------------------------------------------

      const {
        data: existingDesign,
        error:
          existingDesignError,
      } = await supabase
        .from("designs")
        .select("id")
        .eq(
          "product_id",
          product.id
        )
        .eq(
          "slug",
          designSlug
        )
        .maybeSingle();

      if (
        existingDesignError
      ) {
        throw new Error(
          `Design lookup failed: ${existingDesignError.message}`
        );
      }

      let designId!: string;

      // ------------------------------------------------
      // DESIGN ZATEN VARSA
      // ------------------------------------------------

      if (existingDesign) {
        designId =
          existingDesign.id;

        const {
          count,
          error:
            imageCheckError,
        } = await supabase
          .from(
            "design_images"
          )
          .select("id", {
            count: "exact",
            head: true,
          })
          .eq(
            "design_id",
            designId
          );

        if (
          imageCheckError
        ) {
          throw new Error(
            `Image check failed: ${imageCheckError.message}`
          );
        }

        if (
          (count ?? 0) > 0
        ) {
          throw new Error(
            "This design already has images. Please use a different design name."
          );
        }

        const {
          error:
            existingUpdateError,
        } =
          await supabase
            .from("designs")
            .update({
              description:
                designDescription.trim() ||
                null,
            })
            .eq(
              "id",
              designId
            );

        if (
          existingUpdateError
        ) {
          throw new Error(
            `Design description update failed: ${existingUpdateError.message}`
          );
        }
      }

      // ------------------------------------------------
      // DESIGN YOKSA OLUŞTUR
      // ------------------------------------------------

      if (!existingDesign) {
        const {
          data: newDesign,
          error:
            designError,
        } =
          await supabase
            .from("designs")
            .insert({
              product_id:
                product.id,

              name:
                designName.trim(),

              slug:
                designSlug,

              description:
                designDescription.trim() ||
                null,
            })
            .select("id")
            .single();

        if (
          designError ||
          !newDesign
        ) {
          throw new Error(
            designError?.message ||
              "Design could not be created."
          );
        }

        designId =
          newDesign.id;
      }

      // ------------------------------------------------
      // ANA GÖRSEL
      // ------------------------------------------------

      const mainFileName =
        `${crypto.randomUUID()}-${compressedMainImage.name}`;

      const {
        error:
          mainUploadError,
      } =
        await supabase.storage
          .from(
            "product-images"
          )
          .upload(
            mainFileName,
            compressedMainImage
          );

      if (
        mainUploadError
      ) {
        throw new Error(
          `Main image upload failed: ${mainUploadError.message}`
        );
      }

      const mainUrl =
        supabase.storage
          .from(
            "product-images"
          )
          .getPublicUrl(
            mainFileName
          )
          .data
          .publicUrl;

      const {
        error:
          mainImageError,
      } =
        await supabase
          .from(
            "design_images"
          )
          .insert({
            design_id:
              designId,

            image_url:
              mainUrl,

            is_main:
              true,

            sort_order:
              0,
          });

      if (
        mainImageError
      ) {
        throw new Error(
          `Main image database error: ${mainImageError.message}`
        );
      }

      // ------------------------------------------------
      // GALERİ GÖRSELLERİ
      // ------------------------------------------------

      for (
        let index = 0;
        index <
        compressedGalleryImages.length;
        index++
      ) {
        const image =
          compressedGalleryImages[
            index
          ];

        const fileName =
          `${crypto.randomUUID()}-${image.name}`;

        const {
          error:
            uploadError,
        } =
          await supabase.storage
            .from(
              "product-images"
            )
            .upload(
              fileName,
              image
            );

        if (
          uploadError
        ) {
          throw new Error(
            `Gallery image upload failed: ${uploadError.message}`
          );
        }

        const imageUrl =
          supabase.storage
            .from(
              "product-images"
            )
            .getPublicUrl(
              fileName
            )
            .data
            .publicUrl;

        const {
          error:
            imageError,
        } =
          await supabase
            .from(
              "design_images"
            )
            .insert({
              design_id:
                designId,

              image_url:
                imageUrl,

              is_main:
                false,

              sort_order:
                index + 1,
            });

        if (
          imageError
        ) {
          throw new Error(
            `Gallery image database error: ${imageError.message}`
          );
        }
      }

      closeForm();

      await loadDesigns();

      alert(
        "Design saved successfully!"
      );
    } catch (error) {
      console.error(
        "SAVE DESIGN ERROR:",
        error
      );

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong while saving the design."
      );
    } finally {
      setSaving(false);
    }
  }

  // --------------------------------------------------
  // TASARIM SİL
  // --------------------------------------------------

  async function handleDelete(
    design: Design
  ) {
    if (saving) {
      return;
    }

    const confirmed =
      window.confirm(
        `Are you sure you want to delete "${design.name}"?`
      );

    if (!confirmed) {
      return;
    }

    setSaving(true);

    try {
      const {
        error:
          imagesError,
      } =
        await supabase
          .from(
            "design_images"
          )
          .delete()
          .eq(
            "design_id",
            design.id
          );

      if (
        imagesError
      ) {
        throw new Error(
          `Images could not be deleted: ${imagesError.message}`
        );
      }

      const {
        error:
          designError,
      } =
        await supabase
          .from("designs")
          .delete()
          .eq(
            "id",
            design.id
          );

      if (
        designError
      ) {
        throw new Error(
          `Design could not be deleted: ${designError.message}`
        );
      }

      await loadDesigns();

      alert(
        "Design deleted successfully!"
      );
    } catch (error) {
      console.error(
        "DELETE DESIGN ERROR:",
        error
      );

      alert(
        error instanceof Error
          ? error.message
          : "Design could not be deleted."
      );
    } finally {
      setSaving(false);
    }
  }

  // --------------------------------------------------
  // ANA GÖRSEL
  // --------------------------------------------------

  function getMainImage(
    design: Design
  ) {
    return (
      design.images.find(
        (image) =>
          image.is_main
      ) ??
      design.images[0] ??
      null
    );
  }

  // --------------------------------------------------
  // GALERİ
  // --------------------------------------------------

  function getGalleryImages(
    design: Design
  ) {
    return design.images
      .filter(
        (image) =>
          !image.is_main
      )
      .sort(
        (a, b) =>
          a.sort_order -
          b.sort_order
      );
  }

  return (
    <main className="min-h-screen bg-slate-100">

      {/* HEADER */}

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>
            <h1 className="text-2xl font-black text-slate-900">
              FOREV ADMIN
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Product & Design Management
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#153B63] hover:text-[#153B63]"
          >
            <ArrowLeft size={17} />
            Back to Website
          </Link>

        </div>
      </header>

      {/* CONTENT */}

      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* PAGE TITLE */}

        <div>
          <h2 className="text-3xl font-black text-slate-900">
            Product Collections
          </h2>

          <p className="mt-2 text-slate-500">
            Select a product collection and manage
            its colors, designs and product images.
          </p>
        </div>

        {/* PRODUCT SELECTOR */}

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

          <label className="mb-3 block text-sm font-semibold text-slate-700">
            Product Collection
          </label>

          <select
            value={
              selectedProduct
            }
            onChange={(
              event
            ) => {
              setSelectedProduct(
                event.target.value
              );

              setShowForm(
                false
              );

              setEditingDesign(
                null
              );

              setDesignName(
                ""
              );

              setDesignDescription(
                ""
              );

              setMainImage(
                null
              );

              setGalleryImages(
                []
              );
            }}
            className="w-full rounded-xl border border-slate-200 bg-white p-4 text-slate-900 outline-none transition focus:border-[#153B63] md:max-w-xl"
          >
            {productCategories.map(
              (product) => (
                <option
                  key={
                    product.slug
                  }
                  value={
                    product.slug
                  }
                >
                  {
                    product.name
                  }
                </option>
              )
            )}
          </select>

        </div>

        {/* SELECTED PRODUCT */}

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

            <div className="flex items-center gap-5">

              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                {selectedProductImage ? (
                  <img
                    key={selectedProductImage}
                    src={selectedProductImage}
                    alt={selectedProductName}
                    loading="eager"
                    className="block h-full w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-slate-400">
                    No image
                  </div>
                )}
              </div>

              <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#153B63]">
                Selected Collection
              </span>

              <h3 className="mt-2 text-3xl font-black text-slate-900">
                {
                  selectedProductName
                }
              </h3>

              <p className="mt-2 text-slate-500">
                Add colors, designs and gallery images.
              </p>
              </div>
            </div>

            <button
              type="button"
              onClick={
                openNewDesignForm
              }
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#153B63] px-6 py-4 font-semibold text-white transition hover:bg-[#0F2F4F]"
            >
              <Plus size={20} />
              Add New Design
            </button>

          </div>

        </div>

        {/* ERROR */}

        {errorMessage && (
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700">
            {
              errorMessage
            }
          </div>
        )}

        {/* EXISTING DESIGNS */}

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Existing Designs
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Designs saved in Supabase.
              </p>
            </div>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
              {
                designs.length
              }{" "}
              design
              {
                designs.length !==
                1
                  ? "s"
                  : ""
              }
            </span>

          </div>

          {loadingDesigns ? (
            <div className="flex justify-center py-16">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#153B63]" />
            </div>
          ) : designs.length ===
            0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#153B63]/10">
                <Package className="h-10 w-10 text-[#153B63]" />
              </div>

              <h4 className="mt-5 text-xl font-bold text-slate-900">
                No Designs Added Yet
              </h4>

              <p className="mt-2 max-w-md text-slate-500">
                Add a color or design to this collection.
              </p>

            </div>
          ) : (
            <div className="mt-7 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

              {designs.map(
                (
                  design
                ) => {
                  const main =
                    getMainImage(
                      design
                    );

                  const gallery =
                    getGalleryImages(
                      design
                    );

                  return (
                    <div
                      key={
                        design.id
                      }
                      className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
                    >

                      {/* MAIN IMAGE */}

                      <div className="aspect-square overflow-hidden bg-slate-100">

                        {main ? (
                          <img
                            src={
                              main.image_url
                            }
                            alt={
                              design.name
                            }
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <ImageIcon className="h-12 w-12 text-slate-300" />
                          </div>
                        )}

                      </div>

                      {/* INFO */}

                      <div className="p-5">

                        <div className="flex items-start justify-between gap-3">

                          <div className="min-w-0">

                            <h4 className="text-xl font-bold text-slate-900">
                              {
                                design.name
                              }
                            </h4>

                            {design.description && (
                              <p className="mt-2 text-sm leading-6 text-slate-500">
                                {
                                  design.description
                                }
                              </p>
                            )}

                          </div>

                          <span className="shrink-0 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                            Saved
                          </span>

                        </div>

                        {/* ACTION BUTTONS */}

                        <div className="mt-5 flex gap-2">

                          <button
                            type="button"
                            onClick={() =>
                              openEditDesign(
                                design
                              )
                            }
                            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#153B63] hover:text-[#153B63]"
                          >
                            <Pencil size={16} />
                            Edit
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              handleDelete(
                                design
                              )
                            }
                            disabled={
                              saving
                            }
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-50"
                          >
                            <Trash2 size={16} />
                            Delete
                          </button>

                        </div>

                        {/* GALLERY */}

                        {gallery.length >
                          0 && (
                          <div className="mt-5">

                            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                              Gallery
                            </p>

                            <div className="grid grid-cols-4 gap-2">

                              {gallery.map(
                                (
                                  image
                                ) => (
                                  <div
                                    key={
                                      image.id
                                    }
                                    className="aspect-square overflow-hidden rounded-xl bg-slate-100"
                                  >
                                    <img
                                      src={
                                        image.image_url
                                      }
                                      alt={
                                        design.name
                                      }
                                      className="h-full w-full object-cover"
                                    />
                                  </div>
                                )
                              )}

                            </div>

                          </div>
                        )}

                        <div className="mt-5 border-t border-slate-100 pt-4 text-sm text-slate-500">
                          {
                            design.images.length
                          }{" "}
                          image
                          {
                            design.images.length !==
                            1
                              ? "s"
                              : ""
                          }
                        </div>

                      </div>

                    </div>
                  );
                }
              )}

            </div>
          )}

        </div>

        {/* ADD / EDIT DESIGN FORM */}

        {showForm && (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

            <div className="flex items-start justify-between gap-5">

              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {
                    editingDesign
                      ? "Edit Design"
                      : "Add New Design"
                  }
                </h3>

                <p className="mt-2 text-slate-500">
                  {
                    editingDesign
                      ? `Edit ${editingDesign.name} for ${selectedProductName}.`
                      : `Add a color or design for ${selectedProductName}.`
                  }
                </p>
              </div>

              <button
                type="button"
                onClick={
                  closeForm
                }
                className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={22} />
              </button>

            </div>

            <div className="mt-8 grid gap-7">

              {/* DESIGN NAME */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Color / Design Name
                </label>

                <input
                  type="text"
                  value={
                    designName
                  }
                  onChange={(
                    event
                  ) =>
                    setDesignName(
                      event.target.value
                    )
                  }
                  placeholder="Example: Gray"
                  className="w-full rounded-xl border border-slate-200 p-4 text-slate-900 outline-none transition focus:border-[#153B63]"
                />

              </div>

              {/* DESCRIPTION */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Product Details / Additional Information
                </label>

                <textarea
                  value={
                    designDescription
                  }
                  onChange={(
                    event
                  ) =>
                    setDesignDescription(
                      event.target.value
                    )
                  }
                  placeholder="Example: 4-piece towel set, 2x50x85 cm + 2x70x140 cm, soft and highly absorbent."
                  rows={
                    5
                  }
                  className="w-full resize-y rounded-xl border border-slate-200 p-4 text-slate-900 outline-none transition focus:border-[#153B63]"
                />

                <p className="mt-2 text-sm text-slate-400">
                  This information will appear below the design name.
                </p>

              </div>

              {/* EXISTING MAIN IMAGE */}

              {editingDesign &&
                getMainImage(
                  editingDesign
                ) && (
                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Current Main Image
                    </label>

                    <div className="max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">

                      <img
                        src={
                          getMainImage(
                            editingDesign
                          )!
                            .image_url
                        }
                        alt={
                          editingDesign.name
                        }
                        className="aspect-square w-full object-cover"
                      />

                    </div>

                  </div>
                )}

              {/* MAIN IMAGE */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  {
                    editingDesign
                      ? "Replace Main Image (Optional)"
                      : "Main Image"
                  }
                </label>

                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-10 text-center transition hover:border-[#153B63]">

                  {mainImage ? (
                    <>
                      <img
                        src={URL.createObjectURL(
                          mainImage
                        )}
                        alt={
                          mainImage.name
                        }
                        className="max-h-80 max-w-full rounded-xl object-contain"
                      />

                      <span className="mt-3 text-sm font-semibold text-slate-600">
                        {
                          mainImage.name
                        }
                      </span>
                    </>
                  ) : (
                    <>
                      <ImageIcon className="h-10 w-10 text-slate-400" />

                      <span className="mt-3 font-semibold text-slate-700">
                        {
                          editingDesign
                            ? "Select New Main Image"
                            : "Upload Main Image"
                        }
                      </span>

                      <span className="mt-1 text-sm text-slate-400">
                        JPG, PNG or WEBP
                      </span>
                    </>
                  )}

                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                    onChange={(
                      event
                    ) => {
                      const file =
                        event
                          .target
                          .files?.[0] ??
                        null;

                      setMainImage(
                        file
                      );
                    }}
                  />

                </label>

              </div>

              {/* GALLERY */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  {
                    editingDesign
                      ? "Add Gallery Images (Optional)"
                      : "Gallery Images"
                  }
                </label>

                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-10 text-center transition hover:border-[#153B63]">

                  <Package className="h-10 w-10 text-slate-400" />

                  <span className="mt-3 font-semibold text-slate-700">
                    Select Gallery Images
                  </span>

                  <span className="mt-1 text-sm text-slate-400">
                    You can select multiple images
                  </span>

                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    multiple
                    className="hidden"
                    onChange={
                      handleGalleryChange
                    }
                  />

                </label>

                {galleryImages.length >
                  0 && (
                  <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">

                    {galleryImages.map(
                      (
                        image,
                        index
                      ) => (
                        <div
                          key={`${image.name}-${index}`}
                          className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2"
                        >

                          <div className="aspect-square overflow-hidden rounded-xl bg-slate-100">

                            <img
                              src={URL.createObjectURL(
                                image
                              )}
                              alt={
                                image.name
                              }
                              className="h-full w-full object-cover"
                            />

                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              removeGalleryImage(
                                index
                              )
                            }
                            className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition hover:bg-red-50 hover:text-red-600"
                          >
                            <X size={15} />
                          </button>

                        </div>
                      )
                    )}

                  </div>
                )}

              </div>

              {/* SAVE */}

              <div className="flex justify-end gap-3 border-t border-slate-100 pt-7">

                <button
                  type="button"
                  onClick={
                    closeForm
                  }
                  disabled={
                    saving
                  }
                  className="rounded-xl border border-slate-200 px-6 py-3 font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={
                    handleSave
                  }
                  disabled={
                    saving
                  }
                  className="inline-flex items-center gap-2 rounded-xl bg-[#153B63] px-7 py-3 font-semibold text-white transition hover:bg-[#0F2F4F] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Save size={18} />

                  {
                    saving
                      ? "Saving..."
                      : editingDesign
                        ? "Update Design"
                        : "Save Design"
                  }
                </button>

              </div>

            </div>

          </div>
        )}

      </div>

    </main>
  );
}