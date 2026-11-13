# Tushita's Corner

Source for my personal blog, built with [Astro](https://astro.build) and deployed on Cloudflare.

## Writing a post

Add a Markdown file to `src/content/blog/` with this frontmatter:

```md
---
title: 'My post title'
description: 'One-line summary'
pubDate: 'Nov 12 2026'
---
```

Then commit and push to `main`. Cloudflare rebuilds the site automatically.

## Commands

| Command           | Action                                  |
| :---------------- | :-------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Start the local dev server (port 4321)  |
| `npm run build`   | Build the production site to `./dist`   |
