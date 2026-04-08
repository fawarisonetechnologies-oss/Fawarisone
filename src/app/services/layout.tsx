import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fawarisone Technologies | Web Development & Digital Marketing Services in India",
  description:
    "Explore Fawarisone Technologies web development and digital marketing services including website design, eCommerce development, SEO, PPC, social media marketing, and lead generation in India.",
  keywords: [
    "web development services India",
    "digital marketing services India",
    "Fawarisone",
    "Fawarisone Technologies",
    "website design India",
    "eCommerce development India",
    "SEO services India",
    "PPC advertising India",
    "social media marketing India",
  ],
  openGraph: {
    title: "Fawarisone Technologies | Web Development & Digital Marketing Services in India",
    description:
      "Explore Fawarisone Technologies web development and digital marketing services including website design, eCommerce development, SEO, PPC, social media marketing, and lead generation in India.",
    url: "https://fawarisone.com/services",
    siteName: "Fawarisone Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fawarisone Technologies | Web Development & Digital Marketing Services in India",
    description:
      "Explore Fawarisone Technologies web development and digital marketing services including website design, SEO, PPC, and social media marketing.",
  },
  alternates: {
    canonical: "https://fawarisone.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

