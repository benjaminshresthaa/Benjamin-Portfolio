# Benjamin Shrestha — Video Editor & Motion Designer Portfolio

A modern, high-performance portfolio website for **Benjamin Shrestha**, inspired by the clean, minimalist aesthetic of [Prateek Singh's portfolio](https://piratekkusan.github.io/prateek-portfolio/).

Built with **React 19**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

---

## ✨ Features & Architecture

- **Minimalist Modern Aesthetic**: Clean editorial typography (Inter), refined whitespace, and subtle ambient glows.
- **Interactive Video Modal Lightbox**:
  - Dynamically switches aspect ratios: `aspect-video` (16:9) for YouTube & landscape commercials, and `aspect-[9/16]` for vertical short-form TikToks / Reels.
  - Supports both YouTube embeds (`youtubeId`) and native HTML5 video files (`.mp4`, `.mov`).
  - Seamless Framer Motion animations (`AnimatePresence`, spring transitions, backdrop blur, Escape key support).
- **Work Showcase & Category Filter**:
  - Tabs: `All`, `Long Form`, `Short Form`, `Motion Graphics`.
  - 3-column **Featured Work** grid and 4-column **More Work** grid with smooth hover zoom and play button overlay.
- **Hero Section**:
  - Side-by-side profile layout with status indicator (*Available for Projects*).
  - High-impact hook: *"Most videos get watched. Few get remembered. Fewer still make someone buy. Specializing in the gap between those three."*
  - Metrics social proof: **2.5M+ Views**, **50+ Videos Delivered**, **6+ Brands Worked With**, **1+ Years Experience**.
  - Client avatar strip.
- **Workflow / Process Section**:
  - 4-phase methodology: *Strategy & Discovery*, *Creative Editing*, *Motion & Polish*, *Final Delivery*.
- **About Me & Arsenal**:
  - Personal journey and creative philosophy.
  - Software stack with official SVG logos (*DaVinci Resolve*, *Fusion*, *Photoshop*, *Figma*, *Audacity*, *Canva*, *Affinity*).
  - Skill pills with checkmark badges.
- **Testimonials Section**:
  - Real client reviews from YouTube creators (1M+ subs) and tech founders with 5-star ratings.
- **Interactive FAQ Accordion**:
  - Common client questions (turnaround time, revisions, footage requirements, tools).
- **Direct Contact & Inquiry Form**:
  - Direct 1-click channels: **Email**, **WhatsApp**, **Instagram DM**.
  - Project inquiry form with category selector (*Short Form*, *YouTube Long Form*, *Motion Graphics*, *Retainer*).
- **Fully Responsive & Accessible**:
  - Mobile glassmorphism drawer navigation.
  - Smooth anchor link scrolling.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The production-ready static assets will be in the `dist/` directory.

---

## 🛠️ How to Customize Your Content

All portfolio content, videos, metrics, testimonials, and contact links are cleanly separated in:

📁 `src/data/portfolioData.js`

### Adding or Updating a Project

In `src/data/portfolioData.js`, add an object to the `projects` array:

```javascript
{
  id: "my-new-project",
  title: "Project Title",
  description: "Short 1-2 sentence description of the edit.",
  youtubeId: "VIDEO_ID_HERE", // for YouTube videos
  // OR:
  // videoUrl: "/my-video.mp4", // place mp4 in public/
  // poster: "/Poster1.png",
  category: "Long Form", // "Long Form" | "Short Form" | "Motion Graphics"
  featured: true, // true to display in the top Featured grid
  isShort: false, // true for vertical 9:16 aspect ratio (Reels/TikTok)
}
```

### Updating Contact Links

In `src/data/portfolioData.js`:
- `email`: Your email address
- `whatsapp`: Your WhatsApp number
- `whatsappUrl`: `https://wa.me/YOUR_PHONE_NUMBER`
- `instagram`: Your Instagram profile URL

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repo — Vercel detects Vite automatically.
4. Click **Deploy**.

### Deploy to GitHub Pages
1. In `vite.config.js`, set `base: '/<REPO-NAME>/'` if deploying to a subpath.
2. Run `npm run build` and deploy the `dist/` folder using `gh-pages` or GitHub Actions.
