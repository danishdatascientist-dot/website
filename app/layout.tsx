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

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Danish Shahzad | Agentic AI Engineer & Data Scientist",
  description:
    "Danish Shahzad — Agentic AI Engineer & Data Scientist building practical agentic AI, RAG, machine learning, analytics, and automation solutions.",
  other: {
    "contact:email": contactDetails.email,
  },
  openGraph: {
    title: "Danish Shahzad | Agentic AI Engineer & Data Scientist",
    description:
      "Agentic AI, generative AI, data science, machine learning, analytics, automation, RAG systems, and intelligent application portfolio.",
    type: "website",
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: contactDetails.name,
  jobTitle: "Agentic AI Engineer & Data Scientist",
  url: "https://danishshahzadai.com",
  email: contactDetails.email,
  homeLocation: {
    "@type": "Place",
    name: contactDetails.location,
  },
  sameAs: [
    contactDetails.linkedin,
    contactDetails.github,
    contactDetails.youtube,
  ],
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
