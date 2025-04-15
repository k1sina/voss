"use client";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState, useEffect } from "react";

interface HeadlineProps {
  title: string;
  subtitle?: string;
  items: {
    id: string;
    image: string;
    title: string;
    category?: string;
  }[];
}

export default function Headline({ title, subtitle, items }: HeadlineProps) {
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Responsive slides based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="mb-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 font-myriad-pro">{title}</h2>
        {subtitle && (
          <p className="text-zinc-500 font-myriad-pro">{subtitle}</p>
        )}
      </div>

      <Carousel className="w-full" opts={{ align: "start", slidesToScroll: 1 }}>
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              className={`sm:basis-1/${
                slidesPerView === 2 ? "2" : "3"
              } md:basis-1/${slidesPerView}`}
            >
              <div className="p-1 h-full">
                <div className="relative overflow-hidden rounded-lg h-full group cursor-pointer bg-zinc-100 dark:bg-zinc-800">
                  <div className="w-full h-64 flex justify-center items-center p-6 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={120}
                      height={120}
                      className="w-24 h-24 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 bg-white dark:bg-zinc-900">
                    {item.category && (
                      <Badge variant="secondary" className="mb-2">
                        {item.category}
                      </Badge>
                    )}
                    <h3 className="text-lg font-semibold font-myriad-pro">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 gap-2">
          <CarouselPrevious className="relative static transform-none" />
          <CarouselNext className="relative static transform-none" />
        </div>
      </Carousel>
    </section>
  );
}
