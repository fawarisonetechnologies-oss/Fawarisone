import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";



export const metadata: Metadata = {
  title: "Fawarisone",
  description: "Digital Agency",
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
