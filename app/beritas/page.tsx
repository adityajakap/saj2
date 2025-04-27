import { getArticles } from "@/lib/api/strapi";
import { getStrapiMedia } from "@/lib/api/strapi";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { PaginationControls } from "@/components/PaginatonControls";

const CATEGORIES = [
  "Demokrasi",
  "Jakarta",
  "Keadilan Sosial",
  "Kepemimpinan",
  "Krisis Iklim",
  "Kebangsaan",
];

export const revalidate = 60;

export default async function BeritaPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>
}) {
  const resolvedSearchParams = await searchParams
  const currentPage = Number(resolvedSearchParams?.page) || 1
  const currentCategory = resolvedSearchParams?.category
  const pageSize = 5

  let articlesData;
  try {
    // Build base query parameters
    const queryParams: Record<string, any> = {
      'pagination[page]': currentPage,
      'pagination[pageSize]': pageSize,
      'populate': '*',
      'sort': 'publishDate:desc'
    };

    // Add category filter if selected - using $contains for string field
    if (currentCategory) {
      queryParams['filters[category][$contains]'] = currentCategory;
      console.log("🔍 Filtering by category:", currentCategory);
    }

    articlesData = await getArticles(queryParams);
  } catch (error) {
    console.error("Error fetching articles:", error);
  }

  const articles = articlesData?.data || [];
  const pagination = articlesData?.meta?.pagination;

  // Helper function to get category from article
  const getCategories = (article: any) => {
    // Now that category is a simple string, just return it as a single-item array
    if (article?.category) {
      return [article.category];
    }
    return [];
  };

  // Calculate reading time from content
  const calculateReadingTime = (content: any) => {
    if (!content || !Array.isArray(content)) return "5 min read";

    let wordCount = 0;
    content.forEach((block: any) => {
      if (block.children) {
        block.children.forEach((child: any) => {
          if (child.text) {
            wordCount += child.text.split(/\s+/).length;
          }
        });
      }
    });

    const minutes = Math.ceil(wordCount / 200);
    return `${minutes} min read`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Berita</h1>
          <p className="text-xl text-gray-600 mb-8">Informasi terbaru tentang Sarifah Ainun Jariyah</p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <Link
              href="/beritas"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
                ${!currentCategory
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
            >
              Semua
            </Link>
            {CATEGORIES.map((category) => (
              <Link
                key={category}
                href={`/beritas?category=${category}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
                  ${currentCategory === category
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {articles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <p className="text-lg text-gray-600">
              {currentCategory
                ? `Belum ada berita dengan kategori "${currentCategory}".`
                : "Belum ada berita yang dipublikasikan."}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {articles.map((article: any) => {
              const imageUrl = article?.featuredImage ? getStrapiMedia(article.featuredImage) : null;
              const categories = getCategories(article);

              return (
                <Card
                  key={article.id}
                  className="overflow-hidden border-0 !py-0 shadow-md hover:shadow-xl transition-all duration-300 group bg-white"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Left side - Image */}
                    <div className="relative h-60 md:h-auto md:w-1/3 overflow-hidden">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={article.title || "Article image"}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-full w-full bg-gray-100 flex items-center justify-center">
                          <p className="text-gray-400">No image</p>
                        </div>
                      )}
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Right side - Content in flex column */}
                    <div className="flex-1 flex flex-col">
                      <div className="py-5 px-3">
                        {/* Title */}
                        <h2 className="text-xl md:text-2xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {article?.title || "Untitled"}
                        </h2>

                        {/* Category and Date in flex row */}
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          {/* Categories */}
                          <div className="flex flex-wrap gap-2">
                            {categories.map((category: string, index: number) => (
                              <Link
                                key={index}
                                href={`/beritas?category=${category}`}
                              >
                                <Badge
                                  variant="secondary"
                                  className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer"
                                >
                                  {category}
                                </Badge>
                              </Link>
                            ))}
                          </div>

                          {/* Date */}
                          {article?.publishDate && (
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="w-4 h-4 mr-1" />
                              <time>{formatDate(article.publishDate)}</time>
                            </div>
                          )}

                          {/* Reading time */}
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{calculateReadingTime(article?.content)}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 flex-1 line-clamp-3">
                          {article?.description || "No description available"}
                        </p>
                      </div>

                      {/* Full width button */}
                      <Button asChild className="underline bg-gradient-black w-full justify-center !rounded-none !py-6">
                        <Link href={`/beritas/${article?.slug || article.id}`}>
                          Baca Selengkapnya
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}

            {pagination?.pageCount > 1 && (
              <div className="mt-8">
                <PaginationControls
                  currentPage={currentPage}
                  totalPages={pagination.pageCount}
                  currentCategory={currentCategory}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
