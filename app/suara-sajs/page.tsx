// pages/SuaraSajPage.tsx
import { getSuaraSajPosts } from "@/lib/api/strapi";
import { getStrapiMedia } from "@/lib/api/strapi";
import dynamic from 'next/dynamic';

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
    </div>
  );
}
