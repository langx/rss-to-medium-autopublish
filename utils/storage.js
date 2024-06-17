const fs = require("fs");
const path = require("path");

const storageFilePath = path.join(__dirname, "publishedPosts.json");

// Function to read stored identifiers
const readPublishedPosts = () => {
  if (!fs.existsSync(storageFilePath)) {
    return [];
  }
  const data = fs.readFileSync(storageFilePath);
  return JSON.parse(data);
};

// Function to store a new identifier
const storePublishedPost = (id) => {
  const publishedPosts = readPublishedPosts();
  publishedPosts.push(id);
  fs.writeFileSync(storageFilePath, JSON.stringify(publishedPosts, null, 2));
};

module.exports = { readPublishedPosts, storePublishedPost };
