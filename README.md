# House of Tea | بيت الشاي 🍵

> **"Feel The Power of Tea Since 2000"**  
> An iconic modern web experience showcasing the heritage, signature menu, branches, and global franchise opportunities of House of Tea.

---

## 🌟 Overview

**House of Tea (بيت الشاي)** is a premier tea and cafe brand born in 2000 in the GCC. Renowned for its authentic Karak Chai, Royal Saffron Tea, fresh street bites, and warm hospitality, House of Tea has grown into a household favorite with dozens of branches across the UAE.

This website is a fast, responsive, and beautifully animated web application designed to deliver an engaging digital storefront for customers and prospective franchise partners.

---

## ✨ Features & Highlights

- **Hero Experience**: Bold visual landing with quick navigation to branch locations and signature beverages.
- **Signature Menu & Offerings**:
  - Traditional Karak Chai & Milk Teas
  - Royal Saffron & Specialty Teas
  - Organic Green & Herbal Infusions
  - Refreshing Lemon Mint & Iced Teas
- **Interactive Branch Directory**:
  - Filterable by region and city (Dubai, Sharjah, Ajman, etc.)
  - Real-time opening hours, full addresses, and direct Google Maps navigation links.
  - Quick contact via WhatsApp and phone.
- **Brand Story & Heritage**: Celebrating over two decades of culinary tradition, handcrafted brewing techniques, and premium spices.
- **Franchise Opportunities**: Comprehensive guide and contact portal for prospective regional and international franchise partners.
- **Curated Visual Gallery**: High-resolution showcase highlighting cafe ambiance, tea craftsmanship, and guest experiences.
- **Bilingual Typography & Micro-Interactions**: Optimized with Google Fonts (`Cairo`, `Outfit`, `Inter`) for Arabic and Latin aesthetic balance, powered by smooth Framer Motion reveal animations.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | [React 18](https://react.dev/) |
| **Build Tool & Bundler** | [Vite](https://vitejs.dev/) |
| **Styling & Design System** | [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS |
| **Animations & Motion** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Deployment / Edge** | [Cloudflare Pages / Workers](https://developers.cloudflare.com/pages/) (`wrangler.jsonc`) |

---

## 📁 Project Structure

```text
franchise-app/
├── base44/                  # Base44 configuration & data schemas
├── public/                  # Static assets (images, logos, redirects)
│   ├── assets/images/       # High-res branch, product, and gallery photos
│   ├── _headers             # Cloudflare Pages security & caching headers
│   └── _redirects           # Client-side routing redirects
├── src/
│   ├── api/                 # API service helpers
│   ├── components/
│   │   ├── branches/        # Branch cards and directory components
│   │   ├── common/          # Logo and shared branding components
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Hero, About, Products, Story, Branches, Franchise, Gallery
│   │   └── ui/              # Reusable UI primitives (Buttons, Dialogs, Toasts, etc.)
│   ├── data/                # Static data (branches, menus, stories)
│   ├── lib/                 # Utility functions
│   ├── App.jsx              # Main application shell & section routing
│   ├── index.css            # Global design tokens and styles
│   └── main.jsx             # React DOM entry point
├── index.html               # HTML5 document template with font preloads
├── package.json             # NPM dependencies & scripts
├── vite.config.js           # Vite build configuration
└── wrangler.jsonc           # Cloudflare Pages / Workers deployment config
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.0.0 or later) and **npm** installed on your system.

### 1. Clone the Repository

```bash
git clone https://github.com/risvin33/house-of-tea.git
cd house-of-tea
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to explore the live development version with hot-module reloading.

### 4. Build for Production

```bash
npm run build
```

This compiles optimized static assets into the `dist/` directory ready for deployment.

### 5. Preview Production Build

```bash
npm run preview
```

---

## ☁️ Deployment

### Cloudflare Pages / Workers

The project includes `wrangler.jsonc` pre-configured to deploy the static build:

```bash
# Deploy using Wrangler CLI
npx wrangler pages deploy dist
```

Or connect the GitHub repository directly to **Cloudflare Pages** dashboard with the following build settings:
- **Framework Preset**: Vite
- **Build command**: `npm run build`
- **Build output directory**: `dist`

---

## 📄 License

This project is proprietary and developed for **House of Tea (بيت الشاي)**. All rights reserved.
