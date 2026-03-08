import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ArtisticEthos } from "@/components/ArtisticEthos";
import { ImmersiveGallery } from "@/components/ImmersiveGallery";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col w-full">
        <Hero />
        <ArtisticEthos />
        <ImmersiveGallery />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
