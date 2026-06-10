import homeImage from "../assets/screens/home.jpg";
import aboutImage from "../assets/screens/about.jpg";
import productsImage from "../assets/screens/products.jpg";
import oemImage from "../assets/screens/oem.jpg";
import manufacturingImage from "../assets/screens/manufacturing.jpg";
import exportImage from "../assets/screens/export.jpg";
import qualityImage from "../assets/screens/quality.jpg";
import customizationImage from "../assets/screens/customization.jpg";

export interface SitePage {
  route: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primaryCta: string;
  secondaryCta?: string;
  stats?: Array<{ value: string; label: string }>;
  sections: Array<{
    eyebrow?: string;
    title: string;
    body?: string;
    items?: Array<{ title: string; body: string; meta?: string }>;
  }>;
}

export const pages: SitePage[] = [
  {
    route: "/",
    navLabel: "Home",
    eyebrow: "Premium wooden cremation urns",
    title: "Premium Wooden Cremation Urns, Crafted for Global Memorial Brands",
    description:
      "Based in the heart of Rajasthan, Big Wood Works combines decades of traditional woodworking expertise with modern manufacturing precision.",
    image: homeImage,
    primaryCta: "Request Wholesale Catalogue",
    secondaryCta: "Discuss Your Requirement",
    stats: [
      { value: "30+", label: "Years of Craftsmanship" },
      { value: "50k+", label: "Urns Since 2023" },
      { value: "8k+", label: "Monthly Capacity" },
      { value: "6+", label: "Export Countries" },
    ],
    sections: [
      {
        eyebrow: "Established heritage",
        title: "Your Manufacturing Partner for Memorial Products",
        body:
          "We specialize in B2B partnerships, providing global memorial brands with consistent quality, scale, and bespoke customization.",
        items: [
          { title: "Scaleable Production", body: "Reliable supply chains for large-volume retailers." },
          { title: "Custom Designs", body: "In-house design team for exclusive collections." },
        ],
      },
      {
        title: "Why Global Buyers Choose Big Wood Works",
        items: [
          { title: "Uncompromising Quality", body: "Three-stage inspection process ensuring every joint and finish meets international standards." },
          { title: "Production Efficiency", body: "High-capacity manufacturing unit capable of delivering 8,000 units monthly with zero delay." },
          { title: "Export Expertise", body: "Streamlined international shipping and compliance for hassle-free global procurement." },
        ],
      },
      {
        title: "From Timber to Finished Tribute",
        items: [
          { title: "Sourcing", body: "Selection of sustainable, premium hardwoods like Walnut, Oak, and Teak.", meta: "01" },
          { title: "Precision Machining", body: "Advanced cutting and shaping to achieve perfectly uniform dimensions.", meta: "02" },
          { title: "Artisanal Finishing", body: "Hand-sanding and multi-coat polishing for a tactile, luxury feel.", meta: "03" },
          { title: "Quality Audit", body: "Final check for structural integrity and aesthetic perfection.", meta: "04" },
        ],
      },
    ],
  },
  {
    route: "/about",
    navLabel: "About",
    eyebrow: "Our legacy",
    title: "Quiet Dignity in Every Grain",
    description:
      "Big Wood Works represents the pinnacle of B2B memorial manufacturing. Based in Rajasthan, India, we bridge ancient woodworking traditions and modern global standards.",
    image: aboutImage,
    primaryCta: "Catalogue",
    secondaryCta: "Get a Quote",
    sections: [
      {
        title: "The Maryam Crafts Partnership",
        body:
          "Big Wood Works operates as the specialized B2B manufacturing powerhouse for the renowned consumer brand, The Maryam Crafts.",
        items: [
          { title: "Manufacturing Root", body: "We provide the technical expertise and bulk production capacity that sustains high-end retail demands." },
          { title: "Unified Quality", body: "A shared standard of excellence ensures every product meets rigorous benchmarks." },
        ],
      },
      {
        eyebrow: "Our story",
        title: "Generations of Excellence",
        body: "Woodworking is not just our business; it is our lineage.",
        items: [
          { title: "Before 2020", body: "The foundation of family heritage and artisanal mastery." },
          { title: "2020", body: "The Maryam Crafts is established as a consumer-facing brand." },
          { title: "2023", body: "Big Wood Works is incorporated to serve the global B2B market." },
          { title: "2026", body: "Presence in 6+ countries with localized support and enhanced distribution networks." },
        ],
      },
    ],
  },
  {
    route: "/products",
    navLabel: "Products",
    eyebrow: "B2B manufacturing excellence",
    title: "Masterfully Crafted Wooden Memorials",
    description:
      "Explore our wholesale catalog of premium hardwood urns. Each piece is hand-finished by master woodworkers in Rajasthan.",
    image: productsImage,
    primaryCta: "Enquire",
    secondaryCta: "Load More Designs",
    sections: [
      {
        title: "Wholesale product collections",
        items: [
          { title: "The Heritage Cube", body: "Solid Walnut, 220 cu. in., satin varnish.", meta: "BWW-WAL-012" },
          { title: "Serenity Cylinder", body: "White Oak, 180 cu. in., natural oil with custom inlay available.", meta: "BWW-OAK-088" },
          { title: "Pet Collection Artisan Keepsake", body: "Sheesham, 30 cu. in., high gloss finish.", meta: "BWW-PET-KS01" },
          { title: "The Modern Monolith", body: "Hard Maple, 250 cu. in., matte lacquer.", meta: "BWW-MAP-402" },
        ],
      },
    ],
  },
  {
    route: "/oem-private-label",
    navLabel: "OEM",
    eyebrow: "Manufacturing partnerships",
    title: "OEM & Private Label Manufacturing",
    description:
      "Bring your brand vision to life with India's premier manufacturer of high-end wooden memorial urns and bespoke wooden heritage products.",
    image: oemImage,
    primaryCta: "Start an OEM Project",
    secondaryCta: "Request Samples",
    sections: [
      {
        title: "Manufacturing Models",
        body: "Choose the partnership level that best aligns with your brand's operational needs and creative control.",
        items: [
          { title: "Wholesale", body: "Standard catalog, low MOQ, Big Wood Works branding." },
          { title: "Private Label", body: "Standard catalog with your brand, custom packaging included." },
          { title: "OEM", body: "Client-provided designs, high-volume proprietary production." },
          { title: "ODM", body: "Co-developed exclusive designs with full proprietary control." },
        ],
      },
      {
        title: "Manufacturing Excellence from Rajasthan",
        body:
          "Our facility combines traditional wood-turning techniques with modern CNC precision to scale production while maintaining handcrafted tactile quality.",
      },
    ],
  },
  {
    route: "/manufacturing",
    navLabel: "Manufacturing",
    eyebrow: "Industrial precision, artisanal soul",
    title: "Our Production Unit: Where Craft Meets Scale",
    description:
      "From raw logs to precision-finished artifacts, explore the heartbeat of Big Wood Works' manufacturing prowess.",
    image: manufacturingImage,
    primaryCta: "View Capability",
    secondaryCta: "Learn More",
    stats: [
      { value: "8,000+", label: "Units Monthly Capacity" },
      { value: "06", label: "Laser Engraving Machines" },
      { value: "45+", label: "Woodworking Teams" },
      { value: "12", label: "Finishing Specialists" },
    ],
    sections: [
      {
        title: "Precision Woodworking Equipment",
        items: [
          { title: "Turning and Cutting", body: "CNC and manual turning units handle complex geometries with sub-millimeter precision." },
          { title: "Hand Finishing", body: "Manual sanding, oiling, and buffing achieve the signature tactile feel." },
          { title: "Resin Detailing", body: "Organic wood voids merge with high-clarity resins for bespoke high-end pieces." },
          { title: "Laser Engraving", body: "Six laser machines provide hyper-detailed branding and intricate pattern work." },
        ],
      },
      {
        title: "Rigorous Quality Control & Logistics",
        items: [
          { title: "Quality Control Department", body: "Moisture testing, structural checks, and visual auditing at every stage." },
          { title: "Optimized Warehouse", body: "Climate-controlled storage ensures wood stability before and after production." },
          { title: "Bespoke Packing Area", body: "Reinforced export-grade packaging tailored to each custom product." },
        ],
      },
    ],
  },
  {
    route: "/export",
    navLabel: "Export",
    eyebrow: "Global export",
    title: "Trusted Across Global Markets",
    description:
      "From our atelier in India to discerning clients in over 30 countries. We provide end-to-end logistics solutions for high-end wood products.",
    image: exportImage,
    primaryCta: "Discuss Shipping to Your Market",
    secondaryCta: "Catalogue",
    sections: [
      {
        title: "Seamless Distribution to Key Hubs",
        body:
          "We have established robust supply chain corridors serving architects, developers, and retailers in the world's most demanding markets.",
        items: [
          { title: "USA", body: "North America Hub" },
          { title: "UK", body: "Europe Corridor" },
          { title: "Canada", body: "Northern Logistics" },
          { title: "Germany", body: "EU Logistics Center" },
          { title: "Australia", body: "APAC Distribution" },
          { title: "Singapore", body: "SEA Connectivity" },
        ],
      },
      {
        title: "Integrated Global Logistics Network",
        items: [
          { title: "Export-ready packaging", body: "Heavy-duty crating and shock-absorbent internal framing for long-haul transit." },
          { title: "Documentation support", body: "Certificates of Origin, fumigation certificates, and customs paperwork." },
          { title: "Air/Sea freight coordination", body: "Carrier partnerships for competitive transit times and shipping lanes." },
          { title: "B2B e-commerce fulfillment", body: "Ready-to-ship inventory management for global retailers." },
        ],
      },
    ],
  },
  {
    route: "/quality",
    navLabel: "Quality",
    eyebrow: "Uncompromising standards",
    title: "Crafted with Care. Delivered with Confidence.",
    description:
      "Our six-stage verification protocol ensures every handcrafted piece meets international B2B standards before it leaves our workshop.",
    image: qualityImage,
    primaryCta: "Explore Our Protocol",
    secondaryCta: "Get a Custom Quote",
    sections: [
      {
        title: "Our Six-Stage Quality Process",
        items: [
          { title: "Material Inspection", body: "Moisture checks between 8-12% prevent warping or cracking in varied climates.", meta: "01" },
          { title: "Process Control", body: "Dimension verification after every cut maintains +/-0.5mm joinery tolerance.", meta: "02" },
          { title: "Finish Review", body: "Visual and tactile inspection checks grain, sanding, and protective oils.", meta: "03" },
          { title: "Personalization Verification", body: "Lid closure and engraving accuracy are verified against approved proofs.", meta: "04" },
          { title: "Final Inspection", body: "A 50-point checklist covers hardware, edge softness, and aesthetic balance.", meta: "05" },
          { title: "Buyer Approval Support", body: "Pre-shipment photo and video approval for every wholesale batch.", meta: "06" },
        ],
      },
      {
        title: "Technical Rigor, Handcrafted Soul.",
        body:
          "Quality assurance honors woodworking heritage through modern precision, climate stability, fit testing, digital transparency, and hardware integrity.",
      },
    ],
  },
  {
    route: "/customization",
    navLabel: "Customization",
    eyebrow: "Digital atelier",
    title: "Masterful Customization for Artisanal Woodcraft",
    description:
      "From initial reference to bulk production, we translate your vision into tangible wooden excellence through a seamless B2B workflow.",
    image: customizationImage,
    primaryCta: "Start Custom Project",
    secondaryCta: "Get a Custom Quote",
    sections: [
      {
        title: "The Customization Journey",
        body: "A rigorous 8-step process ensuring quality from concept to delivery.",
        items: [
          { title: "Share Reference", body: "Send sketches, moodboards, or physical samples.", meta: "1" },
          { title: "Materials & Size", body: "Select premium Walnut, Oak, or Teak and specify dimensions.", meta: "2" },
          { title: "Submit Artwork", body: "Upload high-resolution logos, graphics, or photo references.", meta: "3" },
          { title: "Digital Proof", body: "Receive a detailed 3D mockup for review.", meta: "4" },
          { title: "Approve Sample", body: "A physical prototype is created for touch-and-feel approval.", meta: "5" },
          { title: "Bulk Production", body: "Scale your design with precision-grade manufacturing.", meta: "6" },
          { title: "Quality Updates", body: "Daily photographic updates from the workshop floor.", meta: "7" },
          { title: "Dispatch", body: "International shipping with secure protective packaging.", meta: "8" },
        ],
      },
      {
        title: "Precision Branding Techniques",
        items: [
          { title: "Name & Date Engraving", body: "Timeless laser-etched details for awards and gifts." },
          { title: "Photo Engraving", body: "Turning high-resolution imagery into wooden art." },
          { title: "UV Direct Printing", body: "Full-spectrum color applications directly on wood." },
          { title: "Luxury Resin Inlay", body: "Elegant liquid-to-solid transitions in any color." },
          { title: "Brass Plate Inlays", body: "Polished metal accents for luxury branding." },
        ],
      },
    ],
  },
];

export const navPages = pages.map(({ route, navLabel }) => ({ href: route, label: navLabel }));

export function pageByRoute(route: string) {
  return pages.find((page) => page.route === route);
}
