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
} from "@/lib/typography";

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

  useEffect(() => {
    // Create and distribute items for masonry layout
    const createColumns = () => {
      if (!items.length) return;

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
      items.forEach((item, index) => {
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
  }, [items]);

  return (
    <section className="mb-12">
      <div className="mb-8">
        {subtitle && <H3Uppercase>{subtitle}</H3Uppercase>}
        <H1>{title}</H1>
      </div>

      <div ref={containerRef} className="flex flex-col md:flex-row gap-6">
        {columns.map((column, columnIndex) => (
          <div
            key={`column-${columnIndex}`}
            className="flex-1 flex flex-col gap-6"
          >
            {column.map((item, itemIndex) => (
              <Card
                key={`news-${columnIndex}-${itemIndex}`}
                className="overflow-hidden group hover:shadow-md transition-shadow duration-300"
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
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    {item.category && (
                      <Badge variant="outline" className="mb-2 w-fit">
                        <ParagraphBoldUppercase className="text-xs">
                          {item.category}
                        </ParagraphBoldUppercase>
                      </Badge>
                    )}
                    <ParagraphSmall className="text-zinc-500">
                      {item.date}
                    </ParagraphSmall>
                  </div>
                  <CardTitle>
                    <Paragraph className="font-semibold">
                      {item.title}
                    </Paragraph>
                  </CardTitle>
                  <CardDescription className="mt-2">
                    <Paragraph>{item.description}</Paragraph>
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-end items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    <ButtonText>{item.link}</ButtonText>
                    <Image
                      src="/icons/caret-right.svg"
                      alt="Arrow Right"
                      width={16}
                      height={16}
                      className="ml-1"
                    />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline">
          <ButtonText>Alle News anzeigen</ButtonText>
        </Button>
      </div>
    </section>
  );
}
