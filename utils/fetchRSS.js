const RSSParser = require("rss-parser");
const parser = new RSSParser({
  customFields: {
    item: [
      "media:content",
      "media:thumbnail",
      "dc:creator",
      "author",
      "description",
    ],
  },
});

const fetchRSSFeed = async () => {
  const feedUrl = new URL(process.env.RSS_FEED_URL);
  const baseUrl = feedUrl.origin;
  const feed = await parser.parseURL(feedUrl.href);

  if (feed.items.length > 0) {
    const item = feed.items[feed.items.length - 1]; // Fetch only the latest item
    const mediaContent = item["media:content"]
      ? item["media:content"]["$"].url
      : null;
    const mediaThumbnail = item["media:thumbnail"]
      ? item["media:thumbnail"]["$"].url
      : null;

    const updatedContent = updateContent(item["content:encoded"], baseUrl);

    return {
      title: item.title,
      description: item.description
        ? item.description
        : "No description available",
      content: updatedContent,
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

const updateContent = (content, baseUrl) => {
  // Remove anchor tags with href attributes that are fragments
  content = content.replace(/<a[^>]*href="#[^"]*"[^>]*>.*?<\/a>/g, "");

  // Add baseUrl to relative hrefs
  content = content.replace(/<a[^>]*href="\/(?!\/)[^"]*"[^>]*>/g, (match) => {
    return match.replace(/href="\//, `href="${baseUrl}/`);
  });

  return content;
};

module.exports = { fetchRSSFeed };
