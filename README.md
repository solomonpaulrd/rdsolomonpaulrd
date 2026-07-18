# Solomon Paul R D — Interactive Résumé Website

This is a static portfolio and interactive résumé built with HTML, CSS and JavaScript. It runs on GitHub Pages without a backend, database or build command.

**Live site:** https://solomonpaulrd.github.io/rdsolomonpaulrd/

**Deployment:** GitHub Actions

## GitHub Pages deployment

Deployment is automated by `.github/workflows/pages.yml`. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. Every push to `main` will then publish the site automatically.

## Files

- `index.html` — résumé content and page structure
- `assets/style.css` — responsive design and print styles
- `assets/script.js` — skill drawers, project filters, dashboard gallery and mobile menu
- `.nojekyll` — tells GitHub Pages to serve the static files directly
- `.github/workflows/pages.yml` — publishes the site through GitHub Actions

## Personalise later

- Add approved dashboard screenshots inside `assets/images/`.
- Add LinkedIn and GitHub URLs to the contact section.
- Update project results only with figures you are comfortable publishing.
- Use the **Print / Save PDF** button to create a PDF version from the browser.

## Local preview

Double-click `index.html`, or run a simple local server from this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
