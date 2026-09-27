const MEDIUM_USERNAME = "syifasukmaramadhani";

const RSS_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;

export async function getMediumArticles() {
  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
      RSS_URL,
    )}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Medium articles");
  }

  const data = await response.json();

  return data.items;
}
