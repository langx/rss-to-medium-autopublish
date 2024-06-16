# rss-to-medium-autopublish

**Description**:
A Node.js application that listens for new posts on an RSS feed and automatically publishes them to Medium. This tool ensures your content is synchronized across platforms effortlessly.

**Features**:

- Automatically publish new RSS feed items to Medium.
- Schedule periodic checks for new content.
- Supports canonical URLs for SEO.

**Installation**:

1. Clone the repository:

```bash
git clone https://github.com/langx/rss-to-medium-autopublish.git
cd rss-to-medium-autopublish
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with your Medium API credentials and RSS feed URL. You can do this by copying the provided `.env.sample` file:

```bash
cp .env.sample .env
```

Then, open the `.env` file and replace the placeholders with your actual values

**Usage**:

1. Start the application:

```bash
node index.js
```

The application will check for new RSS feed items periodically (e.g., every hour) and publish them to Medium.

**License**:
BSD 3-Clause License

By following these instructions, you'll have a Node.js application that listens for new posts on an RSS feed and publishes them to Medium automatically. Let me know if you need any more assistance!
