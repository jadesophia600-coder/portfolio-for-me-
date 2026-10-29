# Alex Vance // Premium Creative Developer Portfolio

An award-winning, editorial personal portfolio website engineered for ambitious web developers, creative technologists, and digital studios.

Designed with a high-fashion editorial aesthetic, warm ivory canvas, deep obsidian typography, and high-voltage Electric Studio Cobalt (`#1447E6`) and Acid Lime (`#CEF241`) accents.

---

## ✦ Core Design & Architectural Highlights

1. **Signature Editorial Art Direction**:
   - Oversized brutalist-editorial typography pairing modern geometric sans (`Plus Jakarta Sans`), editorial serif accents (`Playfair Display`), and technical monospaced metadata (`JetBrains Mono`).
   - Architectural grid background and rich ambient diffusion glows.
   - Distinctive electric cobalt accent system with micro-badges and live beacons.

2. **Asymmetric 3D Hero Experience**:
   - Signature Headline: *"I BUILD DIGITAL EXPERIENCES THAT MOVE BUSINESSES FORWARD."*
   - Live timezone clock and pulsing availability beacon (`● AVAILABLE FOR COMMISSIONS`).
   - Layered browser window with interactive mode toggle: **Visual Preview** vs. **Live Component Code**.
   - Overlapping mobile device viewport displaying responsive layout hierarchy.
   - Dual conversion CTAs with smooth anchor scrolling.

3. **Interactive Project Browser Showcase**:
   - Websites presented as realistic browser mockups with realistic window chrome, URL bars, tabs, and simulated live previews.
   - Interactive viewport toggle allowing clients to switch between **Desktop (1440px)** and **Mobile (375px)** device mockups on the fly.
   - Live interactive widgets inside mockups (e.g. coffee roaster bag weight selector, real-time FX socket simulator, audio frequency visualizer).
   - Clear project metrics (e.g., `+215% Inquiries`, `100/100 Lighthouse`, `<16ms Latency`).

4. **Experimental Repertory & Archive**:
   - Dynamic category filter tabs: *All Projects*, *Website Development*, *Web Applications*, *E-Commerce*, and *AI-Powered Websites*.
   - Asymmetric layout featuring alternating 7-column and 5-column editorial cards with project index counters (`[ 01 // 06 ]`).
   - Smooth hover elevation and perspective transitions.

5. **Deep-Dive Case Study Modal System**:
   - Accessible keyboard-controlled modal (`ESC` or backdrop click to dismiss).
   - Breakdown of **The Core Challenge**, **Architectural Solution**, **Deliverables Checklist**, and **Tech Stack Badges**.
   - Direct links to live website and code repository.

6. **Capabilities & Commercial Value Delivery**:
   - 6 detailed capability breakdowns explaining how each service drives real business outcomes (Conversion Lift, Low Churn, Sub-second FCP, Zero Technical Debt).
   - Interactive accordion with expandable technical specifications.

7. **Engineering Stack & 4-Step Production Workflow**:
   - 4-column categorized technology matrix (Frontend Architecture, Backend & Databases, AI & Emerging APIs, Infrastructure & DevOps).
   - Clear 4-phase execution roadmap (*Discovery & Architecture → Prototyping & Motion → Production Engineering → Audit & Launch*).

8. **Authentic Studio Manifesto & Client FAQ**:
   - Studio principles (*Speed is a Feature*, *Design & Engineering Symbiosis*).
   - Transparent client FAQ answering typical onboarding, pricing, timeline, and collaboration questions.

9. **High-Conversion Commission Brief Engine**:
   - Interactive enquiry form with dynamic project type tags and budget range selectors.
   - Real-time client-side validation and visual feedback state.
   - One-click copy email button with toast notification (`Copied to clipboard!`).
   - Direct `mailto:` client fallback generator prefilled with all user inputs.

10. **Refined Interactions & Accessibility**:
    - Subtle custom cursor with smooth magnetic follower (auto-disabled on touch devices).
    - Respects `prefers-reduced-motion` and WCAG AA contrast standards.
    - Floating docked navbar that compresses on scroll.

---

## 🛠️ Tech Stack

- **Framework**: React 18 / Vite 6 / TypeScript
- **Styling**: Tailwind CSS / PostCSS / Autoprefixer
- **Motion & Interactions**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Plus Jakarta Sans, Playfair Display, JetBrains Mono

---

## 🚀 Getting Started

### Local Development
```bash
# Navigate to the portfolio folder
cd portfolio

# Install dependencies (already installed)
npm install

# Start the local development server
npm run dev
```

The site will be live at `http://127.0.0.1:5173/`.

### Production Build & Preview
```bash
# Type check and generate production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ✏️ How to Customize Your Content

All personal data, projects, metrics, and capabilities are completely decoupled from UI components and stored in a single file:

```
src/data/portfolioData.ts
```

### 1. Update Personal & Studio Information
Open `src/data/portfolioData.ts` and modify the `developer` object:
```typescript
developer: {
  name: "Your Name",
  shortName: "YN",
  title: "Senior Creative Developer & Technical Director",
  tagline: "I build digital experiences that move businesses forward.",
  email: "hello@yourdomain.com",
  availability: {
    status: "Available for commissions",
    period: "Q4 2026 / Q1 2027",
    location: "New York, NY & Remote",
  },
  socials: [
    { name: "GitHub", url: "https://github.com/yourusername" },
    { name: "Twitter / X", url: "https://x.com/yourhandle" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
  ]
}
```

### 2. Add or Edit Projects
Add your real project URLs, client briefs, and metrics to `projects` inside `src/data/portfolioData.ts`:
```typescript
{
  id: "your-project-id",
  title: "Your Client or Project Name",
  tagline: "Brief one-sentence impact description",
  category: "Website Development", // or 'Web Applications' | 'E-Commerce' | 'AI-Powered Websites'
  year: "2026",
  role: "Lead Frontend Engineer",
  timeline: "4 Weeks",
  featured: true,
  liveUrl: "https://your-live-website.com",
  githubUrl: "https://github.com/yourname/repo",
  metrics: [
    { label: "Lighthouse", value: "100/100" },
    { label: "Conversion Lift", value: "+45%" },
  ],
  challenge: "Explain what made this project complex...",
  solution: "Explain the architectural approach you took...",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
}
```

---

## 🚢 Deployment to Vercel or Netlify

### Deploying to Vercel
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of creative developer portfolio"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework Preset: **Vite**.
4. Click **Deploy**.

### Deploying to Netlify
1. Connect your GitHub repository to [Netlify](https://app.netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy site**.

