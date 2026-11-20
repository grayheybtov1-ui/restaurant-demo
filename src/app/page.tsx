import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import ChefSpecial from "@/components/ChefSpecial";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#f4efe6]">
      <Header />
      <Hero />
      <About />
      <Menu />
      <ChefSpecial />
      <Gallery />
      <Reservation />
      <Contact />
      <Footer />
    </main>
  );
}
