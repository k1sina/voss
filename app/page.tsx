import Headline from "@/components/sections/Headline";
import NewsList from "@/components/sections/NewsList";
import { H1, H2, Introduction } from "@/lib/typography";

// Sample data for the headline carousel
const headlineItems = [
  {
    id: "1",
    image: "/icons/solar-panel.svg",
    title: "Renewable Energy Innovations",
    category: "Technology",
    date: "April 15, 2025",
    description:
      "Exploring cutting-edge solar technologies that are revolutionizing the renewable energy landscape with improved efficiency and reduced costs.",
  },
  {
    id: "2",
    image: "/icons/poi-windturbine.svg",
    title: "Wind Power Expansion Project",
    category: "Environment",
    date: "April 12, 2025",
    description:
      "New offshore wind farms set to power over 100,000 homes with clean energy, reducing carbon emissions and creating sustainable jobs.",
  },
  {
    id: "3",
    image: "/icons/farm.svg",
    title: "Sustainable Farming Techniques",
    category: "Agriculture",
    date: "April 8, 2025",
    description:
      "Innovative farming practices that conserve water resources while improving crop yields and promoting biodiversity in agricultural ecosystems.",
  },
  {
    id: "4",
    image: "/icons/charging-battery-eco.svg",
    title: "Electric Vehicle Charging Network",
    category: "Transportation",
    date: "April 5, 2025",
    description:
      "Nationwide initiative to expand EV charging infrastructure, making electric vehicles more accessible and promoting cleaner transportation.",
  },
  {
    id: "5",
    image: "/icons/handshake.svg",
    title: "New Climate Partnership Initiative",
    category: "Policy",
    date: "April 1, 2025",
    description:
      "International collaboration brings together policy makers, scientists and industry leaders to accelerate actions against climate change.",
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
      "New findings show increased adoption of eco-friendly farming practices. New findings show increased adoption of eco-friendly farming practices.",
    date: "April 5, 2025",
    category: "Research",
    image: "/icons/farm.svg",
  },
  {
    id: "4",
    title: "Green Building Standards Updated",
    description:
      "New regulations promote more energy-efficient construction methods. New findings show increased adoption of eco-friendly farming practices.New findings show increased adoption of eco-friendly farming practices.",
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
    <div>
      <Headline
        title="Featured Stories"
        subtitle="Explore our latest stories and updates"
        items={headlineItems}
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <NewsList
          title="Aktuelles"
          subtitle="News & Events"
          items={newsItems}
        />
      </div>
    </div>
  );
}
