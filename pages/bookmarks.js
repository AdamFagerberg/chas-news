import Navbar from "@/components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import NewsCards from "@/components/NewsCards";
import { removeBookmark } from "@/redux/bookmarks";

export default function Bookmarks() {
  const dispatch = useDispatch();
  const bookmarkList = useSelector((state) => state.bookmark);

  const handleRemoveBookmark = (id) => {
    dispatch(removeBookmark(id));
    console.log(bookmarkList);
  };

  return (
    <>
      <Navbar />
      <div>
        <ul className="grid grid-cols-5 gap-6">
          {bookmarkList.map((article) => (
            <li key={article.article_id}>
              <NewsCards
                title={article.title}
                imgSrc={article.image_url}
                href={`/category/world/${article.article_id}`}
                desc={article.description}
              ></NewsCards>
              <button onClick={() => handleRemoveBookmark(article.article_id)}>
                Remove Bookmark
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
