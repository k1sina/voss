"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  H1,
  H3Uppercase,
  Paragraph,
  ParagraphSmall,
  ParagraphBoldUppercase,
  ButtonText,
  H4,
  ParagraphSmallUppercaseBold,
} from "@/lib/typography";
import { ChevronRight, Settings2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NewsItem {
  category: string;
  date: string;
  title: string;
  description: string;
  link: string;
  image?: string;
}

interface NewsListProps {
  title: string;
  subtitle?: string;
  items?: NewsItem[];
}

// Default news data
const defaultNewsItems: NewsItem[] = [
  {
    category: "GENEHMIGUNG",
    date: "09.11.2021",
    title: 'Genehmigung von 7 Windenergieanlagen im Projekt "Werder/ Lübz"',
    description:
      "Bei diesem Projekt handelt es sich um eine langjährige Kooperation mit der in Werder ansässigen Winder Wind & Wärme GmbH.",
    link: "Zum Artikel",
    image: "/images/post-1.png",
  },
  {
    category: "UNTERNEHMEN",
    date: "09.11.2021",
    title: "Erster Bürgerstromtarif",
    description:
      "Köthen Energie GmbH, AEG Vecrum AG und VOSS Energy setzen vergünstigten Bürgerstromtarif um.",
    link: "Zum Artikel",
    image: "/images/post-2.png",
  },
  {
    category: "TEAM",
    date: "09.11.2021",
    title: "Platz 21 und 27 beim 12. Rostocker Firmenlauf",
    description:
      "Bei diesem Projekt handelt es sich um eine langjährige Kooperation mit der in Werder ansässigen Winder Wind & Wärme GmbH.",
    link: "Zum Artikel",
    image: "/images/post-3.png",
  },
  {
    category: "UNTERNEHMEN",
    date: "09.11.2021",
    title: 'Richtfest von unserem neuen "Zuhause"',
    description:
      "Bei diesem Projekt handelt es sich um eine langjährige Kooperation mit der in Werder ansässigen Winder Wind & Wärme GmbH.",
    link: "Zum Artikel",
    image: "/images/post-4.png",
  },
  {
    category: "TEAM",
    date: "09.11.2021",
    title: "Wir waren mit Freude dabei! – Mein Lauf für Rostock",
    description:
      "Köthen Energie GmbH, AEG Vecrum AG und VOSS Energy setzen vergünstigten Bürgerstromtarif um.",
    link: "Zum Artikel",
    image: "/images/post-5.png",
  },
  {
    category: "INBETRIEBNAHME",
    date: "09.11.2021",
    title: "Inbetriebnahme der drei Nordex Windenergieanlagen in Reckenthyn",
    description:
      "Bei diesem Projekt handelt es sich um eine langjährige Kooperation mit der in Werder ansässigen Winder Wind & Wärme GmbH.",
    link: "Zum Artikel",
    image: "/images/post-6.png",
  },
  {
    category: "TEAM",
    date: "09.11.2021",
    title: "Unser Team hat sich erweitert. Herzlich willkommen Jonas & Thomas",
    description:
      "Köthen Energie GmbH, AEG Vecrum AG und VOSS Energy setzen vergünstigten Bürgerstromtarif um.",
    link: "Zum Artikel",
    image: "/images/post-7.png",
  },
  {
    category: "TEAM",
    date: "09.11.2021",
    title: "Herzlich willkommen Timo und Felix!",
    description:
      "Bei diesem Projekt handelt es sich um eine langjährige Kooperation mit der in Werder ansässigen Winder Wind & Wärme GmbH.",
    link: "Zum Artikel",
    image: "/images/post-8.png",
  },
  {
    category: "REPOWERING",
    date: "09.11.2021",
    title: "Energon E66 Windenergieanlagen in der Prignitz gekauft",
    description:
      "Bei diesem Projekt handelt es sich um eine langjährige Kooperation mit der in Werder ansässigen Winder Wind & Wärme GmbH.",
    link: "Zum Artikel",
    image: "/images/post-9.png",
  },
];

export default function NewsList({
  title = "Aktuelles",
  subtitle = "News",
  items = defaultNewsItems,
}: NewsListProps) {
  // Split items into columns for the masonry layout
  const [columns, setColumns] = useState<NewsItem[][]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [filteredItems, setFilteredItems] = useState<NewsItem[]>(items);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Extract unique categories
  const categories = ["ALL", ...new Set(items.map((item) => item.category))];

  // Filter items based on active filter
  useEffect(() => {
    if (activeFilter === "ALL") {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter((item) => item.category === activeFilter));
    }
  }, [activeFilter, items]);

  useEffect(() => {
    // Create and distribute items for masonry layout
    const createColumns = () => {
      if (!filteredItems.length) return;

      let numColumns = 3; // Default for large screens
      const width = window.innerWidth;

      if (width < 768) {
        numColumns = 1; // Mobile: single column
      } else if (width < 1024) {
        numColumns = 2; // Tablet: two columns
      }

      // Initialize empty columns
      const newColumns: NewsItem[][] = Array.from(
        { length: numColumns },
        () => []
      );

      // Distribute items across columns
      filteredItems.forEach((item, index) => {
        // Place item in the column with the current index modulo number of columns
        // This ensures items are distributed evenly across columns
        const columnIndex = index % numColumns;
        newColumns[columnIndex].push(item);
      });

      setColumns(newColumns);
    };

    // Create columns initially
    createColumns();

    // Update columns on window resize
    const handleResize = () => {
      createColumns();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [filteredItems]);

  return (
    <section className="mb-12">
      <div className="mb-8">
        {subtitle && <H3Uppercase>{subtitle}</H3Uppercase>}
        <H1>{title}</H1>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 flex-wrap gap-4">
        <div className="hidden md:flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category)}
              className="transition-all duration-300"
            >
              <ButtonText>{category === "ALL" ? "ALLE" : category}</ButtonText>
            </Button>
          ))}
        </div>
        <div>
          <Paragraph>
            {filteredItems.length}{" "}
            {filteredItems.length === 1
              ? "Artikel gefunden"
              : "Artikel gefunden"}
          </Paragraph>
        </div>
      </div>

      <div ref={containerRef} className="flex flex-col md:flex-row gap-8">
        {columns.map((column, columnIndex) => (
          <div
            key={`column-${columnIndex}`}
            className="flex-1 flex flex-col gap-8"
          >
            {column.map((item, itemIndex) => (
              <Card
                key={`news-${columnIndex}-${itemIndex}`}
                className="overflow-hidden group hover:shadow-md transition-shadow duration-300 pt-0 pb-8 gap-0"
              >
                {item.image && (
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader className="gap-4 px-8">
                  <div className="flex items-baseline gap-4 pt-8">
                    {item.category && (
                      <Badge variant="outline" className="w-fit">
                        <ParagraphSmallUppercaseBold>
                          {item.category}
                        </ParagraphSmallUppercaseBold>
                      </Badge>
                    )}
                    <ParagraphSmall className="text-muted-foreground">
                      {item.date}
                    </ParagraphSmall>
                  </div>
                  <CardTitle>
                    <H4>{item.title}</H4>
                  </CardTitle>
                  <CardDescription>
                    <Paragraph className="">{item.description}</Paragraph>
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-end items-center px-8 pt-4">
                  <Button variant="ghost" size="sm">
                    <ButtonText>{item.link}</ButtonText>
                    <ChevronRight className="text-primary" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button>
          <ButtonText>Weitere Beiträge laden</ButtonText>
        </Button>
      </div>

      {/* Mobile Filter Button and Sheet */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button
            className="fixed bottom-0 right-0 shadow-lg md:hidden flex gap-2 z-50 w-full"
            size={"lg"}
          >
            <Settings2 className="w-4 h-4" />
            Filtern
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="px-4 py-6 rounded-t-xl">
          <SheetHeader className="mb-4">
            <SheetTitle>Filter nach Kategorie</SheetTitle>
          </SheetHeader>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className={`font-semibold ${
                  activeFilter === category
                    ? "bg-primary text-white"
                    : "border-gray-300"
                }`}
                onClick={() => {
                  setActiveFilter(category);
                  setIsSheetOpen(false);
                }}
              >
                {category}
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
