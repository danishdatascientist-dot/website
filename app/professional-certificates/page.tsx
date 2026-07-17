import type { Metadata } from "next";
import Certificates from "@/app/components/Certificates";

export const metadata: Metadata = {
  title: "Certificates | Danish Shahzad",
  description:
    "Verified certificates and professional learning completed by Danish Shahzad across AI, data science, Python, machine learning, analytics, and e-commerce.",
};

export default function ProfessionalCertificatesPage() {
  return <main><Certificates /></main>;
}
