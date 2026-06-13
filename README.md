# Richard Pius — Portfolio Website (R OS)

A production-ready, ultra-minimalist developer portfolio website styled as a Cyberpunk-themed custom operating system: **R OS**. Stark black-and-white layout with curated neon accents, typography-driven brutalist design, and a fully interactive background and terminal. Built on Next.js 16 and Tailwind CSS v4.

🔗 Live Demo: [https://richardpius.vercel.app/](https://richardpius.vercel.app/)

---

## 🛠️ Tech Stack & Architecture

- **Core Framework**: Next.js 16.2.9 (App Router)
- **Styling Engine**: Tailwind CSS v4.0 (Custom Theme Variables)
- **Language**: TypeScript
- **Icons**: Lucide React
- **Animations**: CSS Keyframes + Intersection Observer API
- **Deployment**: Vercel (100% Free Tier compatible, fully static export SSG)

---

## ✨ Features & Interactive Elements

### 🌌 1. Pure ASCII Key Art Background
- **Watermark ASCII Art Grid**: A high-performance CSS Flexbox repeating background that displays 24 subtle blocks of custom-crafted ASCII arts at `0.015` opacity:
  1. **Mechanical Macro Pad**: A retro-themed mechanical keyboard grid detailing standard keys (`Esc`, `Tab`, `Caps`, `Shift`, `Ctrl`, `Alt`, `Space`, `Enter`).
  2. **Server Blade Node**: A classical server rack layout marking active systems and indicators.
  3. **ALU/CPU microprocessor**: A detailed schematic layout showing ALU, registers, and floating-point units.
- **Zero Overhead**: Replaces heavy canvas logic with static preformatted HTML tags, resulting in zero JS loop lag or GPU rendering costs.

### 👾 2. Playable Cyberpunk Background Pet (`CyberCharacter.tsx`)
- **Corpo Boss Persona**: Styled as a chibified corporate boss (receding platinum hair, round gold spectacles, double-breasted jet-black suit with gold buttons, lapels, and a gold tie).
- **Controls & Playability**:
  - **PC Controls**: WASD and Arrow Keys move the character around the viewport. Page scrolling is disabled on arrow keys when playing.
  - **Mouse/Mobile Controls**: Clicking or tapping on the background coordinates instructs the character to walk to that location (fully responsive on mobile).
  - **Click-Through Safety**: Automatically ignores clicks on navigation bars, interactive links, cards, buttons, scrollbars, and the terminal console to preserve standard portfolio navigation.
- **Auto-Wandering AI**: If left idle for 4-7 seconds, the pet automatically walks to random coordinates near the bottom of the viewport. Restores auto-wandering after 10s of user inactivity.
- **Gold-Core Halo (Copyright Safe)**: Features a glowing gold distributed network-topology halo above his head (three circular nodes connected to a central hub core), legally distinct from trademarked emblems.
- **Cybersecurity Fact Bubble**: Every 18 seconds, a glowing gold-bordered speech bubble (`border-[#ffd700]/35`) pops up above the pet's head, displaying random cybersecurity statistics or tips prefixed with `R_OS_CORP //`.

### 💻 3. Live OS Terminal Console Widget (`Terminal.tsx`)
- Fully responsive terminal console running under **R OS v1.0.0 (TTY1)**.
- **Form Submit Protection**: Intercepts Enter keydowns to prevent browser page reloads.
- **Operations Parser**: Supports 18 utility commands:
  - `help`      - Display all available commands.
  - `about`     - Profile introduction summary.
  - `skills`    - Technical developer toolkit.
  - `projects`  - Show projects catalog and instructions.
  - `open <1-3>`- Open specific project code in a new tab.
  - `education` - Academic milestones.
  - `work`      - DevOps experience timeline.
  - `contact`   - Get in touch contact methods.
  - `neofetch`  - Display system specs and ASCII art laptop.
  - `pet <cmd>` - Control background pet (e.g. `pet walk` moves character, `pet fact` forces speech).
  - `ping`      - Simulated icmp ping latency reports.
  - `weather`   - Simulated weather report referencing the *ClearBreeze Weather Engine*.
  - `secret`    - Decrypts classified counter-intelligence logs.
  - `whoami`    - Print current user session details.
  - `date`      - Print current local date/time.
  - `uptime`    - Display system running uptime since page load.
  - `history`   - Display command line history logs.
  - `clear`     - Wipe terminal screen buffer.
  - `sudo`      - Elevate privileges (blocked by default).

### 🎨 4. Custom Themed Scrollbar
- Replaces standard scrollbars with a custom `6px` wide gold-to-crimson gradient thumb (`linear-gradient(180deg, #ffd700, #ff0055)`) featuring an active glowing border box that intensifies on hover.

---

## 📂 Project Structure

```
richard-portfolio/
├── app/
│   ├── globals.css          ← Styles, custom animations, custom scrollbar
│   ├── layout.tsx           ← Google Font imports, background character rendering wrappers
│   └── page.tsx             ← Layout organizer
├── components/
│   ├── ParticleBackground.tsx ← Static repeating ASCII key art grid background
│   ├── CyberCharacter.tsx   ← Playable background pet character (SVG and interaction hooks)
│   ├── ScrollReveal.tsx     ← Staggered viewport entrance transitions
│   ├── Header.tsx           ← fixed branding navbar & progress bar
│   ├── Hero.tsx             ← typography hero & ASCII terminal
│   ├── About.tsx            ← introductory summary & roles grid
│   ├── Skills.tsx           ← languages, frameworks, tools list
│   ├── Education.tsx        ← academic history timeline
│   ├── Work.tsx             ← work experience timeline with list highlights
│   ├── Projects.tsx         ← clickable project cards & github marquee link
│   ├── Certifications.tsx   ← certifications table & awards listings
│   └── Footer.tsx           ← client contact form & social hooks
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
