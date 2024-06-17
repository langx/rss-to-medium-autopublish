require("dotenv").config();
const { fetchRSSFeed } = require("./utils/fetchRSS");
const { publishToMedium } = require("./utils/publishToMedium");
const { scheduleJob } = require("./utils/scheduler");
const { readPublishedPosts, storePublishedPost } = require("./utils/storage");

// Fetch and publish the latest RSS feed item
const syncRSSFeedToMedium = async () => {
  const post = await fetchRSSFeed();
  if (post) {
    const publishedPosts = readPublishedPosts();
    if (publishedPosts.includes(post.link)) {
      // Assuming post.link is the unique identifier
      console.log("Post already published.");
    } else {
      await publishToMedium(post);
      storePublishedPost(post.link);
    }
  } else {
    console.log("No new posts found.");
  }
};

// Schedule the job to run periodically (e.g., every hour)
scheduleJob("0 * * * *", syncRSSFeedToMedium); // Runs every hour at minute 0
syncRSSFeedToMedium(); // Run immediately

console.log("RSS to Medium autopublisher is running...");
