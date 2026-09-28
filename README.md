<div align="center">

# Richard Pius — Minimalist Software Developer Portfolio

A highly professional, modern, and polished developer portfolio website showcasing a clean, minimalist design language.

![Next.js](https://img.shields.io/badge/Next.js-16.3+-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.3+-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4+-black?style=for-the-badge&logo=framer&logoColor=blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

</div>

---

## 📖 Overview

The architecture of this portfolio focuses on beautiful typography, Apple-inspired glassmorphism, and smooth interactive animations. It shifts away from heavy 3D WebGL in favor of blazing-fast performance, accessibility, and an elegant, content-first user experience.

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 16 (App Router) & React 19
- **Styling**: Tailwind CSS 3 (Configured with custom Apple-inspired UI variables)
- **Animations**: Framer Motion (Layout animations & `AnimatePresence`)
- **Typography**: Plus Jakarta Sans (Sans-serif) & JetBrains Mono (Monospace)
- **Language**: 100% Strict TypeScript
- **Icons**: Lucide React
- **Data Management**: Centralized single source of truth (`constants/data.ts`)

---

## ✨ Features & Engineering Highlights

### 🌬️ Clean, Typographic Hero Section
A minimalist, typography-driven hero interface with subtle ambient background blurs (`blur-[120px]`) and staggered Framer Motion reveal animations. Designed to immediately grab attention without overwhelming the user.

### 🎨 Glassmorphism & Apple-Inspired UI
Features a floating, backdrop-blurred navigation bar (`.glass-panel`) that dynamically reacts to scroll state. Built using a custom CSS variable architecture in `globals.css` ensuring perfect contrast ratios across light and dark contexts.

### 📦 Interactive Project Grid
Animated layout filtering using Framer Motion's `AnimatePresence` and `layout` props. Users can instantly filter projects by categories (Cloud & DevOps, Web & Tools, AI & LLMs, Mobile & Games) with seamless, physics-based card repositioning.

### 💼 Dedicated Freelance Showcase
Highlights premium freelanced projects (like the ZENJI Learning App) with detailed architecture breakdowns, deliverables, tech stacks, and live metrics. 

### 🌗 Adaptive Light/Dark Mode
Seamless client-side state synchronization that updates root HTML node document classes dynamically. It utilizes Tailwind's `dark:` selectors and custom CSS color tokens, with state persistence across sessions via `localStorage`.

### 🛡️ Search Engine Optimization (SEO)
- **Metadata API**: Custom headers, search keywords, canonical tags, and OpenGraph/Twitter summary cards compiled on layout render.
- **JSON-LD Schema**: Statically injects Google Rich Snippets `Person` metadata to index professional affiliations, skills, and alumni credentials.

---

## 🏗️ Project Structure

```text
├── app/                  # Next.js 16 App Router (layout.tsx, page.tsx, globals.css)
├── components/           # Modular React components (Hero, Navbar, Projects, etc.)
├── constants/            # Centralized content and copy (data.ts)
├── public/               # Static assets
├── tailwind.config.js    # Tailwind CSS configuration
└── next.config.mjs       # Next.js build configuration
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build for Production
```bash
npm run build
```
Generates a highly optimized production bundle ready for deployment on Vercel, AWS, or any standard Node environment.
