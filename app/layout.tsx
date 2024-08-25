import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/home/navbar/ResponsiveNav";
import Footer from "@/components/home/footer/Footer";
import ScrollToTop from "@/components/helper/ScrollToTop";

const font = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Learning platform",
  description: "learning platform using nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body className={font.className}>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
