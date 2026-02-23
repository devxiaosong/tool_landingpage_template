import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductHeroBanner from "../components/ProductHeroBanner";
import WhyNeedSection from "../components/WhyNeedSection";
import HowCanHelpSection from "../components/HowCanHelpSection";
import ProductFeaturesTabSection from "../components/ProductFeaturesTabSection";
import SecureDownloadSection from "../components/SecureDownloadSection";
import HowToUseGuideSection from "../components/HowToUseGuideSection";
import ComparePlansSection from "../components/ComparePlansSection";
import TestimonialsCarouselSection from "../components/TestimonialsCarouselSection";
import FAQSection from "../components/FAQSection";
import CTADownloadSection from "../components/CTADownloadSection";

export default function NetflixDownloaderPage() {
  return (
    <div>
      <Header />
      
      {/* Product Hero Banner */}
      <ProductHeroBanner />
      
      {/* Why Need Section */}
      <WhyNeedSection />
      
      {/* How Can Help Section */}
      <HowCanHelpSection />
      
      {/* Product Features Tab Section */}
      <ProductFeaturesTabSection />
      
      {/* Secure Download Section */}
      <SecureDownloadSection />
      
      {/* How To Use Guide Section */}
      <HowToUseGuideSection />
      
      {/* Compare Plans Section */}
      <ComparePlansSection />
      
      {/* Testimonials Carousel Section */}
      <TestimonialsCarouselSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* CTA Download Section */}
      <CTADownloadSection />

      <Footer />
    </div>
  );
}
