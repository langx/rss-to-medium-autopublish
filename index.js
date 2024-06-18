require("dotenv").config();
const { fetchRSSFeed } = require("./utils/fetchRSS");
const { publishToMedium } = require("./utils/publishToMedium");
const { scheduleJob } = require("./utils/scheduler");
const { readPublishedPosts, storePublishedPost } = require("./utils/storage");

// Fetch and publish one RSS feed item
const syncRSSFeedToMedium = async () => {
  const posts = await fetchRSSFeed();
  if (posts && posts.length > 0) {
    const publishedPosts = readPublishedPosts();
    const unpublishedPosts = posts.filter(
      (post) => !publishedPosts.includes(post.link)
    );

    if (unpublishedPosts.length > 0) {
      const postToPublish = unpublishedPosts[0];
      try {
        await publishToMedium(postToPublish);
        storePublishedPost(postToPublish.link);
        console.log(`Post published successfully: ${postToPublish.title}`);
      } catch (error) {
        console.error(
          `Error publishing post: ${postToPublish.title} - ${error.message}`
        );
      }
    } else {
      console.log("No new unpublished posts found.");
    }
  } else {
    console.log("No new posts found.");
  }
};

// Schedule the job to run periodically
// scheduleJob("0 11,18 * * *", syncRSSFeedToMedium); // Runs every day at 11:00 AM and 6:00 PM

// Run the job immediately
syncRSSFeedToMedium();

console.log("RSS to Medium autopublisher is running...");
