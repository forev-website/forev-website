export default function Features() {
  const features = [
    {
      title: "20+ Yıllık Deneyim",
      desc: "Ev tekstili üretiminde uzun yıllara dayanan tecrübe.",
    },
    {
      title: "İstenilen Ölçüde Üretim",
      desc: "Müşteriye özel ölçü ve üretim seçenekleri.",
    },
    {
      title: "İhracat",
      desc: "Birçok ülkeye üretim ve ihracat hizmeti sunuyoruz.",
    },
    {
      title: "Kaliteli Kumaş",
      desc: "Yüksek kalite standartlarında üretim yapıyoruz.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Neden Forev?
          </h2>

          <p className="mt-5 text-lg text-slate-500">
            Üretimden teslimata kadar kaliteyi ön planda tutuyoruz.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#153B63] text-2xl font-bold text-white">
                ✓
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-500">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}