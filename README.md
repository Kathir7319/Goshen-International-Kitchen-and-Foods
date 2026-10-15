# Goshen International Kitchen and Foods 🍲

Official production-ready multi-page website for **Goshen International Kitchen and Foods** located at **4000 Bear Cat Way, Suite 104, Morrisville, NC 27560**.

Built with **React 19**, **Vite**, **Tailwind CSS v4**, **React Router v7**, and **Lucide Icons**.

---

## 🚀 Features

- **Dynamic Live Background**: Cinematic ambient Ken Burns crossfade rotating through real culinary photography (West African Naija Buns, Efo Riro soup, morning breakfast grille, continental chicken, and spacious dining room) with interactive playback controls and floating steam embers.
- **Cute Brand Mascot Logo**: Scalable, custom-designed SVG mascot emblem featuring a cheerful culinary pot and chef toque.
- **100% Real Photography**: Authentic photos of actual West African and continental dishes.
- **Real-Time Morrisville Hours Status**: Automatically calculates live open/closed status for Morrisville, NC timezone (America/New_York).
- **Mobile Responsive & Touch-Optimized**: 16px form inputs to prevent mobile Safari auto-zoom, swipeable menu categories, touch-friendly navigation drawer, and 1-tap calling.
- **5 Multi-Page Routes**:
  - `/` — Homepage with Hero, Welcome Story, Triple Pillars & Signature Dishes
  - `/menu` — Categorized Menu Architecture (Breakfast, Deli, International Comfort, Drinks)
  - `/story` — Our Story, Meaning of Goshen, Radical Accessibility & Zero-Stair Design
  - `/catering` — Catering & RTP Group Events (3 Modalities & Availability Form)
  - `/contact` — Physical Address, Hours, Contact Form & Interactive Google Maps

---

## 🛠️ Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Start local development server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 3. Build for production
```bash
npm run build
```

---

## 📦 Deploying to Vercel

This repository is pre-configured with [`vercel.json`](./vercel.json) for seamless Single Page Application (SPA) routing on Vercel without 404 errors.

### Option A: Deploy via GitHub (Recommended)

1. **Initialize Git & Push to your GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Goshen International Kitchen and Foods website"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **"Add New Project"** -> **"Project"**.
   - Import your GitHub repository.
   - Vercel will automatically detect **Vite** and configure:
     - **Framework Preset**: `Vite`
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - Click **Deploy**!

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Deploy directly from terminal
vercel
```

---

## 📍 Business Information
- **Location**: 4000 Bear Cat Way, Suite 104, Morrisville, NC 27560
- **Phone**: (919) 559-2586
- **Email**: info@gosheninternationalkitchen.com
- **Google Maps**: [View on Google Maps](https://share.google/24AaEKdONjLmrta51)

© 2026 Goshen International Kitchen and Foods. All content copy rights reserved.
