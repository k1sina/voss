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
      const newColumns: NewsItem[][] = Array.from({ length: numColumns }, () => []);
      
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

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [items]);

  return (
    <section className="mb-12">
      <div className="mb-8">
        {subtitle && (
          <p className="text-zinc-500 font-myriad-pro">{subtitle}</p>
        )}
        <h2 className="text-3xl font-bold mb-2 font-myriad-pro">{title}</h2>
      </div>

      <div 
        ref={containerRef} 
        className="flex flex-col md:flex-row gap-6"
      >
        {columns.map((column, columnIndex) => (
          <div key={`column-${columnIndex}`} className="flex-1 flex flex-col gap-6">
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
                        {item.category}
                      </Badge>
                    )}
                    <span className="text-sm text-zinc-500 font-myriad-pro">
                      {item.date}
                    </span>
                  </div>
                  <CardTitle className="font-myriad-pro">{item.title}</CardTitle>
                  <CardDescription className="font-myriad-pro mt-2">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-end items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="font-myriad-pro hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    Read more →
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline" className="font-myriad-pro">
          View all news
        </Button>
      </div>
    </section>
  );
}
