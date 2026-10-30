# Pawan Kumar — Portfolio

React + Vite + React Router portfolio, deployed on Vercel.

## 1. Test locally

Requirements: Node.js 18+ and npm.

```bash
npm install          # install dependencies
npm run dev          # start dev server
```

Open http://localhost:5173 and check:

- About and Skills sections have no large gap between them
- The page uses the full screen width (small left/right margin)
- Award photos stay in one row of 4 (2 per row on phones) and are larger
- Clicking the profile photo opens a large view (close with ×, Esc, or a click outside)

Test the production build exactly as Vercel will serve it:

```bash
npm run build        # creates /dist
npm run preview      # serves /dist at http://localhost:4173
```

## 2. Update the existing Vercel project

Your site is already linked to a Vercel project, so pushing the code updates the same URL.

**Option A — Git push (recommended, if the Vercel project is connected to GitHub)**

```bash
git add .
git commit -m "Full-width layout, bigger award photos, profile photo zoom"
git push origin main     # use your branch name if different
```

Vercel builds automatically and updates your existing URL in about a minute.
Check progress in the Vercel dashboard under Deployments.

**Option B — Vercel CLI (no Git needed)**

```bash
npm i -g vercel
vercel login
vercel link          # choose the EXISTING project, do not create a new one
vercel --prod        # deploys to your existing production URL
```

Build settings, if Vercel asks: Framework = Vite, Build command = `npm run build`, Output directory = `dist`.

**Environment variables:** none are required. Optional `VITE_*` values (see `.env.example`) must be set in
Vercel → Project → Settings → Environment Variables, then redeploy.

## 3. Updating content later

- Name, email, phone, photo, social links: `src/data/portfolioData.js`
- Award photos: `src/award/award1` and `src/award/award2`
- Section spacing and width: `.section-wrapper` in `src/styles/global.css`
- Award card layout: the `<style>` block in `src/components/Awards.jsx`
- Profile photo zoom: `src/components/Hero.jsx` and `.avatar-modal` in `src/styles/components.css`

## Project structure

```
src/
├── components/   Navbar, Hero, About, Skills, Projects, Awards, LeetCode, Contact, Footer
├── pages/        Home, ProjectDetail
├── data/         portfolioData.js
├── styles/       global.css, components.css
└── award/        award photos
```
