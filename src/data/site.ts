import type { LucideIcon } from "lucide-react";
import { Brush, Hammer, Home, Layers, Leaf, Ruler, ShieldCheck, Sofa, Trees, Wrench } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

export const figmaScreens = [
  { nodeId: "8:3", route: "/", label: "Home" },
  { nodeId: "8:328", route: "/custom-furniture", label: "Custom Furniture" },
  { nodeId: "8:885", route: "/cabinetry", label: "Cabinetry" },
  { nodeId: "8:1235", route: "/portfolio", label: "Portfolio" },
  { nodeId: "8:1486", route: "/process", label: "Process" },
  { nodeId: "8:1691", route: "/about", label: "About" },
  { nodeId: "8:1937", route: "/contact", label: "Contact" },
  { nodeId: "8:2126", route: "/quote", label: "Quote" },
] satisfies Array<{ nodeId: string; route: string; label: string }>;

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Furniture", href: "/custom-furniture" },
  { label: "Cabinetry", href: "/cabinetry" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const heroImages = {
  workshop:
    "https://images.unsplash.com/photo-1416339684178-3a239570f315?auto=format&fit=crop&w=1600&q=85",
  furniture:
    "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1600&q=85",
  cabinetry:
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=85",
  craft:
    "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=1600&q=85",
};

export const services: Feature[] = [
  {
    title: "Architectural woodwork",
    description: "Built-ins, millwork, trims, stair details, panels, and wood surfaces shaped to the room.",
    icon: Home,
  },
  {
    title: "Custom furniture",
    description: "Tables, storage pieces, benches, beds, desks, and statement pieces made to exact dimensions.",
    icon: Sofa,
  },
  {
    title: "Cabinetry systems",
    description: "Kitchen, bath, office, retail, and studio cabinetry with considered storage and durable finishes.",
    icon: Layers,
  },
  {
    title: "Finishing and repair",
    description: "Refinishing, restoration, hardware updates, and careful repair for pieces worth keeping.",
    icon: Brush,
  },
];

export const values: Feature[] = [
  {
    title: "Measured first",
    description: "Every project starts with site measurements, constraints, and practical use cases.",
    icon: Ruler,
  },
  {
    title: "Built to work hard",
    description: "Joinery, materials, and finish choices are selected for daily use, not only photographs.",
    icon: ShieldCheck,
  },
  {
    title: "Material honesty",
    description: "Solid woods, veneers, hardware, and finishes are matched to the project and explained clearly.",
    icon: Trees,
  },
  {
    title: "Installed cleanly",
    description: "Shop fabrication and careful installation keep disruption low and alignment crisp.",
    icon: Wrench,
  },
];

export const projects: Project[] = [
  {
    title: "Walnut kitchen wall",
    category: "Cabinetry",
    image: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1200&q=85",
    description: "Flush storage, continuous grain, and integrated appliance panels.",
  },
  {
    title: "Oak dining table",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=85",
    description: "A generous family table with a softened edge profile and hand-rubbed finish.",
  },
  {
    title: "Library built-ins",
    category: "Architectural",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=85",
    description: "Full-height storage with display shelving, closed cabinets, and fitted lighting.",
  },
  {
    title: "Entry bench system",
    category: "Millwork",
    image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=1200&q=85",
    description: "A durable landing zone with concealed shoe storage and coat organization.",
  },
  {
    title: "Studio work desk",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85",
    description: "A compact desk with cable routing, drawers, and a warm oil finish.",
  },
  {
    title: "Retail display wall",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    description: "Modular merchandising surfaces made for repeated seasonal changes.",
  },
];

export const processSteps: Step[] = [
  {
    title: "Consultation",
    description: "Scope, measurements, materials, timing, and budget are defined before design work begins.",
  },
  {
    title: "Design",
    description: "Drawings, finish samples, hardware choices, and proportions are refined into a build plan.",
  },
  {
    title: "Fabrication",
    description: "Pieces are built in the shop with progress checks for key details and finish samples.",
  },
  {
    title: "Installation",
    description: "The final work is delivered, installed, leveled, adjusted, cleaned, and reviewed on site.",
  },
];

export const stats = [
  { value: "18+", label: "years of shop experience" },
  { value: "240", label: "custom projects completed" },
  { value: "4", label: "project stages from idea to install" },
];

export const materialNotes = [
  { title: "Solid hardwoods", text: "Walnut, white oak, maple, ash, cherry, and specialty boards." },
  { title: "Stable panels", text: "Furniture-grade plywood, veneers, and engineered panels where movement matters." },
  { title: "Durable finishes", text: "Oil, water-based, lacquer, and conversion finishes selected by use case." },
];

export const accents = [Hammer, Leaf, Ruler];
