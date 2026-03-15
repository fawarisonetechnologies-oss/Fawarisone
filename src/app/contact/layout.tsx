import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Website Development & Digital Services – Fawarisone Technologies",
  description:
    "Get in touch with Fawarisone Technologies for professional website design, development, SEO, and digital solutions. Contact our team today for a free consultation and grow your business online.",
  keywords: [
    "contact Fawarisone Technologies",
    "website development Delhi",
    "SEO services India",
    "digital marketing agency",
    "free consultation",
  ],
  openGraph: {
    title: "Contact Us | Website Development & Digital Services – Fawarisone Technologies",
    description:
      "Get in touch with Fawarisone Technologies for professional website design, development, SEO, and digital solutions. Contact our team today for a free consultation and grow your business online.",
    url: "https://fawarisone.com/contact",
    siteName: "Fawarisone Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Website Development & Digital Services – Fawarisone Technologies",
    description:
      "Get in touch with Fawarisone Technologies for professional website design, development, SEO, and digital solutions.",
  },
  alternates: {
    canonical: "https://fawarisone.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
