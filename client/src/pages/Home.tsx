import { HeroSection } from "@/components/sections/HeroSection";
import { InflectionPointSection } from "@/components/sections/InflectionPointSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { CoachesSection } from "@/components/sections/CoachesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/Navigation";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { AmbientSoundToggle } from "@/components/AmbientSoundToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0e14] text-[#e8eaed] overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <InflectionPointSection />
      <TimelineSection />
      <LocationSection />
      <CoachesSection />
      <TestimonialsSection />
      <FaqSection />
      <ClosingSection />
      <Footer />
      <StickyMobileCTA />
      <AmbientSoundToggle />
    </div>
  );
}
