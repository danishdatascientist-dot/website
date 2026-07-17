import type { Metadata } from "next";
import Resume from "../components/Resume";
export const metadata: Metadata = { title: "Resume | Danish Shahzad", description: "View or download the verified professional resume of Agentic AI Engineer and Data Scientist Danish Shahzad." };
export default function ResumePage() { return <main><Resume /></main>; }
