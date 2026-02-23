import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticleHeroBanner from "../../components/ArticleHeroBanner";
import ArticleContent from "../../components/ArticleContent";

export default function Mp4ToMovPage() {
  return (
    <div>
      <Header />
      
      {/* Hero Banner */}
      <ArticleHeroBanner />
      
      {/* Article Content */}
      <ArticleContent />

      <Footer />
    </div>
  );
}
