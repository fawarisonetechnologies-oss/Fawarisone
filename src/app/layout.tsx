import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";



export const metadata: Metadata = {
  title: "Web Development & Digital Marketing Company in India – Fawarisone Technologies",
  description:
    "Fawarisone Technologies provides web development and digital marketing services in India including website design, SEO, PPC, and social media marketing to grow your business.",
  keywords: [
    "Web Development and Digital Marketing Company in India",
    "website design company India",
    "SEO services India",
    "PPC advertising",
    "social media marketing India",
    "digital marketing agency India",
    "Fawarisone Technologies",
  ],
  openGraph: {
    title: "Web Development & Digital Marketing Company in India – Fawarisone Technologies",
    description:
      "Fawarisone Technologies provides web development and digital marketing services in India including website design, SEO, PPC, and social media marketing to grow your business.",
    url: "https://fawarisone.com",
    siteName: "Fawarisone Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development & Digital Marketing Company in India – Fawarisone Technologies",
    description:
      "Fawarisone Technologies provides web development and digital marketing services in India including website design, SEO, PPC, and social media marketing to grow your business.",
  },
  alternates: {
    canonical: "https://fawarisone.com",
  },
  icons: {
    icon: '/fawarisone-icon.png',
  },
};


// ✅ Default export required for layout
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
