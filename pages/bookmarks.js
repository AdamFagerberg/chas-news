import Navbar from "@/components/Navbar";
import { useSelector } from "react-redux";
import NewsCards from "@/components/NewsCards";

export default function Bookmarks() {
  const bookmarks = useSelector((state) => state.bookmark);

  console.log(bookmarks);

  return (
    <>
      <Navbar />
      <div>
        {bookmarks.articles.length === 0 ? (
          <h2>You have no bookmarks</h2>
        ) : (
          <ul className="grid grid-cols-5 gap-6">
            {bookmarks.articles.map((article) => (
              <li key={article.article_id}>
                <NewsCards
                  article={article}
                  id={article.article_id}
                  title={article.title}
                  imgSrc={article.image_url}
                  href={`/category/world/${article.article_id}`}
                  desc={article.description}
                ></NewsCards>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
