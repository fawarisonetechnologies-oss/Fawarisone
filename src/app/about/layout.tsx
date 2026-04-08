import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fawarisone Technologies | About Us – Web Development & Digital Marketing Company India",
  description:
    "Fawarisone Technologies is India's trusted web development company and Digital Marketing Company. Learn about our team, mission, and expertise in website design, SEO, PPC, and online growth.",
  keywords: [
    "web development company India",
    "Digital Marketing Company India",
    "Fawarisone",
    "Fawarisone Technologies",
    "about Fawarisone Technologies",
    "website design company India",
    "SEO agency India",
  ],
  openGraph: {
    title: "Fawarisone Technologies | About Us – Web Development & Digital Marketing Company India",
    description:
      "Fawarisone Technologies is India's trusted web development company and Digital Marketing Company. Learn about our team, mission, and expertise in website design, SEO, PPC, and online growth.",
    url: "https://fawarisone.com/about",
    siteName: "Fawarisone Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fawarisone Technologies | About Us – Web Development & Digital Marketing Company India",
    description:
      "Fawarisone Technologies is India's trusted web development company and Digital Marketing Company.",
  },
  alternates: {
    canonical: "https://fawarisone.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

