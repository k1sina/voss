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
  ParagraphBold,
  ButtonText,
} from "@/lib/typography";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  category?: string;
  image?: string;
}

interface NewsListProps {
  title: string;
  subtitle?: string;
  items: NewsItem[];
}

export default function NewsList({ title, subtitle, items }: NewsListProps) {
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
            {column.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden group hover:shadow-md transition-shadow duration-300"
              >
                {item.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 flex justify-center items-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="w-20 h-20 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    {item.category && (
                      <Badge variant="outline" className="mb-2 w-fit">
                        <ParagraphSmall>{item.category}</ParagraphSmall>
                      </Badge>
                    )}
                    <ParagraphSmall className="text-zinc-500">
                      {item.date}
                    </ParagraphSmall>
                  </div>
                  <CardTitle>
                    <ParagraphBold>{item.title}</ParagraphBold>
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
                    <ButtonText>Read more →</ButtonText>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline">
          <ButtonText>View all news</ButtonText>
        </Button>
      </div>
    </section>
  );
}
