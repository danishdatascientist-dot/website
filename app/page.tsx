import Hero from "./components/Hero";
import HomePreviews from "./components/HomePreviews";

export default function Home() {
  return <main className="min-h-screen bg-white transition-colors dark:bg-gray-900"><Hero /><HomePreviews /></main>;
}
