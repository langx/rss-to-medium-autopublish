const axios = require("axios");
const RSSParser = require("rss-parser");
const parser = new RSSParser();

const fetchRSSFeed = async () => {
  const feedUrl = process.env.RSS_FEED_URL;
  const feed = await parser.parseURL(feedUrl);
  return feed.items.map((item) => ({
    title: item.title,
    content: item.content,
    link: item.link,
  }));
};

module.exports = { fetchRSSFeed };
