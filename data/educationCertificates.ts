const certificatePath = (folder: string, filename: string) =>
  `/certificates/all/${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`;

export type EducationCertificate = {
  title: string;
  issuer: string;
  date: string;
  category: string;
  file: string;
  type: "image" | "pdf";
};

export const educationCertificates: EducationCertificate[] = [
  {
    title: "Generative AI Application Developer",
    issuer: "Pak Angels",
    date: "2024",
    category: "Generative AI",
    file: certificatePath("2024 Certificates", "Generative AI Application Developer Certificate.png"),
    type: "image",
  },
  {
    title: "Power BI: Dashboards for Beginners",
    issuer: "LinkedIn Learning",
    date: "2022",
    category: "Data Visualisation",
    file: certificatePath("2022 Certificates", "Power BI Dashboards for Beginners.png"),
    type: "image",
  },
  {
    title: "Data Analytics: Graph Analytics",
    issuer: "LinkedIn Learning",
    date: "2022",
    category: "Data Analytics",
    file: certificatePath("2022 Certificates", "Data Analytics Graph Analytics.png"),
    type: "image",
  },
  {
    title: "Machine Learning",
    issuer: "Stanford University / Coursera",
    date: "2020",
    category: "Machine Learning",
    file: certificatePath("2020 Certificates", "Machine Learning.pdf"),
    type: "pdf",
  },
  {
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    date: "2020",
    category: "Deep Learning",
    file: certificatePath("2020 Certificates", "Neural Networks and Deep Learning.jpeg"),
    type: "image",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "2020",
    category: "Python",
    file: certificatePath("2020 Certificates", "Python for Data Science, AI & Development.jpeg"),
    type: "image",
  },
  {
    title: "Python 101 for Data Science",
    issuer: "Cognitive Class",
    date: "2020",
    category: "Python",
    file: certificatePath("2020 Certificates", "Python 101 for Data Science.jpeg"),
    type: "image",
  },
  {
    title: "AI For Everyone",
    issuer: "DeepLearning.AI / Coursera",
    date: "2020",
    category: "Artificial Intelligence",
    file: certificatePath("2020 Certificates", "AI For Everyone.jpeg"),
    type: "image",
  },
  {
    title: "Machine Learning Foundations: A Case Study Approach",
    issuer: "Coursera",
    date: "2020",
    category: "Machine Learning",
    file: certificatePath("2020 Certificates", "Machine Learning Foundations A Case Study Approach.jpeg"),
    type: "image",
  },
  {
    title: "Introduction to Programming Using Python",
    issuer: "Microsoft",
    date: "2019",
    category: "Python",
    file: certificatePath("2019 Certificates", "Introduction to Programming Using Python.jpeg"),
    type: "image",
  },
];
