import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development & Digital Marketing Services in India | Fawarisone Technologies",
  description:
    "Fawarisone Technologies offers expert web development, SEO, PPC, branding, and digital marketing services in India. Grow your business online with proven strategies and measurable results.",
  robots: {
    index: true,
    follow: true,
  },
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
    "best digital marketing company India",
    "web development company Noida",
    "SEO company India",
  ],
  openGraph: {
    title: "Web Development & Digital Marketing Services in India | Fawarisone Technologies",
    description:
      "Fawarisone Technologies offers expert web development, SEO, PPC, branding, and digital marketing services in India. Grow your business online with proven strategies and measurable results.",
    url: "https://fawarisone.com/services",
    siteName: "Fawarisone Technologies",
    type: "website",
    images: [
      {
        url: "https://fawarisone.com/Fawarisone-marketing.png",
        width: 1200,
        height: 630,
        alt: "Fawarisone Technologies - Web Development & Digital Marketing Services India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development & Digital Marketing Services in India | Fawarisone Technologies",
    description:
      "Fawarisone Technologies offers expert web development, SEO, PPC, branding, and digital marketing services in India. Grow your business online with proven strategies and measurable results.",
    images: ["https://fawarisone.com/Fawarisone-marketing.png"],
  },
  alternates: {
    canonical: "https://fawarisone.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

