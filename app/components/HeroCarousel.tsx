// src/components/HeroCarousel.tsx
"use client"; // Ini PENTING untuk menandai sebagai Client Component

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel"; // Import yang benar
import Autoplay from "embla-carousel-autoplay"; // Untuk autoplay

type HeroCarouselProps = {
  imagePaths: string[];
  options?: EmblaOptionsType;
};

const HeroCarousel: React.FC<HeroCarouselProps> = ({ imagePaths, options }) => {
  // Inisialisasi Embla Carousel dengan plugin Autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 5000, stopOnInteraction: false }), // Otomatis berputar setiap 5 detik
  ]);

  // Fungsi untuk navigasi tombol (panah)
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // State dan logika untuk indikator titik (dots)
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <div className="relative size-full overflow-hidden" ref={emblaRef}>
      <div className="-ml-4 flex h-full">
        {/* Margin negatif untuk mengatasi gap yang kadang muncul di Embla */}
        {imagePaths.map((path, index) => (
          <div
            className="relative size-full flex-none pl-4"
            key={index}
            style={{ flex: "0 0 100%" }}
          >
            <Image
              src={path}
              alt={`Hero background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay untuk keterbacaan teks */}
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
        ))}
      </div>

      {/* Navigasi Tombol (Panah) - Hanya tampil jika ada lebih dari 1 gambar */}
      {imagePaths.length > 1 && emblaApi && (
        <>
          <button
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/50 p-2 transition-colors duration-200 hover:bg-white/75 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={scrollPrev}
            aria-label="Previous image"
          >
            &lt;
          </button>
          <button
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/50 p-2 transition-colors duration-200 hover:bg-white/75 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={scrollNext}
            aria-label="Next image"
          >
            &gt;
          </button>
        </>
      )}

      {/* Indikator Titik (Dots) - Hanya tampil jika ada lebih dari 1 gambar */}
      {imagePaths.length > 1 && (
        <div className="absolute inset-x-0 bottom-4 z-20 flex justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`size-3 rounded-full transition-colors duration-200 ${
                index === selectedIndex
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;
