import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services in India | SEO, PPC, SMM – Fawarisone Technologies",
  description:
    "Explore Fawarisone Technologies digital marketing services including SEO, PPC, social media marketing, web development, and lead generation to grow your business online.",
  keywords: [
    "Digital Marketing Services in India",
    "SEO services India",
    "PPC advertising India",
    "social media marketing",
    "web development company India",
    "lead generation services",
    "performance marketing",
    "eCommerce SEO",
    "Fawarisone Technologies",
  ],
  openGraph: {
    title: "Digital Marketing Services in India | SEO, PPC, SMM – Fawarisone Technologies",
    description:
      "Explore Fawarisone Technologies digital marketing services including SEO, PPC, social media marketing, web development, and lead generation to grow your business online.",
    url: "https://fawarisone.com/services",
    siteName: "Fawarisone Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services in India | SEO, PPC, SMM – Fawarisone Technologies",
    description:
      "Explore Fawarisone Technologies digital marketing services including SEO, PPC, social media marketing, web development, and lead generation to grow your business online.",
  },
  alternates: {
    canonical: "https://fawarisone.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
