# Sahil Rathod — Professional Portfolio

A premium professional developer portfolio built with **React + Vite**, featuring a dark theme, subtle animations, and a clean component architecture.

## 🚀 Quick Start

```bash
# 1. Navigate into the project
cd sahil-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
sahil-portfolio/
├── public/
│   ├── favicon.svg              # SR monogram favicon
│   ├── Sahil-Rathod-CV.pdf      # ← Drop your CV PDF here
│   └── projects/                # Project screenshot images
│
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── Navbar/
│   │   ├── Button/
│   │   ├── SectionTitle/
│   │   ├── ProjectCard/
│   │   ├── SkillCard/
│   │   └── TimelineItem/
│   │
│   ├── sections/                # Page sections
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Journey/
│   │   ├── Projects/
│   │   ├── Education/
│   │   └── Contact/             # (also contains Footer)
│   │
│   ├── data/                    # Professional content (edit here)
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   └── education.js
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── useScrollAnimation.js
│   │   └── useMousePosition.js
│   │
│   ├── utils/
│   │   ├── constants.js         # Contact info & social links
│   │   └── animations.js        # Stagger delay helpers
│   │
│   └── styles/
│       ├── variables.css        # Design tokens
│       ├── globals.css          # Global reset & utilities
│       └── animations.css       # Keyframes & scroll reveal
```

---

## ✏️ Customisation

### Update contact details
Edit `src/utils/constants.js`:
```js
export const CONTACT_INFO = {
  email: 'your@email.com',
  phone: '+91 ...',
  location: 'Your City, India',
};
```

### Add a project
Add an object to `src/data/projects.js`:
```js
{
  id: 6,
  title: 'My New Project',
  description: 'Brief description...',
  technologies: ['React', 'Node.js'],
  github: 'https://github.com/developershahil/new-project',
  live: 'https://myproject.com',
  image: '/projects/new-project.png',
  featured: true,
}
```

### Add a project image
Drop a `.png` file into `public/projects/` and reference it as `/projects/filename.png`.

### Add your CV
Place your PDF as `public/Sahil-Rathod-CV.pdf` — the Download CV button will work automatically.

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to `dist/`. Deploy the contents of `dist/` to any static host.

### Recommended Hosting
- **Vercel** — `vercel deploy` (zero config for Vite)
- **Netlify** — drag and drop `dist/` folder
- **GitHub Pages** — use `gh-pages` package

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| JavaScript ES6+ | Application logic |
| CSS3 / Custom Properties | Styling & design tokens |
| CSS Animations | Scroll reveals, hover effects |
| IntersectionObserver API | Scroll-triggered animations |

---

## ♿ Accessibility

- Semantic HTML5 elements
- Proper heading hierarchy (h1 → h2 → h3)
- `alt` text on images
- Keyboard-navigable buttons & links
- Visible focus rings
- `prefers-reduced-motion` support

---

## 📄 License

Personal portfolio — all rights reserved by Sahil Rathod.
