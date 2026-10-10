#
**Portfolio Url :** https://gnaneshwarspidey.github.io/Portfolio/

<div align="center">

  <h1>Developer Portfolio Website</h1>
  <p>Modern, responsive developer portfolio built with React, Vite, and Tailwind CSS.</p>

  [![Live Demo](https://img.shields.io/badge/Live%20Demo-gnaneshwarspidey.github.io%2FPortfolio-blue?style=flat-square)](https://gnaneshwarspidey.github.io/Portfolio/)
  [![Built with React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
  [![Styled with Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
  [![Bundled with Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)

</div>

---

## Overview

This repository contains the source code for the personal portfolio website of **Keshgir Gnaneshwar**. It is designed as a fast, client-side single-page application (SPA) featuring smooth animations, interactive UI components, and a dark obsidian/cyan color scheme.

- **Live URL:** [https://gnaneshwarspidey.github.io/Portfolio/](https://gnaneshwarspidey.github.io/Portfolio/)
- **Hosting:** GitHub Pages via automated GitHub Actions CI/CD

---

## Tech Stack

- **Framework:** React 19
- **Bundler & Dev Server:** Vite
- **Styling:** Tailwind CSS, PostCSS
- **Animations:** Framer Motion, GSAP
- **Icons:** Lucide React
- **Graphics & Effects:** HTML5 Canvas, Three.js
- **Deployment:** GitHub Pages (`actions/deploy-pages`)

---

## Key Features

- **Dark Theme Aesthetic:** Deep navy/black background paired with cyan and electric blue accents.
- **Interactive UI & Animations:** Smooth page transitions, entry animations, and hover states powered by Framer Motion.
- **Dynamic 3D Cards & Cursor Effects:** Spotlight-tracking cards and interactive fluid canvas elements.
- **Centralized Data Architecture:** All site content (skills, projects, experience, bio) is separated into a single configuration file for easy maintenance.
- **Fully Responsive:** Optimized layouts across mobile, tablet, and desktop viewports.
- **Static & Fast:** No backend database required; zero server overhead and quick load times on GitHub Pages.

---

## Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated build & deploy pipeline
├── public/                     # Static assets (favicons, icons)
├── src/
│   ├── assets/                 # Profile images and graphics
│   ├── components/             # Reusable UI components & layouts (Navbar, Footer, etc.)
│   │   └── ui/                 # 3D cards, spotlight effects, interactive elements
│   ├── data/
│   │   └── portfolioData.js    # Centralized portfolio data (bio, projects, skills)
│   ├── hooks/                  # Custom React hooks (Framer Motion variants, viewport)
│   ├── sections/               # Page sections (Hero, About, Skills, Projects, Contact, etc.)
│   ├── App.jsx                 # Main application layout
│   ├── index.css               # Global CSS, utilities, and custom animations
│   └── main.jsx                # Application entry point
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind theme & color configurations
└── vite.config.js              # Vite configuration
```

---

## Managing Content

All portfolio content is structured and stored inside [`src/data/portfolioData.js`](src/data/portfolioData.js). To update any personal information, modify the corresponding exported object:

- `PERSONAL_INFO`: Name, title, headline, email, and social profiles.
- `SKILL_CATEGORIES`: Skill sets grouped by domain.
- `PROJECTS`: Project titles, descriptions, technology tags, and demo links.
- `EXPERIENCE`: Work experience, roles, and descriptions.
- `CERTIFICATIONS`: Certificates and issuers.
- `EDUCATION`: Degree, focus areas, and institution details.

---

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation & Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Gnaneshwarspidey/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```
   The production-ready assets will be generated in the `dist/` directory.

---

## Deployment

The project uses GitHub Actions for continuous deployment. Whenever changes are pushed to the `main` branch, the workflow (`.github/workflows/deploy.yml`) automatically builds the project and deploys the static files to GitHub Pages.

---

## License & Author

Created and maintained by **Keshgir Gnaneshwar**.

- GitHub: [@Gnaneshwarspidey](https://github.com/Gnaneshwarspidey)
- LinkedIn: [in/keshgir-gnaneshwar](https://www.linkedin.com/in/keshgir-gnaneshwar)
