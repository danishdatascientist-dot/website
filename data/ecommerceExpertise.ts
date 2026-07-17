export type EcommerceArea = {
  title: string;
  description: string;
  details: string;
  skills: string[];
};

export type MarketplaceTool = {
  name: string;
  description: string;
  uses: string[];
};

export const ecommerceAreas: EcommerceArea[] = [
  {
    title: "Private Label",
    description:
      "Private Label involves developing and selling a branded product sourced from a manufacturer. My experience covered product and niche research, supplier sourcing, competitor analysis, pricing assessment, listing preparation, and coordination of branding requirements.",
    details:
      "I used marketplace data and research tools to compare demand, competition, historical pricing, keyword opportunities, estimated costs, supplier options, and potential product risks before supporting product-selection and launch decisions.",
    skills: [
      "Product research", "Niche validation", "Supplier sourcing",
      "Competitor analysis", "Pricing assessment", "Brand positioning",
      "Listing research", "Keyword research", "Margin review",
      "Market analysis", "Inventory planning", "Launch preparation",
    ],
  },
  {
    title: "Wholesale",
    description:
      "Wholesale involves purchasing established branded products from authorised suppliers and reselling them through the marketplace. My experience included supplier communication, offer and margin analysis, inventory tracking, replenishment planning, pricing review, and performance reporting.",
    details:
      "I reviewed supplier offers, marketplace competition, pricing history, estimated fees, stock movement, and SKU-level performance to support purchasing, restocking, and inventory decisions.",
    skills: [
      "Supplier communication", "Supplier negotiation", "Product evaluation",
      "Offer analysis", "Margin analysis", "Buy Box review",
      "Pricing analysis", "Inventory management", "Replenishment planning",
      "Stock monitoring", "SKU performance", "Reporting",
    ],
  },
];

export const marketplaceTools: MarketplaceTool[] = [
  {
    name: "Helium 10",
    description:
      "An Amazon product, keyword, listing, and market-research toolkit used to evaluate niches, search terms, competitors, listings, and product opportunities.",
    uses: ["Product research", "Keyword discovery", "Competitor review", "Listing analysis", "Market validation", "Search-volume review", "Product tracking"],
  },
  {
    name: "Jungle Scout",
    description:
      "A product-opportunity research and sales-demand estimation platform used to compare potential products, niches, competition, and marketplace demand.",
    uses: ["Product discovery", "Sales estimation", "Demand review", "Competition analysis", "Niche research", "Product comparison", "Opportunity validation"],
  },
  {
    name: "Keepa",
    description:
      "A historical Amazon data tool used to review pricing, sales rank, Buy Box activity, offer counts, and stock-related trends over time.",
    uses: ["Price-history review", "Sales-rank trends", "Buy Box analysis", "Offer-count tracking", "Stock-pattern review", "Product-risk checks", "Historical comparison"],
  },
];

export const ecommerceDataConnections = [
  "Product and SKU-level data cleaning", "Sales and inventory analysis",
  "Pricing-gap identification", "Competitor benchmarking",
  "Restock prioritisation", "Margin and profitability analysis",
  "Keyword and listing-performance review", "KPI dashboards",
  "Automated reporting", "Forecasting and stock-risk analysis",
  "AI-assisted customer support", "Product recommendation workflows",
  "Marketplace knowledge-base assistants",
];
