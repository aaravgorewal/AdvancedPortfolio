import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aarav Saini — Portfolio",
  description: "AI/ML student and full-stack developer building modern, scalable, and user-focused digital products.",
  openGraph: {
    title: "Aarav Saini — Portfolio",
    description: "AI/ML student and full-stack developer building modern, scalable, and user-focused digital products.",
    url: "https://aaravsaini.dev",
    siteName: "Aarav Saini Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarav Saini — Portfolio",
    description: "AI/ML student and full-stack developer building modern, scalable, and user-focused digital products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans-body">
        <Navigation />
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
