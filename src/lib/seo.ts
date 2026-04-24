import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

type PageMetadataOptions = {
  title: string;
  description?: string;
  pathname?: string;
  image?: string;
};

export function buildPageMetadata({
  title,
  description = siteConfig.description,
  pathname = "/",
  image = "/images/og/default-og.svg",
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(pathname);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} portfolio preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
