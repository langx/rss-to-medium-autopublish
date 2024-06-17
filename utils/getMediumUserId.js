const axios = require("axios");

const getMediumUserId = async (token) => {
  const url = "https://api.medium.com/v1/me";
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  try {
    const response = await axios.get(url, { headers });
    return response.data.data.id;
  } catch (error) {
    console.error(
      "Error fetching user ID:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

module.exports = { getMediumUserId };
