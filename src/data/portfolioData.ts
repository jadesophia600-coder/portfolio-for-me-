export interface ProjectMockupDetails {
  type: 'agency' | 'fintech' | 'fashion' | 'furniture' | 'ai-glass' | 'business' | 'growth' | 'studio';
  tagline: string;
  heroHeadline: string;
  accentBg: string;
  accentColor: string;
  desktopPreviewLabel: string;
  mobilePreviewLabel: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  image: string;
  category: 'Web Applications' | 'Interactive & 3D' | 'E-Commerce' | 'Product Websites';
  industry: string;
  year: string;
  role: string;
  timeline: string;
  featured: boolean;
  isHero?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  metrics: {
    label: string;
    value: string;
  }[];
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  techStack: string[];
  mockup: ProjectMockupDetails;
}

export interface Capability {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  clientValue: string;
  deliverables: string[];
  technologies: string[];
}

export interface TechCategory {
  category: string;
  description: string;
  items: {
    name: string;
    level: string;
    description: string;
  }[];
}

export interface WorkflowStep {
  step: string;
  title: string;
  duration: string;
  summary: string;
  outcomes: string[];
}

export const PORTFOLIO_CONFIG = {
  developer: {
    name: "Victor .J. Ogunsanya",
    shortName: "VO",
    title: "Frontend Engineer & Web Developer",
    tagline: "Building clean, fast, and thoughtful web experiences.",
    subheadline: "Specializing in React, TypeScript, Next.js, and modern interface design. I craft responsive web applications and websites with an obsession for speed, usability, and clean architecture.",
    availability: {
      status: "Available for new projects",
      period: "Full-Time & Contract",
      isAccepting: true,
      location: "Lagos, Nigeria • Remote Globally",
      timezone: "WAT (UTC+1) / Flexible International",
    },
    stats: [
      { value: "React & Next.js", label: "Primary Frontend Stack" },
      { value: "TypeScript", label: "Type-Safe Codebases" },
      { value: "Fast & Accessible", label: "Core Web Vitals & UX" },
      { value: "Full-Stack Ready", label: "Node.js, PostgreSQL, APIs" },
    ],
    bio: [
      "I am Victor .J. Ogunsanya, a frontend and web developer passionate about building high-quality software that is fast, accessible, and intuitive to use.",
      "I bridge the gap between design and engineering. Instead of treating aesthetics and code as two separate steps, I focus on shipping polished interfaces backed by clean, maintainable architecture.",
      "Whether developing interactive dashboards, e-commerce storefronts, or high-converting product pages, I take a disciplined approach to code architecture, responsive design, and accessible interfaces."
    ],
    email: "victorjackson6545@gmail.com",
    socials: [
      { name: "GitHub", url: "https://github.com/jadesophia600-coder", handle: "github.com/jadesophia600-coder" },
      { name: "LinkedIn", url: "https://linkedin.com/in/victor-ogunsanya", handle: "linkedin.com/in/victor-ogunsanya" },
      { name: "Twitter / X", url: "https://x.com", handle: "@victor_webdev" },
      { name: "Email", url: "mailto:victorjackson6545@gmail.com", handle: "victorjackson6545@gmail.com" },
    ],
  },
  
  categories: [
    "All Projects",
    "Web Applications",
    "Interactive & 3D",
    "E-Commerce",
    "Product Websites",
  ] as const,

  // HERO SHOWCASE PROJECT
  heroProject: {
    id: "nexus-creative-agency",
    title: "Nexus Interactive 3D Studio",
    tagline: "Interactive 3D spatial experience and dynamic portfolio site built with Three.js, React, and Framer Motion.",
    image: "/projects/futuristic-agency.jpg",
    category: "Interactive & 3D",
    industry: "Digital Media & WebGL",
    year: "2026",
    role: "Frontend & Creative Developer",
    timeline: "5 Weeks",
    featured: false,
    isHero: true,
    liveUrl: "https://github.com/jadesophia600-coder/portfolio-for-me-",
    githubUrl: "https://github.com/jadesophia600-coder/portfolio-for-me-",
    metrics: [
      { label: "Rendering", value: "Smooth 60 FPS" },
      { label: "Core Tech", value: "Three.js / WebGL" },
      { label: "Hydration", value: "Sub-Second" },
    ],
    overview: "An interactive web experience combining 3D geometry, smooth camera transitions, and fluid viewport motion built for an independent digital studio.",
    challenge: "Complex 3D scenes can cause high GPU load and sluggish scrolling on low-power mobile devices.",
    solution: "Engineered an optimized rendering loop with instanced geometries, frustum culling, and adaptive resolution scaling that maintains smooth 60fps across mobile and desktop devices.",
    deliverables: [
      "Interactive 3D hero canvas with responsive controls",
      "Fluid motion choreography & scroll-tied reveals",
      "Headless CMS integration for dynamic case studies",
      "100% responsive cross-platform layout"
    ],
    techStack: ["React", "TypeScript", "Three.js", "Tailwind CSS", "Framer Motion"],
    mockup: {
      type: "agency",
      tagline: "NEXUS // 3D INTERACTIVE STUDIO",
      heroHeadline: "Crafting Experiences Through Thoughtful Code & 3D",
      accentBg: "#0C071E",
      accentColor: "#CEF241",
      desktopPreviewLabel: "nexus-studio.dev/work",
      mobilePreviewLabel: "nexus-studio.dev/m",
      features: ["Interactive 3D canvas", "Adaptive mobile shaders", "Sub-second hydration"]
    }
  } as Project,

  // FLAGSHIP SHOWCASE PROJECTS
  featuredProjects: [
    {
      id: "aura-wealth-dashboard",
      title: "Aura Wealth Management Platform",
      tagline: "Real-time wealth management dashboard with interactive transaction streams and yield analytics.",
      image: "/projects/fintech-dashboard.jpg",
      category: "Web Applications",
      industry: "Fintech & Personal Finance",
      year: "2026",
      role: "Lead Frontend Engineer",
      timeline: "7 Weeks",
      featured: true,
      liveUrl: "https://github.com/jadesophia600-coder/portfolio-for-me-",
      githubUrl: "https://github.com/jadesophia600-coder/portfolio-for-me-",
      metrics: [
        { label: "State Management", value: "Zustand Store" },
        { label: "Chart Performance", value: "Canvas Sparklines" },
        { label: "Accessibility", value: "WCAG AA Standard" },
      ],
      overview: "A responsive financial command center displaying real-time balance metrics, multi-card portfolio management, and investment yield breakdowns with a refined dark mode UI.",
      challenge: "Handling complex live data streams and interactive chart views without layout jank or memory leaks during prolonged browser sessions.",
      solution: "Built a virtualized component architecture using Zustand for decoupled state, memoized charting layers, and strict TypeScript types throughout.",
      deliverables: [
        "Real-time WebSocket telemetry engine",
        "Multi-card slider & virtual card manager",
        "Interactive investment growth breakdown",
        "Keyboard shortcut command palette (CMD+K)"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Apache ECharts", "WebSockets"],
      mockup: {
        type: "fintech",
        tagline: "AURA // CONSOLIDATED TREASURY",
        heroHeadline: "$10,120.50 USD Total Real-Time Balance",
        accentBg: "#120E0A",
        accentColor: "#F97316",
        desktopPreviewLabel: "app.aurawealth.dev/dashboard",
        mobilePreviewLabel: "aurawealth.dev/app",
        features: ["Live socket telemetry", "Multi-card drawer", "Instant yield sweep"]
      }
    },
    {
      id: "elegance-noire-fashion",
      title: "Élégance Noire Fashion Storefront",
      tagline: "High-contrast editorial lookbook and modern e-commerce shopping experience.",
      image: "/projects/modern-fashion.jpg",
      category: "E-Commerce",
      industry: "Apparel & Lifestyle",
      year: "2026",
      role: "Frontend Developer & UI Designer",
      timeline: "4 Weeks",
      featured: true,
      liveUrl: "https://github.com/jadesophia600-coder/portfolio-for-me-",
      githubUrl: "https://github.com/jadesophia600-coder/portfolio-for-me-",
      metrics: [
        { label: "Storefront", value: "Headless Shopify" },
        { label: "Cart Experience", value: "Slide-over Drawer" },
        { label: "Image Formats", value: "WebP / AVIF" },
      ],
      overview: "An editorial fashion storefront designed for an apparel maison, featuring cinematic lookbook curation, localized multi-currency support, and an instant slide-out cart.",
      challenge: "Balancing high-resolution imagery with quick mobile load times and smooth page transitions.",
      solution: "Implemented Next.js responsive image optimization, localized currency formatting, and an optimistic cart drawer that updates with zero latency.",
      deliverables: [
        "Editorial runway lookbook & video showcase",
        "Headless storefront & instant cart drawer",
        "Multi-currency localized checkout",
        "Responsive, mobile-first product grid"
      ],
      techStack: ["Next.js", "React", "Tailwind CSS", "Shopify Storefront API", "Framer Motion"],
      mockup: {
        type: "fashion",
        tagline: "ÉLÉGANCE NOIRE // RUNWAY AUTUMN/WINTER",
        heroHeadline: "Modern Luxury Fashion Tailored For Digital",
        accentBg: "#181412",
        accentColor: "#E2C39B",
        desktopPreviewLabel: "elegancenoire.paris/winter",
        mobilePreviewLabel: "elegancenoire.paris/bag",
        features: ["Runway video loop", "Instant 1-click cart", "Responsive lookbook"]
      }
    },
    {
      id: "forma-living-furniture",
      title: "Forma Living Modern Furniture",
      tagline: "Minimal interior design e-commerce with modular product views and tactile cart.",
      image: "/projects/modern-furniture.jpg",
      category: "E-Commerce",
      industry: "Modern Living & Interior",
      year: "2025",
      role: "Frontend Developer",
      timeline: "4 Weeks",
      featured: true,
      liveUrl: "https://github.com/jadesophia600-coder/portfolio-for-me-",
      githubUrl: "https://github.com/jadesophia600-coder/portfolio-for-me-",
      metrics: [
        { label: "Checkout", value: "Stripe & Apple Pay" },
        { label: "Configurator", value: "Interactive Zoom" },
        { label: "Performance", value: "Sub-Second FCP" },
      ],
      overview: "A minimal e-commerce experience built for a Scandinavian furniture brand, pairing high-resolution photography with sub-second transitions and custom room previews.",
      challenge: "Standard storefront templates felt clunky and took too long to load on mobile devices.",
      solution: "Architected a custom frontend with instant slide-over cart drawers, optimized texture zooming, and cached catalog queries.",
      deliverables: [
        "Headless storefront with edge caching",
        "Modular product configurator & texture zoom",
        "Instant slide-over cart drawer with Apple Pay",
        "Multi-currency localized checkout"
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe Elements", "Framer Motion"],
      mockup: {
        type: "furniture",
        tagline: "FORMA // MINIMAL ARCHITECTURAL LIVING",
        heroHeadline: "Nordic Craft Meets Pure Contemporary Form",
        accentBg: "#1A1714",
        accentColor: "#E2C39B",
        desktopPreviewLabel: "formaliving.dev/seating",
        mobilePreviewLabel: "formaliving.dev/cart",
        features: ["1-click digital wallet", "High-res fabric zoom", "Real-time stock reservation"]
      }
    }
  ] as Project[],

  // GALLERY & ARCHIVE PROJECTS
  galleryProjects: [
    {
      id: "chatgpt-liquid-glass",
      title: "Refraction UI Component System",
      tagline: "Translucent glass design system and component experiment with fluid micro-interactions.",
      image: "/projects/liquid-glass-ai.jpg",
      category: "Interactive & 3D",
      industry: "Design Engineering & Systems",
      year: "2026",
      role: "Design Engineer & Frontend Developer",
      timeline: "3 Weeks",
      featured: false,
      liveUrl: "https://github.com/jadesophia600-coder/portfolio-for-me-",
      githubUrl: "https://github.com/jadesophia600-coder/portfolio-for-me-",
      metrics: [
        { label: "CSS Architecture", value: "Hardware Accelerated" },
        { label: "Components", value: "Radix UI Primitives" },
        { label: "Animations", value: "Framer Motion" },
      ],
      overview: "An experimental UI system exploring optical glass refraction, fluid backdrop filters, and accessible keyboard-navigated interface components.",
      challenge: "Creating glassmorphic blur and refraction effects without causing high GPU load or sluggish frame rates on portable laptops.",
      solution: "Implemented hardware-accelerated CSS backdrop filters with performant spring physics and high-contrast accessible color tokens.",
      deliverables: [
        "Refraction glass shader & backdrop token system",
        "Accessible keyboard-first modals and drawers",
        "Fluid motion spring choreography",
        "Dark and light mode color calibration"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI"],
      mockup: {
        type: "ai-glass",
        tagline: "REFRACTION // COMPONENT LAB",
        heroHeadline: "Translucent Interface Design System",
        accentBg: "#0F131E",
        accentColor: "#38BDF8",
        desktopPreviewLabel: "refraction-ui.dev/components",
        mobilePreviewLabel: "refraction-ui.dev/m",
        features: ["Dynamic glass refraction", "Spring motion curves", "Keyboard accessible"]
      }
    },
    {
      id: "beacon-services-platform",
      title: "Beacon Business Digital Platform",
      tagline: "Clean, responsive business headquarters designed for professional service firms and consultations.",
      image: "/projects/small-business-web.jpg",
      category: "Product Websites",
      industry: "Professional Services & Consulting",
      year: "2025",
      role: "Frontend Developer",
      timeline: "3 Weeks",
      featured: false,
      liveUrl: "https://github.com/jadesophia600-coder/portfolio-for-me-",
      githubUrl: "https://github.com/jadesophia600-coder/portfolio-for-me-",
      metrics: [
        { label: "SEO Structure", value: "Semantic Schema" },
        { label: "Booking", value: "Cal.com Integration" },
        { label: "Mobile First", value: "100% Responsive" },
      ],
      overview: "A clean, modern platform for a corporate advisory practice, designed to clearly present service offerings, client credentials, and streamlined meeting booking.",
      challenge: "The client needed a trustworthy, modern web presence that loads fast on mobile and simplifies client scheduling.",
      solution: "Built a fast, semantic website with integrated calendar booking, clear typographic hierarchy, and optimized Core Web Vitals.",
      deliverables: [
        "Responsive design & typography system",
        "Integrated interactive appointment booking",
        "Schema.org SEO structured data",
        "Contact form with instant email notification"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Cal.com API"],
      mockup: {
        type: "business",
        tagline: "BEACON // ADVISORY PLATFORM",
        heroHeadline: "Strategic Advisory Tailored For Modern Growth",
        accentBg: "#0F172A",
        accentColor: "#38BDF8",
        desktopPreviewLabel: "beaconadvisory.dev/services",
        mobilePreviewLabel: "beaconadvisory.dev/book",
        features: ["1-click appointment booker", "Instant credibility badges", "Local SEO optimization"]
      }
    },
    {
      id: "velocity-growth-funnel",
      title: "Velocity Product Landing Platform",
      tagline: "Fast, mobile-optimized marketing platform with interactive product demos and lead validation.",
      image: "/projects/high-converting-dev.jpg",
      category: "Web Applications",
      industry: "Software & SaaS",
      year: "2026",
      role: "Frontend Engineer",
      timeline: "3 Weeks",
      featured: false,
      liveUrl: "https://github.com/jadesophia600-coder/portfolio-for-me-",
      githubUrl: "https://github.com/jadesophia600-coder/portfolio-for-me-",
      metrics: [
        { label: "Rendering", value: "Edge Hydrated" },
        { label: "Performance", value: "Sub-400ms FCP" },
        { label: "Validation", value: "Zod Schema" },
      ],
      overview: "A lightweight product landing platform engineered for fast user onboarding, responsive layouts, and zero layout shift on mobile connections.",
      challenge: "Ensuring instant load times on variable mobile networks while providing an engaging, interactive feature walkthrough.",
      solution: "Leveraged edge-rendered Next.js components, lightweight SVG visuals, and modular code splitting for immediate time-to-interactive.",
      deliverables: [
        "Edge-rendered landing platform",
        "Interactive product feature preview",
        "Type-safe form validation with Zod",
        "Mobile-first responsive layout"
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "Framer Motion"],
      mockup: {
        type: "growth",
        tagline: "VELOCITY // PRODUCT PLATFORM",
        heroHeadline: "Fast, Intuitive Product Onboarding",
        accentBg: "#0D1117",
        accentColor: "#22C55E",
        desktopPreviewLabel: "velocity-product.dev/preview",
        mobilePreviewLabel: "velocity-product.dev/m",
        features: ["Sub-400ms mobile FCP", "Type-safe form validation", "Zero layout shift"]
      }
    },
    {
      id: "atelier-pulse-experience",
      title: "Pulse Creative Studio Website",
      tagline: "Creative brand portfolio built with fluid micro-interactions, responsive typography, and tactile states.",
      image: "/projects/creative-studio.jpg",
      category: "Interactive & 3D",
      industry: "Design & Contemporary Media",
      year: "2025",
      role: "Creative Developer",
      timeline: "4 Weeks",
      featured: false,
      liveUrl: "https://github.com/jadesophia600-coder/portfolio-for-me-",
      githubUrl: "https://github.com/jadesophia600-coder/portfolio-for-me-",
      metrics: [
        { label: "Micro-motion", value: "Framer Motion" },
        { label: "Typography", value: "Fluid CSS Clamp" },
        { label: "Loading", value: "Progressive Blur-Up" },
      ],
      overview: "An editorial portfolio website showcasing client stories through responsive typography, subtle button feedback, and intuitive gallery navigation.",
      challenge: "Creating an engaging, motion-rich design that remains strictly accessible, responsive, and fast on all screen sizes.",
      solution: "Used CSS containment and progressive image loading to isolate heavy visual elements, allowing the core content to render in under 450 milliseconds.",
      deliverables: [
        "Fluid motion choreography and state feedback",
        "Progressive image blur-up loading system",
        "Accessible keyboard navigation support",
        "Responsive editorial typography system"
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      mockup: {
        type: "studio",
        tagline: "PULSE // CREATIVE STUDIO",
        heroHeadline: "Design Systems & Interactive Digital Stories",
        accentBg: "#14111C",
        accentColor: "#EC4899",
        desktopPreviewLabel: "pulsestudio.dev/works",
        mobilePreviewLabel: "pulsestudio.dev/m",
        features: ["Fluid typography", "Subtle motion feedback", "Fast image hydration"]
      }
    }
  ] as Project[],

  get allProjects(): Project[] {
    return [this.heroProject, ...this.featuredProjects, ...this.galleryProjects];
  },

  capabilities: [
    {
      id: "custom-websites",
      number: "01",
      title: "Responsive Websites & Brand Hubs",
      tagline: "Distinctive, fast websites with clear typography and natural interaction.",
      description: "Building modern websites with clean typographic hierarchy, intentional whitespace, and smooth transitions that represent your brand with clarity and credibility.",
      clientValue: "Delivers an immediate impression of quality and converts visitors into inquiries with thoughtful UX.",
      deliverables: [
        "Custom responsive layouts for all device sizes",
        "Asset and font optimization for fast loading",
        "Semantic SEO structure and social sharing meta tags",
        "Headless CMS integration for effortless content updates"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      id: "web-apps",
      number: "02",
      title: "Web Applications & Dashboards",
      tagline: "Intuitive product workflows distilled into responsive, reliable interfaces.",
      description: "Developing data dashboards, internal tools, and client portals that feel snappy and pleasant to use throughout long work sessions.",
      clientValue: "Reduces user onboarding friction, eliminates cognitive clutter, and improves daily productivity.",
      deliverables: [
        "Predictable state management with Zustand or Redux",
        "Interactive data visualizations and chart components",
        "Authentication flows and protected routes",
        "Optimistic UI updates for snappy responsiveness"
      ],
      technologies: ["React", "TypeScript", "Zustand", "TanStack Query", "Tailwind CSS"]
    },
    {
      id: "ecommerce",
      number: "03",
      title: "E-Commerce & Storefront Experiences",
      tagline: "Clean product storytelling paired with frictionless shopping carts.",
      description: "Building custom shopping experiences that decouple your storefront from rigid templates, unlocking fast page switches and seamless checkout flows.",
      clientValue: "Streamlines the path to purchase and reduces cart abandonment with clear, modern product presentation.",
      deliverables: [
        "Headless Shopify / custom cart integration",
        "Interactive product variant configurators",
        "Optimistic cart drawers with zero layout shift",
        "Stripe and digital wallet checkout integrations"
      ],
      technologies: ["Next.js", "React", "Shopify Storefront API", "Stripe", "Tailwind CSS"]
    },
    {
      id: "api-integrations",
      number: "04",
      title: "API Integrations & Backend Services",
      tagline: "Connecting databases, authentication, and third-party APIs into clean frontends.",
      description: "Architecting reliable connections between your frontend and backends: RESTful APIs, GraphQL queries, database CRUD, and real-time sockets.",
      clientValue: "Ensures data flows reliably with proper error handling, caching, and zero unexpected downtime.",
      deliverables: [
        "RESTful & GraphQL API integration",
        "Database schema design and queries (PostgreSQL, Supabase)",
        "Secure auth flows and token management",
        "Error handling, loading skeletons, and fallback states"
      ],
      technologies: ["Node.js", "Express", "Supabase", "PostgreSQL", "REST / GraphQL"]
    },
    {
      id: "design-systems",
      number: "05",
      title: "Design Systems & UI Engineering",
      tagline: "Translating design mockups into pixel-perfect, reusable code libraries.",
      description: "Bridging the gap between design and engineering. Every spacing unit, color token, and interaction state is codified into a maintainable component library.",
      clientValue: "Enables teams to ship new pages and features rapidly while maintaining a consistent visual identity.",
      deliverables: [
        "Reusable component libraries built on Radix UI",
        "Strict accessibility conformance (WCAG AA)",
        "Clean, well-documented TypeScript definitions",
        "Consistent spacing, typography, and dark mode tokens"
      ],
      technologies: ["Radix UI", "Tailwind CSS", "TypeScript", "Framer Motion", "React"]
    },
    {
      id: "performance-revamp",
      number: "06",
      title: "Performance Optimization & Audits",
      tagline: "Diagnosing bottlenecks and speeding up sluggish websites.",
      description: "Auditing rendering bottlenecks, bundle sizes, and Core Web Vitals to improve load speed, mobile responsiveness, and SEO rankings.",
      clientValue: "Lowers bounce rates and improves user satisfaction through immediate speed improvements.",
      deliverables: [
        "Core Web Vitals diagnosis and fixes",
        "Code splitting and bundle size reduction",
        "Optimized image and font delivery strategies",
        "Accessibility and SEO improvements"
      ],
      technologies: ["Chrome DevTools", "Lighthouse", "Next.js Optimization", "Tailwind CSS"]
    }
  ] as Capability[],

  techStack: [
    {
      category: "Frontend Architecture",
      description: "Building responsive, maintainable client applications.",
      items: [
        { name: "React 18 / 19", level: "Core", description: "Hooks, component lifecycles, concurrent features" },
        { name: "TypeScript", level: "Core", description: "Strict typing, interfaces, and reliable codebases" },
        { name: "Next.js (App Router)", level: "Core", description: "Server components, routing, and static generation" },
        { name: "Tailwind CSS", level: "Core", description: "Responsive layouts, utility classes, and custom tokens" },
        { name: "Framer Motion", level: "Proficient", description: "Smooth layout transitions, spring physics, gestures" },
        { name: "Three.js & Canvas", level: "Proficient", description: "Interactive 3D geometry and WebGL graphics" },
      ]
    },
    {
      category: "Backend & Data",
      description: "Server-side logic, database queries, and data modeling.",
      items: [
        { name: "Node.js & Express", level: "Proficient", description: "REST APIs, middleware, and backend routing" },
        { name: "Supabase & PostgreSQL", level: "Proficient", description: "Relational data, authentication, row-level security" },
        { name: "RESTful & GraphQL", level: "Proficient", description: "Structured payloads, querying, and error boundaries" },
        { name: "Prisma ORM", level: "Proficient", description: "Type-safe database queries and migrations" },
      ]
    },
    {
      category: "State & API Tools",
      description: "Managing client state, caching, and server synchronization.",
      items: [
        { name: "Zustand", level: "Core", description: "Lightweight, predictable global state management" },
        { name: "TanStack Query", level: "Proficient", description: "Server cache synchronization and optimistic updates" },
        { name: "Zod", level: "Core", description: "Runtime schema validation and form data safety" },
        { name: "WebSockets", level: "Proficient", description: "Real-time bi-directional event communication" },
      ]
    },
    {
      category: "Tooling & Delivery",
      description: "Version control, build tools, and modern deployment.",
      items: [
        { name: "Git & GitHub", level: "Core", description: "Branching workflows, version control, and collaboration" },
        { name: "Vite & Next.js", level: "Core", description: "Fast local development, bundling, and hot module reload" },
        { name: "Vercel & Netlify", level: "Core", description: "Continuous integration, edge functions, and hosting" },
        { name: "Chrome DevTools", level: "Core", description: "Performance profiling, network tracing, accessibility checks" },
      ]
    }
  ] as TechCategory[],

  workflow: [
    {
      step: "01",
      title: "Scope & Architecture",
      duration: "Stage 1",
      summary: "Understanding your project goals, audience, and functional needs to plan a clean, scalable technical foundation.",
      outcomes: ["Technical stack & architecture outline", "Site structure and user flow map", "Performance and timeline expectations"]
    },
    {
      step: "02",
      title: "Design & Prototyping",
      duration: "Stage 2",
      summary: "Establishing responsive layouts, typography hierarchy, and interactive prototypes so the look and feel can be verified early.",
      outcomes: ["Interactive component prototypes", "Responsive mobile and desktop views", "Verified color and typography system"]
    },
    {
      step: "03",
      title: "Development & Integration",
      duration: "Stage 3",
      summary: "Writing clean, accessible TypeScript code, integrating APIs, databases, and forms, and ensuring cross-browser stability.",
      outcomes: ["Modular component architecture", "API and data integrations with error handling", "Cross-browser and mobile verification"]
    },
    {
      step: "04",
      title: "Testing, Audit & Launch",
      duration: "Stage 4",
      summary: "Auditing loading speed, checking accessibility conformance, configuring SEO meta tags, and deploying live to production.",
      outcomes: ["Fast Core Web Vitals audit", "Clean production deployment on Vercel/Netlify", "Source code handoff and documentation"]
    }
  ] as WorkflowStep[],

  faqs: [
    {
      question: "What types of projects do you take on?",
      answer: "I specialize in modern web applications, responsive portfolio and marketing websites, e-commerce storefronts, and custom frontend components built with React and TypeScript."
    },
    {
      question: "How do we collaborate during development?",
      answer: "I provide staging preview links updated with every git push so you can review progress live. We communicate via email, Slack, or video calls for milestone check-ins."
    },
    {
      question: "Are your websites optimized for mobile and speed?",
      answer: "Yes, every website I build is mobile-first, responsive across all screen sizes, and optimized for fast load times and clean accessibility."
    },
    {
      question: "Are you available for full-time or contract work?",
      answer: "Yes, I am open to full-time engineering roles, contract engagements, and select freelance client projects."
    }
  ]
};
