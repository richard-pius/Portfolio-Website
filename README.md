# Richard Pius — Portfolio Website

A production-ready, ultra-minimalist developer portfolio website inspired by the award-winning layout of [bepatrickdavid.com](https://bepatrickdavid.com/). Stark black-and-white, typography-driven, brutalist-refined single-page application built on Next.js 16 and Tailwind CSS v4.

🔗 Live Demo: [richard-portfolio.vercel.app](https://github.com/richard-pius?tab=repositories) (Placeholder - Replace with your deployment URL)

---

## 🛠️ Tech Stack & Architecture

- **Core Framework**: Next.js 16.2.9 (App Router)
- **Styling Engine**: Tailwind CSS v4.0
- **Language**: TypeScript
- **Icons**: Lucide React
- **Animations**: CSS Keyframes + Intersection Observer API
- **Deployment**: Vercel (100% Free Tier compatible, fully static export SSG)

---

## ✨ Features & Optimizations

### 1. 🌌 Magnetic Particle Network Background
- **Dynamic Connection Threads**: Renders a floating coordinate network that draws fine connection lines directly to the mouse cursor, locking onto mouse movements.
- **Elastic Repulsion Physics**: Backdrop dots accelerate away from the user's cursor and return slowly to their origin paths using smooth drag damping.
- **3D Scroll Parallax**: Backdrop nodes are mapped to relative Z-axis depths. Scrolling shifts larger nodes faster than smaller background elements, generating a organic sense of perspective.
- **Mobile Density Throttle**: Automatically cuts particle counts by 50% on screen widths under 768px to preserve target battery and ensure smooth rendering performance.

### 💻 ASCII Terminal Hero Console
- Responsive two-column grid on desktop featuring a terminal console panel on the right side.
- Displays a custom ASCII laptop illustration detailing query runs (`whoami`, `status`) linked to the page loading staggers.

### ⚡ Performance Enhancements
- **next/font/google Self-Hosting**: Removed render-blocking Google Font external imports. Font assets are downloaded and hosted locally at compile time, eliminating Cumulative Layout Shift (CLS) and increasing loading speed.
- **GPU Hardware Acceleration**: Cards and row modules utilize `will-change` and `translate3d` transforms to offload page animation workloads directly to client graphics cards.
- **Static Site Generation (SSG)**: Pre-renders the complete site structure into lightweight static HTML/CSS at build time, yielding near-instant page delivery.

---

## 📂 Project Structure

```
richard-portfolio/
├── app/
│   ├── globals.css          ← Style configuration, custom staggers, form inputs
│   ├── layout.tsx           ← Google Font declaration, ParticleBackground wrapper
│   └── page.tsx             ← Layout organizer
├── components/
│   ├── ParticleBackground.tsx ← Canvas-based particle physics
│   ├── ScrollReveal.tsx     ← Staggered viewport entrance transitions
│   ├── Header.tsx           ← fixed branding navbar & progress bar
│   ├── Hero.tsx             ← typography hero & ASCII terminal
│   ├── About.tsx            ← introductory summary & roles grid
│   ├── Skills.tsx           ← languages, frameworks, tools list
│   ├── Education.tsx        ← academic history timeline
│   ├── Work.tsx             ← work experience timeline with list highlights
│   ├── Projects.tsx         ← clickable project cards & github marquee link
│   ├── Certifications.tsx   ← certifications table & awards listings
│   ├── Footer.tsx           ← client contact form & social hooks
│   └── MarqueeButton.tsx    ← reusable hover marquee buttons
```

---

## 🚀 Local Setup & Installation

### Prerequisite
Ensure you have [Node.js](https://nodejs.org) installed on your system.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/richard-pius/richard-portfolio.git
   cd richard-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the local site.

4. **Verify production compilation**:
   ```bash
   npm run build
   ```

---

## ⚙️ Customization Guide

- **Update personal links**: Open `components/Footer.tsx` and replace the placeholder URLs with your active LinkedIn, GitHub, and email paths.
- **Edit project list**: Edit the `projects` metadata array inside `components/Projects.tsx` to add your custom repository links.
- **Edit experiences**: Modify the `experiences` bullet-point entries inside `components/Work.tsx`.
- **Add certifications**: Update the `certifications` metadata inside `components/Certifications.tsx`.

---

## 📄 License
This project is open-source and available under the MIT License.
