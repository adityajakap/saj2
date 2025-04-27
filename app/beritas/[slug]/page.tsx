import { getArticle, getArticles, getStrapiMedia } from "@/lib/api/strapi";
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
  category: string | string[];
  content: any;
}

// Helper function to extract categories array from Strapi structure
const getCategories = (article: any) => {
  if (!article) return [];

  // Handle direct array of categories
  if (Array.isArray(article.category)) {
    return article.category;
  }

  // Handle single category as string
  if (typeof article.category === 'string') {
    return [article.category];
  }

  // Handle categories field with data structure
  if (article.categories) {
    if (Array.isArray(article.categories)) {
      return article.categories;
    }
    if (article.categories.data && Array.isArray(article.categories.data)) {
      return article.categories.data.map((cat: any) => cat.attributes?.name || cat.name);
    }
    if (article.categories.data && !Array.isArray(article.categories.data)) {
      const cat = article.categories.data;
      return [cat.attributes?.name || cat.name];
    }
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
  const categories = getCategories(article);
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
          {categories.map((category: string, index: number) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {category}
            </Badge>
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
