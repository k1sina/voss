import Headline from "@/components/sections/Headline";
import NewsList from "@/components/sections/NewsList";

// Carousel data with real information
const headlineItems = [
  {
    id: "1",
    image: "/images/banner-1.png",
    title: "10 Jahre VOSS Energy",
    category: "UNTERNEHMEN",
    date: "23.06.2023",
    description:
      "Die Jubiläumsfeier bot den Gästen die Gelegenheit, auf die vergangenen Erfolge anzustoßen und gleichzeitig einen Ausblick auf die Zukunft zu werfen.",
  },
  {
    id: "2",
    image: "/images/banner-2.jpeg",
    title: "Neues Windparkprojekt in Mecklenburg-Vorpommern",
    category: "PROJEKTE",
    date: "15.05.2023",
    description:
      "VOSS Energy expandiert mit einem innovativen Windpark, der modernste Technologie mit Umweltverträglichkeit verbindet.",
  },
  {
    id: "3",
    image: "/images/banner-1.png", // Reusing banner-1 as fallback
    title: "Klimaneutrale Strategie vorgestellt",
    category: "NACHHALTIGKEIT",
    date: "01.04.2023",
    description:
      "Auf dem Weg zur vollständigen Klimaneutralität bis 2027 präsentiert VOSS Energy die neue Nachhaltigkeitsstrategie und konkrete Maßnahmen.",
  },
];

export default function Home() {
  return (
    <div>
      <Headline
        title="Aktuelle Themen"
        subtitle="Neuigkeiten und Entwicklungen"
        items={headlineItems}
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <NewsList title="Aktuelles" subtitle="News & Events" />
      </div>
    </div>
  );
}
