import {
  Factory,
  Globe2,
  Award,
  ShieldCheck,
  Users,
  PackageCheck,
} from "lucide-react";

const items = [
  {
    icon: Factory,
    number: "20+",
    title: "Yıllık Deneyim",
    text: "1998 yılından bu yana ev tekstili üretimi.",
  },
  {
    icon: Globe2,
    number: "15+",
    title: "Ülkeye İhracat",
    text: "Türkiye ve dünyanın birçok ülkesine üretim.",
  },
  {
    icon: PackageCheck,
    number: "500.000+",
    title: "Ürün Üretimi",
    text: "Yüksek üretim kapasitesi ve modern tesis.",
  },
  {
    icon: Award,
    number: "OEM",
    title: "Private Label",
    text: "Markanıza özel üretim.",
  },
  {
    icon: ShieldCheck,
    number: "%100",
    title: "Kalite Kontrol",
    text: "Üretimin her aşamasında kalite kontrol.",
  },
  {
    icon: Users,
    number: "100%",
    title: "Müşteri Memnuniyeti",
    text: "Uzun yıllara dayanan güven.",
  },
];

export default function Trust() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-[#153B63]">
            NEDEN FOREV?
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Güvenilir Üretici
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-500">
            Forev Tekstil 20 yılı aşkın tecrübesiyle
            ev tekstili üretiminde güvenilir çözüm ortağıdır.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[30px] bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#153B63]/10">
                  <Icon
                    size={34}
                    className="text-[#153B63]"
                  />
                </div>

                <h3 className="mt-8 text-5xl font-bold text-[#153B63]">
                  {item.number}
                </h3>

                <h4 className="mt-3 text-2xl font-semibold">
                  {item.title}
                </h4>

                <p className="mt-4 text-slate-500">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}