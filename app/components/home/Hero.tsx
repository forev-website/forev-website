"use client";

export default function Hero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden">

      {/* TEK GÖRSEL */}
      <img
        src="/images/hero-textile.png"
        alt="Forev Textile"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* TEK OVERLAY */}
      <div className="absolute inset-0 bg-black/25" />

      {/* YAZI */}
      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6">

        <div className="max-w-3xl text-white">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em]">
            Turkish Home Textile Manufacturer
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Your Trusted Textile
            <span className="block">
              Manufacturing Partner
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
            Premium home textile manufacturing from Turkey for wholesalers,
            retailers, e-commerce sellers and private-label brands worldwide.
          </p>

        </div>

      </div>

    </section>
  );
}