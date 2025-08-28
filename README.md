# JUSTWYNN

The ultimate gaming platform for token launches and competitions.

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Google Fonts**: Orbitron (headings) and Inter (body text)

## Design Tokens

- **Brand**: `#4E6A54` - Primary brand color
- **Background**: `#000000` - Dark background
- **Text**: `#E6F2E7` - Light text color
- **Muted**: `#9FB6A5` - Secondary text color
- **Glow**: `rgba(78,106,84,0.45)` - Glow effect color

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and theme configuration
│   ├── layout.tsx           # Root layout with Navbar and Footer
│   └── page.tsx             # Home page
└── components/
    ├── Navbar.tsx           # Navigation component
    └── Footer.tsx           # Footer component
```

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Custom Theme**: Dark theme with brand-specific colors
- **Typography**: Orbitron for headings (700/800) and Inter for body text (400/600)
- **Navigation**: Full navigation with mobile hamburger menu
- **Glow Effects**: Custom glow effects for brand elements

## Navigation Links

- Home
- Features
- The House
- Milestone Games
- The House Cup
- Hall of Fame
- FAQ
- Get Started
- Launch a Token (CTA)

## Development

- **Linting**: ESLint configured
- **TypeScript**: Strict type checking enabled
- **Tailwind**: Custom configuration with brand tokens