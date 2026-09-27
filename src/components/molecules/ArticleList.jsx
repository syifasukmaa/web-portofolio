import { motion } from "framer-motion";
import { useState } from "react";

import { galleryContainerVariant, galleryVariant } from "../../utils/motion";

const PLACEHOLDER_IMAGE =
  "https://placehold.co/800x450/e5e7eb/6b7280?text=Article";

function getArticleImage(description) {
  if (!description) return null;

  const div = document.createElement("div");
  div.innerHTML = description;

  const image = div.querySelector("img");

  return image?.src || null;
}

function getArticleDescription(description) {
  if (!description) return "";

  const div = document.createElement("div");
  div.innerHTML = description;

  return div.textContent || div.innerText || "";
}

export default function ArticleList({ articles }) {
  const [visibleCount, setVisibleCount] = useState(3);

  const visibleArticles = articles.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const hasMore = visibleCount < articles.length;

  return (
    <>
      <motion.div
        variants={galleryContainerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-10 grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {visibleArticles.map((article) => {
          const articleImage = getArticleImage(article.description);
          const articleDescription = getArticleDescription(article.description);

          return (
            <motion.article
              variants={galleryVariant}
              key={article.guid}
              className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-xl shadow-black/10 backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:border-blue/30 hover:shadow-blue/20 dark:border-white/10"
            >
              <div className="h-48 w-full shrink-0 overflow-hidden">
                <img
                  src={articleImage || PLACEHOLDER_IMAGE}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = PLACEHOLDER_IMAGE;
                  }}
                />
              </div>

              <div className="flex flex-1 flex-col px-5 py-5">
                <p className="mb-4 min-h-[3.5rem] line-clamp-2 text-xl font-medium dark:text-dark700">
                  {article.title}
                </p>
                <p className="min-h-[4.5rem] line-clamp-3 text-base font-light dark:text-dark600">
                  {articleDescription}
                </p>

                <p className="mt-3 text-sm dark:text-dark600">
                  {new Date(article.pubDate).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                <div className="mt-auto pt-4">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue hover:underline dark:text-darkBlue"
                  >
                    Read on Medium →
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={handleLoadMore}
            className="rounded-lg bg-blue/10 px-4 py-2 text-blue shadow-lg transition hover:bg-blue hover:text-white hover:shadow-xl dark:bg-darkBlue/10 dark:text-darkBlue dark:hover:bg-darkBlue dark:hover:text-white"
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
}
