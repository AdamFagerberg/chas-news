const API_NYCKEL = "pub_386439d6da5d77c642b6aae0e8259e262af27";

// Hedi API : pub_3863994d2b65c9b138620bb4dcc189ebd4546
// Adam API : pub_386439d6da5d77c642b6aae0e8259e262af27

export async function getNewsSearch(keyword) {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${API_NYCKEL}&q=${keyword} AND english`
  );
  const data = await res.json();

  return {
    props: {
      news: data.results,
    },
    revalidate: 7200,
  };
}
