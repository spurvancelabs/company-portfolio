# Spurvance Labs Frontend - Complete Specification

**Project**: Spurvance Labs Portfolio & Marketing Website  
**Framework**: Next.js 16.2.2 with React 19.2.4  
**Language**: TypeScript  
**Styling**: Tailwind CSS 4  
**Deployment**: Static Export (Shared Hosting)  
**Status**: Production Ready  

---

## 1. Project Overview

### Purpose
A modern, high-performance portfolio and marketing website for Spurvance Labs, a Pakistani technology company specializing in open-source software, DevOps, security, and tech training.

### Key Features
- **Responsive Design**: Mobile-first, works on all devices
- **Advanced Animations**: GSAP, Framer Motion, Three.js particle effects
- **Dark Mode**: System preference detection with localStorage persistence
- **Smooth Scrolling**: Lenis integration for enhanced UX
- **SEO Optimized**: Next.js metadata, semantic HTML
- **Accessibility**: ARIA labels, semantic components
- **Form Integration**: Web3Forms for contact and newsletter
- **Static Export**: Optimized for shared hosting environments

---

## 2. Technology Stack

### Core Dependencies
```json
{
  "next": "16.2.2",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "typescript": "^5",
  "tailwindcss": "^4"
}
```

### Animation & Graphics
- **framer-motion**: ^12.38.0 - React animation library
- **gsap**: ^3.15.0 - Professional animation platform
- **@gsap/react**: ^2.1.2 - GSAP React integration
- **@react-three/fiber**: ^9.6.1 - React renderer for Three.js
- **@react-three/drei**: ^10.7.7 - Useful helpers for Three.js
- **three**: ^0.184.0 - 3D graphics library

### Smooth Scrolling
- **@studio-freight/lenis**: ^1.0.42 - Smooth scroll library
- **lenis**: ^1.3.23 - Core Lenis package

### UI Components & Icons
- **lucide-react**: ^1.7.0 - Modern icon library
- **react-icons**: ^5.6.0 - Icon library (Font Awesome, etc.)

### Development Tools
- **eslint**: ^9
- **eslint-config-next**: 16.2.2
- **@tailwindcss/postcss**: ^4
- **@types/node**: ^20
- **@types/react**: ^19
- **@types/react-dom**: ^19
- **@types/three**: ^0.184.1

---

## 3. Project Structure

```
web/
├── app/                              # Next.js App Router
│   ├── page.tsx                     # Home page
│   ├── layout.tsx                   # Root layout
│   ├── globals.css                  # Global styles
│   ├── contact/page.tsx             # Contact form page
│   ├── services/page.tsx            # Services showcase
│   ├── products/page.tsx            # Products page
│   ├── products/nat/page.tsx        # NAT Chat product page
│   ├── cources/page.tsx             # Courses/training page
│   ├── internship/page.tsx          # Internship program page
│   ├── donate/page.tsx              # Donation page
│   └── about/page.tsx               # About page (not shown)
│
├── components/
│   ├── Navbar/
│   │   ├── Navbar.tsx               # Main navigation with dropdowns
│   │   └── Topbar.tsx               # Top announcement bar
│   ├── Footer/
│   │   └── Footer.tsx               # Footer with newsletter signup
│   ├── Home/
│   │   ├── index.ts                 # Barrel export
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx      # Hero with Three.js particles
│   │   │   ├── Scene.tsx            # Three.js scene component
│   │   │   ├── ParticleField.tsx    # Particle system
│   │   │   └── ConnectingLines.tsx  # Animated connecting lines
│   │   ├── marquee/
│   │   │   └── MarqueeSection.tsx   # Scrolling marquee
│   │   ├── features/
│   │   │   ├── FeaturesSection.tsx  # Features grid
│   │   │   ├── FeatureCard.tsx      # Individual feature card
│   │   │   └── features.data.tsx    # Feature data
│   │   ├── services/
│   │   │   ├── ServicesSection.tsx  # Services grid
│   │   │   ├── ServiceCard.tsx      # Service card component
│   │   │   └── services.data.ts     # Services data
│   │   ├── testimonials/
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   └── testimonials.data.ts
│   │   └── cta/
│   │       └── CTASection.tsx       # Call-to-action section
│   ├── Logo.tsx                     # Branding logo component
│   ├── BackToTop.tsx                # Scroll-to-top button
│   └── SmoothScrollProvider.tsx     # Lenis wrapper
│
├── lib/
│   └── gsap.ts                      # GSAP configuration & exports
│
├── types/
│   └── home.ts                      # TypeScript interfaces
│
├── public/                          # Static assets
│   ├── logo.png
│   ├── favicon.ico
│   ├── og-image.png
│   └── [other images]
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts (implied)
└── eslint.config.mjs
```

---

## 4. Page Structure & Routes

### Home Page (`/`)
**File**: `web/app/page.tsx`

**Sections**:
1. **HeroSection** - Animated hero with Three.js particles, gradient text, CTAs
2. **MarqueeSection** - Scrolling marquee with tech keywords
3. **FeaturesSection** - 4-column grid (Open Source, Cloud Native, Security, AI/ML)
4. **ServicesSection** - 4 service cards (Consulting, Development, Migration, AI Integration)
5. **TestimonialsSection** - 3 client testimonials
6. **CTASection** - Call-to-action with contact link

**Key Features**:
- Scroll-triggered animations (GSAP ScrollTrigger)
- Parallax effects
- Responsive grid layouts
- Dark theme with gradient accents

---

### Contact Page (`/contact`)
**File**: `web/app/contact/page.tsx`

**Sections**:
1. **Hero** - Title and description
2. **Contact Info** - Email, phone, WhatsApp, social links
3. **Contact Form** - Web3Forms integration
4. **Quick Response Promise** - 3-column stats
5. **FAQ** - 6 frequently asked questions
6. **Open Source CTA** - GitHub link

**Form Fields**:
- Full Name (required)
- Email (required)
- Company (optional)
- Service Interested In (dropdown)
- Message (required)

**Form Integration**: Web3Forms (access_key: 884ab7c4-a8d6-45a6-a68d-39a049470612)

---

### Services Page (`/services`)
**File**: `web/app/services/page.tsx`

**Sections**:
1. **Hero** - Title with scroll animation
2. **Stats** - 4 key metrics (5+ years, 40+ projects, 98% retention, 100% open source)
3. **Services Grid** - 4 service cards with detailed info
4. **Why Us** - 6 differentiators (Privacy-First, Open Source, Made in Pakistan, etc.)
5. **Process** - 4-step workflow visualization
6. **CTA** - Contact and WhatsApp buttons

**Services**:
- Enterprise Consulting
- Custom Development
- Cloud Migration
- AI Integration

---

### Products Page (`/products`)
**File**: `web/app/products/page.tsx`

**Sections**:
1. **Hero** - "Built for Privacy. Built for Freedom."
2. **NAT Chat** - Main product showcase with preview card
3. **AI Platform** - Coming soon section (blurred preview)
4. **Open Source Commitment** - 100% open source promise
5. **CTA** - GitHub link

**Products**:
- **NAT Chat** - End-to-end encrypted messaging (Preview Soon)
- **AI Platform** - Privacy-first AI with local processing (Under Development)

---

### NAT Chat Product Page (`/products/nat`)
**File**: `web/app/products/nat/page.tsx`

**Sections**:
1. **Hero** - Product title and description
2. **Features** - 4 key features (Privacy-First, Open Ecosystem, Modern Messaging, Community Driven)
3. **Waitlist Form** - Email signup with Web3Forms
4. **FAQs** - 4 questions about NAT
5. **Stats** - 2.8K+ supporters, Preview Soon, Privacy First

**Form Integration**: Web3Forms (access_key: 7bee7d3e-2c37-475c-b80a-a92f8b18633b)

---

### Courses Page (`/cources`)
**File**: `web/app/cources/page.tsx`

**Sections**:
1. **Hero** - "Master New Skills"
2. **Stats** - 6 courses, 4.8 rating, Growing community
3. **Filters** - Category and search filters
4. **Featured Course** - Full-Stack Web Development
5. **Course Grid** - 6 course cards
6. **Why Us** - 3 differentiators
7. **CTA** - WhatsApp enrollment

**Courses**:
1. Full Stack Web Development - Beginner, $25,000, 12 weeks
2. Cyber Security Essentials - Intermediate, $60,000, 12 weeks
3. React Native Mobile Development - Intermediate, $25,000, 10 weeks
4. Python Mastery - Beginner, $25,000, 8 weeks
5. AI & Machine Learning Bootcamp - Advanced, $50,000, 16 weeks
6. DevOps & Cloud Engineering - Intermediate, $25,000, 10 weeks

**Enrollment**: WhatsApp integration (phone: 923294171505)

---

### Internship Page (`/internship`)
**File**: `web/app/internship/page.tsx`

**Sections**:
1. **Hero** - "Launch Your Career With Purpose"
2. **Stats** - 200+ alumni, 87% conversion, 15+ countries, 4.9/5 NPS
3. **Programs** - 6 internship program cards
4. **Benefits** - 6 key benefits
5. **Testimonials** - 3 intern testimonials
6. **Process** - Application workflow
7. **FAQ** - 5 questions
8. **CTA** - Application form

**Programs**:
1. Web Development - Free, 12 weeks, 12 spots
2. DevOps & Cloud Engineering - Paid, 16 weeks, 6 spots
3. Machine Learning Engineering - Paid, 20 weeks, 4 spots
4. Growth Marketing - Free, 8 weeks, 15 spots
5. Product Design - Free, 12 weeks, 10 spots
6. Cybersecurity Operations - Paid, 16 weeks, 5 spots

**Application Form**: Web3Forms (access_key: 427eccc7-f494-4c38-a3f1-57cb47c7c379)

---

### Donate Page (`/donate`)
**File**: `web/app/donate/page.tsx`

**Sections**:
1. **Hero** - "Fund the Future of Digital Freedom"
2. **Impact Stats** - 5,000+ users, 100% open source, 24/7 privacy, 50+ contributors
3. **Donation Tiers** - 4 tier options ($10, $25, $50, $100)
4. **Billing Toggle** - Monthly/Yearly with 10% annual discount
5. **What Your Support Funds** - 4 categories
6. **Open Source Promise** - 100% transparency
7. **Enterprise Sponsorship** - Custom packages

**Donation Tiers**:
- $10/month - Supporter
- $25/month - Builder
- $50/month - Guardian (Most Popular)
- $100/month - Visionary

**Donation Processing**: WhatsApp integration (phone: 923294171505)

---

## 5. Component Architecture

### Layout Components

#### `RootLayout` (`app/layout.tsx`)
- Wraps entire app with providers
- Includes Navbar, Footer, BackToTop
- Applies SmoothScrollProvider
- Sets global metadata

#### `SmoothScrollProvider` (`components/SmoothScrollProvider.tsx`)
- Wraps children with Lenis smooth scroll
- Respects `prefers-reduced-motion` for accessibility
- Handles resize events

#### `Navbar` (`components/Navbar/Navbar.tsx`)
- Sticky navigation with glass effect
- Responsive mobile menu
- Dark mode toggle
- Dropdown menus for products
- Donate button
- ~800 lines of complex state management

#### `Footer` (`components/Footer/Footer.tsx`)
- Company info and branding
- Newsletter signup (Web3Forms)
- Social links (GitHub, Twitter, LinkedIn, Instagram, Facebook, WhatsApp)
- Contact info
- Company links

#### `BackToTop` (`components/BackToTop.tsx`)
- Floating button that appears after 400px scroll
- Smooth scroll to top
- Gradient background

---

### Home Page Components

#### `HeroSection` (`components/Home/hero/HeroSection.tsx`)
- Three.js canvas background with particle system
- Gradient overlays
- Grid pattern background
- Scroll-triggered animations
- Parallax text effects
- CTA buttons

#### `Scene` (`components/Home/hero/Scene.tsx`)
- Three.js scene setup
- Particle field rendering
- Lighting configuration

#### `MarqueeSection` (`components/Home/marquee/MarqueeSection.tsx`)
- Infinite scrolling marquee
- Tech keywords: Open Source, Cloud Native, AI/ML, DevOps, Cybersecurity
- CSS animation

#### `FeaturesSection` (`components/Home/features/FeaturesSection.tsx`)
- 2-column grid (responsive)
- GSAP ScrollTrigger animations
- Staggered card entrance

#### `FeatureCard` (`components/Home/features/FeatureCard.tsx`)
- Icon, title, description
- Stat display (e.g., "50+ Active Repositories")
- Hover effects

#### `ServicesSection` (`components/Home/services/ServicesSection.tsx`)
- 2-column grid with gap separator
- Service cards with features list

#### `ServiceCard` (`components/Home/services/ServiceCard.tsx`)
- Service number, title, description
- Feature list with checkmarks
- Arrow icon on hover

#### `TestimonialsSection` (`components/Home/testimonials/TestimonialsSection.tsx`)
- 3-column grid
- GSAP staggered animations

#### `TestimonialCard` (`components/Home/testimonials/TestimonialCard.tsx`)
- 5-star rating
- Quote text
- Author info with avatar

#### `CTASection` (`components/Home/cta/CTASection.tsx`)
- Large heading with gradient
- Description
- Contact CTA button

---

### Utility Components

#### `Logo` (`components/Logo.tsx`)
- Configurable sizes (sm, md, lg)
- Optional tagline
- Optional link wrapper
- Responsive text sizing

#### `ScrollToTop` (`components/ScrollToTop.tsx`)
- Alias for BackToTop

---

## 6. Data Structures & Types

### `types/home.ts`
```typescript
interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

interface Product {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  stars: string;
  color: string;
}

interface Service {
  number: string;
  title: string;
  description: string;
  features: string[];
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}
```

### Data Files

#### `features.data.tsx`
- 4 features with icons, stats, descriptions
- Icons: Code2, Zap, Shield, Cpu

#### `services.data.ts`
- 4 services with descriptions and features
- Numbers: 01-04

#### `testimonials.data.ts`
- 3 testimonials from Jazz Digital, Careem, Telenor

---

## 7. Styling & Design System

### Tailwind Configuration
- **Color Scheme**: Dark-first (gray-950 background)
- **Accent Colors**: Indigo, Cyan, Violet, Emerald
- **Typography**: Bold headings, medium body text
- **Spacing**: 8px base unit
- **Rounded Corners**: 2xl (16px) for cards, xl (12px) for buttons

### Global Styles (`app/globals.css`)
- Lenis smooth scroll integration
- Custom scrollbar styling
- Marquee animation keyframes
- Selection color (indigo with transparency)
- Grid pattern background utility

### Dark Mode
- System preference detection
- localStorage persistence
- CSS class-based toggle (`dark:` prefix)
- Smooth transitions

---

## 8. Animation & Interactions

### GSAP Animations
- **ScrollTrigger**: Scroll-based animations
- **Stagger**: Sequential element animations
- **Easing**: Custom easing functions

### Framer Motion
- **Initial/Animate/Exit**: Component lifecycle animations
- **WhileInView**: Trigger animations on scroll
- **Variants**: Reusable animation patterns
- **AnimatePresence**: Exit animations

### Three.js
- **Particle System**: Animated particles in hero
- **Lighting**: Ambient and directional lights
- **Camera**: Perspective camera with FOV

### CSS Animations
- **Marquee**: Infinite horizontal scroll
- **Pulse**: Animated dots
- **Blob**: Morphing background shapes

---

## 9. Forms & Integrations

### Web3Forms Integration
Used for contact forms across multiple pages:

**Endpoints**:
- Contact Form: `884ab7c4-a8d6-45a6-a68d-39a049470612`
- NAT Waitlist: `7bee7d3e-2c37-475c-b80a-a92f8b18633b`
- Internship Application: `427eccc7-f494-4c38-a3f1-57cb47c7c379`

**Features**:
- Email validation
- Success/error states
- Loading indicators
- Automatic field clearing on success

### Newsletter Signup
- Footer integration
- Email collection
- Web3Forms submission
- Success message display

### WhatsApp Integration
- Internship enrollment
- Course enrollment
- Donation processing
- Pre-filled messages

---

## 10. Performance Optimizations

### Next.js Configuration
```typescript
// next.config.ts
{
  output: 'export',           // Static export
  images: { unoptimized: true }, // No image optimization
  trailingSlash: true,        // Clean URLs
  distDir: 'out'              // Output directory
}
```

### Image Optimization
- Unoptimized images (shared hosting compatibility)
- Next.js Image component with `unoptimized` prop
- Static assets in `/public`

### Code Splitting
- Dynamic imports for heavy components
- Lazy loading with Suspense
- Route-based code splitting

### Bundle Size
- Tree-shaking enabled
- Unused CSS purged by Tailwind
- Minimal dependencies

---

## 11. SEO & Metadata

### Root Metadata (`app/layout.tsx`)
```typescript
export const metadata: Metadata = {
  title: "Spurvance Labs",
  description: "Building Digital Pakistan",
};
```

### Features
- Semantic HTML structure
- Proper heading hierarchy
- Alt text on images
- Open Graph meta tags
- Favicon and web app manifest

---

## 12. Accessibility

### WCAG Compliance
- Semantic HTML (`<main>`, `<section>`, `<nav>`)
- ARIA labels on interactive elements
- Color contrast ratios
- Keyboard navigation support
- Focus indicators

### Accessibility Features
- `prefers-reduced-motion` support in Lenis
- Alt text on all images
- Form labels and error messages
- Skip links (implied)

---

## 13. Build & Deployment

### Build Process
```bash
npm run build    # Next.js build → static export
npm run export   # Alias for build
npm run dev      # Development server
npm run lint     # ESLint check
npm run clean    # Remove build artifacts
```

### Output
- Static HTML/CSS/JS in `/out` directory
- No server-side rendering required
- Compatible with shared hosting
- Can be deployed to any static host

### Environment Variables
```
NEXT_PUBLIC_API_URL=https://api.spurvancelabs.com
```

---

## 14. Known Issues & Limitations

### Current State
- `legalLinks` variable declared but unused in Footer
- `FormEvent` deprecated warning in Footer
- Internship page truncated at 908 lines (incomplete in current view)
- About page not implemented

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2017+ JavaScript
- CSS Grid and Flexbox required

---

## 15. Development Guidelines

### Code Style
- TypeScript strict mode
- Functional components with hooks
- Prop drilling minimized
- Reusable component patterns

### Component Patterns
```typescript
// Animation variant pattern
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" }
}

// Usage
<motion.div {...fadeUp}>Content</motion.div>
```

### Naming Conventions
- Components: PascalCase
- Files: PascalCase for components, camelCase for utilities
- CSS classes: kebab-case
- Variables: camelCase

---

## 16. Future Enhancements

### Potential Improvements
1. **Blog Section** - Content marketing
2. **Case Studies** - Detailed project showcases
3. **Team Page** - Meet the team
4. **Pricing Page** - Service pricing tiers
5. **API Documentation** - Developer resources
6. **Search Functionality** - Site-wide search
7. **Analytics** - User behavior tracking
8. **A/B Testing** - Conversion optimization
9. **Internationalization** - Multi-language support
10. **PWA Features** - Offline support

---

## 17. Maintenance & Support

### Regular Tasks
- Update dependencies quarterly
- Monitor performance metrics
- Review analytics
- Update testimonials and case studies
- Maintain form integrations
- Test across browsers

### Monitoring
- Lighthouse scores
- Core Web Vitals
- Form submission rates
- Newsletter signup rates
- Page load times

---

## 18. Quick Reference

### Key Files to Modify
- **Home Page**: `app/page.tsx`
- **Navigation**: `components/Navbar/Navbar.tsx`
- **Footer**: `components/Footer/Footer.tsx`
- **Styles**: `app/globals.css`
- **Config**: `next.config.ts`, `tsconfig.json`

### Common Tasks
- **Add Page**: Create folder in `app/`, add `page.tsx`
- **Add Component**: Create in `components/`, export from index
- **Update Data**: Modify `.data.ts` files
- **Change Colors**: Update Tailwind classes
- **Add Animation**: Use Framer Motion or GSAP

---

## 19. Contact & Support

**Website**: https://spurvancelabs.com  
**Email**: info@spurvancelabs.com  
**WhatsApp**: +92 329 4171505  
**GitHub**: https://github.com/spurvancelabs  

---

**Last Updated**: May 2026  
**Version**: 1.0.0  
**License**: AGPL-3.0-or-later
