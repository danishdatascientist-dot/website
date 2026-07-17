export type EducationItem = {
  title: string;
  institution: string;
  startDate: string;
  endDate: string;
  location?: string;
  achievement?: string;
  description: string;
  learningOutcomes: string[];
  skills: string[];
  type: "education" | "diploma" | "training";
};

export const educationItems: EducationItem[] = [
  {
    title: "Bachelor of Automotive Engineering",
    institution: "NED University of Engineering and Technology",
    startDate: "Dec 2014",
    endDate: "Sep 2018",
    location: "Karachi, Pakistan",
    achievement: "Graduated with 2nd Position",
    description:
      "Studied automotive engineering with a focus on vehicle systems, engineering design, performance analysis, and the development of efficient transportation technologies.",
    learningOutcomes: [
      "Developed a strong foundation in engineering mathematics, applied physics, mechanics, thermodynamics, and technical problem-solving.",
      "Studied automotive systems including engines, vehicle dynamics, transmission systems, manufacturing processes, and automotive design.",
      "Learned to evaluate engineering problems using structured analysis, calculations, experimentation, and evidence-based decision-making.",
      "Worked with technical data, engineering measurements, reports, and performance comparisons to support design and development decisions.",
      "Completed academic projects involving automotive systems, component analysis, and practical engineering design.",
      "Focused the final-year project on smart car design and hybrid driveline efficiency.",
      "Strengthened teamwork, technical documentation, presentation, research, and project-management skills through collaborative engineering assignments.",
      "Built an analytical and problem-solving foundation that later supported the transition into data science, machine learning, and artificial intelligence.",
    ],
    skills: [
      "Engineering Analysis",
      "Automotive Systems",
      "Hybrid Driveline",
      "Technical Design",
      "Problem Solving",
      "Project Management",
    ],
    type: "education",
  },
  {
    title: "Certified Cloud Native Applied Generative AI Engineer",
    institution: "PIAIC",
    startDate: "Feb 2023",
    endDate: "Jun 2024",
    description:
      "Comprehensive training in generative AI application development, retrieval-based systems, intelligent workflows, and modern AI tools, with an emphasis on practical applications.",
    learningOutcomes: [
      "Studied generative AI concepts, large language models, prompt design, embeddings, semantic search, and retrieval-augmented generation.",
      "Learned to build source-grounded question-answering systems using external documents and vector-based retrieval.",
      "Worked with LangChain for document loading, text splitting, prompt construction, retrieval pipelines, and LLM application development.",
      "Explored LangGraph for state-based, multi-step, tool-using, and agentic AI workflows.",
      "Built practical AI applications using Python, FastAPI, Streamlit, OpenAI tools, and Google Gemini where used in coursework or projects.",
      "Learned how vector databases and libraries such as FAISS and Pinecone support similarity search and knowledge-base retrieval.",
      "Practised designing AI assistants that respond using supplied context instead of relying only on model memory.",
      "Developed an understanding of AI agents, tool use, workflow orchestration, memory, APIs, and structured output generation.",
      "Applied the training to document Q&A systems, customer-support assistants, travel-planning workflows, and retrieval-based applications.",
      "Studied responsible AI principles, including hallucination reduction, response grounding, prompt constraints, and clearly defined system limitations.",
    ],
    skills: [
      "LangChain",
      "LangGraph",
      "RAG",
      "LLM Applications",
      "FastAPI",
      "Streamlit",
      "Vector Search",
      "Prompt Engineering",
    ],
    type: "diploma",
  },
  {
    title: "Amazon Private Label Diploma Track",
    institution: "Extreme Commerce",
    startDate: "Jan 2022",
    endDate: "Jul 2022",
    description:
      "Specialised training in Amazon private-label business models, product research, sourcing, listing development, pricing, and brand-building fundamentals.",
    learningOutcomes: [
      "Learned how to research product niches and evaluate demand, competition, pricing, sales potential, and market saturation.",
      "Used Helium 10, Jungle Scout, and Keepa for product research, competitor analysis, keyword discovery, and historical price review.",
      "Studied product-validation methods, including estimated demand, profit margins, sourcing costs, Amazon fees, and potential business risks.",
      "Learned supplier-research and assessment fundamentals, including product specifications, quotations, minimum-order quantities, samples, and negotiation considerations.",
      "Studied Amazon listing structure, keyword research, search visibility, product titles, bullet points, descriptions, and conversion-focused content.",
      "Developed an understanding of Amazon SEO, organic ranking factors, customer search behaviour, and listing optimisation.",
      "Learned the fundamentals of product branding, packaging, market positioning, differentiation, and private-label launch planning.",
      "Studied inventory planning, restocking decisions, lead times, stock availability, and the risks of overstocking or running out of inventory.",
      "Learned introductory Amazon PPC concepts, campaign structure, keyword targeting, advertising costs, and performance monitoring.",
      "Applied sales, pricing, keyword, and competitor data to support more informed product-selection and launch decisions.",
    ],
    skills: [
      "Product Research",
      "Helium 10",
      "Jungle Scout",
      "Keepa",
      "Amazon SEO",
      "Supplier Research",
      "PPC Fundamentals",
    ],
    type: "diploma",
  },
  {
    title: "Amazon FBA Wholesale Diploma Track",
    institution: "Extreme Commerce",
    startDate: "Jan 2022",
    endDate: "Mar 2022",
    description:
      "Focused training in Amazon wholesale operations, supplier evaluation, product profitability, account analysis, inventory planning, and fulfilment through Amazon FBA.",
    learningOutcomes: [
      "Learned the fundamentals of the Amazon wholesale business model and how it differs from private label, retail arbitrage, and other marketplace models.",
      "Studied methods for identifying brands, distributors, wholesalers, and potential supplier accounts.",
      "Learned to evaluate product demand, pricing history, competition, estimated sales, Amazon fees, and expected profit margins.",
      "Used marketplace research tools to review price stability, sales trends, offer counts, Buy Box behaviour, and potential product risks.",
      "Developed an understanding of supplier communication, wholesale account applications, quotations, invoices, and minimum-order requirements.",
      "Studied inventory planning, order quantities, lead times, stock movement, restocking, and cash-flow considerations.",
      "Learned the basic operational process of preparing and sending products to Amazon fulfilment centres.",
      "Studied SKU-level profitability, product-performance monitoring, and identifying underperforming or high-risk inventory.",
      "Learned how structured reports can support supplier comparison, pricing decisions, inventory prioritisation, and restocking.",
      "Applied analytical thinking to wholesale product selection and operational decision-making.",
    ],
    skills: [
      "Amazon FBA",
      "Wholesale Analysis",
      "Supplier Evaluation",
      "Inventory Planning",
      "Pricing Analysis",
      "Profitability Analysis",
    ],
    type: "diploma",
  },
  {
    title: "Artificial Intelligence",
    institution: "PIAIC",
    startDate: "Jan 2019",
    endDate: "Jan 2021",
    description:
      "In-depth study of Python, data science, machine learning, deep learning, and artificial intelligence concepts with practical exercises and project implementation.",
    learningOutcomes: [
      "Built a foundation in Python programming, including variables, data structures, functions, object-oriented concepts, file handling, and reusable code.",
      "Learned to work with structured datasets using NumPy and Pandas for cleaning, transformation, filtering, aggregation, and analysis.",
      "Studied exploratory data analysis, descriptive statistics, data visualisation, missing-value handling, and feature preparation.",
      "Learned supervised machine-learning concepts including regression, classification, training and testing, feature engineering, and model evaluation.",
      "Studied unsupervised learning methods such as clustering and pattern discovery.",
      "Practised evaluating models using accuracy, precision, recall, F1-score, MAE, RMSE, and R² where relevant.",
      "Developed introductory knowledge of neural networks, deep learning, TensorFlow, and Keras.",
      "Studied natural-language-processing concepts including text preprocessing, tokenisation, sentiment analysis, sequence models, and language-based applications.",
      "Explored computer-vision concepts, image preprocessing, convolutional neural networks, and image-classification workflows.",
      "Completed practical exercises and projects involving data analysis, predictive modelling, machine learning, NLP, or computer vision.",
      "Learned how to communicate model outputs through reports, charts, dashboards, and application interfaces.",
      "Built the technical foundation later used in FastAPI, Streamlit, RAG, LangChain, and generative AI projects.",
    ],
    skills: [
      "Python",
      "Pandas",
      "Machine Learning",
      "TensorFlow",
      "NLP",
      "Computer Vision",
      "Data Analysis",
    ],
    type: "training",
  },
];

export const homepageEducationItems = [
  educationItems[0],
  educationItems[1],
  educationItems[2],
];
