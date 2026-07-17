export type Project = {
  slug: string;
  title: string;
  problem: string;
  result: string;
  features: string[];
  technologies: string[];
  category: "analytics" | "machine-learning" | "agentic-ai" | "rag";
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "hardware-store-global-inventory",
    title: "Hardware Store Global Inventory Analysis",
    problem: "A global hardware inventory needed clearer visibility into product value, margin performance, warehouse concentration, and stock risk.",
    result: "Produced executive-ready analysis across 1,112 SKU-warehouse records, 208 products, nine warehouses, and six countries, with recommendations for overstock reduction and inventory rebalancing.",
    features: [
      "ABC/Pareto analysis of inventory-value concentration",
      "Margin and product-profitability analysis",
      "Inventory-value analysis across products and warehouses",
      "Stock-risk, overstock, and dead-stock views",
      "Warehouse and geographic risk comparisons",
      "Rebalancing and stock-action recommendations",
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    category: "analytics",
  },
  {
    slug: "amazon-sales-inventory-analytics",
    title: "Amazon Sales and Inventory Analytics",
    problem: "Amazon seller data covering more than 200 SKUs required structured reporting for pricing, product visibility, inventory movement, and restock decisions.",
    result: "Created KPI reports and dashboard-ready datasets supporting product-performance review, competitor benchmarking, and inventory planning.",
    features: [
      "Sales and pricing analysis across 200+ SKUs",
      "Keyword and listing-performance analysis",
      "Competitor benchmarking",
      "Inventory-movement tracking",
      "Restock planning and stock-risk review",
      "KPI reports and dashboard-ready datasets",
    ],
    technologies: ["Python", "Pandas", "Excel", "Power BI", "Amazon Marketplace Tools"],
    category: "analytics",
  },
  {
    slug: "car-price-prediction",
    title: "Car Price Prediction Web Application",
    problem: "Used-car records needed a repeatable modelling pipeline and an accessible interface for estimating vehicle prices.",
    result: "Connected a validated machine-learning pipeline to a FastAPI backend and a browser-based prediction interface.",
    features: [
      "Data preparation and feature engineering",
      "Categorical encoding and price transformation",
      "Train/test validation",
      "Comparison of regression models",
      "MAE and RMSE evaluation",
      "FastAPI prediction endpoint",
      "Jinja2 and HTML/CSS prediction interface",
    ],
    technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "FastAPI", "Jinja2", "HTML/CSS"],
    category: "machine-learning",
  },
  {
    slug: "tripcraft-ai",
    title: "TripCraft AI",
    problem: "Travel planning involves combining user preferences, budget, dates, and current destination information into one usable itinerary.",
    result: "Built a demonstration application that generates structured itineraries and provides one-click PDF export.",
    features: [
      "Preference-based travel planning",
      "Multi-step LangGraph workflow",
      "LangChain tool integration",
      "Tavily search for current travel information",
      "FastAPI backend",
      "Structured itinerary generation",
      "PDF export",
    ],
    technologies: ["LangGraph", "LangChain", "Tavily API", "FastAPI", "FPDF", "JavaScript", "HTML/CSS"],
    category: "agentic-ai",
    liveUrl: "https://youtu.be/xVgsMu_pdRY?si=5dkoUksPiPWkfZgu",
  },
  {
    slug: "ai-customer-support",
    title: "AI Customer Support System",
    problem: "Routine customer questions needed faster answers grounded in brand-specific product and support material.",
    result: "Reduced manual response effort by grounding routine answers in brand-specific source content.",
    features: [
      "Knowledge-base search",
      "LangChain retrieval workflow",
      "OpenAI embeddings",
      "Pinecone vector search",
      "Retrieval-grounded responses",
      "Streamlit conversational interface",
    ],
    technologies: ["LangChain", "OpenAI Embeddings", "Pinecone", "Streamlit", "Python"],
    category: "rag",
    liveUrl: "https://youtu.be/kIVS8m9yrQs?si=M7Iq3c3epQ9UmOBx",
  },
  {
    slug: "healthcare-document-retrieval",
    title: "Healthcare Document Retrieval Assistant — Hospital-Style Dataset",
    problem: "Administrative information spread across structured and text healthcare-style records needed a simpler source-grounded search experience.",
    result: "Created a demonstration assistant for administrative Q&A over hospital-style data. It is not a deployed medical diagnostic system.",
    features: [
      "Structured and text healthcare-style records",
      "Excel and text data ingestion",
      "LangChain retrieval pipeline",
      "FAISS vector search",
      "Source-grounded administrative Q&A",
      "Demonstration-only, non-diagnostic scope",
    ],
    technologies: ["Python", "LangChain", "FAISS", "Excel", "Text Data", "RAG"],
    category: "rag",
  },
  {
    slug: "multi-pdf-chatbot",
    title: "Multi-PDF Chatbot",
    problem: "Users needed to search and ask questions across several PDF documents through one conversational interface.",
    result: "Built a Streamlit RAG application that retrieves relevant document passages before generating an answer.",
    features: ["Multiple PDF upload", "Semantic chunking", "FAISS retrieval", "Document-grounded answers", "Chat history"],
    technologies: ["Python", "LangChain", "Google Gemini", "FAISS", "PyPDF2", "Streamlit"],
    category: "rag",
    liveUrl: "https://youtu.be/Nl3vSJcA0Ls?si=NnXmu9aYET2AndNf",
  },
  {
    slug: "ai-ecommerce-chatbot",
    title: "AI E-Commerce Chatbot — Danish Shop",
    problem: "An online product catalog needed conversational product discovery and source-grounded answers.",
    result: "Built a FastAPI chatbot using semantic retrieval over product content with a browser-based storefront interface.",
    features: ["Product knowledge search", "AstraDB vector retrieval", "LangChain runnable chains", "FastAPI backend", "Bootstrap and Jinja2 interface"],
    technologies: ["Python", "LangChain", "Google Gemini", "AstraDB", "FastAPI", "Bootstrap", "Jinja2"],
    category: "rag",
  },
];
