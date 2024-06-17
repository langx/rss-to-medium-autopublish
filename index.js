require("dotenv").config();
const { fetchRSSFeed } = require("./utils/fetchRSS");
const { publishToMedium } = require("./utils/publishToMedium");
const { scheduleJob } = require("./utils/scheduler");
const { readPublishedPosts, storePublishedPost } = require("./utils/storage");

// Fetch and publish the latest RSS feed items
const syncRSSFeedToMedium = async () => {
  const posts = await fetchRSSFeed();
  if (posts && posts.length > 0) {
    const publishedPosts = readPublishedPosts();
    for (const post of posts) {
      if (publishedPosts.includes(post.link)) {
        // Assuming post.link is the unique identifier
        console.log(`Post already published: ${post.title}`);
      } else {
        await publishToMedium(post);
        storePublishedPost(post.link);
      }
    }
  } else {
    console.log("No new posts found.");
  }
};

// Schedule the job to run periodically (e.g., every hour)
scheduleJob("0 * * * *", syncRSSFeedToMedium); // Runs every hour at minute 0
syncRSSFeedToMedium(); // Run immediately

console.log("RSS to Medium autopublisher is running...");
