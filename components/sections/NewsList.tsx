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
  return (
    <section className="mb-12">
      <div className="mb-8">
        {subtitle && (
          <p className="text-zinc-500 font-myriad-pro">{subtitle}</p>
        )}
        <h2 className="text-3xl font-bold mb-2 font-myriad-pro">{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
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

      <div className="flex justify-center mt-8">
        <Button variant="outline" className="font-myriad-pro">
          View all news
        </Button>
      </div>
    </section>
  );
}
