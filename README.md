# Gaurav Kumar — 3D Full-Stack Developer Portfolio

<div align="center">

  [![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
  [![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12+-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

  <p align="center">
    A high-performance, immersive 3D developer portfolio showcasing full-stack projects, architecture, and system design expertise.
  </p>

  <p align="center">
    <a href="https://github.com/GA773/Portfolio"><strong>Explore the Repository »</strong></a>
    <br />
    <br />
    <a href="#-features">Features</a>
    ·
    <a href="#-tech-stack">Tech Stack</a>
    ·
    <a href="#-project-structure">Structure</a>
    ·
    <a href="#-getting-started">Getting Started</a>
    ·
    <a href="#-contact">Contact</a>
  </p>
</div>

---

## 🌟 Overview

This portfolio is an interactive digital showcase built for **Gaurav Kumar**, a Computer Science & Information Technology student and Full-Stack Developer. It blends modern frontend engineering with real-time 3D graphics (WebGL via Three.js / React Three Fiber) and responsive micro-interactions to deliver a polished, high-end experience.

---

## ✨ Features

- 🌌 **Interactive 3D Hero Scene**: Custom WebGL scene rendered via Three.js and React Three Fiber featuring dynamic lighting, particle field ambient effects, orbital core elements, and responsive camera parallax.
- 🎨 **Modern Cybernetic Aesthetic**: Refined dark theme with subtle glassmorphism, accent glows, precision typography (Manrope & DM Mono), and clean layout hierarchy.
- ⚡ **Fluid Micro-Animations**: Smooth entry reveals and interactive hover states powered by Framer Motion and GSAP.
- 💻 **Interactive Skills Grid**: Categorized technical skill matrix with live category filtering (Frontend, Backend, Databases, Tools) and visual indicators.
- 📂 **Featured Projects Showcase**: Comprehensive project cards highlighting architecture, features, tech stacks, and source links.
- 🎓 **Education & Certifications**: Structured milestones and verified credentials.
- 📬 **Direct Contact Section**: Interactive contact form with integrated social and professional profiles.
- 📱 **Fully Responsive**: Optimized for high performance and seamless readability across mobile, tablet, and ultra-wide screens.

---

## 🛠 Tech Stack

### Core & Frameworks
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **3D Graphics**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) + [GSAP](https://greensock.com/gsap/)
- **Styling**: Modular CSS3 with Custom Properties & Glassmorphism design tokens
- **Linting & Quality**: [Oxlint](https://oxc-project.github.io/)

---

## 📂 Project Structure

```text
Portfolio/
├── public/                     # Static assets and icons
│   └── favicon.svg
├── src/
│   ├── assets/                 # Profile images and 3D GLB models
│   ├── components/             # Modular UI components
│   │   ├── About/              # Bio, profile portrait, and philosophy
│   │   ├── Certifications/     # Industry certifications and achievements
│   │   ├── Contact/            # Contact form and direct links
│   │   ├── Education/          # Academic background and timeline
│   │   ├── Footer/             # Footer and copyright notices
│   │   ├── Hero/               # Hero landing section with CTA
│   │   ├── Navigation/         # Floating dock navigation bar
│   │   ├── Projects/           # Filterable project showcase
│   │   └── Skills/             # Categorized technical skills matrix
│   ├── data/                   # Structured data files (projects, skills, etc.)
│   ├── hooks/                  # Custom React hooks (window resize, scroll)
│   ├── three/                  # Three.js 3D canvas and shader components
│   │   ├── DigitalCore.tsx     # Abstract geometric 3D core
│   │   ├── HeroScene.tsx       # Main 3D WebGL scene controller
│   │   └── ParticleField.tsx   # Ambient 3D floating particles
│   ├── utils/                  # Animation variants and helper utilities
│   ├── App.tsx                 # Main layout and section assembly
│   ├── index.css               # Global theme tokens, typography, and base CSS
│   ├── Refinement.css          # Refined UI styles and responsiveness fixes
│   └── main.tsx                # React DOM entry point
├── index.html                  # HTML entry point with SEO metadata
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration
```

---

## ⚙️ Getting Started

### Prerequisites
Make sure you have Node.js (v18 or higher recommended) and npm installed:
```bash
node -v
npm -v
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GA773/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗 Build & Deployment

To generate an optimized production bundle:

```bash
# Type check and build with Vite
npm run build

# Preview production build locally
npm run preview
```

---

## 👨‍💻 Featured Project

### [AI StockVision](https://github.com/GA773/AI-StockVision)
*An academic prototype for exploring historical stock data, comparing ML forecasts, and analyzing portfolio risk.*
- **Frontend**: React, TypeScript, TailwindCSS / CSS Modules, Charting
- **Backend**: Java, Spring Boot REST APIs
- **Database**: PostgreSQL
- **Highlights**: Multimodal price prediction models (LSTM, GRU, XGBoost) paired with FinBERT financial news sentiment analysis and portfolio risk profiling.

---

## 📬 Contact & Connect

- **Author**: Gaurav Kumar
- **GitHub**: [@GA773](https://github.com/GA773)
- **LinkedIn**: [gaurav-kumar-7897a52b5](https://linkedin.com/in/gaurav-kumar-7897a52b5)
- **Email**: [gauravkumar9282@gmail.com](mailto:gauravkumar9282@gmail.com)

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/GA773">Gaurav Kumar</a>.</sub>
</div>
