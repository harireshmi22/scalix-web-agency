<p align="center">
  <img src="public/logo.jpeg" alt="Scalix Logo" width="80" height="80" style="border-radius: 50%;" />
</p>

<h1 align="center">Scalix — Web Agency</h1>

<p align="center">
  <strong>Premium, scalable, and high-performance websites for businesses and creators.</strong><br />
  Built with Next.js 16 · React 19 · Tailwind CSS 4 · Lenis Smooth Scroll · Swiper
</p>

<p align="center">
  <a href="#-live-demo">Live Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-team">Team</a>
</p>

---

## ✨ Overview

**Scalix** is a modern web agency website that showcases bespoke digital services — from custom website development and UI/UX design to full-stack web applications, SEO optimization, and ongoing maintenance. The site itself is a living portfolio: every pixel is crafted with premium aesthetics, smooth scroll-triggered animations, and a fully responsive layout that looks stunning on every screen size.

---

## 🎯 Features

- **Immersive Hero Section** — Bold typographic headline with ambient glowing orbs, mesh-grid backdrop, and scroll-driven entrance animations.
- **Smooth Scrolling** — Lenis-powered buttery-smooth scrolling experience across the entire site.
- **Interactive Project Showcase** — Swiper-based carousel with touch-friendly project previews.
- **Comprehensive Services** — Dedicated sections for web solutions, development services, and why clients should choose Scalix.
- **Transparent Pricing** — Multi-tier pricing tables (Starter / Professional / Agency), per-page custom pricing, à la carte add-on services, and monthly maintenance plans.
- **Team Profiles** — Meet the people behind Scalix with an elegant team grid.
- **FAQ Accordion** — Expandable frequently asked questions with smooth open/close transitions.
- **Call-to-Action Banner** — Conversion-focused CTA section to drive inquiries.
- **Glassmorphic Navigation** — Floating header with backdrop blur that adapts on scroll — transparent on top, frosted-glass on scroll.
- **Mobile-First Design** — Fully responsive from 320px to ultrawide displays with a polished hamburger menu.
- **SEO Optimized** — Semantic HTML, meta tags, structured headings, and schema-ready markup.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router) |
| **UI Library** | [React 19](https://react.dev) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) |
| **Typography** | Google Fonts — Anton, Architects Daughter, Geologica |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering) |
| **Carousel** | [Swiper](https://swiperjs.com) |
| **Language** | TypeScript + JSX |
| **Linting** | ESLint 9 with `eslint-config-next` |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.18 or later
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/harireshmi22/scalix-web-agency.git
cd scalix-web-agency

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app hot-reloads as you edit.

### Production Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## 📁 Project Structure

```
scalix-web-agency/
├── public/                    # Static assets (images, icons, SVGs)
│   ├── logo.jpeg              # Brand logo
│   ├── hero.png               # Hero illustrations
│   ├── service.png            # Service visuals
│   ├── solutions.png          # Solutions artwork
│   └── ...                    # Project & team images
│
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout (Header + LenisProvider + Footer)
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── feature/           # Features page
│   │   ├── pricing/           # Pricing page (tiers, add-ons, maintenance)
│   │   ├── project/           # Projects page
│   │   └── service/           # Services page
│   │
│   └── components/            # Reusable UI components
│       ├── Header.jsx         # Glassmorphic floating navigation
│       ├── Footer.jsx         # Full-width footer with links & socials
│       ├── Home.jsx           # Hero section with metrics bar
│       ├── Services.jsx       # Services overview grid
│       ├── Service.jsx        # Individual service details
│       ├── Solutions.jsx      # Solutions showcase with image
│       ├── ChooseUs.jsx       # Why Choose Us section
│       ├── OurProject.jsx     # Project highlights
│       ├── OurService.jsx     # Our service philosophy
│       ├── ProjectSwipper.jsx # Swiper carousel for projects
│       ├── TeamMembers.jsx    # Team grid with member cards
│       ├── Banner.jsx         # CTA banner section
│       ├── About.jsx          # About Us section
│       ├── FAQ.jsx            # Accordion FAQ
│       └── LenisProvider.jsx  # Lenis smooth-scroll context wrapper
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
└── README.md
```

---

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, services, solutions, projects carousel, team, FAQ |
| `/service` | Detailed breakdown of all development services offered |
| `/pricing` | Transparent pricing tiers, per-page pricing, add-ons, maintenance plans |
| `/project` | Portfolio of completed projects and case studies |
| `/feature` | Core features and capabilities of the Scalix platform |
| `/about` | Company story, mission, and values |
| `/contact` | Get in touch — inquiry form and contact details |

---

## 👥 Team

| Name | Role |
|---|---|
| **Hari Reshmi** | Manager & Coordinator |
| **Kanishq Gautam** | MERN Developer |
| **Srestha Mishra** | AI/ML Developer |
| **Kaushtubh Singh** | JS Developer |

---

## 🌐 Deployment

The fastest way to deploy is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/harireshmi22/scalix-web-agency)

Alternatively, deploy to any Node.js hosting provider that supports Next.js (Netlify, Railway, AWS Amplify, etc.).

---

## 📜 License

This project is private and proprietary. All rights reserved © 2025 Scalix.

---

<p align="center">
  Designed and developed with ❤️ by the <strong>Scalix Team</strong>
</p>
