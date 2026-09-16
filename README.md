# A K M Ahasun Habib — Academic Portfolio

Static site. No build step, no framework tooling. React 18 + Babel Standalone are loaded from CDN at runtime and compile the .jsx files in the browser.

## Deploy to GitHub Pages
1. Create a repo named `<username>.github.io` (or any repo).
2. Upload ALL files in this folder to the repo root (keep the `assets/` folder and `.nojekyll`).
3. Settings → Pages → Source: "Deploy from a branch" → main / (root) → Save.
4. Site is live at https://<username>.github.io/ (or /<repo>/ for a project repo — all paths are relative so both work).

## Files
- index.html — entry point (palette: Terracotta, font: Crimson Pro)
- data.js — ALL content: bio, education, projects, publications, awards, contact. Edit this to update the site.
- v20-dispatch.jsx — page layout/components
- dispatch-viz.jsx — canvas animations for research cards without figures
- fonts-shared.jsx — font stacks
- image-slot.js — image placeholder component
- assets/ — portrait, research figures, award certificate (JPG + PDF)

## External (CDN) dependencies
React, ReactDOM, Babel Standalone (unpkg), Google Fonts, Font Awesome 6 (cdnjs). Requires internet to load.
