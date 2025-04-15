import Headline from "@/components/sections/Headline";
import NewsList from "@/components/sections/NewsList";
import MainNav from "@/components/sections/MainNav";

// Sample data for the headline carousel
const headlineItems = [
  {
    id: "1",
    image: "/icons/solar-panel.svg",
    title: "Renewable Energy Innovations",
    category: "Technology",
  },
  {
    id: "2",
    image: "/icons/poi-windturbine.svg",
    title: "Wind Power Expansion Project",
    category: "Environment",
  },
  {
    id: "3",
    image: "/icons/farm.svg",
    title: "Sustainable Farming Techniques",
    category: "Agriculture",
  },
  {
    id: "4",
    image: "/icons/charging-battery-eco.svg",
    title: "Electric Vehicle Charging Network",
    category: "Transportation",
  },
  {
    id: "5",
    image: "/icons/handshake.svg",
    title: "New Climate Partnership Initiative",
    category: "Policy",
  },
];

// Sample data for the news list
const newsItems = [
  {
    id: "1",
    title: "Climate Finance Initiative Launched",
    description:
      "New program aims to fund sustainable development projects across the region.",
    date: "April 15, 2025",
    category: "Finance",
    image: "/icons/piggybank.svg",
  },
  {
    id: "2",
    title: "Renewable Energy Conference",
    description:
      "Industry leaders gather to discuss the future of clean energy solutions.",
    date: "April 10, 2025",
    category: "Events",
    image: "/icons/calendar-dots.svg",
  },
  {
    id: "3",
    title: "Sustainable Agriculture Report",
    description:
      "New findings show increased adoption of eco-friendly farming practices.",
    date: "April 5, 2025",
    category: "Research",
    image: "/icons/farm.svg",
  },
  {
    id: "4",
    title: "Green Building Standards Updated",
    description:
      "New regulations promote more energy-efficient construction methods.",
    date: "March 28, 2025",
    category: "Policy",
    image: "/icons/form-validation-check-square-1.svg",
  },
  {
    id: "5",
    title: "Community Solar Project Expansion",
    description:
      "Local initiative brings renewable energy access to underserved communities.",
    date: "March 22, 2025",
    category: "Community",
    image: "/icons/handshake.svg",
  },
  {
    id: "6",
    title: "Transportation Electrification Plan",
    description:
      "City announces comprehensive strategy for transitioning to electric vehicles.",
    date: "March 15, 2025",
    category: "Infrastructure",
    image: "/icons/car.svg",
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-myriad-pro">
      <MainNav />

      <Headline
        title="Featured Stories"
        subtitle="Explore our latest stories and updates"
        items={headlineItems}
      />

      <NewsList
        title="Latest News"
        subtitle="Stay informed with our recent articles"
        items={newsItems}
      />
    </div>
  );
}
