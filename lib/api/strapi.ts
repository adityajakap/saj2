const API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://cms.sarifahainunjariyah.com";

export function getStrapiURL(path = "") {
  return `${API_URL}${path}`;
}

// eslint-disable-next-line
// lib/api/strapi.ts
export function getStrapiMedia(media: any) {
  if (!media) return null;

  // Handle both nested and flat media structures
  const url =
    typeof media === "string"
      ? media
      : media.url || media.attributes?.url || media.data?.attributes?.url;

  if (!url) return null;

  return url.startsWith("http") ? url : getStrapiURL(url);
}

export async function fetchAPI(path: string, options = {}) {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };

  const requestUrl = getStrapiURL(`/api${path}`);
  console.log("🌐 Fetching from:", requestUrl);

  try {
    const res = await fetch(requestUrl, mergedOptions);

    if (!res.ok) {
      console.error("❌ Fetch error:", res.status, res.statusText);
      throw new Error(`Error fetching from Strapi: ${res.statusText}`);
    }

    const data = await res.json();
    console.log("📦 Response data:", data);
    return data;
  } catch (error) {
    console.error("❌ Error in fetchAPI:", error);
    throw error;
  }
}

export async function getArticles(params = {}) {
  try {
    const urlParams = new URLSearchParams({
      populate: "*",
      sort: "publishDate:desc",
      ...params,
    });

    const path = `/articles?${urlParams}`;
    const response = await fetchAPI(path);
    return response;
  } catch (error) {
    console.error("❌ Error in getArticles:", error);
    return { data: [], meta: { pagination: { page: 1, pageCount: 1 } } };
  }
}

// Get a single article
export async function getArticle(slug: string) {
  try {
    if (!slug) {
      console.error("❌ getArticle called with empty slug");
      return null;
    }

    console.log("🔍 Getting article with slug:", slug);
    const path = `/articles?filters[slug][$eq]=${slug}&populate=*`;
    const response = await fetchAPI(path);
    console.log("📄 Article response structure:", response);

    if (response.data && response.data.length > 0) {
      // Return the full article object with proper structure
      const article = response.data[0];
      console.log("✅ Found article:", article);
      return article;
    }

    console.error("❌ No article found for slug:", slug);
    return null;
  } catch (error) {
    console.error("❌ Error in getArticle:", error);
    return null;
  }
}

export async function getGalleryPosts(params = {}) {
  try {
    const urlParams = new URLSearchParams({
      populate: "*", // Populate all relations
      sort: "date:desc", // Sort by date, newest first
      ...params,
    });

    const path = `/galleries?${urlParams}`;
    console.log("📸 Getting gallery posts from path:", path);
    const response = await fetchAPI(path);
    console.log("📸 Gallery response structure:", response);
    return response;
  } catch (error) {
    console.error("❌ Error in getGalleryPosts:", error);
    return { data: [], meta: { pagination: { page: 1, pageCount: 1 } } };
  }
}

// Get featured gallery posts
export async function getFeaturedGallery(params = {}) {
  try {
    const urlParams = new URLSearchParams({
      "filters[isFeatured][$eq]": "true",
      populate: "*",
      sort: "date:desc",
      ...params,
    });

    const path = `/galleries?${urlParams.toString()}`;
    console.log("⭐ Getting featured gallery posts from path:", path);
    const response = await fetchAPI(path);
    console.log("⭐ Featured gallery response structure:", response);
    return response;
  } catch (error) {
    console.error("❌ Error in getFeaturedGallery:", error);
    return { data: [] };
  }
}

// Get all suara-saj posts
export async function getSuaraSajPosts(params = {}) {
  try {
    const urlParams = new URLSearchParams({
      populate: "*", // Populate all relations
      sort: "publishDate:desc",
      ...params,
    });

    const path = `/suara-sajs?${urlParams}`;
    console.log("🎙️ Getting suara-saj posts from path:", path);
    const response = await fetchAPI(path);
    console.log("🎙️ Suara-saj response structure:", response);
    return response;
  } catch (error) {
    console.error("❌ Error in getSuaraSajPosts:", error);
    return { data: [] };
  }
}

// Get a single suara-saj post
export async function getSuaraSajPost(slug: string) {
  try {
    if (!slug) {
      console.error("❌ getSuaraSajPost called with empty slug");
      return null;
    }

    console.log("🔍 Getting suara-saj post with slug:", slug);
    const path = `/suara-sajs?filters[slug][$eq]=${slug}&populate=*`;
    const response = await fetchAPI(path);
    console.log("📄 Suara-saj post response structure:", response);

    if (response.data && response.data.length > 0) {
      // Return the full post object with proper structure
      const post = response.data[0];
      console.log("✅ Found suara-saj post:", post);
      return post;
    }

    console.error("❌ No suara-saj post found for slug:", slug);
    return null;
  } catch (error) {
    console.error("❌ Error in getSuaraSajPost:", error);
    return null;
  }
}
