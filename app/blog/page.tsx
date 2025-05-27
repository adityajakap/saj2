import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { getArticles, getGalleryPosts, getStrapiMedia } from "@/lib/api/strapi";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Images, MapPin } from "lucide-react";
import HeroCarousel from "../components/HeroCarousel";
export const revalidate = 60;

export default async function Home() {
  let latestArticles = [];
  let latestGalleryPosts = [];

  try {
    // Fetch latest articles
    const articlesData = await getArticles({ pagination: { limit: 3 } });
    latestArticles = articlesData?.data || [];
    console.log("Latest articles for homepage:", latestArticles.length);

    // Fetch latest gallery posts
    const galleryData = await getGalleryPosts({ pagination: { limit: 3 } });
    latestGalleryPosts = galleryData?.data || [];
    console.log(
      "Latest gallery posts for homepage:",
      latestGalleryPosts.length,
    );
  } catch (error) {
    console.error("Error fetching data for homepage:", error);
  }

  const getCategories = (article: any) => {
    // Now that category is a simple string, just return it as a single-item array
    if (article?.category) {
      return [article.category];
    }
    return [];
  };

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

  // Definisikan array path gambar untuk carousel hero Anda
  const heroImages = [
    "/images/ibu-1.jpg",
    "/images/ibu-2.jpg", // Pastikan gambar-gambar ini ada di folder public/images
    "/images/ibu-3.jpg",
    // Tambahkan lebih banyak gambar jika Anda mau
  ];

  return (
    <>
      {/* Hero Section with Background Image - Full Width */}
      <section className="relative h-[600px] w-full overflow-hidden py-24 text-center md:h-[700px] lg:h-[800px]">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {/* Menggunakan komponen HeroCarousel yang diimpor */}
          <HeroCarousel
            imagePaths={heroImages}
            options={{ loop: true, dragFree: false }} // Opsi Embla Carousel
          />
        </div>

        {/* Konten tetap di atas carousel */}
        <div className="relative z-10 mx-auto flex h-full min-h-[400px] max-w-6xl flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Sarifah Ainun Jariyah
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-100">
            Anggota DPR RI untuk daerah pemilihan Banten dengan visi dan
            dedikasi untuk membawa perubahan positif melalui kebijakan yang
            inovatif dan inklusif.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-black text-white">
              <Link href="/beritas">Berita Terbaru</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-black bg-white text-black"
            >
              <Link href="/galleries">Lihat Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <div className="bg-gradient-olive">
        <div className="container mx-auto px-4 py-12">
          <section className="py-12">
            <h2 className="mb-4 text-center text-3xl font-bold">
              Kegiatan dan Berita Terbaru Seputar Teh Sarifah
            </h2>
            <p className="font-regular mb-8 text-center text-xl">
              Dokumentasi kegiatan serta dedikasi Teh Sarifah untuk masyarakat
              sekitar Banten, beberapa lembaga, dan rakyat Indonesia di berbagai
              daerah.
            </p>

            {latestArticles.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-lg text-gray-600">
                  Belum ada berita yang dipublikasikan.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {latestArticles.slice(0, 2).map((article: any) => {
                  const imageUrl = article?.featuredImage
                    ? getStrapiMedia(article.featuredImage)
                    : null;
                  const categories = getCategories(article);

                  return (
                    <Card
                      key={article.id}
                      className="group overflow-hidden border-0 bg-white !py-0 shadow-md transition-all duration-300 hover:shadow-xl"
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Left side - Image */}
                        <div className="relative h-60 overflow-hidden md:h-auto md:w-1/3">
                          {imageUrl ? (
                            <Image
                              src={imageUrl}
                              alt={article.title || "Article image"}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex size-full items-center justify-center bg-gray-100">
                              <p className="text-gray-400">No image</p>
                            </div>
                          )}
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>

                        {/* Right side - Content in flex column */}
                        <div className="flex flex-1 flex-col">
                          <div className="px-2 py-4">
                            {/* Title */}
                            <h2 className="mb-3 line-clamp-2 text-xl font-bold transition-colors group-hover:text-primary md:text-2xl">
                              {article?.title || "Untitled"}
                            </h2>

                            {/* Category and Date in flex row */}
                            <div className="mb-3 flex flex-wrap items-center gap-3">
                              {/* Categories */}
                              <div className="flex flex-wrap gap-2">
                                {categories.map(
                                  (category: string, index: number) => (
                                    <Link
                                      key={index}
                                      href={`/berita?category=${category}`}
                                    >
                                      <Badge
                                        variant="secondary"
                                        className="cursor-pointer bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                                      >
                                        {category}
                                      </Badge>
                                    </Link>
                                  ),
                                )}
                              </div>

                              {/* Date */}
                              {article?.publishDate && (
                                <div className="flex items-center text-sm text-gray-500">
                                  <Calendar className="mr-1 size-4" />
                                  <time>{formatDate(article.publishDate)}</time>
                                </div>
                              )}

                              {/* Reading time */}
                              <div className="flex items-center text-sm text-gray-500">
                                <Clock className="mr-1 size-4" />
                                <span>
                                  {calculateReadingTime(article?.content)}
                                </span>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="mb-6 line-clamp-3 flex-1 text-gray-600">
                              {article?.description ||
                                "No description available"}
                            </p>
                          </div>

                          {/* Full width button */}
                          <Button
                            asChild
                            className="bg-gradient-black w-full justify-center !rounded-none !py-6 underline"
                          >
                            <Link
                              href={`/beritas/${article?.slug || article.id}`}
                            >
                              Baca Selengkapnya
                              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </section>

          <section className="py-12">
            {latestGalleryPosts.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-lg text-gray-600">
                  Belum ada dokumentasi kegiatan yang dipublikasikan.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {latestGalleryPosts.map((item: any) => {
                    // Get first image from images array
                    const firstImage = item.images[0];
                    const imageUrl = firstImage
                      ? getStrapiMedia(firstImage)
                      : null;

                    return (
                      <Link href="/galleries" key={item.id}>
                        <Card className="group flex h-full cursor-pointer flex-col overflow-hidden border-0 bg-white !py-0 shadow-md transition-all duration-300 hover:shadow-xl">
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
                              <div className="flex size-full items-center justify-center bg-gray-100">
                                <p className="text-gray-400">No image</p>
                              </div>
                            )}

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Image count badge */}
                            {item.images?.length > 1 && (
                              <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-sm text-white">
                                <Images className="size-4" />
                                <span>{item.images.length}</span>
                              </div>
                            )}
                          </div>

                          <CardContent className="p-6">
                            <h3 className="mb-3 line-clamp-2 text-xl font-bold transition-colors group-hover:text-primary">
                              {item.title || "Untitled"}
                            </h3>

                            <div className="flex flex-col gap-2 text-sm text-gray-600">
                              {item.date && (
                                <div className="flex items-center gap-2">
                                  <Calendar className="size-4" />
                                  <time dateTime={item.date}>
                                    {formatDate(item.date)}
                                  </time>
                                </div>
                              )}

                              {item.location && (
                                <div className="flex items-center gap-2">
                                  <MapPin className="size-4" />
                                  <span>{item.location}</span>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </section>
        </div>
      </div>

      {/* Jumbotron CTA Section */}
      <section className="relative w-full overflow-hidden py-24">
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
        <div className="container relative z-10 mx-auto flex h-full items-center justify-center px-4">
          <div className="max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Perubahan Nyata untuk Rakyat Indonesia
            </h2>
            <p className="mb-8 text-xl text-gray-100">
              Bergabunglah dalam perjalanan kami untuk menciptakan kebijakan
              yang inklusif dan solusi yang inovatif untuk kesejahteraan rakyat
              Banten.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
            >
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-gradient-olive relative w-full overflow-hidden py-16 md:py-24">
        {/* Content */}
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-md text-center md:text-left">
              <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl">
                Mau Balik Lagi ke Rumah Digital-nya Teh Sarifah?
              </h2>
              <Button
                asChild
                size="lg"
                className="bg-[#716500] text-white hover:bg-gray-100 hover:text-black"
              >
                <Link href="/">Kembali ke Menu Awal</Link>
              </Button>
            </div>

            {/* Image container with fixed dimensions */}
            <div className="relative w-full shrink-0 md:w-auto">
              <Image
                src="/images/bg-illust.png"
                alt="ilustrasi rumah digital teh sarifah"
                width={800}
                height={400}
                className="mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
