# ThaiBridge Property Website

Static real estate landing page with an interactive Thailand region map.

## Run locally

```bash
node server.js
```

Then open:

```text
http://127.0.0.1:4173
```

You can also open `index.html` directly in a browser.

## Edit the site

- Main page: `index.html`
- Visual styles: `styles.css`
- Interactive map data, languages, and region metrics: `script.js`
- GADM province map grouped into 6 regions: `assets/thailand-6-regions-gadm-provinces.svg`
- Province point lookup for property pins: `assets/thailand-province-points.json`
- Local images and icons: `assets/`

## Property pins

The map is ready for dashboard-driven property markers. From JavaScript, call:

```js
window.ThaiBridgeMap.addProperty({ province: "Phuket", title: "Sea view villa" });
```

Or replace all pins:

```js
window.ThaiBridgeMap.setProperties([{ province: "Bangkok Metropolis", title: "City condo" }]);
```

## WhatsApp number

The WhatsApp links currently point to:

```text
+66 64 446 2456
```

## GitHub Pages

This is a static site. For GitHub Pages, upload the project files and set Pages to serve from the repository root.

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New Project**.
3. Import the GitHub repository.
4. Keep the framework preset as **Other**.
5. Leave build command and output directory empty.
6. Deploy.

Vercel will serve `index.html`, the property pages, and the `assets/` folder directly.
