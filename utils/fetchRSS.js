const RSSParser = require("rss-parser");
const parser = new RSSParser({
  customFields: {
    item: ["media:content", "media:thumbnail", "dc:creator", "author"],
  },
});

const fetchRSSFeed = async () => {
  const feedUrl = process.env.RSS_FEED_URL;
  const feed = await parser.parseURL(feedUrl);
  if (feed.items.length > 0) {
    const item = feed.items[feed.items.length - 1]; // Fetch only the latest item
    const mediaContent = item["media:content"]
      ? item["media:content"]["$"].url
      : null;
    const mediaThumbnail = item["media:thumbnail"]
      ? item["media:thumbnail"]["$"].url
      : null;
    return {
      title: item.title,
      description: item.description
        ? item.description
        : "No description available",
      content: item["content:encoded"],
      link: item.link,
      categories: item.categories,
      media: mediaContent || mediaThumbnail,
      author: {
        name:
          item["dc:creator"] || (item.author ? item.author.name : "Unknown"),
        link: item.author ? item.author.link : "",
      },
    };
  }
  return null;
};

module.exports = { fetchRSSFeed };
