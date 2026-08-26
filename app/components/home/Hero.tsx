"use client";

export default function Hero() {
  return (
    <section
      className="relative min-h-[720px] overflow-hidden"
      data-section="hero"
    >

      {/* TEK GÖRSEL */}
      <img
        src="/images/hero-textile.png"
        alt="Forev Textile"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/25" />

      {/* YAZI */}
      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6">

        <div className="max-w-3xl text-white">

          {/* ÜST BAŞLIK */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em]">
            Turkish Home Textile Manufacturer
          </p>

          {/* ANA BAŞLIK */}
          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Your Trusted Textile
            <span className="block">
              Manufacturing Partner
            </span>
          </h1>

          {/* AÇIKLAMA */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
            Premium home textile manufacturing from Turkey for wholesalers,
            retailers, e-commerce sellers and private-label brands worldwide.
          </p>

          {/* ÜRÜN BUTONU */}
          <a
            href="#products"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#153B63] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition hover:bg-[#0F2F4F] hover:gap-4"
          >
            Explore Our Products
            <span className="text-lg">→</span>
          </a>

        </div>

      </div>

    </section>
  );
}