import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogListContent from "../components/BlogListContent";

export default function BlogPage() {
  return (
    <div>
      <Header />
      
      {/* Category Title Banner */}
      <section 
        className="p-10 md:p-20"
        style={{ 
          backgroundImage: "linear-gradient(12deg, rgba(193, 193, 193,0.05) 0%, rgba(193, 193, 193,0.05) 2%,rgba(129, 129, 129,0.05) 2%, rgba(129, 129, 129,0.05) 27%,rgba(185, 185, 185,0.05) 27%, rgba(185, 185, 185,0.05) 66%,rgba(83,83,83, 0.07) 66%, rgba(83,83,83, 0.07) 100%),linear-gradient(321deg, rgba(240, 240, 240,0.05) 0%, rgba(240, 240, 240,0.05) 13%,rgba(231, 231, 231,0.05) 13%, rgba(231, 231, 231,0.05) 34%,rgba(139,139,139, 0) 34%, rgba(139,139,139, 0) 71%,rgba(112, 112, 112,0.05) 71%, rgba(112, 112, 112,0.05) 100%),linear-gradient(236deg, rgba(189, 189, 189,0.05) 0%, rgba(189, 189, 189,0.05) 47%,rgba(138,138,138, 0) 47%, rgba(138,138,138, 0) 58%,rgba(108,108,108, 0.05) 58%, rgba(108,108,108, 0.05) 85%,rgba(143,143,143, 0) 85%, rgba(143,143,143, 0) 100%),linear-gradient(96deg, rgba(53, 53, 53,0.05) 0%, rgba(53, 53, 53,0.05) 53%,rgba(44, 44, 44,0.05) 53%, rgba(44, 44, 44,0.05) 82%,rgba(77, 77, 77,0.05) 82%, rgba(77, 77, 77,0.05) 98%,rgba(8,8,8, 0) 98%, rgba(8,8,8, 0) 100%),linear-gradient(334deg, rgb(0,118,209),rgb(0,118,209))"
        }}
      >
        <div className="container mx-auto max-w-[1310px] px-4 text-center">
          <h1 className="text-gray-100 text-4xl font-semibold mb-2 leading-tight">
            Convert Video
          </h1>
        </div>
      </section>
      
      {/* Blog List Content */}
      <BlogListContent />

      <Footer />
    </div>
  );
}
