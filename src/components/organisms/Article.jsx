import { useEffect, useState } from "react";
import ArticleList from "../molecules/ArticleList";
import { getMediumArticles } from "../../services/services";

export default function Article() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getMediumArticles();
        setArticles(data);
      } catch (error) {
        console.error("Failed to load Medium articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <p>Loading articles...</p>;
  }

  return (
    <section
      id="article"
      className="w-full py-28 md:pt-18 font-poppins bg-ygBlue dark:bg-dark200"
    >
      <div className="w-[90%] mx-auto lg:w-[75%]">
        <div className="text-center">
          <h3 className="text-2xl font-extrabold text-greys md:text-3xl dark:text-primary100 font-jetbrains">
            Articles
          </h3>

          <p className="pt-2 font-light text-greys md:text-xl dark:text-primary400 dark:font-normal">
            My Thoughts and Experiences
          </p>
        </div>

        <ArticleList articles={articles} />
      </div>
    </section>
  );
}
