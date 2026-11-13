# Yabes CCTV landing page (Vite + React)

The site content is in Indonesian. Everything below is in English.

## 1. Run it in VS Code on Windows

### Install once

1. Install **Node.js LTS** from https://nodejs.org (Windows installer, accept the defaults). Version 22 or newer is best. Vite 7 needs at least Node 20.19.
2. Install **Visual Studio Code** from https://code.visualstudio.com.
3. Restart VS Code after installing Node so it picks up the new PATH.

### Start the project

1. Unzip `yabes-cctv.zip`.
2. In VS Code: **File > Open Folder**, then choose the `yabes-cctv` folder.
3. Open a terminal: **Terminal > New Terminal** (shortcut `` Ctrl+` ``).
4. Check Node works:

   ```
   node -v
   npm -v
   ```

   If PowerShell prints "running scripts is disabled on this system" when you run `npm`, run this once, answer `Y`, then reopen the terminal:

   ```
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
   ```

   Another fix: click the arrow next to the **+** in the terminal panel and pick **Command Prompt**.
5. Install the packages:

   ```
   npm install
   ```

6. Set your WhatsApp number (see section 2), then start the dev server:

   ```
   npm run dev
   ```

   The browser opens at http://localhost:5173. Edits save and appear instantly. Stop the server with `Ctrl+C`.

### Build and preview the production version

```
npm run build
npm run preview
```

The preview runs at http://localhost:4173. The `dist` folder is what you upload to your host.

### Run a Lighthouse audit

Always audit the **production preview**, never the dev server (dev mode ships unminified code and will score badly).

**Option A, Chrome DevTools (easiest):**
1. Run `npm run build`, then `npm run preview`.
2. Open http://localhost:4173 in Chrome, in an Incognito window (extensions skew the score).
3. Press `F12`, open the **Lighthouse** tab, choose **Navigation** and **Mobile**, click **Analyze page load**.

**Option B, command line:** keep `npm run preview` running, open a second terminal and run:

```
npm run lighthouse
```

It needs Chrome installed, downloads Lighthouse through `npx` the first time, and writes `lighthouse-report.html` in the project folder.

## 2. Set the WhatsApp number

The old page had an empty number, so every button opened WhatsApp without a recipient. Now:

1. Copy the example file: `copy .env.example .env`
2. Open `.env` and fill the number in international format, digits only (no `+`, no spaces, no leading 0 after the country code).
3. Restart `npm run dev`. Environment files are read only at startup.

## 3. Where to edit things

| What | File |
| --- | --- |
| All page text, nav, products, services, testimonials | `src/data/site.js` |
| Searchable device list | `src/data/catalog.js` |
| Colors, spacing, fonts | top of `src/styles/base.css` |
| Page title, description, social tags | `index.html` |

## 4. Your optimization checklist

I could not run `npm install`, `npm run build` or Lighthouse in my workspace (no network). I checked the files for syntax errors, missing imports, undeclared packages and unbalanced CSS, but **you should run the build and a Lighthouse audit yourself** and send me anything that fails.

| Item | What was done | Where |
| --- | --- | --- |
| Compress images | Images go through Unsplash's server-side compression (`auto=format` picks WebP/AVIF, `q=65`), in four sizes via `srcset` so phones download small files. The hero no longer uses a photo at all. | `src/lib/images.js`, `LazyImage.jsx` |
| Lazy loading | `loading="lazy"` and `decoding="async"` on every image. Catalog and testimonials render only when near the screen. | `LazyImage.jsx`, `LazyOnView.jsx` |
| Split code into chunks | `React.lazy` for the catalog and testimonials. React is its own cached chunk. CSS is split per component. | `App.jsx`, `Catalog.jsx`, `vite.config.js` |
| Modify JS and CSS | Vite minifies both for production. The 600-line inline `<style>` and inline script became modules and per-component CSS. Reveal-on-scroll observers were removed. | `src/styles/*`, `src/hooks/*` |
| Index the database | **Not applicable**: there is no database. The closest real equivalent is the catalog search index, built once at load so each keystroke only matches strings. | `src/lib/catalogSearch.js` |
| Reduce unnecessary re-renders | Static sections are wrapped in `memo`. The live clock keeps its state in its own tiny component. Catalog rows and filter chips are memoized with stable callbacks. | `MonitorWall.jsx`, `CatalogExplorer.jsx` |
| Debounce input handlers | The catalog search waits 250 ms after typing stops. | `useDebouncedValue.js` |
| Paginate large list | The catalog shows 6 rows, then "Tampilkan N lagi". Pagination resets when the filter changes. | `CatalogExplorer.jsx` |
| Remove unused dependencies | Only 4 runtime packages (React, ReactDOM, two self-hosted fonts) and 2 dev tools. The Google Fonts request is gone, which also removes a render-blocking third-party call. | `package.json` |
| Defer non-critical scripts | Vite emits `type="module"` scripts, which browsers defer automatically. Lazy chunks load on demand. | `index.html` |
| Loading skeletons | Skeletons for the catalog, testimonials and each image, shaped like the real content. | `Skeletons.jsx`, `LazyImage.jsx` |
| Cache expensive results | Search results are cached per query and category (60 entries). WhatsApp URLs are cached per message. | `catalogSearch.js`, `whatsapp.js` |
| Server-side caching | Config files for hashed assets (`immutable`, one year) and HTML (`no-cache`). See section 5. A static site has no server code of its own. | `public/_headers`, `vercel.json` |
| Lighthouse audit | Instructions in section 1. **Not run by me.** | n/a |

## 5. Deploy with caching

Hashed files in `/assets/` never change under the same name, so they are safe to cache for a year. `index.html` must always revalidate so visitors get new versions.

- **Netlify or Cloudflare Pages:** `public/_headers` is picked up automatically.
- **Vercel:** `vercel.json` is picked up automatically.
- **Nginx (your own server):** add this inside your `server` block, and turn on `gzip on;` (or Brotli) for text files:

  ```
  location /assets/ {
    add_header Cache-Control "public, max-age=31536000, immutable";
  }
  location = /index.html {
    add_header Cache-Control "no-cache";
  }
  ```

- **GitHub Pages** cannot set custom headers, so long-term caching is not configurable there.

## 6. Replace before launch

- **Testimonials** in `src/data/site.js` are the anonymous texts from the old page. Use real customer quotes (with permission).
- **Catalog** in `src/data/catalog.js` is a generic list of device types without brands or prices. Replace it with your real range.
- **Photos** come from Unsplash. Swap in your own installation photos when you have them: put them in `src/assets/`, import them, and compress first with https://squoosh.app (WebP, quality about 70).
- **Social preview image:** add an `og:image` tag in `index.html` once you have a public URL for a 1200x630 image.
- **Privacy policy and terms pages** do not exist yet, so there are no links to them.
