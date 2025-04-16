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
import { H3, Paragraph, ButtonText } from "@/lib/typography";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Separator } from "../ui/separator";

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
    link?: string;
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
                      className="object-cover transition-transform duration-300 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900"
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
          <div className="max-w-7xl mx-auto py-8 flex justify-end">
            <div className="w-full max-w-md mr-4 -mt-48 -mb-32 relative">
              <Card>
                <CardContent className="flex-1 p-12">
                  <div className="flex justify-between align-top">
                    <div className="flex items-start mb-4 gap-4">
                      {currentItem.category && (
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {currentItem.category}
                        </Badge>
                      )}
                      {currentItem.date && (
                        <Paragraph className="text-zinc-500 text-sm">
                          {currentItem.date || "15 April, 2025"}
                        </Paragraph>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {items.map((_, index) => (
                        <button
                          key={index}
                          className={`h-2 w-2 rounded-full transition-colors ${
                            current === index
                              ? "bg-blue-500 dark:bg-blue-50"
                              : "bg-blue-100 dark:bg-blue-600"
                          }`}
                          onClick={() => api?.scrollTo(index)}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-end-safe gap-4">
                      <div className="flex flex-col">
                        <H3 className="mb-3">{currentItem.title}</H3>

                        <Paragraph className="text-zinc-600 dark:text-zinc-300 mb-6">
                          {currentItem.description ||
                            "Entdecken Sie mehr über dieses Thema und erfahren Sie, wie unsere Lösungen zur nachhaltigen Zukunft beitragen können."}
                        </Paragraph>
                        <div className="flex">
                          <Button>
                            <ButtonText>
                              {currentItem.link || "Zum Artikel"}
                            </ButtonText>
                            <ArrowRight />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-12 w-12"
                          onClick={() => api?.scrollPrev()}
                          disabled={current === 0}
                        >
                          <Image
                            src="/icons/arrow-right.svg"
                            alt="Arrow Right"
                            width={24}
                            height={24}
                            className="h-8 w-8"
                          />
                          <span className="sr-only">Previous slide</span>
                        </Button>
                        <Separator className="border-t border-primary" />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-12 w-12"
                          onClick={() => api?.scrollNext()}
                          disabled={current === items.length - 1}
                        >
                          <Image
                            src="/icons/arrow-left.svg"
                            alt="Arrow Right"
                            width={24}
                            height={24}
                            className="h-8 w-8"
                          />
                          <span className="sr-only">Next slide</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
