"use client";

import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Image from "next/image";
import { ReactNode } from "react";

interface ParagraphProps {
  children?: ReactNode;
}

interface HeadingProps {
  children?: ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

interface ListProps {
  children?: ReactNode;
  format: 'ordered' | 'unordered';
}

interface ListItemProps {
  children?: ReactNode;
}

interface LinkProps {
  children?: ReactNode;
  url: string;
}

interface CodeProps {
  children?: ReactNode;
}

interface QuoteProps {
  children?: ReactNode;
}

interface StrapiImage {
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
  caption?: string;
}

interface ImageProps {
  image: StrapiImage;
}

interface ArticleContentProps {
  content: any;
  strapiUrl: string; // Pass Strapi URL instead of the function
}

// Helper function to get Strapi media URL (client-side version)
function getStrapiMediaUrl(media: any, strapiUrl: string): string {
  if (!media) return '';

  const { url } = media.data?.attributes || media;

  if (!url) return '';

  // If the URL is already a full URL or an absolute URL, return it as is
  if (url.startsWith('http') || url.startsWith('/')) {
    return url;
  }

  // Otherwise, prepend with Strapi URL
  return `${strapiUrl}${url}`;
}

export default function ArticleContent({ content, strapiUrl }: ArticleContentProps) {
  // Custom renderer components for Strapi blocks
  const blockRenderers = {
    paragraph: ({ children }: ParagraphProps) => (
      <p className="mb-4 text-base">{children}</p>
    ),

    heading: ({ children, level }: HeadingProps) => {
      switch (level) {
        case 1:
          return <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>;
        case 2:
          return <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>;
        case 3:
          return <h3 className="text-xl font-bold mt-5 mb-2">{children}</h3>;
        case 4:
          return <h4 className="text-lg font-bold mt-4 mb-2">{children}</h4>;
        case 5:
          return <h5 className="text-base font-bold mt-4 mb-2">{children}</h5>;
        case 6:
          return <h6 className="text-sm font-bold mt-4 mb-2">{children}</h6>;
        default:
          return <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>;
      }
    },

    list: ({ children, format }: ListProps) => {
      if (format === 'ordered') {
        return <ol className="list-decimal pl-6 mb-4">{children}</ol>;
      }
      return <ul className="list-disc pl-6 mb-4">{children}</ul>;
    },

    listItem: ({ children }: ListItemProps) => (
      <li className="mb-1">{children}</li>
    ),

    link: ({ children, url }: LinkProps) => (
      <a href={url} className="text-primary underline hover:text-primary/80">
        {children}
      </a>
    ),

    code: ({ children }: CodeProps) => (
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
        <code>{children}</code>
      </pre>
    ),

    quote: ({ children }: QuoteProps) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-4">
        {children}
      </blockquote>
    ),

    image: ({ image }: ImageProps) => {
      const imageUrl = getStrapiMediaUrl(image, strapiUrl);
      return (
        <div className="my-6">
          <Image
            src={imageUrl || ''}
            alt={image.alternativeText || ''}
            width={image.width || 800}
            height={image.height || 500}
            className="rounded-lg"
          />
          {image.caption && (
            <figcaption className="text-sm text-center mt-2 text-gray-600">
              {image.caption}
            </figcaption>
          )}
        </div>
      );
    }
  };

  return (
    <div className="prose prose-lg max-w-none">
      <BlocksRenderer
        content={content}
        blocks={blockRenderers as any}  // TypeCast as any to avoid complex Strapi type issues
      />
    </div>
  );
}
