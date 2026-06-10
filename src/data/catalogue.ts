export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  name: string;
  collection: string;
  material: string;
  image: string;
}

export interface Collection {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  products: Product[];
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Customization", href: "/customization" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Export", href: "/export" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "30+", label: "Years manufacturing excellence" },
  { value: "50,000+", label: "Cremation urns manufactured since 2023" },
  { value: "8,000+", label: "Monthly manufacturing capacity" },
  { value: "6+", label: "Countries served" },
];

export const processSteps = [
  {
    title: "Wood selection",
    text: "Wood is carefully selected and procured from a government-authorized depot.",
  },
  {
    title: "Treatment and seasoning",
    text: "Carefully treated and seasoned wood ensures durability, stability, and long-lasting performance.",
  },
  {
    title: "Logs processing",
    text: "Logs are cut into sawns, converted into planks, and crafted into blanks and round blanks.",
  },
  {
    title: "Wood crafting",
    text: "Each piece is shaped through skilled woodworking and fine finishing.",
  },
  {
    title: "Customization",
    text: "Names, dates, logos, artwork, engraving, and UV printing create a personal touch.",
  },
  {
    title: "Inspection and dispatch",
    text: "Every product is inspected, carefully packed, and securely dispatched.",
  },
];

export const whyChooseUs = [
  "30+ years of trusted manufacturing expertise",
  "50,000+ premium cremation urns crafted",
  "Low MOQ, fast development, and consistent quality",
  "OEM & ODM manufacturing capabilities",
  "Ready-to-ship and made-to-order production",
  "Global export support and reliable supply chain",
];

export const manufacturingHighlights = [
  { title: "Monthly manufacturing capacity", text: "8,000+ units capacity for bulk and repeat orders." },
  { title: "Skilled craftsmanship", text: "Expert teams for woodworking, finishing, engraving, and assembly." },
  { title: "Laser engraving", text: "6 precision laser machines for detailed personalization." },
  { title: "Resin inlay work", text: "Custom resin detailing for unique premium products." },
  { title: "Quality control", text: "Dedicated inspection team ensuring consistent quality." },
];

export const qualitySteps = [
  "Material inspection",
  "Process control",
  "Finish review",
  "Personalization check",
  "Final inspection",
  "Approval support",
];

export const customizationServices = [
  {
    title: "Design and prototyping",
    text: "Portraits, pet images, detailed memorial artwork, and custom product development.",
  },
  {
    title: "Name and date engraving",
    text: "Custom names, dates, quotes, and memorial messages.",
  },
  {
    title: "Custom artwork and symbols",
    text: "Tree of Life, paw prints, religious motifs, floral designs, and custom artwork.",
  },
  {
    title: "Resin inlay and decorative detailing",
    text: "Premium resin accents for distinctive memorial collections.",
  },
  {
    title: "Private label and OEM solutions",
    text: "Branding, packaging, labels, inserts, and custom product development.",
  },
  {
    title: "Color, finish, and size customization",
    text: "Custom stains, coatings, dimensions, capacities, and design variations.",
  },
];

export const collections: Collection[] = [
  {
    title: "Lichtenberg Resin Urns",
    subtitle: "Inspired by nature, made to remember",
    description: "Premium resin urns created to honor cherished memories with style and grace.",
    image: "/assets/catalogue-images/page-26-1.png",
    products: [
      { name: "Legacy Vein Urn", collection: "Lichtenberg Resin", material: "Mango Wood", image: "/assets/catalogue-images/page-26-1.png" },
      { name: "Heart Tribute Urn", collection: "Lichtenberg Resin", material: "Mango & Rose Wood", image: "/assets/catalogue-images/page-26-2.png" },
      { name: "Paw Memorial Urn", collection: "Lichtenberg Resin", material: "Rose Wood", image: "/assets/catalogue-images/page-26-3.png" },
    ],
  },
  {
    title: "Premium UV Printed Urns",
    subtitle: "Custom tributes that last forever",
    description: "High-quality UV printed urns designed for lasting remembrance.",
    image: "/assets/catalogue-images/page-27-1.png",
    products: [
      { name: "Hummingbird", collection: "Premium UV Printed", material: "Mango Wood", image: "/assets/catalogue-images/page-27-1.png" },
      { name: "Guitar Tribute", collection: "Premium UV Printed", material: "Rose Wood", image: "/assets/catalogue-images/page-27-2.png" },
      { name: "Golden Tree", collection: "Premium UV Printed", material: "Rose Wood", image: "/assets/catalogue-images/page-27-3.png" },
    ],
  },
  {
    title: "Classical Design Urns",
    subtitle: "Honoring memories beautifully",
    description: "Traditional artwork and natural wood craftsmanship for timeless remembrance.",
    image: "/assets/catalogue-images/page-29-1.png",
    products: [
      { name: "Floral Legacy", collection: "Classical Design", material: "Mango Wood", image: "/assets/catalogue-images/page-29-1.png" },
      { name: "Nature Bloom", collection: "Classical Design", material: "Mango Wood", image: "/assets/catalogue-images/page-29-2.png" },
      { name: "Mountain Peace", collection: "Classical Design", material: "Mango Wood", image: "/assets/catalogue-images/page-29-3.png" },
    ],
  },
  {
    title: "Heritage Memorial Collection",
    subtitle: "Personalized wooden tributes",
    description: "Handcrafted wooden urns featuring meaningful engravings and timeless designs.",
    image: "/assets/catalogue-images/page-30-1.png",
    products: [
      { name: "Forever Cherished", collection: "Heritage Memorial", material: "Mango Wood", image: "/assets/catalogue-images/page-30-1.png" },
      { name: "Meadow Memories", collection: "Heritage Memorial", material: "Mango Wood", image: "/assets/catalogue-images/page-30-2.png" },
      { name: "Sacred Memory", collection: "Heritage Memorial", material: "Mango Wood", image: "/assets/catalogue-images/page-30-3.png" },
    ],
  },
  {
    title: "Pet Tribute Collection",
    subtitle: "Wooden memorial collection",
    description: "Urns designed to celebrate the bond and memories shared with beloved companions.",
    image: "/assets/catalogue-images/page-33-1.png",
    products: [
      { name: "Paw Tribute", collection: "Pet Tribute", material: "Rose Wood", image: "/assets/catalogue-images/page-33-1.png" },
      { name: "Tree of Memories", collection: "Pet Tribute", material: "Rose Wood", image: "/assets/catalogue-images/page-33-2.png" },
      { name: "Forever Friend", collection: "Pet Tribute", material: "Rose Wood", image: "/assets/catalogue-images/page-33-3.png" },
    ],
  },
  {
    title: "Best Seller Collection",
    subtitle: "Our most popular memorial urns",
    description: "Loved for exceptional craftsmanship, timeless designs, and meaningful artistic details.",
    image: "/assets/catalogue-images/page-41-1.png",
    products: [
      { name: "TreeVault Box", collection: "Best Seller", material: "Rose Wood", image: "/assets/catalogue-images/page-41-1.png" },
      { name: "Heart Tribute", collection: "Best Seller", material: "Rose Wood", image: "/assets/catalogue-images/page-41-2.png" },
      { name: "Eternal Flame", collection: "Best Seller", material: "Mango Wood", image: "/assets/catalogue-images/page-41-3.png" },
    ],
  },
];

export const contact = {
  phones: ["+91-7017719423", "+91-8860786880"],
  email: "info@bigwoodworks.com",
  address: "F17 Shaheen Bagh, New Delhi - 110025, India",
  website: "www.bigwoodworks.com",
};
