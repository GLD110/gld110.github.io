# Simon Daiki Portfolio

A modern single-page portfolio site for Simon Daiki (Blockchain Engineer and Fullstack Developer), built with HTML, CSS, and JavaScript.

## Overview

This project renders a main landing page with section-based navigation and embeds interactive mini-experiences using iframes:

- Hero particles animation
- About visual module
- Resume tunnel showcase
- Portfolio gallery
- Stack flow visual

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- External assets/libraries via CDN (Google Fonts, Font Awesome)

## Project Structure

```text
Portfolio/
  index.html            # Main single-page portfolio
  styles.css            # Global styling and layout
  script.js             # Main page interactions
  favicon.svg
  about-photo/          # About section embedded visual
  hero-particles/       # Hero animation module
  resume-tunnel/        # Resume tunnel module
  portfolio-gallery/    # Portfolio gallery module
  stack-flow/           # Stack/skills visual module
```

## Run Locally

You can run this project with any static file server.

### Option 1: Open directly

Open `index.html` in your browser.

### Option 2: Use VS Code Live Server

1. Install the Live Server extension.
2. Right-click `index.html`.
3. Select **Open with Live Server**.

### Option 3: Python static server

From the project root:

```bash
python -m http.server 5500
```

Then visit:

`http://localhost:5500`

## Notes

- The main sections are linked via anchor IDs (`#hero`, `#about`, `#resume`, `#portfolio`, `#stack`, `#contact`).
- Embedded modules are loaded with relative iframe paths from the project root.

## License

This project is currently unlicensed. Add a `LICENSE` file if you plan to distribute it publicly.
