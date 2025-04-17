"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  H3,
  Paragraph,
  ButtonText,
  ParagraphSmall,
  ParagraphSmallUppercaseBold,
} from "@/lib/typography";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
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

export default function Headline({ items }: HeadlineProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

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

  const currentItem = items[current] || items[0];

  return (
    <section className="hidden md:block mb-12">
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
        </Carousel>

        {/* Card overlay - only on larger screens */}
        <div className="max-w-7xl mx-auto py-8 flex justify-end">
          <div className="w-full max-w-md mr-4 -mt-48 -mb-32 relative">
            <Card className="py-0">
              <CardContent className="flex-1 p-12">
                <div className="flex justify-between align-top">
                  <div className="flex items-center mb-4 gap-4 ">
                    {currentItem.category && (
                      <Badge variant="outline">
                        <ParagraphSmallUppercaseBold>
                          {currentItem.category}
                        </ParagraphSmallUppercaseBold>
                      </Badge>
                    )}
                    {currentItem.date && (
                      <ParagraphSmall>
                        {currentItem.date || "15 April, 2025"}
                      </ParagraphSmall>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {items.map((_, index) => (
                      <button
                        key={index}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          current === index
                            ? "bg-primary dark:bg-primary"
                            : "bg-gray-200 dark:bg-gray-600"
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

                      <Paragraph className="mb-6">
                        {currentItem.description ||
                          "Entdecken Sie mehr über dieses Thema und erfahren Sie, wie unsere Lösungen zur nachhaltigen Zukunft beitragen können."}
                      </Paragraph>
                      <div className="flex">
                        <Button>
                          <ButtonText>
                            {currentItem.link || "Zum Artikel"}
                          </ButtonText>
                          <ChevronRight />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-12 w-12 border-0"
                        onClick={() => api?.scrollPrev()}
                        disabled={current === 0}
                      >
                        <Image
                          src="/icons/arrow-right.svg"
                          alt="Arrow Right"
                          width={24}
                          height={24}
                          className="h-8 w-8 hover:color-inverse"
                        />
                        <span className="sr-only">Previous slide</span>
                      </Button>
                      <Separator className="border-t border-primary" />
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-12 w-12 border-0"
                        onClick={() => api?.scrollNext()}
                        disabled={current === items.length - 1}
                      >
                        <Image
                          src="/icons/arrow-left.svg"
                          alt="Arrow Right"
                          width={24}
                          height={24}
                          className="h-8 w-8 hover:color-inverse"
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
      </div>
    </section>
  );
}
