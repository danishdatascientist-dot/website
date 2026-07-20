import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import { contactDetails } from "@/data/contact";
import {
  RouteBackNavigation,
  RoutePageNavigation,
} from "./components/navigation/RouteNavigation";
import { PERSON_ID, SITE_URL } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Agentic AI Engineer & Data Scientist | Danish Shahzad",
  description:
    "Agentic AI Engineer building RAG systems, AI agents and analytics that solve real business problems. View projects, services and 1:1 AI tutoring.",
  other: {
    "contact:email": contactDetails.email,
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Agentic AI Engineer & Data Scientist | Danish Shahzad",
    description:
      "Agentic AI, generative AI, data science, machine learning, analytics, automation, RAG systems, and intelligent application portfolio.",
    url: SITE_URL,
    siteName: "Danish Shahzad",
    locale: "en_GB",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Danish Shahzad — Agentic AI Engineer & Data Scientist" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic AI Engineer & Data Scientist | Danish Shahzad",
    description:
      "Agentic AI, generative AI, data science, machine learning, analytics, automation, and intelligent application portfolio.",
    images: ["/opengraph-image"],
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: SITE_URL,
  mainEntity: {
    "@type": "Person",
    "@id": PERSON_ID,
    name: contactDetails.name,
    jobTitle: "Agentic AI Engineer & Data Scientist",
    url: SITE_URL,
    email: contactDetails.email,
    image: `${SITE_URL}/datascientist.jpg`,
    description: "Agentic AI Engineer and Data Scientist building RAG systems, AI agents, machine learning models, and e-commerce analytics solutions.",
    homeLocation: { "@type": "Place", name: contactDetails.location },
    sameAs: [contactDetails.linkedin, contactDetails.github, contactDetails.youtube],
    knowsAbout: ["Agentic AI", "Retrieval-Augmented Generation", "LangChain", "LangGraph", "Model Context Protocol", "Machine Learning", "Deep Learning", "Python", "Data Analytics", "Amazon Marketplace Analytics", "FastAPI", "Streamlit"],
    alumniOf: { "@type": "CollegeOrUniversity", name: "NED University of Engineering and Technology" },
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", name: "Certified Cloud Native Applied Generative AI Engineer", credentialCategory: "certificate", recognizedBy: { "@type": "Organization", name: "PIAIC" } },
      { "@type": "EducationalOccupationalCredential", name: "Machine Learning", credentialCategory: "certificate", recognizedBy: { "@type": "Organization", name: "Stanford Online" } },
      { "@type": "EducationalOccupationalCredential", name: "Introduction to Programming Using Python", credentialCategory: "certificate", recognizedBy: { "@type": "Organization", name: "Microsoft" } },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <div className="pt-16">
            <RouteBackNavigation />
            {children}
            <RoutePageNavigation />
          </div>
          <Footer />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
