# Tokenode.ai Website - Source Code Guide

## 📁 Project Structure

```
tokenode-website/
├── client/                          # Frontend React application
│   ├── public/                      # Static files (favicon, robots.txt)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Main landing page (MAIN FILE TO EDIT)
│   │   │   └── NotFound.tsx        # 404 page
│   │   ├── components/
│   │   │   └── ui/                 # shadcn/ui components
│   │   ├── contexts/               # React contexts
│   │   ├── hooks/                  # Custom React hooks
│   │   ├── lib/                    # Utility functions
│   │   ├── App.tsx                 # Main app component with routing
│   │   ├── main.tsx                # React entry point
│   │   └── index.css               # Global styles (THEME CONFIGURATION)
│   └── index.html                  # HTML template
├── server/                          # Express server (for static deployment)
├── shared/                          # Shared types and constants
├── package.json                     # Dependencies
├── vite.config.ts                   # Vite configuration
├── tsconfig.json                    # TypeScript configuration
└── ideas.md                         # Design brainstorm document
```

## 🎨 Key Files to Modify

### 1. **Home Page** (`client/src/pages/Home.tsx`)
This is the main landing page. It includes:
- Navigation bar
- Hero section with parallax scrolling
- How It Works section
- Features section
- Pricing section
- Partners section
- CTA section
- Footer

**To modify content:**
- Update text, headings, and descriptions
- Change button labels and links
- Modify section content

### 2. **Global Styles** (`client/src/index.css`)
Contains:
- Tokenode neon cyberpunk theme colors
- Typography system (Space Grotesk, Inter, JetBrains Mono)
- Custom CSS utilities (neon-glow, neon-border, grid-background)
- Dark theme configuration

**To customize:**
- Change color palette (primary, secondary, background, etc.)
- Modify font families
- Adjust spacing and radius values

### 3. **App Configuration** (`client/src/App.tsx`)
- Route definitions
- Theme provider setup
- Global layout wrapper

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Navigate to project directory
cd tokenode-website

# Install dependencies
pnpm install
# or
npm install

# Start development server
pnpm dev
# or
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
pnpm build
# or
npm run build
```

## 🎯 Common Modifications

### Change Colors
Edit `client/src/index.css` in the `:root` section:
```css
:root {
  --primary: #7C3AED;           /* Electric Purple */
  --secondary: #00D4AA;         /* Fluorescent Cyan */
  --background: #0F0F1A;        /* Deep Navy */
  --foreground: #F5F5F5;        /* Light Gray */
}
```

### Update Hero Section Text
In `client/src/pages/Home.tsx`, find the Hero section and modify:
```tsx
<h1 className="text-5xl lg:text-6xl font-bold leading-tight">
  Unleash Your <span className="text-primary">GPU's</span> Potential
</h1>
```

### Change Navigation Links
Update the navigation bar in Home.tsx:
```tsx
<a href="#how-it-works" className="...">How It Works</a>
```

### Modify Pricing Plans
Find the pricing section and update the plan array:
```tsx
{
  name: "Standard",
  price: "10%",
  desc: "For individual developers",
  features: [/* ... */],
}
```

### Update Images/Assets
Replace image URLs in the code:
```tsx
<img
  src="https://d2xsxph8kpxj0f.cloudfront.net/..."
  alt="Description"
/>
```

## 🎨 Design System

### Color Palette
- **Primary (Electric Purple)**: `#7C3AED` - Main CTAs, headings
- **Secondary (Fluorescent Cyan)**: `#00D4AA` - Accents, hover states
- **Background**: `#0F0F1A` - Dark canvas
- **Text**: `#F5F5F5` - Light gray for readability
- **Muted**: `#2D2D44` - Secondary text, borders

### Typography
- **Headings**: Space Grotesk (bold, geometric)
- **Body**: Inter (clean, readable)
- **Code**: JetBrains Mono (monospace)

### Component Classes
- `.neon-glow` - Purple glow effect
- `.neon-glow-cyan` - Cyan glow effect
- `.neon-border` - Purple border with glow
- `.neon-border-cyan` - Cyan border with glow
- `.grid-background` - Subtle grid pattern

## 📦 Dependencies

Key packages used:
- **React 19** - UI framework
- **Tailwind CSS 4** - Utility-first CSS
- **shadcn/ui** - Pre-built UI components
- **Lucide React** - Icon library
- **Framer Motion** - Animation library
- **Wouter** - Client-side routing

## 🔧 Available Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm preview    # Preview production build
pnpm check      # TypeScript type checking
pnpm format     # Format code with Prettier
```

## 📝 Adding New Sections

1. Create a new section component in `Home.tsx`
2. Use consistent styling with existing sections
3. Apply neon effects using `.neon-glow` or `.neon-border` classes
4. Ensure responsive design with `grid-cols-1 md:grid-cols-*`

Example:
```tsx
<section className="py-20 border-t border-border">
  <div className="container">
    <h2 className="text-4xl font-bold mb-4">New Section</h2>
    {/* Content */}
  </div>
</section>
```

## 🎬 Animation Guidelines

- Use Framer Motion for complex animations
- Keep animations under 300ms for UI interactions
- Use `transition-all duration-300` for smooth hover effects
- Respect `prefers-reduced-motion` for accessibility

## 🚀 Deployment

The site is built as a static React application and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build output is in the `dist/` directory after running `pnpm build`.

## 📞 Support

For questions about:
- **React/TypeScript**: Check React documentation
- **Tailwind CSS**: Visit tailwindcss.com
- **shadcn/ui**: Visit ui.shadcn.com
- **Lucide Icons**: Visit lucide.dev

## 📄 License

This project is proprietary to Tokenode.ai.

---

**Last Updated**: June 14, 2026
**Design**: Neon Cyberpunk Theme
**Version**: 1.0.0
