import { getSuaraSajPost, getSuaraSajPosts, getStrapiMedia } from "@/lib/api/strapi";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ArticleContent from "@/app/components/ArticleContent";

// Your Strapi URL - consider using an environment variable
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

// Generate static params for the most recent posts
export async function generateStaticParams() {
  const postsData = await getSuaraSajPosts({ pagination: { limit: 10 } });

  return postsData.data.map((post: any) => ({
    slug: post.slug,
  }));
}

// Define the type for the post content
interface SuaraSajPost {
  title: string;
  slug: string;
  featuredImage: any;
  publishDate: string;
  content: any;
  description: string;
}

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
export default async function SuaraSajPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params to get the slug
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  console.log("Using slug:", slug);

  if (!slug) {
    console.error("Slug is undefined");
    notFound();
  }

  const post = await getSuaraSajPost(slug) as SuaraSajPost | null;

  if (!post) {
    notFound();
  }

  const imageUrl = getStrapiMedia(post.featuredImage);
  const formattedDate = formatDate(post.publishDate);
  const readingTime = calculateReadingTime(post.content);

  return (
    <article className="bg-gray-50 min-h-screen">
      {/* Content Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <Link href="/suara-sajs">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Semua Artikel
              </Button>
            </Link>
          </div>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-3 mb-6">
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
              <div className="w-full mb-8">
                <Image
                  src={imageUrl}
                  alt={post.title}
                  width={1200}
                  height={675}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
            )}
            <ArticleContent
              content={post.content}
              strapiUrl={STRAPI_URL}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
