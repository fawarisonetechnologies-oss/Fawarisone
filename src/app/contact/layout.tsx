import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fawarisone Technologies | Contact Us – Web Development & Digital Marketing India",
  description:
    "Contact Fawarisone Technologies for web development, website design, eCommerce development, SEO, PPC, and digital marketing services in India. Get a free consultation today.",
  keywords: [
    "contact Fawarisone Technologies",
    "web development company India",
    "Digital Marketing Company India",
    "Fawarisone",
    "website design India",
    "SEO services India",
    "free consultation",
  ],
  openGraph: {
    title: "Fawarisone Technologies | Contact Us – Web Development & Digital Marketing India",
    description:
      "Contact Fawarisone Technologies for web development, website design, eCommerce development, SEO, PPC, and digital marketing services in India. Get a free consultation today.",
    url: "https://fawarisone.com/contact",
    siteName: "Fawarisone Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fawarisone Technologies | Contact Us – Web Development & Digital Marketing India",
    description:
      "Contact Fawarisone Technologies for web development, SEO, PPC, and digital marketing services in India.",
  },
  alternates: {
    canonical: "https://fawarisone.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

