# QENAI - Quest for the Next AI

QENAI is Kenya's leading AI automation agency, delivering enterprise-grade AI workflow automation and custom AI models built specifically for African businesses ready to scale.

## About

QENAI helps businesses transform their operations through intelligent automation and AI solutions. We specialize in making complex AI accessible and practical for African markets.

## Tech Stack

- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI primitives with custom neumorphic design system
- **Deployment:** Optimized for Vercel

## Features

- Server-side rendered pages for optimal SEO
- Neumorphic design system with custom UI components
- Fully responsive mobile-first design
- Google Analytics integration
- Structured data (JSON-LD) for enhanced search visibility
- AI-powered chat widget integration

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

## Project Structure

```
qenai/
├── app/                    # Next.js App Router pages
│   ├── assessment/         # AI Assessment tool
│   ├── audit/             # Free AI Audit page
│   ├── blog/              # Blog posts
│   ├── contact/           # Contact form
│   ├── faq/               # Frequently Asked Questions
│   ├── resources/         # Resources hub
│   ├── services/          # Service pages (automation, custom models, etc.)
│   ├── solutions/         # Industry solutions
│   ├── story/             # Company story
│   ├── team/              # Team members
│   ├── technology/        # Technology overview
│   ├── values/            # Company values
│   ├── layout.tsx         # Root layout with analytics
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── seo/              # SEO components (schemas, breadcrumbs)
│   ├── team/             # Team member cards
│   ├── ui/               # Reusable UI components (neumorphic design)
│   ├── ChatWidget.tsx    # AI chat interface
│   ├── Footer.tsx        # Site footer
│   └── Header.tsx        # Navigation header
├── lib/                   # Utilities
│   └── utils.ts          # Helper functions
└── public/               # Static assets
    ├── team/             # Team member photos
    ├── favicon.svg       # Site icon
    └── qenai-logo.png    # Company logo
```

## Analytics

The site includes Google Analytics tracking with ID: `G-6Y5EHT3TSR`

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy with default Next.js settings

Vercel will automatically detect the Next.js configuration and deploy with optimal settings.

### Manual Deployment

```bash
# Build production bundle
npm run build

# Start production server
npm start
```

The production build will be available in the `.next` folder.

## Development

```bash
# Run development server with hot reload
npm run dev

# Run linter
npm run lint
```

## License

© 2025 QENAI. All rights reserved.

## Contact

- Website: [qenai.com](https://qenai.com)
- Email: Contact through website form
- LinkedIn: Connect with our founders
  - [Martin Maina](https://www.linkedin.com/in/martinxmaina/)
  - [Glory Munoru](https://www.linkedin.com/in/glory-munoru-93020b147/)
