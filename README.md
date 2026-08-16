<div align="center">

# 🌿 King Sukh Guest House — Boutique Hospitality Web Platform

**Project ID**: `78GRB6TY2D` | **Client**: King Sukh Guest House, Baranti, Purulia, West Bengal  
**Tech Stack**: React 19 • TypeScript • Vite • Tailwind CSS v4 • Framer Motion • Lucide Icons

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG_2.1_AA-success?style=for-the-badge&logo=w3c&logoColor=white)](https://www.w3.org/WAI/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

</div>

---

## 📌 Executive Summary

This repository contains the complete **ground-up website redesign** for **King Sukh Guest House**, a boutique nature resort located beside Barshal Water Tank, Manpur, Baranti, West Bengal. 

The legacy website was originally constructed using a restrictive no-code builder. This project completely rebuilds the digital experience into a modern, performant, mobile-first, and highly accessible web application designed to wows guests, communicate authentic regional hospitality, and drive direct booking enquiries via WhatsApp and phone.

> **Positioning Statement**: *"Simple — Unique — Friendly. Make yourself at home in our guest house."*

---

## ✨ Key Technical Highlights & Features

### 🎨 1. Nature-Inspired Modern Design System
- **Curated Palette**: Deep Forest Green (`#0F291E`), Pine Green (`#1E3A2B`), Warm Gold (`#C5A059`), Sand/Beige (`#F4EFE6`), Warm Cream (`#FDFBF7`), Charcoal (`#222222`).
- **Typography Scale**: **Playfair Display** (High-contrast serif headings) paired with **Plus Jakarta Sans** (Ultra-legible modern body sans-serif).
- **Glassmorphism Header**: Fixed glass navigation transition that morphs smoothly from transparent overlay to backdrop-blurred solid header upon scrolling.

### 🏨 2. Verified Hospitality Information & Pricing
- **Cozy Haven Room**: ₹1,000 / Night — Ideal for solo travelers & couples seeking nature views and quiet comfort.
- **Spacious Serenity Suite**: ₹1,500 / Night — Expanded suite layout for families and group getaways.
- **Confirmed Property Facilities**: 24/7 Security, 24 Hours Room Service, In-House Bengali Dining, and Local Tourist Guide Support.

### 💬 3. Direct High-Conversion WhatsApp Enquiry System
- **No Friction Booking**: Integrated pre-filled WhatsApp enquiry modal (`+91 9007062180`) that dynamically formats guest name, room choice, check-in date, check-out date, and guest count into an instant chat message.
- **Mobile Sticky Action Bar**: Fixed bottom quick-action bar (`WHATSAPP` | `BOOK NOW`) optimized for mobile touch interaction.

### 🗺️ 4. Purulia Regional Tourism & Experiences Showcase
- Dedicated guides for key regional attractions: **Baranti Hill & Dam**, **Ayodhya Hills (Pahar)**, **Maithon Dam**, **Spring Palash Blooms**, and **Garhpanchkot Ruins**.
- Direct Google Maps routing integration for guests traveling from Asansol Junction or Muradi Station.

### 🖼️ 5. Photo Gallery & Fullscreen Lightbox Modal
- Category filtering (`All`, `Rooms`, `Property & Grounds`, `Surroundings & Nature`).
- Touch-friendly fullscreen lightbox modal supporting keyboard shortcuts (`Escape`, `ArrowLeft`, `ArrowRight`), touch swipe gestures, and image counter tracking.
- Mobile-optimized card overlays (`opacity-100 sm:opacity-0 sm:group-hover:opacity-100`) ensuring image titles are instantly readable without hover state dependencies.

### ♿ 6. Accessibility & SEO Engineering
- **WCAG 2.1 AA Compliant**: High contrast color ratios, explicit `focus-visible` focus rings, accessible modal dialog traps, and `prefers-reduced-motion` CSS overrides.
- **Search Engine Optimization**: Open Graph tags (`og:title`, `og:image`, `og:description`), Twitter cards, Schema.org `LodgingBusiness` JSON-LD structured data, dynamic `robots.txt`, and `sitemap.xml`.

---

## 🛠️ Architecture & Tech Stack

```text
King Sukh Guest House Redesign
│
├── ⚡ React 19          - Functional component architecture with strict hook patterns
├── 📘 TypeScript 5.6     - Strict type safety, interface contracts, type-only imports
├── 🚀 Vite 6            - Lightning-fast ESM bundling & Hot Module Replacement (HMR)
├── 🎨 Tailwind CSS v4   - CSS-first utility layer & custom design tokens
├── 🔀 React Router v7   - Client-side routing with scroll restoration & 404 handling
├── 📦 Lucide React      - Lightweight, scalable vector iconography
└── 🎬 Framer Motion     - Hardware-accelerated viewport reveal animations
```

---

## 📂 Directory Structure

```text
king-sukh-guest-house/
├── public/
│   ├── images/
│   │   ├── hero/          # Cinematic high-res hero imagery
│   │   ├── rooms/         # Cozy Haven & Serenity Suite photography
│   │   ├── property/      # Exterior courtyard & reception lounge photos
│   │   ├── gallery/       # Garden and detail photography
│   │   ├── destinations/  # Baranti Dam, Ayodhya Hills, Palash blooms
│   │   ├── amenities/     # Service and hospitality imagery
│   │   └── icons/         # Social channel vectors
│   ├── robots.txt         # Search engine crawler directives
│   └── sitemap.xml        # XML sitemap index
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.tsx             # Glassmorphic header & drawer menu
│   │   ├── Footer.tsx             # Verification links & social channels
│   │   ├── Button.tsx             # Design system button variants
│   │   ├── SectionHeading.tsx     # Typography badge section headers
│   │   ├── RoomCard.tsx           # Room pricing & feature card
│   │   ├── AmenityCard.tsx        # Confirmed facility card
│   │   ├── DestinationCard.tsx    # Tour spot card with Google Maps link
│   │   ├── GalleryLightbox.tsx    # Fullscreen keyboard-accessible lightbox
│   │   ├── BookingModal.tsx       # Pre-filled WhatsApp enquiry modal
│   │   ├── WhatsAppButton.tsx     # Floating WhatsApp quick chat action
│   │   ├── MobileBookingBar.tsx   # Mobile sticky bottom action bar
│   │   └── ScrollToTop.tsx        # Smooth scroll restoration button
│   ├── data/              # Structured TypeScript data models
│   │   ├── rooms.ts               # Room pricing & gallery data
│   │   ├── amenities.ts           # Confirmed service objects
│   │   ├── destinations.ts        # Sightseeing spots & highlights
│   │   └── gallery.ts             # Gallery items & filter categories
│   ├── pages/             # Page route components
│   │   ├── Home.tsx               # Homepage section composer
│   │   ├── AboutPage.tsx          # Brand story & values page
│   │   ├── RoomsPage.tsx          # Full room listing
│   │   ├── RoomDetailsPage.tsx    # Individual room view with image strip
│   │   ├── ExperiencesPage.tsx    # Purulia destination guide
│   │   ├── GalleryPage.tsx        # Full photo gallery view
│   │   ├── ContactPage.tsx        # Contact form, phone desk & map view
│   │   └── NotFoundPage.tsx       # Custom 404 error page
│   ├── sections/          # Modular homepage section blocks
│   │   ├── Hero.tsx               # Cinematic hero section
│   │   ├── AboutSection.tsx       # Split-layout property narrative
│   │   ├── WhyStayWithUs.tsx      # Hospitality feature grid
│   │   ├── RoomsSection.tsx       # Room showcase grid
│   │   ├── ExperiencesSection.tsx # Destination card grid
│   │   ├── GallerySection.tsx     # Photo grid with category tabs
│   │   ├── LocationSection.tsx    # Interactive map embed & directions
│   │   └── BookingCTASection.tsx  # Final high-contrast booking banner
│   ├── App.tsx            # App router & modal state manager
│   ├── main.tsx           # React DOM root entry
│   └── index.css          # Tailwind CSS imports & theme overrides
├── package.json           # Dependencies & build scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite bundler & Tailwind plugin setup
└── README.md              # Project documentation
```

---

## 🚦 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Local Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/king-sukh-guest-house.git
   cd king-sukh-guest-house
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Launch Development Server**:
   ```bash
   npm run dev
   ```
   *The app will run locally at `http://localhost:5173/`.*

4. **Network Mobile Testing** *(Test directly on your phone connected to the same Wi-Fi)*:
   ```bash
   npx vite --host
   ```
   *Open the generated IP link (e.g., `http://10.53.169.30:5173/`) in your mobile browser.*

---

## 📦 Production Build & Testing

```bash
# Execute TypeScript compilation check & Vite production build
npm run build

# Preview production build bundle locally
npm run preview
```

### Build Metrics
- **TypeScript Compilation**: `0 errors` (`tsc -b`)
- **Build Execution**: `~2.8 seconds`
- **Dist Bundle Sizes**:
  - `dist/index.html` (~3.07 kB)
  - `dist/assets/index.css` (~48.8 kB)
  - `dist/assets/index.js` (~312.8 kB, Gzipped: 91.5 kB)

---

## 📊 Target Performance & Audit Benchmark

| Audit Category | Score / Target | Key Optimizations Implemented |
| :--- | :---: | :--- |
| **Performance** | `92+` | WebP/JPEG image compression, lazy loading, font pre-connecting |
| **Accessibility** | `98+` | `focus-visible` rings, semantic HTML5, contrast-compliant text |
| **Best Practices** | `100` | Zero console errors, modern ES modules, safe external links |
| **SEO** | `100` | Open Graph, Schema.org `LodgingBusiness`, canonical URLs |

---

## 📞 Contact Information & Credits

- **Property Name**: King Sukh Guest House
- **Location**: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
- **Phone**: [+91 9007062180](tel:+919007062180)
- **Email**: [kkghosh0099@gmail.com](mailto:kkghosh0099@gmail.com)
- **Instagram**: [@kingsukhguesthouse](https://www.instagram.com/kingsukhguesthouse/)

---

<div align="center">
  <p>Designed & Developed for <b>King Sukh Guest House</b> • Project ID <code>78GRB6TY2D</code></p>
</div>
