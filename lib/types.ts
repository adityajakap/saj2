export interface StrapiImage {
  url: string;
  width?: number;
  height?: number;
  alternativeText?: string;
  formats?: {
    thumbnail?: { url: string; width?: number; height?: number };
    small?: { url: string; width?: number; height?: number };
    medium?: { url: string; width?: number; height?: number };
    large?: { url: string; width?: number; height?: number };
  };
}

export interface StrapiMultipleImage {
  data: Array<{
    id: number;
    attributes: {
      url: string;
      width: number;
      height: number;
      alternativeText?: string;
      formats: {
        thumbnail: { url: string; width: number; height: number };
        small: { url: string; width: number; height: number };
        medium: { url: string; width: number; height: number };
        large?: { url: string; width: number; height: number };
      };
    };
  }>;
}

export interface StrapiResponseData<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
// eslint-disable-next-line
export interface StrapiSingleResponseData<T> {
  data: {}; // eslint-disable-line
  // eslint-disable-next-line
  meta: {};
}

export interface Article {
  id: number;
  documentId?: string;
  title: string;
  slug: string;
  content: string;
  description: string;
  publishDate: string;
  category: string;
  isFeatured: boolean;
  featuredImage: StrapiImage;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
