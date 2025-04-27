// components/PostsCarousel.tsx
'use client';

import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Define types for post and content
interface PostContent {
  text?: string;
  children?: {
    text?: string;
  }[];
}

interface Post {
  id: string;
  slug?: string;
  title?: string;
  description?: string;
  publishDate?: string;
  featuredImage?: any;
  content?: PostContent[];
  imageUrl?: string | null; // Use pre-processed image URL
}

interface PostsCarouselProps {
  posts: Post[];
}

// Carousel component with taller cards and more slides per page
export default function PostsCarousel({ posts }: PostsCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 3; // Show 3 posts per page
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Calculate reading time from content
  const calculateReadingTime = (content: PostContent[] | undefined) => {
    if (!content || !Array.isArray(content)) return "5 min read";

    let wordCount = 0;
    content.forEach((block) => {
      if (block.children) {
        block.children.forEach((child) => {
          if (child.text) {
            wordCount += child.text.split(/\s+/).length;
          }
        });
      }
    });

    const minutes = Math.ceil(wordCount / 200);
    return `${minutes} min read`;
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const visiblePosts = posts.slice(
    currentPage * postsPerPage,
    (currentPage + 1) * postsPerPage
  );

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visiblePosts.map((post) => (
          <Link key={post.id} href={`/suara-sajs/${post?.slug || post.id}`}>
            <Card className="overflow-hidden flex flex-col border-0 shadow-md hover:shadow-xl transition-all duration-300 group bg-white h-[700px]">
              <div className="relative h-[450px] w-full overflow-hidden">
                {post.imageUrl ? (
                  <Image
                    src={post.imageUrl}
                    alt={post.title || "suara sajs thumbnail"}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-gray-100">
                    <p className="text-gray-400">No image</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              <CardContent className="flex-1 flex flex-col p-6">
                <h2 className="text-xl font-bold mb-3 line-clamp-2 transition-colors">
                  {post?.title || "Untitled"}
                </h2>

                <p className="text-gray-600 mb-6 flex-1 line-clamp-3">
                  {post?.description || "No description available"}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    {post?.publishDate && (
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <time>{formatDate(post.publishDate)}</time>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{calculateReadingTime(post?.content)}</span>
                    </div>
                  </div>

                  <span className="font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Navigation controls */}
      <div className="flex justify-center mt-8 items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className="rounded-full border-gray-200 hover:bg-gray-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Button>

        {/* Dots indicator */}
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 rounded-full transition-all",
                currentPage === index ? "w-6 bg-primary" : "w-2 bg-gray-300"
              )}
              onClick={() => goToPage(index)}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className="rounded-full border-gray-200 hover:bg-gray-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
