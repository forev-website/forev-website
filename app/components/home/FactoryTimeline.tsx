import {
  PenTool,
  Scissors,
  Shirt,
  ShieldCheck,
  PackageCheck,
  Truck,
} from "lucide-react";

const steps = [
  {
    icon: PenTool,
    title: "Tasarım",
    text: "Müşteri taleplerine uygun desen ve ürün geliştirme.",
  },
  {
    icon: Scissors,
    title: "Kesim",
    text: "Modern makineler ile hassas kumaş kesimi.",
  },
  {
    icon: Shirt,
    title: "Dikim",
    text: "Deneyimli üretim ekibi ile profesyonel dikim.",
  },
  {
    icon: ShieldCheck,
    title: "Kalite Kontrol",
    text: "Her ürün sevkiyat öncesi kontrol edilir.",
  },
  {
    icon: PackageCheck,
    title: "Paketleme",
    text: "İhracata uygun profesyonel paketleme.",
  },
  {
    icon: Truck,
    title: "Sevkiyat",
    text: "Türkiye ve dünyanın birçok ülkesine teslimat.",
  },
];

export default function FactoryTimeline() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-[#153B63]">
            ÜRETİM SÜRECİ
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Üretim Aşamalarımız
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-500">
            Forev Tekstil olarak tüm üretim sürecimizi kalite standartlarına uygun
            şekilde yönetiyoruz.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-[30px] bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#153B63]/10">
                  <Icon
                    size={34}
                    className="text-[#153B63]"
                  />
                </div>

                <div className="mt-8 flex items-center gap-3">

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#153B63] text-white">
                    {index + 1}
                  </span>

                  <h3 className="text-2xl font-bold">
                    {step.title}
                  </h3>

                </div>

                <p className="mt-5 leading-7 text-slate-500">
                  {step.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}