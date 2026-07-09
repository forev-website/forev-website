export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold tracking-widest text-[#153B63]">
            FOREV
          </h1>
        </div>

        {/* Menü */}
        <nav className="hidden items-center gap-10 lg:flex">
          <a href="#" className="transition hover:text-[#153B63]">Ana Sayfa</a>
          <a href="#" className="transition hover:text-[#153B63]">Ürünler</a>
          <a href="#" className="transition hover:text-[#153B63]">Kurumsal</a>
          <a href="#" className="transition hover:text-[#153B63]">Üretim</a>
          <a href="#" className="transition hover:text-[#153B63]">İletişim</a>
        </nav>

        {/* Sağ taraf */}
        <div className="flex items-center gap-3">

          <button className="rounded-full border px-3 py-2 text-sm">
            TR
          </button>

          <button className="rounded-full px-3 py-2 text-sm">
            EN
          </button>

          <button className="rounded-full px-3 py-2 text-sm">
            AR
          </button>

          <button className="ml-4 rounded-full bg-[#153B63] px-6 py-3 font-semibold text-white transition hover:bg-[#0F2F4F]">
            Teklif Al
          </button>

        </div>

      </div>
    </header>
  );
}