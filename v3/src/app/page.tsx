import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Soundscape from "@/components/sections/Soundscape";
import Repertoire from "@/components/sections/Repertoire";
import Conductor from "@/components/sections/Conductor";
import Audition from "@/components/sections/Audition";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Philosophy />
        <Soundscape />
        <Repertoire />
        <Conductor />
        <Audition />
      </main>

      <Footer />
    </>
  );
}
