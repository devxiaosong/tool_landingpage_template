import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ArticleHeroBanner from "../../../components/ArticleHeroBanner";
import ArticleContent from "../../../components/ArticleContent";
import {
  getPost,
  getPostsByCategory,
  generateBlogStaticParams,
} from "@/lib/posts";

interface Props {
  params: { category: string; slug: string };
}

export async function generateStaticParams() {
  return generateBlogStaticParams();
}

export async function generateMetadata({ params }: Props) {
  const post = getPost(params.category, params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — iDownerGo Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const post = getPost(params.category, params.slug);

  if (!post) notFound();

  // Get related posts from the same category, exclude current
  const relatedPosts = getPostsByCategory(params.category)
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3);

  return (
    <div>
      <Header />
      <ArticleHeroBanner />
      <ArticleContent post={post} relatedPosts={relatedPosts} />
      <Footer />
    </div>
  );
}
