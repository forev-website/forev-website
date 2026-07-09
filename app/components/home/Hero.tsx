import Image from "next/image";

export default function Hero() {
  return (
      <section className="bg-white pt-24">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6">

        {/* Sol taraf */}
        <div className="w-1/2">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#153B63]">
            FOREV TEKSTİL
          </span>

          <h1 className="mt-8 text-6xl font-bold leading-tight">
            Ev Tekstilinde
            <br />
            <span className="text-[#153B63]">
              Güvenilir Üretici
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-600 leading-9">
            Welsoft Yorgan, Pike, Bebek Tekstili ve
            Otel Tekstili üretiminde Türkiye'nin
            güvenilir üreticilerinden biri.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="rounded-full bg-[#153B63] px-8 py-4 text-white font-semibold">
              Ürünleri İncele
            </button>

            <button className="rounded-full border border-[#153B63] px-8 py-4 font-semibold text-[#153B63]">
              İletişim
            </button>
          </div>
        </div>

        {/* Sağ taraf */}
        <div className="w-1/2 flex justify-end">
          <Image
            src="/images/hero-product.png"
            alt="Forev Ürün"
            width={600}
            height={700}
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}