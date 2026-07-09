import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";
import Products from "./components/home/Products";
import Features from "./components/home/Features";
import About from "./components/home/About";
import Production from "./components/home/Production";
import Stats from "./components/home/Stats";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Features />
      <About />
      <Production />
      <Stats />
    </>
  );
}