import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import AOSInit from "@/components/Helper/AOSInit";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sonuk-dev.vercel.app"),
  title: "Sonu Kumar | Frontend Developer",
  description:
    "Frontend developer specializing in React, Next.js, and modern web technologies. Explore my projects and get in touch for opportunities.",
  keywords: [
    "Sonu Kumar",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: "Sonu Kumar" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Sonu Kumar | Frontend Developer",
    description:
      "Frontend developer specializing in React, Next.js, and modern web technologies.",
    url: "https://sonuk-dev.vercel.app",
    siteName: "Sonu Kumar Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonu Kumar | Frontend Developer",
    description:
      "Frontend developer specializing in React, Next.js, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${font.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <AOSInit />
        <Provider>
          <ResponsiveNav />
          {children}
          <Footer />
          <ScrollToTop />
        </Provider>
      </body>
    </html>
  );
}
