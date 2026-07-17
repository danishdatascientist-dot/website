import React from "react";

const MarkdownContent = ({ content }: { content: string }) => {
  const lines = content.split(/\r?\n/);

  return (
    <div className="space-y-5 text-lg leading-8 text-gray-700 dark:text-gray-300">
      {lines.map((line, index) => {
        if (!line.trim()) return null;
        if (line.startsWith("## ")) {
          return <h2 key={index} className="pt-6 text-3xl font-bold text-gray-900 dark:text-white">{line.slice(3)}</h2>;
        }
        if (line.startsWith("### ")) {
          return <h3 key={index} className="pt-4 text-2xl font-bold text-gray-900 dark:text-white">{line.slice(4)}</h3>;
        }
        if (line.startsWith("- ")) {
          return <div key={index} className="flex items-start gap-3"><span className="text-primary">•</span><span>{line.slice(2)}</span></div>;
        }
        return <p key={index}>{line}</p>;
      })}
    </div>
  );
};

export default MarkdownContent;
