import Header from "@/app/components/layout/Header";
import Hero from "@/app/components/home/Hero";
import Products from "@/app/components/home/Products";
import About from "@/app/components/home/About";
import Production from "@/app/components/home/Production";
import Stats from "@/app/components/home/Stats";
import Trust from "@/app/components/home/Trust";
import ExportMap from "@/app/components/home/ExportMap";
import FactoryTimeline from "@/app/components/home/FactoryTimeline";
import Contact from "@/app/components/home/Contact";
import Footer from "@/app/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <Hero />

      <Products />

      <About />

      <Production />

      <Stats />

      <Trust />

      <ExportMap />

      <FactoryTimeline />

      <Contact />

      <Footer />
    </main>
  );
}