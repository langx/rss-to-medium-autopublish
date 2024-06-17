const updateContent = (content, baseUrl) => {
  // Remove anchor tags with href attributes that are fragments
  content = content.replace(/<a[^>]*href="#[^"]*"[^>]*>.*?<\/a>/g, "");

  // Add baseUrl to relative hrefs
  content = content.replace(/<a[^>]*href="\/(?!\/)[^"]*"[^>]*>/g, (match) => {
    return match.replace(/href="\//, `href="${baseUrl}/`);
  });

  // Add baseUrl to relative src in img tags
  content = content.replace(/<img[^>]*src="\/(?!\/)[^"]*"[^>]*>/g, (match) => {
    return match.replace(/src="\//, `src="${baseUrl}/`);
  });

  return content;
};

module.exports = updateContent;
