// pages/SuaraSajPage.tsx
import { Button } from "@/components/ui/button";
import { getSuaraSajPosts } from "@/lib/api/strapi";
import { getStrapiMedia } from "@/lib/api/strapi";
import dynamic from 'next/dynamic';
import Image from "next/image";
import Link from "next/link";

// Define Post type
interface Post {
  id: string;
  slug?: string;
  title?: string;
  description?: string;
  publishDate?: string;
  featuredImage?: any;
  content?: any[];
  imageUrl?: string | null; // Add this for processed image URLs
}

interface StrapiResponse {
  data: Post[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Import the client component with dynamic import to avoid SSR issues
const PostsCarousel = dynamic(() => import('../components/PostsCarousel'), { ssr: false });

export const revalidate = 60;

export default async function SuaraSajPage() {
  const pageSize = 15; // Get more posts for multiple pages in the carousel

  let suaraSajsData: StrapiResponse | undefined;
  try {
    suaraSajsData = await getSuaraSajPosts({
      'pagination[pageSize]': pageSize
    }) as StrapiResponse;
  } catch (error) {
    console.error("Error fetching suara saj:", error);
  }

  // Process image URLs on the server side
  const posts = suaraSajsData?.data.map(post => ({
    ...post,
    imageUrl: post.featuredImage ? getStrapiMedia(post.featuredImage) : null
  })) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Suara SAJ</h1>
          <p className="text-xl text-gray-600">Kolom opini dan pandangan Sarifah Ainun Jariyah</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <p className="text-lg text-gray-600">Belum ada artikel yang dipublikasikan.</p>
          </div>
        ) : (
          <PostsCarousel posts={posts} />
        )}
      </div>

      <section className="relative w-full py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-background.png"
            alt="Call to action background"
            fill
            className="object-cover"
          />
          {/* Overlay with brand color */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Perubahan Nyata untuk Rakyat Indonesia
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Bergabunglah dalam perjalanan kami untuk menciptakan kebijakan yang
              inklusif dan solusi yang inovatif untuk kesejahteraan rakyat Banten.
            </p>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
