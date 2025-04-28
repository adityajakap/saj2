import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { getArticles, getGalleryPosts, getStrapiMedia } from "@/lib/api/strapi"
import { formatDate } from "@/lib/utils"
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Images, MapPin } from "lucide-react";
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
    console.log("Latest gallery posts for homepage:", latestGalleryPosts.length);
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

  return (
    <>
      {/* Hero Section with Background Image - Full Width */}
      <section className="relative py-24 text-center w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content positioned above the background */}
        <div className="relative z-10 px-4 max-w-6xl mx-auto">
          <h1 className="text-gradient-olive text-4xl md:text-5xl font-bold mb-4 text-white">
            Sarifah Ainun Jariyah
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Anggota DPR RI untuk daerah pemilihan Banten dengan visi dan dedikasi
            untuk membawa perubahan positif melalui kebijakan yang inovatif dan inklusif.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-black text-white">
              <Link href="/beritas">Berita Terbaru</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white border-black text-black">
              <Link href="/galleries">Lihat Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <div className="bg-gradient-olive">
        <div className="container mx-auto px-4 py-12">
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-4 text-center">Kegiatan dan Berita Terbaru Seputar Teh Sarifah</h2>
            <p className="text-xl font-regular mb-8 text-center">Dokumentasi kegiatan serta dedikasi Teh Sarifah untuk masyarakat sekitar Banten, beberapa lembaga, dan rakyat Indonesia di berbagai daerah.</p>

            {latestArticles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">Belum ada berita yang dipublikasikan.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {latestArticles.slice(0, 2).map((article: any) => {
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
                          <div className="py-4 px-2">
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
                                    href={`/berita?category=${category}`}
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
              </div>
            )}
          </section>

          <section className="py-12">
            {latestGalleryPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">Belum ada dokumentasi kegiatan yang dipublikasikan.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {latestGalleryPosts.map((item: any) => {
                    // Get first image from images array
                    const firstImage = item.images[0];
                    const imageUrl = firstImage ? getStrapiMedia(firstImage) : null;

                    return (
                      <Link href="/galleries" key={item.id}>
                        <Card className="overflow-hidden flex flex-col h-full cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 group bg-white !py-0">
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
                              <div className="h-full w-full bg-gray-100 flex items-center justify-center">
                                <p className="text-gray-400">No image</p>
                              </div>
                            )}

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Image count badge */}
                            {item.images?.length > 1 && (
                              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                <Images className="w-4 h-4" />
                                <span>{item.images.length}</span>
                              </div>
                            )}
                          </div>

                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                              {item.title || "Untitled"}
                            </h3>

                            <div className="flex flex-col gap-2 text-sm text-gray-600">
                              {item.date && (
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  <time dateTime={item.date}>{formatDate(item.date)}</time>
                                </div>
                              )}

                              {item.location && (
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4" />
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
      <section className="bg-gradient-olive relative w-full py-16 md:py-24 overflow-hidden">
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-md text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                Mau Balik Lagi ke Rumah Digital-nya Teh Sarifah?
              </h2>
              <Button asChild size="lg" className="bg-[#716500] text-white hover:bg-gray-100 hover:text-black">
                <Link href="/">Kembali ke Menu Awal</Link>
              </Button>
            </div>

            {/* Image container with fixed dimensions */}
            <div className="relative w-full md:w-auto flex-shrink-0">
              <Image
                src="/images/bg-illust.png"
                alt="ilustrasi rumah digital teh sarifah"
                width={800}
                height={400}
                className="object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
