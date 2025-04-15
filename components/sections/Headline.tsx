"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface HeadlineProps {
  title: string;
  subtitle?: string;
  items: {
    id: string;
    image: string;
    title: string;
    category?: string;
    date?: string;
    description?: string;
  }[];
}

export default function Headline({ title, subtitle, items }: HeadlineProps) {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Track the current slide
  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    // Cleanup
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  // Responsive layout
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsSmallScreen(width < 1024);

      if (width < 640) {
        setSlidesPerView(1);
      } else if (width < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(2); // Changed to 2 to make room for the card
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentItem = items[current] || items[0];

  return (
    <section className="mb-12">
      <div className="relative">
        {/* Full width carousel */}
        <Carousel
          className="w-full"
          opts={{ align: "start", slidesToScroll: 1 }}
          setApi={setApi}
        >
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-full sm:basis-full md:basis-full"
              >
                <div className="relative overflow-hidden rounded-lg h-[400px] group cursor-pointer">
                  <div className="w-full h-full relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105 p-4 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {isSmallScreen && (
            <div className="flex justify-center mt-4 gap-2">
              <CarouselPrevious className="relative transform-none" />
              <div className="flex items-center gap-1 px-2">
                {items.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      current === index
                        ? "bg-zinc-900 dark:bg-zinc-50"
                        : "bg-zinc-300 dark:bg-zinc-600"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <CarouselNext className="relative transform-none" />
            </div>
          )}
        </Carousel>

        {/* Card overlay - only on larger screens */}
        {!isSmallScreen && (
          <div className="absolute top-0 right-0 w-full max-w-md h-full p-4">
            <Card className="h-full flex flex-col shadow-lg backdrop-blur-sm bg-white/90 dark:bg-zinc-900/90">
              <CardContent className="flex-1 p-6">
                <div className="flex justify-between items-start mb-4">
                  {currentItem.category && (
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {currentItem.category}
                    </Badge>
                  )}
                  {currentItem.date && (
                    <span className="text-sm text-zinc-500">
                      {currentItem.date || "15 April, 2025"}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-3 font-myriad-pro">
                  {currentItem.title}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-300 mb-6 text-sm">
                  {currentItem.description ||
                    "Entdecken Sie mehr über dieses Thema und erfahren Sie, wie unsere Lösungen zur nachhaltigen Zukunft beitragen können."}
                </p>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-center gap-2">
                    {items.map((_, index) => (
                      <button
                        key={index}
                        className={`h-3 w-3 rounded-full transition-colors ${
                          current === index
                            ? "bg-zinc-900 dark:bg-zinc-50"
                            : "bg-zinc-300 dark:bg-zinc-600"
                        }`}
                        onClick={() => api?.scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="text-center text-xs text-zinc-500">
                    {current + 1} / {items.length}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex justify-between items-center p-6 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => api?.scrollPrev()}
                    disabled={current === 0}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Previous slide</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => api?.scrollNext()}
                    disabled={current === items.length - 1}
                  >
                    <ArrowRight className="h-4 w-4" />
                    <span className="sr-only">Next slide</span>
                  </Button>
                </div>

                <Button>Zum Artikel</Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
