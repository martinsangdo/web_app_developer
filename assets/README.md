# Images

Put your app images here. Paths in `data/apps.js` are relative to the project root.

```
assets/
├── logos/          # square app icons  (512×512 recommended)
│   └── my-app.png
└── screenshots/    # phone screenshots (any size; portrait looks best)
    ├── my-app-1.png
    └── my-app-2.png
```

Then reference them in `data/apps.js`:

```js
logo: "assets/logos/my-app.png",
screenshots: [
  "assets/screenshots/my-app-1.png",
  "assets/screenshots/my-app-2.png"
]
```

**Tips**
- If you leave `logo` as `""`, the site auto-generates a colored tile with the
  app's initials — so a missing icon never breaks the layout.
- Missing screenshot files are silently skipped.
- Optimize PNG/JPG/WebP before committing so pages stay fast.
