import { getNewsSearch } from "./api/newsapi";
import { useEffect, useState } from "react";
import CardComponent from "@/components/CardComponent";

export default function economy() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newsData = await getNewsSearch("economy");
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
              {article.description}
            </CardComponent>
          </li>
        ))}
      </ul>
    </div>
  );
}
