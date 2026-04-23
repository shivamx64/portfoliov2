import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

type PageMetadataOptions = {
  title: string;
  description?: string;
  pathname?: string;
};

export function createPageMetadata({
  title,
  description = siteConfig.description,
  pathname = "/",
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const url = absoluteUrl(pathname);

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: absoluteUrl("/images/og/default-og.svg"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} portfolio preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl("/images/og/default-og.svg")],
    },
  };
}
