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

  // Add the post title, description, and author to the beginning of the post content
  let content =
    `<h1>${post.title}</h1>
                 <p>${post.description}</p>
                 <p>By <a href="${post.author.link}">${post.author.name}</a></p>
                 <img src="${post.media}" alt="Featured Image"/>` +
    post.content;

  const data = {
    title: post.title,
    contentFormat: "html",
    content: content,
    canonicalUrl: post.link,
    tags: post.categories,
    description: post.description,
    license: "all-rights-reserved",
    notifyFollowers: true,
    publishStatus: "draft",
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
