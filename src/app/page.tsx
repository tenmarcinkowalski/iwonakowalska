import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TherapyDetails from "@/components/TherapyDetails";
import Offer from "@/components/Offer";
import Workshops from "@/components/Workshops";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TherapyDetails />
        <Offer />
        <Workshops />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
