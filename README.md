# RSS to Medium Auto-Publish Tool

## Overview

A Node.js application that listens for new posts on an RSS feed and automatically publishes them to Medium. This tool ensures your content is synchronized across platforms effortlessly.

## Key Features

- Auto-publishing of new RSS feed items to Medium.
- Scheduling of periodic checks for new content.
- Support for canonical URLs for SEO.

## Installation Guide

### Step 1: Clone the Repository

```bash
git clone https://github.com/langx/rss-to-medium-autopublish.git
cd rss-to-medium-autopublish
```

### Step 2: Install Dependencies

```bash
npm install
```

Step 3: Setup Environment Variables

Create a `.env` file with your Medium API credentials and RSS feed URL. You can do this by copying the provided `.env.sample` file:

```bash
cp .env.sample .env
```

Then, open the `.env` file and replace the placeholders with your actual values

## How to Use

### Start the application

```bash
node index.js
```

The application will check for new RSS feed items periodically (e.g., every hour) and publish them to Medium.

## License

BSD 3-Clause License

By following these instructions, you'll have a Node.js application that listens for new posts on an RSS feed and publishes them to Medium automatically. Let me know if you need any more assistance!
