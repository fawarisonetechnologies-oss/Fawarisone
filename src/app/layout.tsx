import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Fawarisone Technologies | Web Development Company & Digital Marketing Company in India",
  description:
    "Fawarisone Technologies is a leading web development and digital marketing company in India. We offer website design, eCommerce development, SEO, PPC, social media marketing, and branding services to help businesses grow online.",
  keywords: [
    "web development company India",
    "digital marketing company India",
    "Fawarisone Technologies",
    "website design company India",
    "eCommerce development India",
    "SEO services India",
    "PPC advertising India",
    "social media marketing India",
    "best web development company Noida",
    "digital marketing agency Noida",
    "SEO company India",
    "website development company India",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Fawarisone Technologies | Web Development Company & Digital Marketing Company in India",
    description:
      "Fawarisone Technologies is a leading web development and digital marketing company in India. We offer website design, eCommerce development, SEO, PPC, social media marketing, and branding services to help businesses grow online.",
    url: "https://fawarisone.com",
    siteName: "Fawarisone Technologies",
    type: "website",
    images: [
      {
        url: "https://fawarisone.com/Fawarisone-marketing.png",
        width: 1200,
        height: 630,
        alt: "Fawarisone Technologies - Web Development & Digital Marketing Company India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fawarisone Technologies | Web Development Company & Digital Marketing Company in India",
    description:
      "Fawarisone Technologies is a leading web development and digital marketing company in India. We offer website design, eCommerce development, SEO, PPC, social media marketing, and branding services to help businesses grow online.",
    images: ["https://fawarisone.com/Fawarisone-marketing.png"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Fawarisone Technologies",
              "url": "https://fawarisone.com",
              "logo": "https://fawarisone.com/FawarisOneTechnologies-logo.png",
              "description": "Fawarisone Technologies is a leading web development and digital marketing company in India offering SEO, PPC, website design, eCommerce development, and social media marketing.",
              "foundingDate": "2014",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5th Floor, Silicon Towers, Sector 63",
                "addressLocality": "Noida",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "201301",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9540003620",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/fawarisone",
                "https://www.instagram.com/fawarisonetechnologies"
              ]
            })
          }}
        />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

