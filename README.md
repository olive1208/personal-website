# Olive Li: personal website

A simple static site built with [Astro](https://astro.build). Projects and posts are plain Markdown files. You don't need to touch any code to add them.

## Run it on your computer

You need [Node.js](https://nodejs.org) 22 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:4321. The page reloads when you save a file.

## Where things live

| What | Where |
|---|---|
| Your name, links, email, menu | `src/site.config.ts` |
| Home page intro text | `src/pages/index.astro` |
| Your photo | `public/headshot.jpg` |
| Projects | `src/content/projects/*.md` |
| Project images | `public/projects/<file-name>.jpg` |
| Posts | `src/content/writing/*.md` |
| Colors, fonts, spacing | `src/styles/global.css` |

## Add your photo

Save a photo as `public/headshot.jpg`. A portrait shape (about 4 by 5) looks best. `.png` and `.webp` also work.

## Add a new project

1. Create a file in `src/content/projects/`. The file name becomes the web address. For example `my-new-project.md` becomes `/projects/my-new-project/`. Use lowercase and dashes.
2. Copy this into the file and fill it in:

```markdown
---
title: My New Project
summary: One line about what it does.
order: 7              # lower numbers show first
featured: false       # true = also show on the home page (top 3 by order)
note: "Optional note shown in a box at the top, for example a disclaimer."
tools:
  - Python
  - Claude
github: https://github.com/olive1208/my-new-project
live: https://my-new-project.vercel.app
---

## What it is

...

## Why I built it

...

## How it works

...
```

"Tools used" and "Links" are added for you from `tools`, `github` and `live`. Leave out `github`, `live` or `note` if you don't need them.

3. Add a picture at `public/projects/my-new-project.jpg`. The picture name must match the Markdown file name. `.png`, `.webp` and `.gif` also work. With no picture, the tile shows a plain gray box with the title.

## Add a new post

1. Create a file in `src/content/writing/`, for example `why-robots-need-data.md`.
2. Copy this in:

```markdown
---
title: Why robots need more data
date: 2026-11-02
category: Physical AI
linkedin: https://www.linkedin.com/posts/...   # delete this line if it was not on LinkedIn
---

Your post here. Paste the text from LinkedIn and add headings or links if you like.
```

Posts are sorted newest first. The 3 newest show on the home page. Add `draft: true` to hide a post while you work on it.

## Add a new writing category

Just type a new name in a post's `category:` line, for example `category: Robotics`. A new section appears on the Writing & Learning page by itself.

To set the order of sections, edit `categoryOrder` in `src/site.config.ts`. Categories not on that list show after the listed ones, A to Z. Spelling and capital letters must match exactly.

## Add a new page to the menu (for example AGENTS)

1. Create `src/pages/agents.astro`:

```astro
---
import Base from '../layouts/Base.astro';
---
<Base title="Agents">
  <div class="page-title">
    <h1>Agents</h1>
    <p>My AI persona and the agents I have built.</p>
  </div>
</Base>
```

2. In `src/site.config.ts`, remove the `//` in front of the Agents line in `nav`.

## Deploy on Vercel (free)

You do this once. After that, every time you push a change to GitHub, Vercel updates the site in about a minute.

1. **Put the code on GitHub.**
   - Go to https://github.com/new. Name the repo, for example `olive-li-site`. Leave it empty (no README). Click **Create repository**.
   - In a terminal, inside this folder, run:
     ```bash
     git init
     git add .
     git commit -m "First version of my site"
     git branch -M main
     git remote add origin https://github.com/olive1208/olive-li-site.git
     git push -u origin main
     ```
2. **Connect Vercel.**
   - Go to https://vercel.com and sign in with GitHub.
   - Click **Add New… → Project**. Pick the `olive-li-site` repo and click **Import**.
   - Vercel detects Astro by itself. Don't change any settings. Click **Deploy**.
3. **Check the address.** When it finishes, you get an address like `olive-li-site.vercel.app`. Open it and click through every page.
4. **Set your real address in the code.** Open `astro.config.mjs` and change `site:` to your Vercel address. Commit and push:
   ```bash
   git add .
   git commit -m "Set site address"
   git push
   ```
5. **Optional: a shorter address.** In Vercel, open the project, go to **Settings → Domains**. You can rename the `.vercel.app` address, or connect a domain you buy, such as `oliveli.com`.

### Update the site later

Edit or add Markdown files, then:

```bash
git add .
git commit -m "Add new post"
git push
```

Vercel publishes the change automatically.

## Other option: GitHub Pages

GitHub Pages is GitHub's own free hosting. It can also host this site, at an address like `olive1208.github.io`. It needs a small extra setup file. Vercel is simpler, so this guide uses Vercel.

## Check before you share

- [ ] Replace the two yellow placeholder paragraphs on the home page
- [ ] Add `public/headshot.jpg`

The two example posts in `src/content/writing/` are hidden with `draft: true`. Until you publish a post, the Writing page shows "TBD". Copy one of them as a starting point for your first real post.
- [ ] Run `npm run build` to check for errors
