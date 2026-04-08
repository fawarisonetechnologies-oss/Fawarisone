import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Fawarisone Technologies | Web Development Company & Digital Marketing Company in India",
  description:
    "Fawarisone Technologies is a leading web development company and Digital Marketing Company in India offering website design, eCommerce development, SEO, PPC, and social media marketing.",
  keywords: [
    "web development company India",
    "Digital Marketing Company India",
    "Fawarisone",
    "Fawarisone Technologies",
    "website design company India",
    "eCommerce development India",
    "SEO services India",
    "PPC advertising India",
  ],
  openGraph: {
    title: "Fawarisone Technologies | Web Development Company & Digital Marketing Company in India",
    description:
      "Fawarisone Technologies is a leading web development company and Digital Marketing Company in India offering website design, eCommerce development, SEO, PPC, and social media marketing.",
    url: "https://fawarisone.com",
    siteName: "Fawarisone Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fawarisone Technologies | Web Development Company & Digital Marketing Company in India",
    description:
      "Fawarisone Technologies is a leading web development company and Digital Marketing Company in India offering website design, eCommerce development, SEO, PPC, and social media marketing.",
  },
  alternates: {
    canonical: "https://fawarisone.com",
  },
  icons: {
    icon: "/fawarisone-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

