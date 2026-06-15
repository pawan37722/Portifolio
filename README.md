# Pawan Kumar — Portfolio

A modern portfolio website built with **React + Vite + React Router**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env and fill in your values (already pre-filled for Pawan)
cp .env.example .env

# 3. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
src/
├── assets/
│   └── icons.jsx          # All SVG icons as React components
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx       # Cards with fake buttons (non-clickable)
│   ├── Awards.jsx
│   ├── LeetCode.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── portfolioData.js   # Reads all values from .env
├── hooks/
│   └── useScrollToHash.js # Smooth scroll after routing
├── pages/
│   ├── Home.jsx           # Main portfolio page
│   └── ProjectDetail.jsx  # Per-project page (add your content here!)
└── styles/
    ├── global.css         # CSS variables, resets, utilities
    └── components.css     # All component styles
```

## ✏️ How to Customise

### Update your info
Edit `.env` — all content (name, projects, awards, links) is driven from there.

### Add project page content
Open `src/pages/ProjectDetail.jsx` and replace the placeholder `<div>` with your content.
The GitHub and Live Demo buttons on this page are **real links** (unlike the home page cards).

### Add more skills
Edit `src/data/portfolioData.js` → `skills` object.

## 🏗 Build for production

```bash
npm run build
# output in /dist
```

Deploy the `/dist` folder to Vercel, Netlify, or any static host.
