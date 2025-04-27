import { getGalleryPosts } from "@/lib/api/strapi";
import { PaginationControls } from "@/components/PaginatonControls";
import { GalleryGrid } from "../components/GalleryGrid";

export const revalidate = 60;

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const resolvedSearchParams = await searchParams
  const currentPage = Number(resolvedSearchParams?.page) || 1;
  const pageSize = 9;

  let galleryData;
  try {
    galleryData = await getGalleryPosts({
      'pagination[page]': currentPage,
      'pagination[pageSize]': pageSize
    });
  } catch (error) {
    console.error("Error fetching gallery:", error);
  }

  const galleryPosts = galleryData?.data || [];
  const pagination = galleryData?.meta?.pagination;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery Kegiatan</h1>
          <p className="text-xl text-gray-600">Dokumentasi kegiatan Sarifah Ainun Jariyah dalam melayani masyarakat</p>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="container mx-auto px-4 py-12">
        {galleryPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <p className="text-lg text-gray-600">Belum ada dokumentasi kegiatan yang dipublikasikan.</p>
          </div>
        ) : (
          <div>
            <GalleryGrid items={galleryPosts} />
            {pagination?.pageCount > 1 && (
              <div className="mt-8">
                <PaginationControls
                  currentPage={currentPage}
                  totalPages={pagination.pageCount}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
