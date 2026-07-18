# Solomon Paul R D — Interactive Résumé Website

This is a static website built with HTML, CSS and JavaScript. It can be hosted directly on GitHub Pages without a backend, database or build command.

## Publish on GitHub Pages

1. Create a new public GitHub repository, for example `interactive-resume`.
2. Upload all files and folders from this package to the repository root.
3. Open the repository **Settings**.
4. Select **Pages** under **Code and automation**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)`, then click **Save**.
7. After GitHub finishes publishing, the site will be available at:

   `https://YOUR-USERNAME.github.io/interactive-resume/`

## Files

- `index.html` — résumé content and page structure
- `assets/style.css` — responsive design and print styles
- `assets/script.js` — skill drawers, project filters, dashboard gallery and mobile menu
- `.nojekyll` — tells GitHub Pages to serve the static files directly

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
