import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import SupportedSitesSection from "./components/SupportedSitesSection";
import HighlightsSection from "./components/HighlightsSection";
import StepsSection from "./components/StepsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SupportedSitesSection />
      <HighlightsSection />
      <StepsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
