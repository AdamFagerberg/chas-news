import Navbar from "@/components/Navbar";
import HeaderComponent from "@/components/HeaderComponent";
import NewsCards from "@/components/NewsCards";
import { addBookmark, removeBookmark } from "@/redux/bookmarks";
import { useDispatch, useSelector } from "react-redux";
import APIKEY from "@/components/APIKeys";

const DIN_API_NYCKEL = APIKEY;

export async function getStaticProps() {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&category=world&prioritydomain=top&language=en`
  );
  const data = await res.json();

  return {
    props: {
      news: data.results,
    },
  };
}

export default function Home({ news }) {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmark);

  const handleAddBookmark = (article) => {
    dispatch(addBookmark(article));
  };

  const handleRemoveBookmark = (id) => {
    dispatch(removeBookmark(id));
  };

  return (
    <main>
      <Navbar />
      <HeaderComponent>
        JIOAWFJIOW jfiwajifwaj jifow ajiofjöa jbkrles
      </HeaderComponent>

      <div>
        <ul className="grid grid-cols-5 gap-6">
          {news.map((article) => (
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
      </div>
    </main>
  );
}

/* {bookmarks.find(
  (bookmark) => bookmark.article_id === article.article_id
) ? (
  <button
    onClick={() => handleRemoveBookmark(article.article_id)}
  >
    Remove Bookmark
  </button>
) : (
  <button onClick={() => handleAddBookmark(article)}>
    Bookmark
  </button>
)} */
