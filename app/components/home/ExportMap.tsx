import { Globe2, Plane, Ship, Truck } from "lucide-react";

const countries = [
  "Türkiye",
  "Almanya",
  "Fransa",
  "Hollanda",
  "Belçika",
  "Birleşik Arap Emirlikleri",
  "Suudi Arabistan",
  "Irak",
];

export default function ExportMap() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-[#153B63]">
            GLOBAL EXPORT
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Türkiye'den Dünyaya Üretim
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-500">
            Forev Tekstil, güçlü üretim kapasitesiyle yurt içi ve
            uluslararası müşterilerine kaliteli ev tekstili ürünleri sunmaktadır.
          </p>

        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* Sol */}
          <div className="rounded-[30px] bg-[#153B63] p-10 text-white">

            <div className="flex items-center gap-4">
              <Globe2 size={46} />
              <h3 className="text-3xl font-bold">
                İhracat Ağı
              </h3>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">

              {countries.map((country) => (
                <div
                  key={country}
                  className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur"
                >
                  🌍 {country}
                </div>
              ))}

            </div>

          </div>

          {/* Sağ */}
          <div className="grid gap-6">

            <div className="rounded-3xl border p-8 shadow-sm">
              <Plane className="text-[#153B63]" size={36} />
              <h3 className="mt-4 text-2xl font-bold">
                Hava Kargo
              </h3>
              <p className="mt-2 text-slate-500">
                Acil siparişler için hızlı teslimat çözümleri.
              </p>
            </div>

            <div className="rounded-3xl border p-8 shadow-sm">
              <Ship className="text-[#153B63]" size={36} />
              <h3 className="mt-4 text-2xl font-bold">
                Deniz Taşımacılığı
              </h3>
              <p className="mt-2 text-slate-500">
                Büyük hacimli ihracatlar için ekonomik sevkiyat.
              </p>
            </div>

            <div className="rounded-3xl border p-8 shadow-sm">
              <Truck className="text-[#153B63]" size={36} />
              <h3 className="mt-4 text-2xl font-bold">
                Kara Taşımacılığı
              </h3>
              <p className="mt-2 text-slate-500">
                Avrupa ve çevre ülkelere düzenli teslimatlar.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}