import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Sol Taraf */}
          <div>
            <Image
              src="/images/hero-product.png"
              alt="Forev Tekstil"
              width={600}
              height={700}
              className="rounded-3xl shadow-xl"
            />
          </div>

          {/* Sağ Taraf */}
          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#153B63]">
              HAKKIMIZDA
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
              Ev Tekstilinde
              <br />
              Güvenilir Üretici
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Forev Tekstil olarak welsoft yorgan, pike, alez, bebek tekstili
              ve otel tekstili üretiminde kaliteyi ön planda tutuyoruz.
              Modern üretim anlayışımız ve yılların verdiği tecrübeyle
              yurt içi ve yurt dışındaki müşterilerimize hizmet veriyoruz.
            </p>

            <div className="mt-8 space-y-3">
              <p>✔ 20+ Yıllık Üretim Deneyimi</p>
              <p>✔ Modern Üretim Tesisi</p>
              <p>✔ İhracata Uygun Üretim</p>
              <p>✔ Müşteriye Özel Üretim</p>
            </div>

            <button className="mt-10 rounded-full bg-[#153B63] px-8 py-4 font-semibold text-white hover:bg-[#102d4b]">
              Daha Fazla Bilgi
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}