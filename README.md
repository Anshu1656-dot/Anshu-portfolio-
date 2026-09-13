# Anshu Kashyap — Portfolio Website

A responsive Next.js + Tailwind CSS + Framer Motion portfolio for a video
editor & social media content creator. Dark, glassmorphism, cinematic
teal/amber color-grade theme.

## 1. Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the site reloads automatically as you edit.

To build the optimized production version:

```bash
npm run build
npm run start
```

## 2. Get a public link (free, ~5 minutes)

The easiest way to get a public URL is [Vercel](https://vercel.com) (made by
the creators of Next.js):

1. Create a free GitHub account if you don't have one, and push this folder
   to a new GitHub repository.
2. Go to vercel.com → "Add New Project" → import that repository.
3. Leave all settings as default and click Deploy.
4. In ~1 minute you'll get a live link like
   `https://anshu-kashyap-portfolio.vercel.app` that anyone can open — on
   phone, tablet, or desktop.
5. Optional: connect a custom domain later from the Vercel project settings.

Netlify works the same way if you prefer it.

## 3. Everything you'll want to edit lives in one file

Open **`data/site-data.js`**. It contains:

- Your name, tagline, title, intro, and About bullet points
- Contact links (Instagram, Email, WhatsApp, LinkedIn) — replace the
  placeholder email/WhatsApp/LinkedIn values with your real ones
- Skills and editing tools
- Your experience timeline
- Achievement numbers
- Portfolio projects

No other file needs to change for routine content updates.

### Adding real portfolio videos

Each portfolio project has a `youtubeId` field. Upload your reel to YouTube
(you can set it to **Unlisted** so it's not publicly searchable but still
plays perfectly everywhere, including on mobile — this avoids the playback
issues that come with trying to embed raw video files directly). Then copy
the video ID from the URL, e.g. for `https://youtu.be/dQw4w9WgXcQ`, the ID is
`dQw4w9WgXcQ`. Paste it into the matching project's `youtubeId` in
`data/site-data.js`. The card will automatically show the real thumbnail and
open a playable modal. Leave it blank and the card shows a clean "Coming
soon" placeholder instead of a broken link.

### Adding your resume

Drop your resume as `public/resume.pdf` (this repo already has your
`resumeUrl` pointing there). The "Download Resume" button will start working
as soon as the file exists.

### Adding your real profile photo

The hero section currently shows a stylized "AK" placeholder inside a
framed panel. To swap in a real photo, open `components/Hero.js`, replace
the placeholder `<div>` inside the framed panel with an `<Image>` from
`next/image` pointing at a photo you've added to `/public`.

## 4. Where the design lives

- Colors and fonts: `tailwind.config.js` and `app/layout.js`
- Global styles (glass effect, focus states, reduced-motion support):
  `app/globals.css`
- Every section is its own file in `/components`

## 5. Before going fully live

- Update `metadataBase` and the sitemap URL in `app/layout.js` and
  `app/robots.js` / `app/sitemap.js` to your real deployed domain.
- Replace the placeholder Email, WhatsApp, and LinkedIn links in
  `data/site-data.js`.
