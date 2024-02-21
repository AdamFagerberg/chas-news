import { getNewsSearch } from "../api/newsapi";

export async function getStaticPaths() {
  const articles = getNewsSearch();

  const paths = articles.map((article) => ({
    params: { id: article.article_id },
  }));

  return { paths, fallback: false };
}
