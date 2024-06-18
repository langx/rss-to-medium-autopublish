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

### Step 3: Setup Environment Variables

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

## How to Use with PM2

[PM2](https://pm2.keymetrics.io/) is a production process manager for Node.js applications with a built-in load balancer. It allows you to keep applications alive forever, reload them without downtime, create application clusters, and more.

1. **Install PM2**

If you haven't installed PM2 on your machine, you can install it globally with the following command:

```bash
npm install pm2 -g
```

2. **Start the Application with PM2**

You can start your application with PM2 and set it to restart at specific times using cron syntax. For example, to start the application and set it to restart every day at 11 AM and 6 PM, you can use the following command:

```bash
pm2 start index.js --name "rss-to-medium-autopublish" --cron "0 11,18 * * *"
```

In this command:

- `pm2 start index.js` starts the application.
- `--name "rss-to-medium-autopublish"` gives the process a name for easier management.
- `--cron "0 11,18 * * *"` sets the application to restart at the specified times.

3. **Check the Application Status**

You can check the status of your application with the following command:

```bash
pm2 status rss-to-medium-autopublish
```

4. **Stop the Application**

To stop the application, you can use the following command:

```bash
pm2 stop rss-to-medium-autopublish
```

5. **Restart the Application**

To restart the application, you can use the following command:

```bash
pm2 restart rss-to-medium-autopublish
```

Remember to replace `index.js` with the path to your main application file if it's different, and adjust the cron syntax as needed to match your desired schedule.

## License

BSD 3-Clause License

By following these instructions, you'll have a Node.js application that listens for new posts on an RSS feed and publishes them to Medium automatically. Let me know if you need any more assistance!
