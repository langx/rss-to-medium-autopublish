const RSSParser = require("rss-parser");
const parser = new RSSParser();

const fetchRSSFeed = async () => {
  const feedUrl = process.env.RSS_FEED_URL;
  const feed = await parser.parseURL(feedUrl);
  if (feed.items.length > 0) {
    const item = feed.items[0]; // Fetch only the latest item
    return {
      title: item.title,
      description: item.description,
      content: item["content:encoded"],
      link: item.link,
      categories: item.categories,
      media: item["media:content"] ? item["media:content"].url : null,
    };
  }
  return null;
};

module.exports = { fetchRSSFeed };
