<p align="center">
  <img src="public/logo.jpeg" alt="Scalix Logo" width="80" height="80" style="border-radius: 50%;" />
</p>

<h1 align="center">Scalix — Website Development Agency</h1>

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

**Scalix** is a premium, modern web agency website showcasing bespoke digital services — custom website development, frontend/backend engineering, UI/UX designs, and secure hosting deployments. The codebase is highly optimized for Google search index rankings, utilizing strict semantic HTML guidelines, automated sitemaps, responsive media formatting, and interactive JSON-LD structured schema blocks for search engine result integration.

---

## 🎯 Features

- **Immersive Hero Section** — Bold typographic headline with ambient glowing orbs, mesh-grid backdrop, and scroll-driven entrance animations.
- **Smooth Scrolling** — Lenis-powered buttery-smooth scrolling experience across the entire site.
- **Interactive Project Showcase** — Swiper-based carousel with touch-friendly project previews.
- **Comprehensive Services** — Dedicated sections for web solutions, development services, and why clients should choose Scalix.
- **Transparent Pricing Model** — Realigned packages based on project scope:
  - **Website Packages**: Starter (₹4,999 - ₹9,999), Professional (₹14,999 - ₹29,999), and Enterprise (₹39,999+) packages.
  - **Hosting Packages**: Basic (3 months), Standard (5 months), and Premium (12 months) reliable cloud hosting.
  - **Why Choose Scalix**: Custom value grid explaining core differentiators (Engineers, Bespoke Design, Security, Support).
- **Custom 404 Page** — Premium branded `not-found.tsx` catch-all route with custom styling, glows, and smooth subpage navigations.
- **Team Profiles** — Meet the people behind Scalix with an elegant team grid.
- **FAQ Accordion** — Expandable frequently asked questions with smooth open/close transitions.
- **SEO & Google Ranking Optimization**:
  - Strict **single-H1 hierarchy** per page for cleaner search indexing.
  - Interactive **JSON-LD FAQPage Rich Snippet schemas** embedded dynamically into the DOM.
  - Complete elimination of broken hash links in Footer/Banner navigation; upgraded to Next.js `<Link>` router paths.
- **PWA Ready** — Upgraded `manifest.ts` featuring orientation parameters, categories, maskable/any PWA icon arrays, and standalone scope alignment.
- **Glassmorphic Navigation** — Floating header with backdrop blur that adapts on scroll — transparent on top, frosted-glass on scroll.
- **Mobile-First Design** — Fully responsive from 320px to ultrawide displays with a polished hamburger menu.

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
| **Language** | Mixed: TypeScript and JSX (project contains .tsx/.jsx files) |
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

> [!TIP]
> **Windows Execution Policy / PowerShell Bypass**:
> If you are developing on Windows and encounter execution policy restrictions when running scripts (e.g., `npm run dev` or `npm run build`), you can run the commands using the Command Prompt shell wrapper:
> ```bash
> cmd /c npm run dev
> cmd /c npm run build
> cmd /c npm start
> ```

---


## 📁 Project Structure

```
scalix-web-agency/
├── public/                            # Static assets (images, icons, SVGs)
│   ├── logo.jpeg                      # Brand logo
│   ├── hero.png                       # Hero illustrations
│   ├── service.png                    # Service visuals
│   ├── solutions.png                  # Solutions artwork
│   └── ...                            # Project & team images
│
├── src/
│   ├── app/                           # Next.js App Router pages
│   │   ├── layout.tsx                 # Root layout (Header + LenisProvider + Footer + JSON-LD)
│   │   ├── page.tsx                   # Home page
│   │   ├── not-found.tsx              # Custom 404 page
│   │   ├── globals.css                # Global styles
│   │   ├── manifest.ts                # PWA Manifest configuration
│   │   ├── sitemap.ts                 # Dynamic sitemap generator
│   │   ├── robots.ts                  # SEO crawler rules
│   │   ├── icon.jpeg                  # Primary PWA/Favicon asset
│   │   ├── apple-icon.jpeg            # Apple touch icon asset
│   │   ├── about/                     # About page
│   │   ├── contact/                   # Contact page
│   │   ├── feature/                   # Features page
│   │   ├── pricing/                   # Pricing page (Starter/Pro/Enterprise, Hosting, FAQ Schema)
│   │   ├── project/                   # Projects page
│   │   └── service/                   # Services page
│   │
│   ├── components/                    # Reusable UI components
│   │   ├── Header.jsx                 # Glassmorphic floating navigation
│   │   ├── Footer.jsx                 # Full-width footer with Link routing
│   │   ├── Home.jsx                   # Hero section with metrics bar
│   │   ├── Services.jsx               # Services overview grid (fixed semantic headers)
│   │   ├── Service.jsx                # Individual service details (fixed semantic headers)
│   │   ├── Solutions.jsx              # Solutions showcase with image
│   │   ├── ChooseUs.jsx               # Why Choose Us section
│   │   ├── OurProject.jsx             # Project highlights
│   │   ├── OurService.jsx             # Our service philosophy
│   │   ├── ProjectSwipper.jsx         # Swiper carousel for projects (fixed H1 -> H2 header)
│   │   ├── ProjectSwipperClient.jsx   # Dynamic client-side wrapper for Swiper component
│   │   ├── TeamMembers.jsx            # Team grid with member cards
│   │   ├── Banner.jsx                 # CTA banner section
│   │   ├── About.jsx                  # About Us section
│   │   ├── FAQ.jsx                    # Accordion FAQ with Google FAQPage Schema
│   │   └── LenisProvider.jsx          # Lenis smooth-scroll context wrapper
│   │
│   └── lib/
│       └── fonts.js                   # Font definitions (Anton, Architects Daughter, Geologica)
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
| `/pricing` | Transparent website and hosting packages, value propositions, FAQ |
| `/project` | Portfolio of completed projects and case studies |
| `/feature` | Core features and capabilities of the Scalix platform |
| `/about` | Company story, mission, and values |
| `/contact` | Get in touch — inquiry form and contact details |
| *(unmatched)* | `not-found.tsx` fallback catches all invalid paths and displays custom UI |

---

## 👥 Team

| Name | Role |
|---|---|
| **Hari Reshmi** | Manager & Coordinator |
| **Kanishq Gautam** | Lead MERN Developer |
| **Srestha Mishra** | AI/ML Developer |
| **Kaushtubh Singh** | JS Developer |

---

## 🌐 Deployment

The fastest way to deploy is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/harireshmi22/scalix-web-agency)

Alternatively, deploy to Netlify, Railway, AWS Amplify, or any Node.js hosting platform.

---

## 🔍 Recent Upgrades & Audits

- **Search Engine Optimization (SEO)**:
  - Ensured only **one `<h1>` element** exists on the homepage (downgraded secondary elements in `ProjectSwipper.jsx`).
  - Swapped out small text badges in several components (`About`, `Services`, `FAQ`, `TeamMembers`) from header tags (`h2`/`h3`) to styled non-heading `span` tags.
  - Implemented dynamic **`FAQPage` JSON-LD structured data scripts** directly into FAQ modules to qualify for Google Rich snippet structures.
- **Link Auditing**: Fixed broken hash fragments in the footer and main banners. All navigations now use router-safe client-side `<Link>` components to `/service`, `/project`, `/about`, and `/contact`.
- **Pricing Overhaul**: Completely updated the pricing layout to showcase Starter, Professional, and Enterprise packages alongside duration-based Basic, Standard, and Premium hosting bundles.
- **PWA Alignment**: Custom manifest configurations have been updated to support standard portrait orientations, application categories, and a maskable icon configuration for cross-platform app wrappers.
- **Next.js 16 / React 19 Build Compatibility**: Tested and verified building via `npm run build` with clean compilation outputs across all static routes.

---

## 📜 License

This project is private and proprietary. All rights reserved © 2026 Scalix.

---

<p align="center">
  Designed and developed with ❤️ by the <strong>Scalix Team</strong>
</p>
