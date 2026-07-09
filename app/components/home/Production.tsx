export default function Production() {
  const steps = [
    {
      no: "01",
      title: "Kumaş Seçimi",
      desc: "Yüksek kalite standartlarına uygun kumaş seçimi yapılır.",
    },
    {
      no: "02",
      title: "Üretim",
      desc: "Modern makine parkurumuzda üretim gerçekleştirilir.",
    },
    {
      no: "03",
      title: "Kalite Kontrol",
      desc: "Tüm ürünler tek tek kalite kontrolünden geçer.",
    },
    {
      no: "04",
      title: "Paketleme",
      desc: "Ürünler özenle paketlenerek sevke hazırlanır.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-[#153B63]">
            ÜRETİM
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Üretim Sürecimiz
          </h2>

          <p className="mt-5 text-lg text-slate-500">
            Her ürünümüz aynı kalite standartlarında üretilmektedir.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (

            <div
              key={step.no}
              className="rounded-3xl bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="text-6xl font-black text-[#153B63]/20">
                {step.no}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-500">
                {step.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}