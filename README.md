# My Apps &amp; Games

A simple, responsive website to showcase my Android and iOS apps and games.
The home page lists every app; clicking one opens a detail page with its
description, a YouTube preview, screenshots, and links to the Google Play and
Apple App Store.

No build step, no dependencies — just static HTML, CSS, and JavaScript.

## Project structure

```
.
├── index.html          # Home page — grid of all apps
├── app.html            # App detail page (uses ?id=... from the URL)
├── css/styles.css      # All styles (responsive)
├── js/
│   ├── util.js         # Shared helpers (logos, YouTube parsing, DOM)
│   ├── home.js         # Renders the home grid + category filter
│   └── detail.js       # Renders one app's detail page
├── data/apps.js        # ★ YOUR APP CATALOG — edit this to add apps
└── assets/
    ├── logos/          # App icons
    └── screenshots/    # App screenshots
```

## Adding or editing an app

Open [`data/apps.js`](data/apps.js) and add an entry to the `APPS` array. Each
app supports: `id`, `name`, `tagline`, `category`, `platforms`, `logo`,
`description`, `youtube`, `screenshots`, `googlePlay`, `appStore`, and
`featured`. Only `id` and `name` are required — anything you omit is hidden
automatically. The file has full field docs at the top.

- `youtube` accepts a bare video ID (`"aqz-KE-bpKQ"`) or a full YouTube URL.
- `logo` left as `""` auto-generates a colored tile with the app's initials.
- Put images in `assets/logos/` and `assets/screenshots/` (see
  [`assets/README.md`](assets/README.md)).

## Running locally

Because the pages load `data/apps.js` and the store/YouTube embeds, run a tiny
local server rather than opening the file directly:

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

It's a static site, so host it anywhere:

- **GitHub Pages** — push to a repo and enable Pages on the branch.
- **Netlify / Vercel / Cloudflare Pages** — drag-and-drop the folder or connect
  the repo. No build command needed; the publish directory is the project root.
