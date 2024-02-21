import Link from "next/link";
import { useRouter } from "next/router";

const DIN_API_NYCKEL = "pub_3863994d2b65c9b138620bb4dcc189ebd4546";

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&q=${params.keyword} AND english`
  );
  const data = await res.json();

  return {
    props: {
      news: data.results,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function News({ news }) {
  const router = useRouter();

  console.log(router);

  return (
    <div>
      <ul>
        {news.map((article) => (
          <li key={article.article_id}>
            <Link
              href={`/keyword/${router.query.keyword}/${article.article_id}`}
            >
              <h2>{article.title}</h2>
            </Link>
            <img src={article.image_url} />
          </li>
        ))}
      </ul>
    </div>
  );
}
