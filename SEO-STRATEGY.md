# Big Wood Works SEO Strategy

Prepared for `https://www.bigwoodworks.com/`

This document is a working SEO roadmap based on the current codebase and public site structure. Where search-demand, performance, or business-proof data requires external tools, that dependency is called out instead of guessed.

## A. Executive Summary

Big Wood Works already has the right commercial story for search: manufacturing, OEM, private label, export, and wholesale memorial products. The main SEO opportunity is not a brand reset, but a structure-and-depth upgrade.

Current strengths:
- clear B2B positioning
- dedicated manufacturing, export, OEM, about, products, and contact pages
- downloadable catalogue
- route-level metadata and canonical handling now present in code
- SPA fallback already configured for Vercel, Netlify, and Apache-style hosting

Current SEO constraints:
- category-level landing pages are too broad for high-intent search clusters
- product/category pages are not yet mapped to specific search intents like `pet urn manufacturer` or `keepsake urn wholesaler`
- structured data is limited to organization, website, contact point, and breadcrumbs
- FAQ, trust signals, and internal-link hubs need more depth
- keyword coverage is broader than ranking precision

Priority summary:

| Priority | Focus |
|---|---|
| Critical | Build dedicated category and commercial landing pages |
| Critical | Expand page-level content for manufacturer, wholesale, export, and OEM intent |
| High | Add richer schema, FAQs, and internal-link pathways |
| High | Improve image format, Core Web Vitals, and crawl depth |
| Medium | Publish educational content to support topical authority |
| Medium | Build ethical backlinks through industry and export ecosystems |

## B. Critical SEO Issues

| Issue | Priority | Why it matters | Notes |
|---|---|---|---|
| Limited keyword-to-page mapping | Critical | Multiple high-intent terms currently point to broad pages | Dedicated pages recommended below |
| Broad products page | Critical | Harder to rank for specific commercial queries | Split by product family and intent |
| Missing category SEO silos | Critical | Product and buyer intent are not isolated cleanly | Add pages like `/pet-urns/` and `/wholesale-urns/` |
| Limited trust-proof content | High | B2B buyers need evidence before enquiring | Use real factory photos, capacity proof, QA proof, packaging proof |
| No visible FAQ depth across key pages | High | FAQ content supports long-tail search and conversion | Homepage FAQ added; expand to product/category pages |
| No tool-validated keyword benchmarks | High | Prioritisation is directional today | Requires Google Search Console + keyword tool data |
| No visible product/spec detail by category | High | Commercial visitors may bounce before enquiring | Add confirmed details only |
| Image format optimisation unknown | Medium | Likely performance opportunity | Requires asset pipeline review |

## C. Keyword Strategy

Difficulty estimates below are directional and should be validated with Ahrefs, Semrush, Google Search Console, or similar tools.

### Priority keyword map

| Keyword | Intent | Recommended page | Funnel | Priority | Difficulty | Content angle |
|---|---|---|---|---|---|---|
| wooden cremation urn manufacturer | Commercial | `/wooden-cremation-urns/` | Bottom | Critical | High | B2B manufacturing, material options, export support |
| cremation urn manufacturer in India | Commercial | `/wooden-urn-manufacturer-india/` | Bottom | Critical | Medium-High | India-based factory + export + OEM credibility |
| wooden urn exporter | Commercial | `/wooden-urn-exporter/` | Bottom | Critical | Medium-High | Export packaging, documentation, international buyers |
| wholesale wooden urns | Commercial | `/wholesale-urns/` | Bottom | Critical | High | Wholesale supply, bulk readiness, repeat orders |
| pet urn manufacturer | Commercial | `/pet-urns/` | Bottom | High | Medium | Pet memorial category + customisation support |
| personalized urn manufacturer | Commercial | `/personalized-urns/` | Bottom | High | Medium | Engraving, UV printing, private-label capability |
| custom wooden cremation urns | Commercial | `/personalized-urns/` | Bottom | High | Medium | Buyer-specific finishes, sizes, branding |
| private-label cremation urns | Commercial | `/oem-private-label/` | Bottom | Critical | Medium | OEM/ODM + packaging + branding |
| OEM memorial products | Commercial | `/oem-private-label/` | Bottom | Critical | Medium | Manufacturing partner positioning |
| funeral urn supplier | Commercial | `/wholesale-urns/` | Bottom | High | Medium | Supply partner for funeral homes and brands |
| keepsake urn wholesaler | Commercial | `/keepsake-urns/` | Bottom | High | Medium | Small-format memorial products for trade buyers |
| wooden urn supplier for funeral homes | Commercial | `/wholesale-urns/` | Bottom | High | Medium | Funeral-home sourcing and repeat supply |

### Keyword clusters

| Cluster | Sample keywords | Landing page direction |
|---|---|---|
| High-intent commercial | wooden urn supplier, cremation urn manufacturer, memorial product manufacturer | core commercial category pages |
| Wholesale | wholesale urns, bulk memorial urns, urn supplier for funeral homes | `/wholesale-urns/` |
| Manufacturer | urn manufacturer in India, wooden urn factory, cremation urn producer | `/wooden-urn-manufacturer-india/` |
| Export | wooden urn exporter, memorial product exporter, export-ready urn supplier | `/wooden-urn-exporter/` |
| OEM/private label | private-label cremation urns, OEM wooden urns, custom memorial products | `/oem-private-label/` |
| Product category | pet urns, keepsake urns, engraved urns, personalized urns | dedicated category pages |
| Informational | urn size guide, wooden vs metal urns, pet urn sizing | blog/content hub |
| Country-specific | wooden urn supplier USA, urn exporter to UK, wholesale urns Canada | future country pages if supported by real export content |
| Long-tail | custom wooden urn supplier for funeral homes, OEM pet urn manufacturer in India | supporting page sections + FAQs |

## D. Recommended Site Architecture

### Current public structure

- `/`
- `/products`
- `/manufacturing`
- `/oem`
- `/export`
- `/about`
- `/contact`
- `/customization`

### Recommended SEO structure

| URL | Purpose | Status |
|---|---|---|
| `/` | homepage / primary commercial overview | existing |
| `/wooden-cremation-urns/` | main category page | recommended new |
| `/pet-urns/` | pet memorial category page | recommended new |
| `/keepsake-urns/` | keepsake category page | recommended new |
| `/personalized-urns/` | personalization intent page | recommended new |
| `/wholesale-urns/` | wholesale and buyer-type page | recommended new |
| `/oem-private-label/` | OEM and private-label page | alias exists, dedicated content recommended |
| `/wooden-urn-manufacturer-india/` | manufacturer intent page | recommended new |
| `/wooden-urn-exporter/` | export intent page | recommended new |
| `/manufacturing/` | production flow | existing |
| `/quality-control/` | inspection and buyer approval support | recommended new |
| `/packaging/` | packaging, export protection, inserts | recommended new |
| `/about/` | trust and company background | existing |
| `/contact/` | enquiry capture | existing |

Recommendation: build these as real pages over time, not just redirects, so each one can own a distinct keyword cluster.

## E. Page-by-Page Metadata

### Current/future page framework

| Page | SEO title | Meta description | H1 | Primary keyword | Secondary keywords | Word count | CTA |
|---|---|---|---|---|---|---|---|
| Homepage | Wooden Cremation Urn Manufacturer & Exporter | Handcrafted wooden cremation urns for wholesale, OEM, private label, and export buyers. | Handcrafted Wooden Cremation Urns for Wholesale & Private Label | wooden cremation urn manufacturer | wholesale wooden urns, OEM urn manufacturing | 900-1400 | Request Wholesale Quote |
| `/wooden-cremation-urns/` | Wooden Cremation Urns for Wholesale Buyers | Explore handcrafted wooden cremation urns with OEM, engraving, export, and private-label support. | Wooden Cremation Urns for Wholesale & OEM Buyers | wooden cremation urns | custom wooden cremation urns, urn manufacturer | 1200-1800 | Request Wholesale Quote |
| `/pet-urns/` | Pet Urn Manufacturer for Wholesale & Private Label | Wooden pet urn manufacturing with branding, engraving, and export support for memorial-product buyers. | Wooden Pet Urns for Wholesale Buyers | pet urn manufacturer | wholesale pet urns, personalised pet urns | 1000-1500 | Request Wholesale Quote |
| `/keepsake-urns/` | Keepsake Urns for Wholesale Memorial Buyers | Explore wholesale keepsake urns with private-label and customisation support. | Keepsake Urns for Wholesale & OEM Programs | keepsake urn wholesaler | keepsake urn supplier, memorial keepsakes | 1000-1400 | Download Catalogue |
| `/personalized-urns/` | Personalized Wooden Urns for OEM & Wholesale | Engraved, UV printed, and custom wooden urns for funeral brands and memorial-product buyers. | Personalized Wooden Urns with Engraving & Branding Support | personalized urn manufacturer | engraved memorial urns, custom wooden urns | 1100-1600 | Discuss Customisation |
| `/wholesale-urns/` | Wholesale Wooden Urns for Funeral Homes & Brands | Bulk wooden urn supply for funeral homes, brands, distributors, and importers. | Wholesale Wooden Urns for B2B Buyers | wholesale wooden urns | funeral urn supplier, urn supplier for funeral homes | 1200-1700 | Request Wholesale Quote |
| `/oem-private-label/` | OEM & Private Label Memorial Product Manufacturing | OEM and private-label wooden urn manufacturing with branding, packaging, and export support. | OEM & Private Label Wooden Urn Manufacturing | private-label cremation urns | OEM memorial products, custom packaging | 1200-1700 | Start OEM Discussion |
| `/wooden-urn-manufacturer-india/` | Wooden Urn Manufacturer in India | India-based wooden cremation urn manufacturer for wholesale, export, and OEM buyers. | Wooden Cremation Urn Manufacturer in India | cremation urn manufacturer in India | memorial product manufacturer India | 1200-1600 | Contact Our Team |
| `/wooden-urn-exporter/` | Wooden Urn Exporter for Global Wholesale Buyers | Export-ready wooden urn manufacturing with packaging and documentation support. | Wooden Urn Exporter for International Buyers | wooden urn exporter | export-ready memorial products, urn export supplier | 1000-1500 | Request Export Quote |
| `/manufacturing/` | Wooden Urn Manufacturing, Engraving & Quality Control | See woodworking, engraving, finishing, and inspection support behind Big Wood Works production. | Built for Precision & Scale | wooden urn manufacturing | laser engraving, UV printing, quality control | 1000-1500 | Discuss Your Requirement |
| `/about/` | About Big Wood Works | Learn about Big Wood Works, its manufacturing heritage, founders, and export-focused buyer support. | Crafted to honour memory, scale, and trust. | about big wood works | memorial urn manufacturer India | 900-1300 | Download Catalogue |
| `/contact/` | Request a Wholesale Quote | Contact Big Wood Works for wholesale, OEM, export, and private-label enquiries. | Request a wholesale quote. | request wholesale quote | contact wooden urn manufacturer | 700-1100 | Submit Wholesale Enquiry |

## F. Homepage Rewrite Direction

The current homepage is much closer to search-ready now. Recommended permanent structure:

1. manufacturer/export hero
2. buyer types
3. product families
4. OEM/private label
5. manufacturing process
6. quality and capacity proof
7. export support
8. featured categories/products
9. FAQ
10. final quote CTA

Additional homepage modules recommended later:
- real quality-control or packaging photo strip
- category links to future SEO landing pages
- buyer proof section using only verified evidence
- downloadable category brochure blocks

## G. Technical SEO Checklist

| Item | Priority | Status | Action |
|---|---|---|---|
| XML sitemap | High | present | expand as new pages launch |
| robots.txt | High | present | keep sitemap reference updated |
| Canonicals | Critical | implemented in layout | verify in production source |
| HTTPS | Critical | requires production check | force HTTPS at host/CDN level |
| Redirects / SPA fallback | Critical | present | keep as-is |
| Broken links | High | requires crawl | run Screaming Frog or Sitebulb |
| Core Web Vitals | High | unknown | measure via PageSpeed Insights and GSC |
| Mobile performance | High | unknown | test main templates at 320/375/430 widths |
| Image compression | High | partial | convert hero/category images to WebP/AVIF where possible |
| Alt text | High | partial | continue improving product/category specificity |
| Lazy loading | Medium | partial | already used on many below-the-fold images |
| Breadcrumbs | Medium | implemented in schema only | add visible breadcrumbs on deeper pages later |
| Search Console | Critical | external dependency | connect and validate domain property |
| Bing Webmaster Tools | Medium | external dependency | connect after sitemap stabilises |

## H. Schema Recommendations

Recommended schema types:
- `Organization`
- `WebSite`
- `ContactPoint`
- `BreadcrumbList`
- `FAQPage`
- `Product` or `ProductGroup` for category/product pages
- `LocalBusiness` only if the company wants a local commercial footprint emphasised

### Example FAQPage JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you support OEM and private-label urn programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Big Wood Works supports OEM, ODM, branding, packaging, engraving, and private-label memorial collections."
      }
    }
  ]
}
```

### Example ProductGroup JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "ProductGroup",
  "name": "Wooden Cremation Urns",
  "brand": {
    "@type": "Brand",
    "name": "Big Wood Works"
  },
  "description": "Handcrafted wooden cremation urns for wholesale, OEM, and export buyers."
}
```

Do not add ratings, reviews, prices, stock counts, certifications, or awards unless verified.

## I. Six-Month Content Calendar

Two articles per month.

| Month | Topic | Target keyword | Intent | CTA |
|---|---|---|---|---|
| Month 1 | How to Choose the Correct Cremation Urn Size | cremation urn size guide | Informational | Request Wholesale Quote |
| Month 1 | Wooden Urns vs Metal Urns for Memorial Brands | wooden urns vs metal urns | Commercial investigation | Explore Products |
| Month 2 | Pet Urn Sizing Guide for Memorial Product Sellers | pet urn sizing guide | Informational | Discuss Pet Urn Supply |
| Month 2 | Wholesale Urn Buying Guide for Funeral Homes | wholesale urn buying guide | Commercial investigation | Contact Our Team |
| Month 3 | Private-Label Memorial Product Manufacturing Explained | private-label memorial products | Commercial investigation | Discuss OEM Program |
| Month 3 | How Wooden Urns Are Manufactured | how wooden urns are manufactured | Informational | Explore Manufacturing |
| Month 4 | Personalization Options for Memorial Urns | personalized memorial urn options | Commercial investigation | Discuss Customisation |
| Month 4 | Export Packaging for Wooden Urns | export packaging for wooden urns | Informational / commercial | Request Export Support |
| Month 5 | Funeral Home Urn Sourcing Guide | funeral home urn supplier guide | Commercial investigation | Request Wholesale Quote |
| Month 5 | Cremation Urn Capacity Explained | cremation urn capacity explained | Informational | Download Catalogue |
| Month 6 | How OEM Urn Programs Work for Global Buyers | OEM urn manufacturing | Commercial investigation | Start OEM Discussion |
| Month 6 | Choosing Wood Species for Memorial Products | wood species for urns | Informational | Explore Product Options |

Each article should:
- link to products, manufacturing, OEM, export, and contact where relevant
- avoid unsupported claims
- use diagrams, process visuals, or confirmed product examples when available

## J. Backlink Plan

Ethical link opportunities:

| Source type | Priority | Approach |
|---|---|---|
| Funeral-industry directories | High | list manufacturer profile with consistent contact details |
| Pet memorial directories | Medium | submit pet urn capability pages when live |
| Export directories | High | use export/manufacturer positioning |
| Indian manufacturing directories | High | focus on category-specific profiles |
| B2B supplier platforms | High | align copy with OEM and wholesale page language |
| Guest articles | Medium | contribute educational memorial product sourcing content |
| Distributor partnerships | Medium | request supplier/manufacturer mentions |
| Packaging or sourcing partners | Medium | cross-reference relevant collaboration pages |
| Digital PR | Low-Medium | publish factory/process/product development stories only when credible |

Avoid:
- paid link packages
- spam directories
- automated outreach blasts
- fake review schemes
- private blog networks

## K. Conversion Recommendations

| Recommendation | Priority | Why |
|---|---|---|
| Keep one primary CTA: `Request Wholesale Quote` | Critical | supports commercial conversion clarity |
| Add WhatsApp contact if the business wants it public | High | useful for international buyers |
| Add sample request language only if sample policy is confirmed | High | strong B2B conversion lever |
| Show MOQ/lead time only after business confirmation | Critical | do not guess |
| Add real factory and packaging photos | Critical | trust proof for wholesale buyers |
| Add verified buyer testimonials later | Medium | only with consent and proof |
| Add privacy and terms pages | High | trust + compliance |
| Add quality-control evidence section | High | strengthens manufacturing credibility |
| Add market-specific enquiry prompts | Medium | supports export leads |

## L. 30-Day, 90-Day, and 180-Day Action Plan

### 0-30 days
- validate Google Search Console and Bing Webmaster Tools
- crawl the site for broken links, duplicate metadata, and missing alt text
- launch or scope priority pages: `/wholesale-urns/`, `/oem-private-label/`, `/wooden-cremation-urns/`
- confirm real business data: MOQ, lead times, export documentation details, sample policy
- convert major hero/category images to modern formats where practical

### 31-90 days
- publish at least 4 new SEO landing pages
- publish 4 blog articles from the content calendar
- add FAQ schema to homepage and key category pages
- add product/category internal link blocks across commercial pages
- add more visible trust-proof sections from confirmed photos and operations

### 91-180 days
- publish country-specific pages only if supported by real trade content
- expand category depth into pet urns, keepsake urns, and personalized urns
- measure conversion by source and landing page
- refine content using Search Console query data
- begin backlink outreach to export and funeral-industry sources

## Information Still Needed

The following should be confirmed before publishing deeper commercial SEO content:

- sample availability
- MOQ guidance
- lead times
- production timelines by order type
- export documentation specifics
- shipping methods and terms the company wants public
- real certifications, if any
- whether WhatsApp should be a primary contact method
- whether country-specific pages are commercially justified

## Tool-Dependent Validation

These items require external access and were not available in the local code review:

- Google Search Console impressions, CTR, and query data
- Google Analytics / GA4 conversion flow
- PageSpeed Insights / Lighthouse production performance
- server logs and crawl budget signals
- third-party keyword volumes and keyword difficulty
- index coverage and canonical validation in production
