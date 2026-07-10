import Image from "next/image";

export default function Production() {
  const steps = [
    "Kaliteli Kumaş Seçimi",
    "Modern Üretim Teknolojisi",
    "Titiz Kalite Kontrol",
    "Güvenli Paketleme",
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Sol Taraf */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="/images/hero-product.png"
            alt="Forev Üretim"
            width={700}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Sağ Taraf */}
        <div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#153B63]">
            ÜRETİM
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            Üretim Sürecimiz
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Forev Tekstil olarak üretimin her aşamasında kaliteyi ön planda
            tutuyoruz. Modern üretim tesisimizde, deneyimli ekibimizle
            müşterilerimize yüksek standartlarda ev tekstili ürünleri
            üretiyoruz.
          </p>

          <div className="mt-10 space-y-5">
            {steps.map((step) => (
              <div key={step} className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#153B63] text-white">
                  ✓
                </div>

                <p className="text-lg font-medium text-slate-700">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-10 rounded-full bg-[#153B63] px-8 py-4 font-semibold text-white transition hover:bg-[#0f2d4d]">
            Üretimimizi İncele
          </button>

        </div>

      </div>
    </section>
  );
}