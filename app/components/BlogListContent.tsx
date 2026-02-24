"use client";

import { useState } from "react";
import { PostMeta, CategoryMeta } from "@/lib/posts";

interface Props {
  posts: PostMeta[];
  categories: CategoryMeta[];
  currentCategory?: string;
}

const downloaders = [
  { name: "Netflix Downloader", link: "/netflix-video-downloader/" },
  { name: "Hulu Downloader", link: "/hulu-downloader/" },
  { name: "Disney Plus Downloader", link: "/disney-plus-downloader/" },
  { name: "OnlyFans Downloader", link: "/onlyfans-downloader/" },
  { name: "U-NEXT Downloader", link: "/unext-downloader/" },
  { name: "Crunchyroll Downloader", link: "/crunchyroll-downloader/" },
];

const moreDownloaders = [
  { name: "Amazon Downloader", link: "/amazon-downloader/" },
  { name: "HBO Max Downloader", link: "/hbo-max-downloader/" },
  { name: "Paramount Plus Downloader", link: "/paramount-plus-downloader/" },
  { name: "Apple TV Downloader", link: "/apple-tv-plus-downloader/" },
];

export default function BlogListContent({
  posts,
  categories,
  currentCategory,
}: Props) {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-10 md:py-20 px-10 md:px-20 md:pt-10">
      <div className="container mx-auto max-w-[1310px]">
        {/* Downloader List */}
        <div className="flex items-start mb-10">
          <img
            width="38"
            height="38"
            src="https://idownergo.com/wp-content/themes/idownergo/assets/img/blog/download.svg"
            alt="download"
            className="mr-4"
          />

          <div className="relative pb-8 mb-8 mt-1.5 flex-1">
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-[#3D6CEC] hover:underline absolute right-0 bottom-0"
            >
              {showMore ? "Show Less >>" : "Show More <<"}
            </button>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 w-full pl-8 text-sm">
              {downloaders.map((downloader, index) => (
                <a
                  key={index}
                  href={downloader.link}
                  className="text-black hover:text-[#3D6CEC] hover:underline"
                >
                  {downloader.name}
                </a>
              ))}
            </div>

            {showMore && (
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 w-full pl-8 text-sm mt-5">
                {moreDownloaders.map((downloader, index) => (
                  <a
                    key={index}
                    href={downloader.link}
                    className="text-black hover:text-[#3D6CEC] hover:underline"
                  >
                    {downloader.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <div className="px-10 pb-10 border shadow-md sticky top-16 rounded-[10px] overflow-hidden">
              <div className="text-2xl font-semibold bg-[#2A6DF4] -mx-10 text-white flex justify-center items-center py-5 space-x-3">
                <img
                  width="36"
                  height="36"
                  src="https://idownergo.com/wp-content/themes/idownergo/assets/img/blog/product.svg"
                  alt="product"
                />
                <span>All Topics</span>
              </div>
              <ul className="text-center mt-8 space-y-3">
                {/* All Posts link */}
                <li
                  className={`text-lg hover:text-[#2A6DF4] ${
                    !currentCategory ? "text-[#2A6DF4] font-semibold" : ""
                  }`}
                >
                  <a href="/blog">All Posts</a>
                </li>
                {/* Dynamic categories */}
                {categories.map((cat) => (
                  <li
                    key={cat.slug}
                    className={`text-lg hover:text-[#2A6DF4] ${
                      currentCategory === cat.slug
                        ? "text-[#2A6DF4] font-semibold"
                        : ""
                    }`}
                  >
                    <a href={`/blog/${cat.slug}`}>
                      {cat.label}
                      <span className="ml-1 text-sm text-gray-400">
                        ({cat.count})
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Article List */}
          <div className="lg:col-span-3">
            {posts.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                No articles found.
              </div>
            ) : (
              posts.map((post) => (
                <article
                  key={`${post.category}/${post.slug}`}
                  className="shadow-md mb-4 md:mb-6 p-5 md:p-8"
                >
                  <a
                    className="block mb-3 text-lg md:text-2xl font-semibold hover:text-[#1684F5]"
                    href={`/blog/${post.category}/${post.slug}`}
                  >
                    {post.title}
                  </a>

                  <div className="mb-3 text-[#555a5d]">
                    <p>
                      {post.excerpt}{" "}
                      <a
                        href={`/blog/${post.category}/${post.slug}`}
                        className="text-[#1684F5]"
                      >
                        read more
                      </a>
                    </p>
                  </div>

                  <div className="flex items-center text-[#555a5d]">
                    <img
                      className="w-8 rounded-full mr-2"
                      src={post.avatar}
                      alt={post.author}
                    />
                    <span>{post.author}</span>
                    <p className="ml-3">{post.date}</p>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
