"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { getStrapiMedia } from "@/lib/api/strapi";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Calendar, MapPin, Images } from "lucide-react";

export function GalleryGrid({ items }: any) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item: any) => {
        // Get first image from images array
        const firstImage = item.images[0];
        const imageUrl = firstImage ? getStrapiMedia(firstImage) : null;

        return (
          <Dialog key={item.id}>
            <DialogTrigger asChild>
              <Card className="overflow-hidden flex flex-col h-full cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 group bg-white !py-0">
                <div className="relative h-64 w-full overflow-hidden">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={item.title || "Gallery image"}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="h-full w-full bg-gray-100 flex items-center justify-center">
                      <p className="text-gray-400">No image</p>
                    </div>
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Image count badge */}
                  {item.images?.length > 1 && (
                    <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <Images className="w-4 h-4" />
                      <span>{item.images.length}</span>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title || "Untitled"}
                  </h3>

                  <div className="flex flex-col gap-2 text-sm text-gray-600">
                    {item.date && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={item.date}>{formatDate(item.date)}</time>
                      </div>
                    )}

                    {item.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>

            <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 overflow-hidden bg-black/95">
              <DialogTitle className="sr-only">{item.title}</DialogTitle>
              <div className="relative h-full flex flex-col">
                <Carousel
                  className="flex-1 w-full"
                  opts={{
                    align: "center",
                    loop: true,
                  }}
                >
                  <CarouselContent className="h-full">
                    {item.images.map((image: any) => (
                      <CarouselItem key={image.id} className="h-full flex items-center justify-center p-0">
                        <div className="relative w-full h-[calc(95vh-100px)]">
                          <Image
                            src={getStrapiMedia(image)}
                            alt={image.alternativeText || item.title || "Gallery image"}
                            fill
                            className="object-contain"
                            sizes="95vw"
                            priority
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 bg-black/50 hover:bg-black/70 text-white border-none h-12 w-12" />
                  <CarouselNext className="right-4 bg-black/50 hover:bg-black/70 text-white border-none h-12 w-12" />
                </Carousel>

                {/* Image information footer */}
                <div className="bg-black/80 text-white p-4 absolute bottom-0 left-0 right-0">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                    {item.date && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(item.date)}</span>
                      </div>
                    )}

                    {item.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}
