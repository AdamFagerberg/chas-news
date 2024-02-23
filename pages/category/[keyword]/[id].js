import { data } from "autoprefixer";

const DIN_API_NYCKEL = "pub_386439d6da5d77c642b6aae0e8259e262af27";

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&category=${params.keyword}&prioritydomain=top&language=en`
  );
  const data = await res.json();
  const articles = data.results;

  const article = articles.find((article) => article.article_id == params.id);

  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function Article({ article }) {
  return (
    <div>
      {article && (
        <>
          <h2>{article.title}</h2>
          <img src={article.image_url} />
          <p>{article.description}</p>
        </>
      )}
    </div>
  );
}
