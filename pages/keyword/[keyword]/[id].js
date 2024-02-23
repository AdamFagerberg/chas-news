const DIN_API_NYCKEL = "pub_3821579930d7e488fafdd41698867c6ece37f";

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&q=${params.keyword} AND english`
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
        </>
      )}
    </div>
  );
}
