import { getArticle, getArticles, getStrapiMedia, extractCategoryNames } from "@/lib/api/strapi";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import ArticleContent from "@/app/components/ArticleContent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Your Strapi URL - consider using an environment variable
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

// Generate static params for the most recent articles
export async function generateStaticParams() {
  const articlesData = await getArticles({ pagination: { limit: 10 } });

  return articlesData.data.map((article: any) => ({
    slug: article.slug,
  }));
}

// Define the type for the article content
interface Article {
  title: string;
  slug: string;
  featuredImage: any;
  publishDate: string;
  categories: any[];
  content: any;
}

// Helper function to get category names from article
const getArticleCategoryNames = (article: any): string[] => {
  // Use the helper function from our API
  const categories = article?.categories || [];
  return extractCategoryNames(categories);
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

// In Next.js 15, the params is actually a Promise
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params to get the slug
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  console.log("Using slug:", slug);

  if (!slug) {
    console.error("Slug is undefined");
    notFound();
  }

  const article = await getArticle(slug) as Article | null;

  if (!article) {
    notFound();
  }

  const imageUrl = getStrapiMedia(article.featuredImage);
  const formattedDate = formatDate(article.publishDate);
  const categoryNames = getArticleCategoryNames(article);
  const readingTime = calculateReadingTime(article.content);

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/beritas">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Semua Artikel
          </Button>
        </Link>
      </div>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          {/* Categories */}
          {categoryNames.length > 0 && categoryNames.map((categoryName: string, index: number) => (
            <Link
              key={`category-${index}-${categoryName}`}
              href={`/beritas?category=${encodeURIComponent(categoryName)}`}
            >
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer"
              >
                {categoryName}
              </Badge>
            </Link>
          ))}

          {/* Date and reading time */}
          <div className="flex items-center text-sm text-gray-600 gap-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <time>{formattedDate}</time>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{readingTime}</span>
            </div>
          </div>
        </div>

        {imageUrl && (
          <div className="relative w-full h-[400px] mb-8">
            <Image
              src={imageUrl}
              alt={article.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}

        <ArticleContent
          content={article.content}
          strapiUrl={STRAPI_URL}
        />
      </div>
    </article>
  );
}
