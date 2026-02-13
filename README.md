# Asiash Beauty Age

Official website for **Asiash Beauty Age** (Arabic, RTL) built with Next.js App Router.

## Live Site

- https://asiashbeautyage.vercel.app/

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- GSAP (`gsap` + `@gsap/react`)

## Features

- Mobile-first responsive sections
- RTL Arabic layout (`lang="ar"`, `dir="rtl"`)
- Subtle GSAP animations with reduced-motion fallback
- Contact section with map + Waze + Google Maps + Instagram/WhatsApp
- Floating WhatsApp button


## Project Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    sitemap.ts
    robots.ts
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    BeforeAfter.tsx
    Testimonial.tsx
    Services.tsx
    Contact.tsx
    Footer.tsx
    FloatingWhatsAppButton.tsx
  constants/
    index.ts
public/
  images/
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open: `http://localhost:3000`

### 3. Lint

```bash
npm run lint
```

### 4. Production build

```bash
npm run build
npm run start
```

## Content Updates

- Navigation labels, services, testimonials, contact links:
  - `src/constants/index.ts`
- Main section UI/layout:
  - `src/components/*`
- Global color palette and shared utility classes:
  - `src/app/globals.css`


## Deployment

Deployed on Vercel. Push to the connected branch to trigger a new deployment.

Recommended Vercel env var:

- `NEXT_PUBLIC_SITE_URL=https://asiashbeautyage.vercel.app`
