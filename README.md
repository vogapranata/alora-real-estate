# ALORA Estate — Real Estate Website Demo

A polished, responsive, **static real estate portfolio demo** in English. Designed for presenting your web-development work to potential real-estate clients.

## Preview

Open `index.html` in a browser. For best results, start a local server in this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish to Vercel (free static deployment)

1. Unzip the project.
2. Sign in to [Vercel](https://vercel.com/) and choose **Add New → Project**.
3. Import a GitHub repository containing these files, or use Vercel CLI (`npx vercel`) from this folder.
4. Framework preset: **Other**. Root Directory: project folder. Build command: **leave empty**. Output directory: **leave empty** (or `.` if required by your deployment UI).
5. Deploy, then share the generated `*.vercel.app` URL with your prospective client.

Alternative: deploy the folder to Netlify Drop or GitHub Pages. No build tools or dependencies required.

## Features

- Premium editorial design with responsive desktop/tablet/mobile layouts
- Six sample property listings with demonstration IDR prices
- Filter by location, property type, maximum price
- Sort by featured, price, bedrooms
- Individual property details in an interactive modal
- Three-image gallery per listing
- Favorite homes with `localStorage` persistence
- Direct-shareable URL to each property using `#property=...`
- Location tiles for filtered browsing
- Mobile navigation, accessible controls and Escape-close dialogs
- Inquiry form *preview* (see note below)

## IMPORTANT: Demo mode

The property names, descriptions, addresses, and asking prices are **fictional examples**. They do not constitute actual listings. Images are externally hosted on Unsplash and require an internet connection. Photos illustrate the design only and are not necessarily photographs of the sample properties or cities shown.

**Inquiries are not sent.** The form validates fields and displays a local confirmation preview to demonstrate UX. It stores/sends no personal data to a server. To use for a real business, integrate email delivery, WhatsApp, a CRM, or a backend service, and provide your own privacy policy.

## Customize

- Brand name/headline/text: `index.html`
- Color palette and responsive styles: `styles.css` (`:root` variables)
- Listings, property details, imagery, filters: `app.js` (`PROPERTIES` array)
- Images: Unsplash URLs can be replaced with your own assets; for best reliability store optimized photos locally in an `assets/` folder.
- Connect the form to your preferred service to receive real inquiries.

## Project structure

```
real-estate-demo/
├── index.html
├── styles.css
├── app.js
└── README.md
```

Made as a portfolio concept, not an operating real-estate brokerage site.
