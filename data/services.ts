export type ServiceName =
  | "AI Tutoring"
  | "1:1 AI Consultation"
  | "E-Commerce Consulting"
  | "Project Review"
  | "Other";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  audience: string[];
  topics: string[];
  outcomes: string[];
  ctaLabel: string;
  href: string;
  icon: "graduation" | "consultation" | "ecommerce";
};

export const services: Service[] = [
  {
    slug: "ai-tutoring",
    title: "AI Tutoring",
    shortDescription:
      "Hands-on, project-based lessons in Python, data science, machine learning, deep learning, RAG, chatbots, LangChain, LangGraph, MCP, and AI application development.",
    fullDescription:
      "Personalised one-to-one learning through practical explanation, guided coding, debugging, and realistic projects.",
    audience: [
      "Complete beginners",
      "University students",
      "Working professionals",
      "Developers learning modern AI workflows",
    ],
    topics: [
      "Python",
      "Data Science",
      "SQL",
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "RAG",
      "Chatbot Development",
      "LangChain",
      "LangGraph",
      "MCP",
      "FastAPI",
      "Streamlit",
      "Project Guidance",
      "Other",
    ],
    outcomes: [
      "Clearer technical understanding",
      "Guided coding practice",
      "Project and debugging support",
    ],
    ctaLabel: "Explore AI Tutoring",
    href: "/services/ai-tutoring",
    icon: "graduation",
  },
  {
    slug: "consultation",
    title: "1:1 AI Consultation",
    shortDescription:
      "A focused 30–60 minute session to review an AI idea, data project, automation opportunity, technical architecture, or learning plan.",
    fullDescription:
      "Practical technical and strategic guidance for assessing realistic AI, analytics, automation, and machine-learning opportunities.",
    audience: [
      "Individuals and professionals",
      "Founders",
      "Small businesses",
      "Project builders",
    ],
    topics: [
      "AI Opportunity Assessment",
      "AI Application Planning",
      "RAG System",
      "Chatbot",
      "Automation",
      "Data Analytics",
      "Machine Learning Project",
      "Architecture Review",
      "Portfolio Review",
      "Other",
    ],
    outcomes: [
      "Clearer problem definition",
      "Suitable tool options",
      "Realistic next steps",
    ],
    ctaLabel: "Request a Consultation",
    href: "/services/consultation",
    icon: "consultation",
  },
  {
    slug: "ecommerce-consulting",
    title: "E-Commerce Consulting",
    shortDescription:
      "Product research, market analysis, pricing review, inventory reporting, and Amazon marketplace support.",
    fullDescription:
      "Evidence-based support for Amazon and e-commerce sellers working through product, listing, competitor, pricing, and inventory decisions.",
    audience: [
      "Amazon sellers",
      "Private-label learners",
      "Wholesale operators",
      "E-commerce teams",
    ],
    topics: [
      "Product Research",
      "Listing Analysis",
      "Competitor Analysis",
      "Inventory Analytics",
      "Pricing Analysis",
      "Private Label",
      "FBA Wholesale",
      "Reporting or Dashboard",
      "Other",
    ],
    outcomes: [
      "Structured market review",
      "Clearer inventory visibility",
      "Data-informed recommendations",
    ],
    ctaLabel: "Explore E-Commerce Consulting",
    href: "/services/ecommerce-consulting",
    icon: "ecommerce",
  },
];

export const tutoringAudience = [
  "Complete beginners starting Python or artificial intelligence",
  "University students studying programming, data science, machine learning, or AI",
  "Learners who understand theory but struggle to build projects independently",
  "Working professionals who want to apply AI or automation in their work",
  "Developers who want to learn RAG, chatbots, LangChain, or LangGraph",
  "E-commerce professionals interested in analytics and AI applications",
  "Learners who need explanation-led help debugging assignments, portfolio projects, or personal applications",
];

export const tutoringCurriculum = [
  ["Python Programming", ["Python fundamentals", "Variables and data types", "Conditions and loops", "Functions", "Lists, dictionaries, tuples, and sets", "File handling", "Error handling", "Object-oriented programming", "Virtual environments", "Package management", "Debugging", "Clean and reusable code"]],
  ["Data Science", ["NumPy", "Pandas", "Data cleaning", "Missing values", "Data transformation", "Exploratory data analysis", "Feature engineering", "Descriptive statistics", "Data visualisation", "Matplotlib", "Seaborn", "Plotly", "CSV and Excel data", "Business data analysis", "Inventory and sales analytics"]],
  ["SQL & Analytics", ["SELECT queries", "Filtering", "Sorting", "GROUP BY", "Aggregate functions", "Joins", "Subqueries", "Common table expressions", "KPI reporting", "Connecting SQL results to Python or dashboards"]],
  ["Machine Learning", ["Supervised and unsupervised learning", "Regression", "Classification", "Clustering", "Train/test splitting", "Data preprocessing", "Encoding", "Feature scaling", "Feature selection", "Cross-validation", "Model comparison", "Hyperparameter tuning", "Overfitting and underfitting", "scikit-learn", "XGBoost when relevant", "Accuracy, precision, recall, F1-score, confusion matrix, MAE, RMSE, and R²"]],
  ["Deep Learning", ["Neural network fundamentals", "ANN architecture", "Activation and loss functions", "Optimisers", "Training and validation", "TensorFlow", "Keras", "Convolutional neural networks", "Introductory image classification", "Introductory sequence models", "Model evaluation and common training problems"]],
  ["Generative AI", ["Large language model fundamentals", "Prompt engineering", "System and user prompts", "Structured outputs", "OpenAI and Gemini APIs", "Token and context concepts", "Hallucination reduction", "Grounded responses", "AI application planning", "Responsible use"]],
  ["Retrieval-Augmented Generation", ["What RAG is and when to use it", "Document loading", "PDF and text processing", "Chunking strategies", "Embeddings", "Vector search", "FAISS", "Pinecone", "Similarity search", "Retrieval pipelines", "Source-grounded answers", "Citations", "Basic RAG evaluation", "Common retrieval problems"]],
  ["Chatbot Development", ["Rule-based versus AI chatbots", "LLM chatbot architecture", "Conversation history", "Prompt design", "Retrieval-based chatbots", "Customer-support chatbots", "Streamlit chat interfaces", "FastAPI chatbot backends", "Error handling", "Deployable project structure"]],
  ["LangChain", ["Prompt templates", "Chains", "Document loaders", "Text splitters", "Embeddings", "Vector stores", "Retrievers", "Retrieval chains", "Chat history", "Tools", "Structured outputs", "Practical RAG applications"]],
  ["LangGraph", ["Graph-based AI workflows", "State management", "Nodes and edges", "Conditional routing", "Tool-calling workflows", "Memory", "Multi-step agents", "Human-in-the-loop concepts", "Debugging agent workflows", "Structured AI applications"]],
  ["Model Context Protocol (MCP)", ["What MCP is", "MCP clients and servers", "Tools and resources", "Connecting AI applications to external systems", "Basic MCP server structure", "Tool definitions", "Safe permission handling", "Testing MCP integrations", "Beginner-level examples"]],
  ["FastAPI & Streamlit", ["Streamlit dashboards", "Chat interfaces", "Forms and user inputs", "Displaying model outputs", "FastAPI endpoints", "Request and response models", "Connecting ML or AI logic to APIs", "Project organisation", "Basic deployment preparation"]],
  ["Portfolio & Project Guidance", ["Selecting a realistic project", "Defining the problem", "Finding or preparing data", "Building an end-to-end workflow", "Writing a README", "Adding screenshots", "Explaining project architecture", "Preparing GitHub repositories", "Project presentations", "Understanding and defending technical decisions"]],
] as const;

export const lessonSteps = [
  ["Goal discussion", "We begin by identifying what the learner wants to understand, build, or improve."],
  ["Level assessment", "The lesson is adjusted for beginner, intermediate, or project-focused needs."],
  ["Live explanation and coding", "Concepts are explained through practical examples and guided coding."],
  ["Hands-on practice", "The learner writes and modifies code during the session."],
  ["Project guidance", "Lessons may follow a complete project from idea to implementation."],
  ["Review and next steps", "The session ends with a summary, practice recommendations, and the next learning target."],
] as const;

export const lessonFormats = [
  "Concept Explanation", "Live Coding", "Debugging Support", "Project Guidance",
  "Code Review", "Portfolio Review", "Interview Preparation",
];

export const tutoringSessionOptions = [
  ["Introductory Session", "A focused session to discuss your goals, current knowledge, learning challenges, and recommended study path."],
  ["One-to-One Lesson", "A personalised lesson focused on one topic, coding problem, project feature, or technical concept."],
  ["Project Support Session", "Guidance for planning, debugging, improving, or explaining a data science or AI project."],
  ["Ongoing Learning Plan", "A structured sequence of sessions for learners who want regular guidance across Python, data science, machine learning, or AI application development."],
] as const;

export const extendedAiRoadmap = [
  ["Study 1 — Foundation Python", ["Python basics: variables, data types, scope, collections, arrays, operators, modules, packages, input, conditionals, loops, functions, args and kwargs, lambdas, strings, files, environments, and external libraries", "Object-oriented Python: classes, objects, variables, methods, inner classes, inheritance, polymorphism, encapsulation, abstraction, exceptions, and custom exceptions", "Advanced Python: async/await, threading, multiprocessing, decorators, context managers, generators, iterators, metaclasses, design patterns, logging, type hints, testing, dataclasses, TypedDict, protocols, abstract base classes, dependency injection, environment variables, and configuration management"]],
  ["Study 2 — Data Processing & Visualisation", ["NumPy arrays, dtypes, reshaping, slicing, broadcasting, vectorisation, filtering, arithmetic, functions, and data persistence", "Pandas DataFrames and Series, CSV/Excel/JSON input, missing values, cleaning, GroupBy, joins, merges, window functions, and feature creation", "Matplotlib and Seaborn charts, distributions, correlation heatmaps, and data storytelling"]],
  ["Study 3 — Mathematics & Statistics for AI", ["Descriptive and inferential statistics; data types; mean, median, mode, variance, standard deviation, correlation, covariance, probability, random variables, and normal distributions", "Hypothesis testing with t-tests, chi-square, and ANOVA; Bayesian statistics and maximum-likelihood estimation", "Scalars, vectors, matrices, matrix operations, eigenvalues, eigenvectors, derivatives, gradients, optimisation intuition, Adam, and RMSprop"]],
  ["Study 4 — Machine Learning Foundations", ["Problem framing; supervised and unsupervised learning; missing values, outliers, scaling, normalisation, encoding, and feature engineering", "Train/test splits, cross-validation, evaluation, bias and variance, hyperparameter tuning, regularisation, and model persistence", "Linear and logistic regression, decision trees, random forests, SVM, KNN, Naive Bayes, K-Means, XGBoost, LightGBM, CatBoost, PCA, t-SNE, UMAP, forecasting basics, SHAP, and LIME"]],
  ["Study 5 — Deep Learning", ["Neurons, neural networks, activation and loss functions, gradient descent, and backpropagation", "TensorFlow, PyTorch, and Keras", "CNNs, transfer learning, RNNs, LSTMs, GPU use, TensorBoard, and imbalanced datasets"]],
  ["Study 6 — NLP & Transformers", ["NLP pipelines, tokenisation, stop words, stemming, lemmatisation, and regular expressions", "Bag of Words, TF-IDF, embeddings, and Word2Vec", "Transformers, attention, BERT, and the Hugging Face ecosystem"]],
  ["Study 7 — Foundations of LLMs", ["Transformer architecture, context windows, tokenisation, sampling, streaming, mixture-of-experts, quantisation, and inference optimisation concepts including vLLM and TensorRT-LLM", "Prompt engineering and context engineering", "OpenAI, Claude, and Gemini APIs; tool calling, function calling, and structured outputs"]],
  ["Study 8 — Retrieval-Augmented Generation", ["RAG architecture, embedding generation, semantic and recursive chunking, multi-query retrieval, hypothetical document embeddings, Self-RAG, corrective RAG, knowledge-graph RAG, offline and online RAG, and agentic RAG", "Retrievers, hybrid search, reranking, ColBERT, metadata filtering, and query rewriting", "RAGAS, end-to-end evaluation, human evaluation loops, groundedness, and faithfulness"]],
  ["Study 9 — Vector Databases", ["Pinecone, FAISS, Qdrant, Weaviate, and Chroma", "Indexing, similarity search, dense and sparse hybrid search, HNSW, IVF, upserts, deletes, scaling, benchmarking, backup, and disaster-recovery concepts"]],
  ["Study 10 — Agentic AI Foundations", ["Agent definitions and Observe–Plan–Act–Learn, ReAct, agentic search with tools such as Tavily, reflexion, self-critique, Tree of Thoughts, Graph of Thoughts, and Chain of Thought concepts", "Short-term, long-term, and semantic memory; planning, research layers, and tool-augmented reasoning"]],
  ["Study 11 — Agentic Frameworks & SDKs", ["LangChain, LangGraph, and LangSmith", "OpenAI Agents SDK, Claude SDK, agent collaboration, and task decomposition"]],
  ["Study 12 — Model Context Protocol", ["MCP architecture, servers, clients, tools, and resources", "MCP with APIs, databases, and RAG; cross-platform skills, client and server development, safe authentication, security, and transport concepts"]],
  ["Study 13 — Spec-Driven & AI-Driven Development", ["Spec-Driven Development and AI-Driven Development", "Spec Kit, SKILL.md, Claude Code, Gemini CLI, and SDK-oriented workflows", "General agents and custom agents"]],
  ["Study 14 — Multi-Agent Systems", ["Agent orchestration, role-based agents, and supervisor–worker patterns", "Collaboration, negotiation, conflict resolution, agent factories, and skill composition"]],
  ["Study 15 — Evaluation, Safety & Control", ["Guardrails, policy enforcement, human-in-the-loop oversight, shadow mode, LangSmith datasets, and DeepEval", "Agent testing, reliability metrics, and introductory red teaming"]],
  ["Study 16 — Backend, Deployment & Cloud", ["FastAPI, Pydantic, and SQLAlchemy ORM", "Docker, multi-stage builds, Kubernetes, kubectl-ai, and kagent", "AWS, Google Cloud, and Azure deployment concepts"]],
  ["Study 17 — Dapr & Cloud-Native AI", ["Dapr state management, Pub/Sub, service invocation, and durable workflows", "Cloud-agnostic agents and workflow orchestration"]],
  ["Study 18 — Observability & MLOps", ["MLflow, experiment tracking, model versioning, and CI/CD for machine learning", "OpenTelemetry, logs, metrics, and traces"]],
  ["Study 19 — Production & Business Strategy", ["Digital-FTE and agent-licensing concepts", "Cost optimisation, ROI measurement, compliance, data privacy, and AI-system security basics"]],
] as const;

export const aiEraLearningTrack = [
  ["Foundations & AI-Era Thinking", ["What AI is, prompting, Markdown-to-HTML workflows, code generation, skills and connectors, general agents, and thinking in the AI era", "Asking better questions, detecting broken reasoning, systems thinking, first-principles reasoning, clear communication, dilemmas, uncertainty, learning how to learn, and building a thinking portfolio"]],
  ["Agentic Coding & Personal Workflows", ["Agentic coding, professional cowork workflows, Spec-Driven Development, loop engineering, harness engineering, trusting checkers, and personal agent harnesses", "General and coding agents including Claude Code, OpenCode, OpenClaw, and Hermes; effective context engineering; team configuration and CI/CD concepts"]],
  ["From Problems to AI Workers", ["Recognising agent-suitable problems, problem-solving principles, and moving from one-off tasks to reusable workers", "Python in the AI era, connector-native apps, plugins, AI identity, AI-searchable context, digital workers, agent nervous systems, human-agent teams, agent experiences, eval-driven development, deployment, and architecture selection"]],
  ["Agent Applications & Factories", ["OpenAI Agents SDK, Google ADK, Claude API and Agent SDK, MCP, agent skills, multi-agent reliability, FastAPI, ChatKit, interactive ChatGPT app concepts, vector databases, RAG, SQLModel, augmented memory, TDD, evaluations, knowledge graphs, and GraphRAG", "Tutor-style agents, personal AI employees, agent economics, architecture decisions, and publishing concepts"]],
  ["Business-Domain Workflows", ["Foundational business agents and workflow analysis across finance, legal and compliance, growth, product and value chains, people and efficiency, and innovation", "Worker catalogues for sales, finance, and marketing; AI-native company and startup transformation concepts"]],
  ["Production Agent Infrastructure", ["Docker, Kubernetes, Helm, Kafka, Dapr, ArgoCD, GitOps, observability, cost engineering, traffic engineering, actors, workflows, production security, compliance, disaster recovery, and real cloud-deployment planning"]],
] as const;

export const consultationTopics = [
  "Assessing whether AI is suitable for a specific problem",
  "Selecting between automation, analytics, machine learning, or generative AI",
  "Planning a chatbot, internal knowledge assistant, or RAG system",
  "Selecting LangChain, LangGraph, FastAPI, Streamlit, FAISS, or Pinecone",
  "Reviewing an AI application, data science, or machine-learning project",
  "Improving a prompt or LLM workflow",
  "Identifying risks, limitations, and data requirements",
  "Planning a proof of concept or reviewing project architecture",
  "Discussing technical learning paths, portfolios, or GitHub projects",
  "Discussing e-commerce analytics or automation opportunities",
];

export const ecommerceServiceGroups = [
  ["Product Research", ["Product and niche research", "Competitor comparison", "Demand and pricing review", "Sales-estimate interpretation", "Product-risk identification", "Basic margin assessment"]],
  ["Amazon Listing Analysis", ["Keyword research", "Product-title, bullet-point, and description review", "Search visibility analysis", "Competitor listing comparison", "Conversion-focused content recommendations"]],
  ["Market & Competitor Analysis", ["Competitor pricing", "Market positioning", "Offer comparison", "Product differentiation", "Price-history review", "Customer-review pattern analysis", "Category-level observations"]],
  ["Inventory & Sales Analytics", ["SKU performance reporting", "Sales-trend analysis", "Restock prioritisation", "Inventory movement", "Slow-moving stock review", "Pricing gaps", "Stock-risk reporting", "Dashboard-ready data"]],
  ["Private Label Guidance", ["Product-validation framework", "Supplier-comparison support", "Margin and fee considerations", "Listing preparation", "Launch-planning checklist", "Introductory PPC planning", "Post-launch monitoring structure"]],
  ["Amazon FBA & Wholesale Guidance", ["Wholesale product evaluation", "Supplier-account research", "SKU profitability review", "Buy Box and offer review", "Inventory planning", "Restock timing", "Product-performance reporting"]],
] as const;

export const ecommerceTools = [
  "Amazon Seller Central", "Helium 10", "Jungle Scout", "Keepa",
  "Excel", "Python", "Pandas", "Power BI", "Market Research",
];
