import type { Metadata } from "next";
import { Syne, Sora } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import "./globals.css";
import { BackToTop } from "@/components/BackToTop";


const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AARAV SAINI",
  description: "AI/ML student and full-stack developer building modern, scalable, and user-focused digital products.",
  openGraph: {
    title: "AARAV SAINI",
    description: "AI/ML student and full-stack developer building modern, scalable, and user-focused digital products.",
    url: "https://aaravsaini.dev",
    siteName: "Aarav Saini Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AARAV SAINI",
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
      className={`${syne.variable} ${sora.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans-body">
        <Navigation />
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
        <BackToTop />
      </body>
    </html>
  );
}
