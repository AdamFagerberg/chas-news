import { getNewsSearch } from "./api/newsapi";
import { useEffect, useState } from "react";
import CardComponent from "@/components/CardComponent";

export default function mainNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newsData = await getNewsSearch();
      setNews(newsData.props.news);
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {news.map((article) => (
          <li key={article.article_id}>
            <CardComponent
              title={article.title}
              imgSrc={article.image_url}
              href={article.article_id}
            >
              {article.description.substring(0, 150)}...
            </CardComponent>
          </li>
        ))}
      </ul>
    </div>
  );
}
