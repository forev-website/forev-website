import Image from "next/image";

export default function Products() {
  const products = [
    {
      title: "Welsoft Yorgan",
      desc: "4 Mevsim ve Kışlık Üretim",
      image: "/images/welsoft/welsoft.png",
    },
    {
      title: "Pike Takımı",
      desc: "Tek ve Çift Kişilik",
      image: "/images/pike/pike.png",
    },
    {
      title: "Bebek Tekstili",
      desc: "Uyku Setleri ve Yorgan",
      image: "/images/bebek/bebek.png",
    },
    {
      title: "Alez",
      desc: "Sıvı Geçirmez Koruma",
      image: "/images/alez/alez.png",
    },
    {
      title: "Otel Tekstili",
      desc: "Profesyonel Üretim",
      image: "/images/otel/otel.png",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Ürün Gruplarımız
          </h2>

          <p className="mt-5 text-lg text-slate-500">
            Forev Tekstil olarak birçok farklı kategoride üretim yapıyoruz.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (

            <div
              key={product.title}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={450}
                className="h-72 w-full object-cover transition duration-500 hover:scale-105"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {product.title}
                </h3>

                <p className="mt-3 text-slate-500">
                  {product.desc}
                </p>

                <button className="mt-8 rounded-full bg-[#153B63] px-6 py-3 text-white transition hover:bg-[#0d2946]">
                  İncele →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}