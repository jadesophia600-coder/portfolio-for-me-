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
  category: 'Website Development' | 'Web Applications' | 'E-Commerce' | 'AI-Powered Websites';
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
    name: "Victor Ogunsanya",
    shortName: "VO",
    title: "Web Developer & Creative Technologist",
    tagline: "I build digital experiences that move businesses forward.",
    subheadline: "Specializing in high-performance websites, modern web applications, and conversion-focused digital platforms for ambitious businesses.",
    availability: {
      status: "Available for commissions",
      period: "Q4 2026 / Q1 2027",
      isAccepting: true,
      location: "Available Globally & Remote",
      timezone: "Flexible International Hours",
    },
    stats: [
      { value: "99.8%", label: "Average Lighthouse Performance" },
      { value: "< 420ms", label: "Target Largest Contentful Paint" },
      { value: "+185%", label: "Average Client Conversion Lift" },
      { value: "100%", label: "On-Time Milestone Delivery" },
    ],
    bio: [
      "I am Victor Ogunsanya, an independent web developer and digital architect partnering with ambitious businesses, founders, and modern brands.",
      "Most websites fail because they treat visual aesthetics and technical performance as two separate tasks. I believe the most effective digital experiences happen when technical rigor, mobile speed, and commercial conversion psychology are engineered together from day one.",
      "Whether building high-velocity marketing pages, custom e-commerce platforms, or data-dense web application dashboards, every line of code is written with a clear purpose: moving your business forward."
    ],
    email: "ogunsanyavictor33@gmail.com",
    phone: "+1 (555) 019-2834",
    socials: [
      { name: "GitHub", url: "https://github.com", handle: "github.com/ogunsanyavictor" },
      { name: "Twitter / X", url: "https://x.com", handle: "@victor_webdev" },
      { name: "LinkedIn", url: "https://linkedin.com", handle: "in/victor-ogunsanya" },
      { name: "Email", url: "mailto:ogunsanyavictor33@gmail.com", handle: "ogunsanyavictor33@gmail.com" },
    ],
  },
  
  categories: [
    "All Archive",
    "Website Development",
    "Web Applications",
    "E-Commerce",
    "AI-Powered Websites",
  ] as const,

  // HERO SHOWCASE PROJECT (Unique Image #1)
  heroProject: {
    id: "nexus-creative-agency",
    title: "Nexus 3D Creative Agency",
    tagline: "Futuristic 3D neon spatial identity & dynamic portfolio engineered for an avant-garde creative studio.",
    image: "/projects/futuristic-agency.jpg",
    category: "Website Development",
    industry: "Digital Media & Creative Technology",
    year: "2026",
    role: "Lead Creative Developer & 3D Web Architect",
    timeline: "5 Weeks",
    featured: false,
    isHero: true,
    liveUrl: "https://nexus-agency-preview.dev",
    githubUrl: "https://github.com/alexvance/nexus-agency",
    metrics: [
      { label: "Lighthouse Score", value: "99/100" },
      { label: "Client Inquiries", value: "+240%" },
      { label: "Time on Site", value: "4m 12s" },
    ],
    overview: "An avant-garde digital atelier experience combining neon ambient glows, interactive 3D spatial geometry, and fluid viewport transitions to establish dominant market positioning for a high-end agency.",
    challenge: "High-density 3D graphics and complex volumetric lighting often cause severe frame drops and sluggish mobile rendering.",
    solution: "Engineered a custom Three.js pipeline with offscreen WebGL rendering, instanced meshes, and adaptive level-of-detail (LOD) that guarantees locked 60fps across mobile and desktop devices.",
    deliverables: [
      "Interactive 3D neon hero canvas",
      "Fluid motion choreography & scroll-tied reveals",
      "Headless CMS integration for dynamic case studies",
      "100% responsive cross-platform layout"
    ],
    techStack: ["Next.js 15", "TypeScript", "Three.js", "Tailwind CSS", "Framer Motion", "Sanity CMS"],
    mockup: {
      type: "agency",
      tagline: "NEXUS // FUTURISTIC ATELIER 2026",
      heroHeadline: "Designing Experiences That Redefine The Future",
      accentBg: "#0C071E",
      accentColor: "#CEF241",
      desktopPreviewLabel: "nexus-studio.agency/works/spatial",
      mobilePreviewLabel: "nexus.agency/m",
      features: ["Interactive 3D canvas", "Adaptive mobile shaders", "Sub-second hydration"]
    }
  } as Project,

  // FLAGSHIP SHOWCASE PROJECTS (Unique Images #2, #3, #4)
  featuredProjects: [
    {
      id: "aura-wealth-dashboard",
      title: "Aura Wealth & Liquidity Engine",
      tagline: "Institutional-grade wealth management dashboard with multi-card routing and real-time yield analytics.",
      image: "/projects/fintech-dashboard.jpg",
      category: "Web Applications",
      industry: "Fintech & Private Banking",
      year: "2026",
      role: "Lead Frontend Engineer & Interaction Designer",
      timeline: "7 Weeks",
      featured: true,
      liveUrl: "https://aura-wealth-preview.dev",
      githubUrl: "https://github.com/alexvance/aura-wealth",
      metrics: [
        { label: "Telemetry Speed", value: "<14ms" },
        { label: "Active Users", value: "64,000+" },
        { label: "Task Speed", value: "3.8x Faster" },
      ],
      overview: "A mission-critical financial command center displaying real-time balance trends, multi-card portfolio management, and automated investment yield sweeps in a high-density, dark editorial interface.",
      challenge: "Handling complex live financial telemetry and interactive transaction streams without layout jank or memory leakage over hours of continuous usage.",
      solution: "Built a virtualized component architecture using Zustand and Web Workers for payload parsing, coupled with custom GPU-accelerated canvas sparklines and strict WCAG AAA accessibility.",
      deliverables: [
        "Real-time WebSocket telemetry engine",
        "Multi-card slider & virtual card manager",
        "Interactive investment growth breakdown",
        "Keyboard shortcut command palette (CMD+K)"
      ],
      techStack: ["React 19", "TypeScript", "Tailwind CSS", "Zustand", "Apache ECharts", "WebSockets"],
      mockup: {
        type: "fintech",
        tagline: "AURA // CONSOLIDATED TREASURY",
        heroHeadline: "$10,120.50 USD Total Real-Time Balance",
        accentBg: "#120E0A",
        accentColor: "#F97316",
        desktopPreviewLabel: "app.aurawealth.io/dashboard/main",
        mobilePreviewLabel: "aurawealth.io/app",
        features: ["Live socket telemetry", "Multi-card drawer", "Instant yield sweep"]
      }
    },
    {
      id: "elegance-noire-fashion",
      title: "Élégance Noire Luxury Fashion",
      tagline: "High-fashion editorial runway landing page & bespoke product-focused e-commerce experience.",
      image: "/projects/modern-fashion.jpg",
      category: "E-Commerce",
      industry: "Haute Couture & Luxury Goods",
      year: "2026",
      role: "Lead E-Commerce Architect & UI Designer",
      timeline: "4 Weeks",
      featured: true,
      liveUrl: "https://elegance-noire-fashion.dev",
      githubUrl: "https://github.com/alexvance/elegance-noire",
      metrics: [
        { label: "Checkout Conversion", value: "+58.2%" },
        { label: "Avg Order Value", value: "$280.00" },
        { label: "Mobile FCP", value: "0.38s" },
      ],
      overview: "An editorial fashion storefront designed for an independent luxury maison, blending cinematic lookbook photography with instant 1-click digital wallet checkout and dynamic seasonal drops.",
      challenge: "Capturing the tactile luxury and exclusivity of couture runway pieces while ensuring ultra-fast page transitions on mobile devices.",
      solution: "Implemented a headless Shopify storefront on Next.js 15 with sub-second image hydration, seamless slide-over bag preview, and high-contrast editorial typography.",
      deliverables: [
        "Editorial runway lookbook & video showcase",
        "Headless Shopify storefront & instant cart drawer",
        "Multi-currency localized checkout with Apple Pay",
        "Automated VIP drop early-access funnel"
      ],
      techStack: ["Next.js 15", "Shopify Storefront API", "Tailwind CSS", "Stripe", "Framer Motion"],
      mockup: {
        type: "fashion",
        tagline: "ÉLÉGANCE NOIRE // RUNWAY AUTUMN/WINTER",
        heroHeadline: "A Website That Feels Premium At First Glance",
        accentBg: "#181412",
        accentColor: "#E2C39B",
        desktopPreviewLabel: "elegancenoire.paris/collection/winter",
        mobilePreviewLabel: "elegancenoire.paris/bag",
        features: ["Runway video loop", "Instant 1-click cart", "VIP drop notifications"]
      }
    },
    {
      id: "forma-living-furniture",
      title: "Forma Living Modern Furniture",
      tagline: "Headless luxury interior design e-commerce with artisanal product storytelling and modular cart.",
      image: "/projects/modern-furniture.jpg",
      category: "E-Commerce",
      industry: "Luxury Home & Architectural Living",
      year: "2025",
      role: "Full-Stack E-Commerce Architect",
      timeline: "4 Weeks",
      featured: true,
      liveUrl: "https://forma-living-shop.dev",
      githubUrl: "https://github.com/alexvance/forma-living",
      metrics: [
        { label: "Checkout Conversion", value: "+42.6%" },
        { label: "Average Order Value", value: "+$148" },
        { label: "Cart Abandonment Drop", value: "-28%" },
      ],
      overview: "An editorial e-commerce platform designed for a bespoke Scandinavian furniture studio, combining high-resolution visual curation with sub-second page transitions and dynamic custom bundling.",
      challenge: "Standard e-commerce templates failed to convey the premium craftsmanship of physical furniture while suffering from slow mobile load times.",
      solution: "Architected a headless Next.js frontend integrated with Shopify Storefront API and Stripe Elements, implementing instant slide-over cart drawers and dynamic room preview configurators.",
      deliverables: [
        "Headless Shopify storefront with Edge caching",
        "Modular product configurator & texture zoom",
        "Instant slide-over cart drawer with Apple Pay",
        "Multi-currency localized checkout"
      ],
      techStack: ["Next.js Commerce", "Shopify Storefront API", "Tailwind CSS", "Stripe", "Framer Motion"],
      mockup: {
        type: "furniture",
        tagline: "FORMA // MINIMAL ARCHITECTURAL LIVING",
        heroHeadline: "Nordic Craft Meets Pure Contemporary Form",
        accentBg: "#1A1714",
        accentColor: "#E2C39B",
        desktopPreviewLabel: "formaliving.co/collection/seating",
        mobilePreviewLabel: "formaliving.co/cart",
        features: ["1-click digital wallet", "High-res fabric zoom", "Real-time stock reservation"]
      }
    }
  ] as Project[],

  // GALLERY & ARCHIVE PROJECTS (Unique Images #5, #6, #7, #8 - ZERO REPETITION!)
  galleryProjects: [
    {
      id: "chatgpt-liquid-glass",
      title: "ChatGPT Liquid Glass Interface Concept",
      tagline: "Next-generation translucent glassmorphic AI interaction model with real-time prompt streaming.",
      image: "/projects/liquid-glass-ai.jpg",
      category: "AI-Powered Websites",
      industry: "Artificial Intelligence & Human Interface",
      year: "2026",
      role: "AI Interaction Designer & Lead Frontend Engineer",
      timeline: "3 Weeks",
      featured: false,
      liveUrl: "https://liquid-glass-ai-preview.dev",
      githubUrl: "https://github.com/alexvance/liquid-glass-ai",
      metrics: [
        { label: "Streaming TTFT", value: "<85ms" },
        { label: "Design Recognition", value: "Featured" },
        { label: "Accessibility Score", value: "100/100" },
      ],
      overview: "An exploratory UI/UX concept reimagining modern conversational AI through multi-layered liquid glass refraction, dynamic prompt contextualization, and tactile micro-motion.",
      challenge: "Creating translucent liquid glass effects in WebGL/CSS that look genuinely organic without causing GPU overheating or frame stutter on portable laptops.",
      solution: "Developed custom SVG backdrop-filter blend shaders with CSS backdrop-filter fallbacks and hardware-accelerated CSS transforms.",
      deliverables: [
        "Liquid glass shader & refraction system",
        "Token-level streaming typography choreography",
        "Voice & text prompt modal switcher",
        "Contextual memory card visualization"
      ],
      techStack: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel AI SDK", "WebGL Shaders"],
      mockup: {
        type: "ai-glass",
        tagline: "CHATGPT // LIQUID GLASS REDESIGN",
        heroHeadline: "Translucent Spatial Intelligence Interface",
        accentBg: "#0F131E",
        accentColor: "#38BDF8",
        desktopPreviewLabel: "concept.chatgpt.glass/studio",
        mobilePreviewLabel: "chatgpt.glass/m",
        features: ["Dynamic glass refraction", "Streaming token cadence", "Multi-modal prompt tabs"]
      }
    },
    {
      id: "beacon-services-platform",
      title: "Beacon Business Digital Platform",
      tagline: "Conversion-optimized digital headquarters designed for professional service firms and enterprise practices.",
      image: "/projects/small-business-web.jpg",
      category: "Website Development",
      industry: "Professional Services & Enterprise",
      year: "2025",
      role: "Web Developer & Conversion Strategist",
      timeline: "3 Weeks",
      featured: false,
      liveUrl: "https://beacon-services-demo.dev",
      githubUrl: "https://github.com/alexvance/beacon-services",
      metrics: [
        { label: "Direct Leads", value: "+185%" },
        { label: "Bounce Rate", value: "-32%" },
        { label: "Local Google Rank", value: "Top 3" },
      ],
      overview: "A clean, trustworthy digital platform for a corporate advisory practice, engineered specifically to turn local search traffic into qualified phone and consultation inquiries.",
      challenge: "The client was losing high-ticket consultations to competitors due to an outdated, non-responsive website that failed to display credibility.",
      solution: "Redesigned the entire digital funnel with clear social proof hierarchy, interactive consultation scheduling, and sub-400ms loading speeds that achieved 100/100 Core Web Vitals.",
      deliverables: [
        "Brand redesign & copywriting structure",
        "Integrated interactive appointment booking",
        "Schema.org local SEO structured data",
        "Automated CRM lead notification pipeline"
      ],
      techStack: ["React 18", "TypeScript", "Tailwind CSS", "HubSpot API", "Cal.com API"],
      mockup: {
        type: "business",
        tagline: "BEACON // PROFESSIONAL ADVISORY",
        heroHeadline: "Strategic Advisory Tailored For Modern Growth",
        accentBg: "#0F172A",
        accentColor: "#38BDF8",
        desktopPreviewLabel: "beaconadvisory.com/services/consulting",
        mobilePreviewLabel: "beaconadvisory.com/book",
        features: ["1-click appointment booker", "Instant credibility badges", "Local SEO optimization"]
      }
    },
    {
      id: "velocity-growth-funnel",
      title: "Velocity Growth Engine",
      tagline: "Ultra-fast, mobile-first conversion machine with automated lead scoring and dynamic social proof.",
      image: "/projects/high-converting-dev.jpg",
      category: "AI-Powered Websites",
      industry: "SaaS & Direct-To-Consumer",
      year: "2026",
      role: "Lead Growth Engineer",
      timeline: "3 Weeks",
      featured: false,
      liveUrl: "https://velocity-growth-demo.dev",
      githubUrl: "https://github.com/alexvance/velocity-growth",
      metrics: [
        { label: "Conversion Rate", value: "14.8%" },
        { label: "Core Web Vitals", value: "100/100" },
        { label: "Acquisition Cost", value: "-28%" },
      ],
      overview: "A high-velocity landing platform built for aggressive customer acquisition, featuring personalized headline routing, instant lead qualification, and zero layout shift.",
      challenge: "Paid ad traffic was being wasted on generic landing pages that took over 3 seconds to load on mobile 4G networks.",
      solution: "Engineered a stripped-down, edge-rendered architecture with zero third-party script bloat, inline SVG graphics, and automated split-testing cookies.",
      deliverables: [
        "Edge-rendered landing page system",
        "Dynamic URL-parameter headline personalization",
        "Automated webhook dispatch to Slack/Zapier",
        "Mobile-first micro-interaction design"
      ],
      techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel Edge Middleware", "PostHog"],
      mockup: {
        type: "growth",
        tagline: "VELOCITY // FAST CONVERSION ARCHITECTURE",
        heroHeadline: "Scale Inquiries & Revenue With Zero Friction",
        accentBg: "#0D1117",
        accentColor: "#22C55E",
        desktopPreviewLabel: "try.velocitygrowth.io/launch",
        mobilePreviewLabel: "velocitygrowth.io/dm",
        features: ["Sub-300ms mobile FCP", "Automated lead qualification", "Split-testing ready"]
      }
    },
    {
      id: "atelier-pulse-experience",
      title: "Atelier Pulse Creative Studio",
      tagline: "Kinetic storytelling and brand platform built with fluid micro-interactions and editorial layouts.",
      image: "/projects/creative-studio.jpg",
      category: "Website Development",
      industry: "Art Direction & Contemporary Culture",
      year: "2025",
      role: "Creative Technologist",
      timeline: "4 Weeks",
      featured: false,
      liveUrl: "https://atelier-pulse-preview.dev",
      githubUrl: "https://github.com/alexvance/atelier-pulse",
      metrics: [
        { label: "Visitor Engagement", value: "78%" },
        { label: "Industry Recognition", value: "Featured" },
        { label: "Global Audience", value: "120K+ /mo" },
      ],
      overview: "A fluid, art-directed editorial website showcasing boundary-pushing client stories through custom cursor physics, smooth text typography reveals, and spatial gallery navigation.",
      challenge: "Creating an unforgettable experimental design that remains strictly accessible, responsive, and blazing fast on low-bandwidth connections.",
      solution: "Utilized progressive hydration and CSS containment techniques to isolate heavy visual elements, allowing the core content to render in under 450 milliseconds.",
      deliverables: [
        "Bespoke kinetic layout choreography",
        "Progressive image blur-up loading system",
        "Custom audio micro-feedback interactions",
        "Fluid typography token architecture"
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Web Audio API"],
      mockup: {
        type: "studio",
        tagline: "ATELIER PULSE // KINETIC IDENTITIES",
        heroHeadline: "Translating Brand Vision Into Living Software",
        accentBg: "#14111C",
        accentColor: "#EC4899",
        desktopPreviewLabel: "atelierpulse.design/stories/volume-01",
        mobilePreviewLabel: "atelierpulse.design/m",
        features: ["Kinetic layout choreography", "Fluid typography tokens", "Museum-grade speed"]
      }
    }
  ] as Project[],

  // Combined convenience getter (all 8 unique projects)
  get allProjects(): Project[] {
    return [this.heroProject, ...this.featuredProjects, ...this.galleryProjects];
  },

  capabilities: [
    {
      id: "custom-websites",
      number: "01",
      title: "Bespoke Brand Websites & Flagship Hubs",
      tagline: "Editorial storytelling that commands premium market positioning.",
      description: "Moving beyond cookie-cutter templates to build websites with distinct typographic personality, intentional whitespace, and smooth motion that immediately elevate your brand above commoditized competitors.",
      clientValue: "Transforms casual site visitors into committed, high-value inquiries with proven conversion architectures.",
      deliverables: [
        "Custom art direction & responsive layouts",
        "High-performance asset optimization (100 Lighthouse)",
        "Semantic SEO architecture & rich social cards",
        "Headless CMS integration (Sanity, Strapi, Contentful)"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Sanity"]
    },
    {
      id: "web-apps",
      number: "02",
      title: "Web Applications & SaaS Dashboards",
      tagline: "Complex product workflows distilled into effortless, lightning-fast interfaces.",
      description: "Engineering data-dense dashboards, internal business tools, and customer portals that feel as responsive and tactile as native desktop software.",
      clientValue: "Reduces user onboarding friction, eliminates cognitive load, and increases daily platform retention.",
      deliverables: [
        "State machine architecture & optimistic updates",
        "Interactive data visualizations & charting",
        "Role-based access control & auth integrations",
        "Offline-capable data caching & sync"
      ],
      technologies: ["React", "TypeScript", "Zustand", "TanStack Query", "Supabase", "Tailwind CSS"]
    },
    {
      id: "ecommerce",
      number: "03",
      title: "Headless E-Commerce & Checkout Engines",
      tagline: "Artisanal brand experiences with frictionless, multi-channel commerce.",
      description: "Decoupling your storefront from sluggish legacy templates to unlock sub-second page transitions, dynamic custom bundling, and custom checkout flows.",
      clientValue: "Directly boosts Average Order Value (AOV) and slashes cart abandonment rates through instant checkout experiences.",
      deliverables: [
        "Headless Shopify / Medusa commerce setup",
        "Custom product configurators & subscription funnels",
        "Fast global edge CDN caching & localized currency",
        "Stripe & digital wallet (Apple/Google Pay) integration"
      ],
      technologies: ["Next.js Commerce", "Shopify Storefront API", "Stripe", "Vercel Edge", "Tailwind CSS"]
    },
    {
      id: "ai-interfaces",
      number: "04",
      title: "AI-Powered Websites & Intelligent Workflows",
      tagline: "Bringing generative LLMs and automated agents into clean, humane interfaces.",
      description: "Integrating real-time streaming language models, semantic vector search, and interactive AI agents directly into your customer-facing applications.",
      clientValue: "Automates tedious repetitive workflows and gives your product an undeniable technological moat.",
      deliverables: [
        "Streaming token generation & UI diffing",
        "Vector embeddings & retrieval-augmented generation (RAG)",
        "Prompt engineering & guardrail validation",
        "Usage analytics & token consumption budgets"
      ],
      technologies: ["Vercel AI SDK", "OpenAI / Claude APIs", "Pinecone", "LangChain", "Supabase pgvector"]
    },
    {
      id: "design-systems",
      number: "05",
      title: "Design Systems & Precision UI Implementation",
      tagline: "Translating Figma designs into pixel-perfect, bulletproof codebases.",
      description: "Bridging the gap between creative visual design and scalable production code. Every spacing token, color variable, and micro-interaction is codified into reusable component systems.",
      clientValue: "Enables engineering teams to ship new pages in hours instead of weeks with zero brand drift.",
      deliverables: [
        "Atomic component libraries & Storybook catalogs",
        "Strict WCAG 2.1 AA accessibility conformance",
        "Comprehensive TypeScript type definitions",
        "Interactive micro-interaction & sound choreography"
      ],
      technologies: ["Radix UI", "Tailwind CSS", "Storybook", "TypeScript", "Framer Motion"]
    },
    {
      id: "performance-revamp",
      number: "06",
      title: "Performance Audits & High-Impact Redesigns",
      tagline: "Revitalizing sluggish, outdated websites for maximum speed and conversion.",
      description: "Diagnosing rendering bottlenecks, code bloat, and poor Core Web Vitals to resurrect underperforming websites into high-speed revenue drivers.",
      clientValue: "Improves organic search rankings, lowers bounce rate, and delivers immediate ROI from existing traffic.",
      deliverables: [
        "Comprehensive Core Web Vitals diagnosis",
        "Bundle size optimization & code splitting",
        "Modern image and font hydration strategies",
        "Conversion rate optimization (CRO) refactoring"
      ],
      technologies: ["Chrome DevTools", "Lighthouse", "WebPageTest", "Next.js", "Cloudflare"]
    }
  ] as Capability[],

  techStack: [
    {
      category: "Frontend Architecture",
      description: "Crafting bulletproof, component-driven client experiences.",
      items: [
        { name: "React 18 / 19", level: "Expert", description: "Modern hooks, concurrent features, server components" },
        { name: "TypeScript", level: "Expert", description: "Strict static typing, generic interfaces, zero runtime drift" },
        { name: "Next.js 15 (App Router)", level: "Expert", description: "Server-side rendering, streaming, incremental static regeneration" },
        { name: "Tailwind CSS", level: "Expert", description: "Utility-first design tokens, custom responsive layouts, fluid sizing" },
        { name: "Framer Motion", level: "Expert", description: "Layout choreographies, gesture physics, scroll-linked animations" },
        { name: "HTML5 Canvas / WebGL", level: "Proficient", description: "GPU-accelerated interactive visualizations and custom shaders" },
      ]
    },
    {
      category: "Backend & Databases",
      description: "Robust data layers, serverless functions, and real-time sockets.",
      items: [
        { name: "Node.js & Express", level: "Advanced", description: "RESTful architectures, authentication, background workers" },
        { name: "Supabase & PostgreSQL", level: "Advanced", description: "Row-level security, real-time subscriptions, edge functions" },
        { name: "GraphQL & REST APIs", level: "Advanced", description: "Efficient querying, payload schema validation, caching" },
        { name: "Prisma & Drizzle ORM", level: "Proficient", description: "Type-safe database migrations and high-performance querying" },
      ]
    },
    {
      category: "AI & Emerging APIs",
      description: "Intelligent embeddings, streaming LLM interfaces, and agentic workflows.",
      items: [
        { name: "Vercel AI SDK", level: "Advanced", description: "Streaming text generation, multi-provider model integration" },
        { name: "OpenAI & Anthropic APIs", level: "Advanced", description: "Structured output parsing, function calling, reasoning models" },
        { name: "Vector Databases", level: "Proficient", description: "pgvector and Pinecone semantic search pipelines" },
      ]
    },
    {
      category: "Infrastructure & DevOps",
      description: "Zero-downtime deployment pipelines and edge network delivery.",
      items: [
        { name: "Vercel & Netlify", level: "Expert", description: "Edge runtime middleware, previews, instant rollbacks" },
        { name: "Cloudflare", level: "Advanced", description: "DNS routing, SSL, DDoS protection, edge caching rules" },
        { name: "Git & GitHub CI/CD", level: "Expert", description: "Automated linting, testing, and continuous deployment" },
        { name: "Lighthouse & Web Vitals", level: "Expert", description: "Strict performance budgets and automated regression tests" },
      ]
    }
  ] as TechCategory[],

  workflow: [
    {
      step: "01",
      title: "Discovery & Technical Blueprint",
      duration: "Week 1",
      summary: "Deconstructing your commercial goals, user personas, technical constraints, and brand personality into an actionable architectural roadmap.",
      outcomes: ["Technical spec & stack recommendation", "Information architecture & user flow maps", "Performance & conversion targets established"]
    },
    {
      step: "02",
      title: "Interactive Prototyping & Motion Design",
      duration: "Weeks 1–2",
      summary: "Translating wireframes into live interactive component prototypes where typography, layout cadence, and kinetic behavior can be felt directly.",
      outcomes: ["High-fidelity interactive component previews", "Responsive mobile/tablet grid verification", "Motion choreography & tactile feel sign-off"]
    },
    {
      step: "03",
      title: "Production Engineering & Integration",
      duration: "Weeks 3–4",
      summary: "Writing clean, modular, and accessible code. Integrating backend APIs, content management systems, analytics, and form endpoints.",
      outcomes: ["Clean TypeScript component architecture", "API & database hookup with full error boundaries", "Cross-browser & cross-device compatibility"]
    },
    {
      step: "04",
      title: "Audit, Optimization & Production Launch",
      duration: "Week 5",
      summary: "Rigorous stress testing: sub-second Lighthouse optimizations, accessibility compliance checks, SEO metadata tuning, and flawless domain deployment.",
      outcomes: ["100/100 Core Web Vitals audit", "Complete client handoff documentation & video walkthrough", "30-day post-launch warranty & monitoring"]
    }
  ] as WorkflowStep[],

  faqs: [
    {
      question: "What is your typical project timeline?",
      answer: "Most flagship website builds take between 3 to 6 weeks from kickoff to deployment. Web applications and complex e-commerce platforms typically range from 6 to 10 weeks, organized into transparent weekly milestones."
    },
    {
      question: "How do we collaborate during development?",
      answer: "I provide private staging preview URLs updated in real-time with every code commit. We communicate asynchronously via Slack or email, with weekly video alignment checkpoints to test interactive builds together."
    },
    {
      question: "Can I easily update my content after launch?",
      answer: "Absolutely. I configure intuitive headless CMS solutions (like Sanity, Strapi, or Supabase) with customized editor dashboards, allowing you and your team to update copy, media, and blog posts without touching code."
    },
    {
      question: "What are your payment terms and project tiers?",
      answer: "Projects typically operate on a milestone schedule (e.g., 50% deposit upon kickoff, 50% upon successful deployment and sign-off). Engagements range from focused $3,500 landing pages to comprehensive $15,000+ custom web platforms."
    }
  ]
};
