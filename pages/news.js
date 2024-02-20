import Link from "next/link";

const DIN_API_NYCKEL = "pub_3863994d2b65c9b138620bb4dcc189ebd4546";

//newsdata.io/api/1/news?apikey=pub_38158964e5638dbf5b237b29d3be5bf1a5b9d&q=pizza

export async function getStaticProps() {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}`
  );
  const data = await res.json();

  return {
    props: {
      news: data.results,
    },
    revalidate: 7200,
  };
}

export default function News({ news }) {
  return (
    <div>
      <ul>
        {news.map((article) => (
          <li>
            <Link href={`/article/${article.article_id}`}>
              <h2>{article.title}</h2>
            </Link>
            <img src={article.image_url} />
          </li>
        ))}
      </ul>
    </div>
  );
}
