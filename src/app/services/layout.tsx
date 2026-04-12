import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development & Digital Marketing Services in India: Fawarisone Technologies",
  description:
    "web development, SEO, PPC, branding and digital marketing services, how they work, and how Fawarisone Technologies helps grow your business in India.",
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
    title: "Web Development & Digital Marketing Services in India: Fawarisone Technologies",
    description:
      "web development, SEO, PPC, branding and digital marketing services, how they work, and how Fawarisone Technologies helps grow your business in India.",
    url: "https://fawarisone.com/services",
    siteName: "Fawarisone Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development & Digital Marketing Services in India: Fawarisone Technologies",
    description:
      "web development, SEO, PPC, branding and digital marketing services, how they work, and how Fawarisone Technologies helps grow your business in India.",
  },
  alternates: {
    canonical: "https://fawarisone.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

