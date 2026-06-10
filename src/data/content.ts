export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export const services: Service[] = [
  {
    id: 'custom-furniture',
    title: 'Custom Furniture',
    description:
      'Hand-crafted tables, chairs, beds, and cabinets built to your exact specifications. Every piece is designed around your space and lifestyle.',
    icon: 'armchair',
  },
  {
    id: 'kitchen-cabinetry',
    title: 'Kitchen Cabinetry',
    description:
      'Bespoke kitchen cabinets and joinery that maximise storage, beauty, and durability — built to outlast trends and decades of daily use.',
    icon: 'layout-grid',
  },
  {
    id: 'architectural-millwork',
    title: 'Architectural Millwork',
    description:
      'Crown moulding, wainscotting, built-in shelving, and feature walls that bring warmth and character to any interior.',
    icon: 'home',
  },
  {
    id: 'outdoor-structures',
    title: 'Outdoor Structures',
    description:
      'Decks, pergolas, garden furniture, and timber frames built for the Australian climate — beautiful and engineered to last.',
    icon: 'trees',
  },
  {
    id: 'restoration',
    title: 'Restoration & Repair',
    description:
      'Breathing new life into antique and heirloom pieces with sensitive craftsmanship that honours the original work.',
    icon: 'wrench',
  },
  {
    id: 'commercial',
    title: 'Commercial Fit-outs',
    description:
      'Bespoke timber joinery for restaurants, offices, retail, and hospitality — high-quality pieces that make your space unforgettable.',
    icon: 'building-2',
  },
];

export const projects: Project[] = [
  {
    id: 'blackwood-dining',
    title: 'Blackwood Dining Table',
    category: 'Furniture',
    description:
      'A live-edge Australian blackwood dining table with hand-turned legs for a family in the Blue Mountains.',
    imageUrl:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    imageAlt: 'Live-edge blackwood dining table with natural grain',
  },
  {
    id: 'kitchen-ash',
    title: 'Ash Timber Kitchen',
    category: 'Cabinetry',
    description:
      'Full kitchen cabinetry in white ash with brass hardware for a heritage home renovation in Paddington, Sydney.',
    imageUrl:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    imageAlt: 'Ash timber kitchen cabinetry with brass hardware',
  },
  {
    id: 'library-walnut',
    title: 'Walnut Home Library',
    category: 'Millwork',
    description:
      'Floor-to-ceiling walnut shelving with a rolling library ladder for a Woollahra study.',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    imageAlt: 'Floor-to-ceiling walnut bookshelves with rolling ladder',
  },
  {
    id: 'deck-spotted-gum',
    title: 'Spotted Gum Deck',
    category: 'Outdoor',
    description:
      'A wraparound spotted gum deck with integrated bench seating and planter boxes in the Northern Beaches.',
    imageUrl:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    imageAlt: 'Wraparound spotted gum timber deck',
  },
  {
    id: 'cafe-fitout',
    title: 'Arborist Café Fit-out',
    category: 'Commercial',
    description:
      'Custom banquettes, a reclaimed timber bar top, and feature ceiling panelling for a café in Surry Hills.',
    imageUrl:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
    imageAlt: 'Warm timber café fit-out with banquette seating',
  },
  {
    id: 'heirloom-restoration',
    title: 'Victorian Dresser Restoration',
    category: 'Restoration',
    description:
      'Full restoration of an 1890s Victorian cedar dresser, preserving original joinery and patina.',
    imageUrl:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    imageAlt: 'Restored Victorian cedar dresser with original brass hardware',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Whitfield',
    location: 'Mosman, NSW',
    quote:
      "Big Wood Works transformed our kitchen. The ash cabinetry is absolutely stunning — we get compliments every time someone visits. The craftsmanship is genuinely exceptional, and the team was a pleasure to work with from start to finish.",
    rating: 5,
  },
  {
    id: 't2',
    name: 'James & Priya Mehta',
    location: 'Balmain, NSW',
    quote:
      "We commissioned a blackwood dining table and it's now the centrepiece of our home. The grain is breathtaking and the piece is solid as a rock. Worth every cent — it'll be in our family for generations.",
    rating: 5,
  },
  {
    id: 't3',
    name: 'Tom Nguyen',
    location: 'Surry Hills, NSW',
    quote:
      "As a café owner, I needed a fit-out that told a story. Big Wood Works delivered beyond what I imagined. The reclaimed bar top alone has become a talking point for every customer who walks in.",
    rating: 5,
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'mike',
    name: 'Mike Dawson',
    role: 'Founder & Master Craftsman',
    bio:
      'With 28 years at the bench, Mike founded Big Wood Works on a single principle: every piece of timber deserves to become something extraordinary. He trained under a fifth-generation cabinetmaker in Tasmania before setting up his Sydney workshop.',
    imageUrl:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&q=80',
  },
  {
    id: 'anna',
    name: 'Anna Reeves',
    role: 'Head of Design',
    bio:
      "Anna brings an architect's eye to every commission. She works closely with clients to translate briefs into precise working drawings, ensuring the finished piece looks as good in the room as it does on paper.",
    imageUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
  },
  {
    id: 'tom',
    name: 'Tom Birch',
    role: 'Senior Cabinetmaker',
    bio:
      'Tom specialises in complex joinery and hand-cut dovetails. A TAFE apprenticeship gave him the foundations; a decade of pushing himself at the bench gave him the craft.',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Consultation',
    description:
      'We sit down with you — in person or virtually — to understand your space, needs, taste, and budget. No obligation, just a genuine conversation.',
  },
  {
    step: 2,
    title: 'Design & Quoting',
    description:
      'Our team produces detailed drawings and material samples for your approval. You receive a transparent, itemised quote before a single piece of timber is cut.',
  },
  {
    step: 3,
    title: 'Timber Selection',
    description:
      'We source sustainably harvested Australian hardwoods and select boards specifically for your commission, choosing for grain, figure, and character.',
  },
  {
    step: 4,
    title: 'Crafting',
    description:
      "Your piece is made by hand in our inner-west Sydney workshop. We keep you updated with photos throughout the build, and you're welcome to visit.",
  },
  {
    step: 5,
    title: 'Finishing & Delivery',
    description:
      "Every surface is hand-sanded and finished to a standard that only reveals itself over years of use. We deliver and install, and we don't leave until it's right.",
  },
];
