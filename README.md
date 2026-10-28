# Snehal Kale – Portfolio (React + Vite + Tailwind CSS)

## 1. Run locally
Requires Node.js 18+ (https://nodejs.org).
```bash
npm install
npm run dev        # opens http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the production build
```

## 2. Add your resume
Save your real resume as **`public/Snehal_Kale_Resume.pdf`** (exact name). Both "Download Resume" buttons use it.

## 3. Add your GitHub / project links
Open `src/data.js`. Fill in `profile.github` and each project's `github` and `demo`.
Empty values show as disabled "coming soon" buttons, so nothing links to a fake URL.

## 4. Contact form (is a backend needed?)
- **Email link and phone link:** work with no setup.
- **Contact form without setup:** opens the visitor's email app with the message pre-filled (a `mailto:` fallback). No server needed, but it only works if the visitor has an email app configured.
- **Form that sends directly to your inbox:** a static site cannot send email by itself. Create a free form at https://formspree.io, copy its ID, then copy `.env.example` to `.env` and set `VITE_FORMSPREE_ID=yourFormId`. (On Vercel/Netlify, add the same variable in the project's Environment Variables settings.)

## 5. Deploy
**Vercel:** push the project to GitHub → vercel.com → Add New Project → import repo → Framework: Vite (auto-detected) → Deploy.
**Netlify:** push to GitHub → app.netlify.com → Add new site → Import from Git → Build command `npm run build`, Publish directory `dist` → Deploy.
(Or drag-and-drop the `dist` folder onto https://app.netlify.com/drop after `npm run build`.)

## Edit content
All text lives in `src/data.js`. Colors are in `tailwind.config.js`.
