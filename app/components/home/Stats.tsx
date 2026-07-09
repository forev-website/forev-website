export default function Stats() {
  const stats = [
    {
      number: "20+",
      title: "Yıllık Deneyim",
    },
    {
      number: "500+",
      title: "Kurumsal Müşteri",
    },
    {
      number: "15+",
      title: "İhracat Yapılan Ülke",
    },
    {
      number: "100.000+",
      title: "Üretilen Ürün",
    },
  ];

  return (
    <section className="bg-[#153B63] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-10 text-center md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <div key={item.title}>

              <div className="text-6xl font-black text-white">
                {item.number}
              </div>

              <div className="mt-4 text-lg text-blue-100">
                {item.title}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}