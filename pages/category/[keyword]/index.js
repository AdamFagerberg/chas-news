import NewsCards from "@/components/NewsCards";
import { data } from "autoprefixer";
import Link from "next/link";
import { useRouter } from "next/router";

const DIN_API_NYCKEL = "pub_3863994d2b65c9b138620bb4dcc189ebd4546";
//    `https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&q=${params.keyword} AND english&`
//    `https://newsdata.io/api/1/sources?apikey=${DIN_API_NYCKEL}&q=${params.keyword} AND english&prioritydomain=top`

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&category=${params.keyword}&prioritydomain=top&language=en`
  );
  const data = await res.json();

  console.log(data.results);

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

  console.log(news);
  console.log(router);

  return (
    <div>
      <ul className="grid grid-cols-5 gap-6">
        {news.map((article) => (
          <li key={article.article_id}>
            <NewsCards
              title={article.title}
              imgSrc={article.image_url}
              href={`${router.query.keyword}/${article.article_id}`}
              desc={article.description}
            ></NewsCards>
          </li>
        ))}
      </ul>
    </div>
  );
}
