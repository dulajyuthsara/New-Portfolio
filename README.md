# Dulaj Yuthsara — Portfolio

Built with React. Inspired by [oryzo.ai](https://oryzo.ai) — editorial typography, scroll animations, custom cursor, marquee ticker.

## Getting Started

```bash
npm install
npm start
```

## Adding Your Profile Photo

1. Save your LinkedIn profile photo as `src/assets/profile.jpg`
2. Open `src/components/Hero.jsx`
3. Uncomment this line:
   ```js
   import profilePhoto from '../assets/profile.jpg';
   ```
4. Change `const profilePhoto = null;` to remove that line (the import handles it)

The photo slot is on the right side of the hero, sized 320px wide with a 3:4 aspect ratio — portrait orientation works best.

## Project Structure

```
src/
  components/
    Cursor.jsx       — Custom dot + trailing ring cursor
    Nav.jsx          — Sticky nav with blur-on-scroll
    Hero.jsx         — Full-height hero with photo slot & counters
    Ticker.jsx       — Availability status bar
    Marquee.jsx      — Scrolling tech stack ticker (black bar)
    Skills.jsx       — 2-col skill grid + animated progress bars
    Projects.jsx     — Hover-to-invert project list
    Education.jsx    — Timeline list
    Achievements.jsx — Hackathon cards with ghost numbers
    Contact.jsx      — 2-col contact layout
    Footer.jsx       — Simple footer
    Reveal.jsx       — Scroll-triggered fade-up wrapper
    Counter.jsx      — Animated number counter on scroll
    shared.css       — Section base styles
  hooks/
    useReveal.js     — IntersectionObserver hooks
  index.js
  index.css          — Global reset & keyframes
```

## Customisation

- **Colors** — edit CSS variables in `src/index.css` (`:root`)
- **Fonts** — swap Google Fonts links in `public/index.html`
- **Content** — edit data arrays at the top of each component
