const axios = require("axios");
const { getMediumUserId } = require("./getMediumUserId");

const publishToMedium = async (post) => {
  const token = process.env.MEDIUM_TOKEN;
  const userId = await getMediumUserId(token);
  const url = `https://api.medium.com/v1/users/${userId}/posts`;
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const data = {
    title: post.title,
    contentFormat: "html",
    content: post.content,
    canonicalUrl: post.link,
    publishStatus: "public",
  };
  try {
    const response = await axios.post(url, data, { headers });
    console.log(`Post published successfully: ${response.data.data.url}`);
  } catch (error) {
    console.error(
      "Error publishing post:",
      error.response ? error.response.data : error.message
    );
  }
};

module.exports = { publishToMedium };
