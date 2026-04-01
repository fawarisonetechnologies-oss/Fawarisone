import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Web Development Company | Website Design, WordPress, SEO – Fawarisone Technologies",
  description:
    "Hire Fawarisone Technologies for website design, WordPress development, eCommerce websites, SEO services, and responsive web development to grow your business online.",
  keywords: [
    "web development company India",
    "website design company",
    "WordPress development",
    "eCommerce website development",
    "SEO services India",
    "responsive web development",
    "digital marketing agency",
    "Fawarisone Technologies",
  ],
  openGraph: {
    title: "Best Web Development Company | Website Design, WordPress, SEO – Fawarisone Technologies",
    description:
      "Hire Fawarisone Technologies for website design, WordPress development, eCommerce websites, SEO services, and responsive web development to grow your business online.",
    url: "https://fawarisone.com/about",
    siteName: "Fawarisone Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Web Development Company | Website Design, WordPress, SEO – Fawarisone Technologies",
    description:
      "Hire Fawarisone Technologies for website design, WordPress development, eCommerce websites, SEO services, and responsive web development to grow your business online.",
  },
  alternates: {
    canonical: "https://fawarisone.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
