# Portfolio (static HTML)

This is a minimal, responsive portfolio scaffold using plain HTML, CSS, and JavaScript.

View locally:

1. Open `index.html` in your browser, or run a local server.

Run a local server (recommended):

```bash
cd "$(dirname "${BASH_SOURCE[0]}")" || cd "./"
cd "/Users/Nako/Desktop/portfolio stuff/portfolio"
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser.

Customize:

- Edit `index.html` content and project cards.
- Replace placeholder images with your screenshots (put them in an `assets/` folder).
- Tweak styles in `styles.css` and behavior in `script.js`.

Using the attached landing image

- Save the image you attached in this chat as `landing.jpg` inside an `assets/` folder at the project root:

```bash
cd "/Users/Nako/Desktop/portfolio stuff/portfolio"
mkdir -p assets
# then copy or save the image as assets/landing.jpg
```

- The site already references `assets/landing.jpg` as the landing background. After saving the file, reload the page (or restart the local server) to see it.
