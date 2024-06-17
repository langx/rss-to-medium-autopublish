require("dotenv").config();
const { fetchRSSFeed } = require("./utils/fetchRSS");
const { publishToMedium } = require("./utils/publishToMedium");
const { scheduleJob } = require("./utils/scheduler");

// Fetch and publish the latest RSS feed item
const syncRSSFeedToMedium = async () => {
  const post = await fetchRSSFeed();
  if (post) {
    await publishToMedium(post);
  } else {
    console.log("No new posts found.");
  }
};

// Schedule the job to run periodically (e.g., every hour)
scheduleJob("0 * * * *", syncRSSFeedToMedium); // Runs every hour at minute 0
syncRSSFeedToMedium(); // Run immediately

console.log("RSS to Medium autopublisher is running...");
