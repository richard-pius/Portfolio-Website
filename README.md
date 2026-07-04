# Richard Pius — Premium 3D WebGL Developer Portfolio

A highly professional, modern, and polished developer portfolio website showcasing a minimalist, component-driven design integrated with interactive 3D WebGL assets, smooth animations, and search engine optimizations.

Built using **Next.js (App Router)**, **Tailwind CSS**, **Three.js**, and **Framer Motion**.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **3D Renderers**: Vanilla Three.js WebGL (Cel-Shaded / MeshToonMaterial)
- **Animations**: Framer Motion
- **Language**: 100% Strict TypeScript
- **Icons**: Lucide React
- **SEO & Semantics**: JSON-LD Structured Data (`Person` Schema) & Next.js Metadata API

---

## ✨ Features & Engineering Highlights

### 1. 🌀 Interactive 3D Hero Widget
- Renders a low-poly geodesic shape (Icosahedron) encapsulated inside an outer cybernetic neon wireframe grid.
- Utilizes event interceptors to slerp/lerp coordinates based on mouse movement, producing a smooth 3D parallax depth tilt relative to the cursor.

### 2. 📦 Unique 3D Project Cards
- Replaces standard image placeholders with isolated WebGL canvases.
- Spawns a unique, rotating geometric representation corresponding to each repository:
  - **NicheSearch**: 3D Box (representing cloud & server infrastructure).
  - **TubeSift**: 3D Cylinder (funnel / DOM filter sifter).
  - **ClearBreeze Forecast**: 3D Sphere (weather globe).
  - **Rithaji-1.5B Code Generator**: 3D Torus (neural network code loops).
  - **Semantic Book Recommender**: 3D Octahedron (multidimensional semantic text node).
  - **2D Platform Game**: 3D Cone (game coin token).
- **Micro-Interactions**: Hovering over cards speeds up rotation and dynamically transitions mesh colors from **Indigo** to **Emerald**.

### 3. 🌗 Adaptive Light/Dark Mode
- Seamless client-side state synchronization that updates root HTML node document classes dynamically. Styled using Tailwind's `dark:` selectors.

### 4. 📂 Centralized Data Constants
- Separation of concerns: all copy texts, skills categories, education milestones, job experience logs, and certificates are read dynamically from a single source of truth at `constants/data.ts`.

### 5. 🛡️ Search Engine Optimization (SEO)
- **Metadata API**: Custom headers, search keywords, canonical tags, and OpenGraph/Twitter summary cards compiled on layout render.
- **JSON-LD Schema**: Statically injects Google Rich Snippets `Person` metadata to index professional affiliations, skills, and alumni credentials.

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

### 3. Build Production Export
```bash
npm run build
```
Generates a highly optimized production bundle.
