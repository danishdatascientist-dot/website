import fs from "fs";
import path from "path";

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  file: string;
  type: "image" | "pdf";
  filename: string;
  status: string;
};

const knownIssuers: Record<string, string> = {
  "AI For Everyone": "DeepLearning.AI",
  "Certified Artificial Intelligence Developer": "Presidential Initiative for Artificial Intelligence & Computing",
  "Cloud Computing AWS for Database Management": "Pakistan Engineering Council",
  "DIPLOMA TRACK AMAZON PL": "Extreme Commerce",
  "FREELANCING": "Extreme Commerce",
  "Generative AI Application Developer Certificate": "Pak Angels",
  "Introduction to LangGraph": "LangChain Academy",
  "Introduction to Programming Using Python": "Microsoft Technology Associate",
  "Machine Learning": "Stanford Online",
  "Machine Learning with Scikit-Learn": "LinkedIn Learning",
};

export function getCertificates(): Certificate[] {
  const root = path.join(process.cwd(), "public", "certificates", "all");
  if (!fs.existsSync(root)) return [];

  return fs.readdirSync(root, { withFileTypes: true }).flatMap((folder) => {
    if (!folder.isDirectory()) return [];
    const year = folder.name.match(/\d{4}/)?.[0] ?? "Date to be confirmed";
    return fs.readdirSync(path.join(root, folder.name), { withFileTypes: true })
      .filter((file) => file.isFile() && /\.(png|jpe?g|webp|pdf)$/i.test(file.name))
      .map((file) => {
        const title = file.name.replace(/\.[^.]+$/, "");
        const type = file.name.toLowerCase().endsWith(".pdf") ? "pdf" as const : "image" as const;
        const url = `/certificates/all/${encodeURIComponent(folder.name)}/${encodeURIComponent(file.name)}`;
        const issuer = knownIssuers[title] ?? "Issuer to be confirmed";
        return {
          title,
          issuer,
          date: year,
          image: type === "image" ? url : undefined,
          file: url,
          type,
          filename: file.name,
          status: issuer.includes("confirmed") ? "Issuer and exact date need confirmation" : "Exact date needs confirmation",
        };
      });
  }).sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}
