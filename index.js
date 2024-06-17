require("dotenv").config();
const { fetchRSSFeed } = require("./utils/fetchRSS");
const { publishToMedium } = require("./utils/publishToMedium");
const { scheduleJob } = require("./utils/scheduler");

// Fetch and publish new RSS feed items
const syncRSSFeedToMedium = async () => {
  const posts = await fetchRSSFeed();
  for (const post of posts) {
    await publishToMedium(post);
  }
};

// Schedule the job to run periodically (e.g., every hour)
scheduleJob("0 * * * *", syncRSSFeedToMedium); // Runs every hour at minute 0

console.log("RSS to Medium autopublisher is running...");
