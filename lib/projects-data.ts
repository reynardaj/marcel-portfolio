export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  content?: {
    overview: string;
    problem: string;
    approach: string[];
    result: string;
  };
}

export const projects: Project[] = [
  {
    id: 'spatial-os',
    title: 'Spatial OS UI / 3D Explorations',
    category: 'Design Engineering',
    description: 'A conceptual operating system interface leveraging 3D spatial awareness and depth layering for window management.',
    image: 'https://picsum.photos/seed/spatial/1200/800',
    tags: ['React Three Fiber', 'Next.js', 'Framer Motion'],
    content: {
      overview: 'Modern computing environments are largely restricted to 2D planes, ignoring the intuitive spatial awareness humans possess. Spatial OS is an exploration into 3D window management, using depth to organize information hierarchy.',
      problem: 'Current OS interfaces clutter quickly. Users lose context when switching between dozens of flat windows. Tiling features help but don\'t fundamentally solve the cognitive load problem.',
      approach: [
        'Z-Axis Layering: Active windows pull forward, inactive ones recede into the volumetric background.',
        'Ambient Occlusion UI: Using light and shadow to naturally indicate focus and priority.',
        'Gestural Fluidity: Mapping cursor velocity to camera micro-movements for a physical feel.'
      ],
      result: 'A 60fps web-based prototype that demonstrates a 40% reduction in cognitive load during multi-tasking scenarios, proving the viability of depth-based interfaces.'
    }
  },
  {
    id: 'fintech-dash',
    title: 'Nexus Fintech Dashboard',
    category: 'Product Design',
    description: 'A high-density data visualization platform designed for institutional traders, featuring custom composable charts.',
    image: 'https://picsum.photos/seed/dash/800/800',
    tags: ['Tailwind v4', 'D3.js', 'Design System'],
    content: {
      overview: 'Institutional traders require vast amounts of data at a glance without visual noise. Nexus is a dashboard built specifically to handle high-frequency data streams while maintaining absolute clarity.',
      problem: 'Legacy trading software uses outdated rendering techniques and creates severe eye strain over 8-hour sessions due to poor contrast and cluttered information architecture.',
      approach: [
        'Monochromatic Data Scaling: Reserving accent colors (red/green) strictly for positive/negative deltas.',
        'Custom D3 Renderers: Built WebGL-accelerated chart components capable of rendering 10k+ points without dropping frames.',
        'Modular Grid System: Allowed users to compose their own terminal layouts.'
      ],
      result: 'Adopted by a mid-sized hedge fund, resulting in a 2x increase in layout customization usage and positive feedback regarding eye strain reduction.'
    }
  },
  {
    id: 'ai-editor',
    title: 'Synthetix AI Text Editor',
    category: 'Full-stack Engineering',
    description: 'An AI-augmented text editor with real-time generative capabilities, built on a robust Node/React architecture.',
    image: 'https://picsum.photos/seed/editor/800/800',
    tags: ['TypeScript', 'ProseMirror', 'LLM API'],
    content: {
      overview: 'Typing is a manual bottleneck. Synthetix introduces an editor where the LLM is a continuous co-writer, not just a chatbot in a sidebar.',
      problem: 'Constant context switching between a writing app and ChatGPT breaks flow state. Users need intelligent autocompletion and structural editing inline.',
      approach: [
        'Ghost Text Engine: Engineered a custom ProseMirror plugin to handle predictive "ghost text" with zero latency.',
        'Streaming Architecture: Built an edge-runtime API to stream LLM tokens directly into the WYSIWYG DOM.',
        'Semantic Parsing: The editor understands document structure (H1, P, Lists) to provide context-aware suggestions.'
      ],
      result: 'Achieved a "time-to-first-draft" reduction of 60% for beta testers. The smooth, flicker-free streaming UI set a new standard for text interaction.'
    }
  },
  {
    id: 'hardware-config',
    title: 'E-Bike Hardware Configurator',
    category: '3D Web Experience',
    description: 'An interactive WebGL configurator allowing users to customize and explore e-bike models in real-time 3D.',
    image: 'https://picsum.photos/seed/bike/1200/800',
    tags: ['Three.js', 'WebGL', 'UI/UX'],
    content: {
      overview: 'Buying a high-end e-bike online lacks the tangible feel of a showroom. This configurator bridges the gap by offering a photorealistic, interactive 3D model in the browser.',
      problem: 'Standard e-commerce uses static image galleries. Customers abandon high-ticket hardware purchases due to an inability to visualize their exact custom build.',
      approach: [
        'Asset Optimization: Compressed highly detailed CAD models via Draco compression for fast web delivery.',
        'Physically Based Rendering (PBR): Implemented accurate material shaders for matte paint, anodized aluminum, and rubber textures.',
        'Seamless UI Integration: Built a React UI layer that smoothly communicates parameters to the Three.js canvas.'
      ],
      result: 'Increased conversion rates by 22% and average order value by 15% as users were more confident upgrading physical components they could inspect in 3D.'
    }
  },
  {
    id: 'brand-identity',
    title: 'Aura Brand Identity',
    category: 'Product Design',
    description: 'Complete visual identity and design system for a sustainable energy startup.',
    image: 'https://picsum.photos/seed/brand/1200/800',
    tags: ['Figma', 'Typography', 'Branding'],
    content: {
      overview: 'Aura creates solid-state home batteries. They needed a brand that communicated both bleeding-edge technology and environmental approachability.',
      problem: 'Existing home battery brands either look overly industrial (like a generic gray box) or overly "greenwashed". Aura needed a distinct, premium aesthetic.',
      approach: [
        'Typographic System: Selected a geometric grotesque font paired with a technical monospace for data display.',
        'Color Story: Opted for an stark, almost brutalist black/white foundation, using a vivid "Electric Green" sparingly for interactive elements.',
        'Digital Twin Assets: Rendered photorealistic lifestyle imagery using 3D software rather than relying on generic stock photos.'
      ],
      result: 'Successfully launched the brand identity alongside their Series A announcement, garnering design awards and high praise for the website\'s cohesive feel.'
    }
  },
  {
    id: 'analytics-engine',
    title: 'Core Analytics Engine',
    category: 'Full-stack Engineering',
    description: 'High-throughput analytics pipeline built for processing millions of user events per minute in real-time.',
    image: 'https://picsum.photos/seed/analytics/1200/800',
    tags: ['Node.js', 'Kafka', 'PostgreSQL'],
    content: {
      overview: 'A fast-growing SaaS platform hit a wall with their legacy analytics pipeline. Queries that took 2 seconds started taking 2 minutes. I re-architected the entire ingestion and query engine.',
      problem: 'A monolithic Node.js parsing service could not horizontally scale fast enough to handle traffic spikes, leading to dropped telemetry and dashboard timeouts.',
      approach: [
        'Event Streaming: Introduced Kafka as a message broker to decouple ingestion from processing.',
        'Data Warehousing: Migrated the heavy analytical queries from standard PostgreSQL to a columnar datastore optimized for time-series.',
        'Edge Ingestion: Built lightweight edge-functions to capture and immediately queue incoming telemetry without spinning up heavy server instances.'
      ],
      result: 'System now reliably processes 5M events/minute with p99 latencies under 50ms. Dashboard load times dropped from 120s to <1s.'
    }
  }
];

export const categories = ['All', 'Design Engineering', 'Product Design', 'Full-stack Engineering', '3D Web Experience'];
