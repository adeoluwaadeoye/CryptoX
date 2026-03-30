import "./globals.css";
import Providers from "@/components/providers/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mycryptox.netlify.app"),

  title: {
    default: "MyCryptoX | Secure Cryptocurrency Platform",
    template: "%s | MyCryptoX",
  },

  description:
    "MyCryptoX is a modern cryptocurrency platform for trading, managing, and tracking digital assets securely and efficiently.",

  keywords: [
    "cryptocurrency platform",
    "crypto trading",
    "bitcoin exchange",
    "buy and sell crypto",
    "blockchain platform",
    "crypto Nigeria",
    "digital assets",
  ],

  authors: [{ name: "Adeoluwa Adeoye" }],
  creator: "Adeoluwa Adeoye",
  publisher: "Adeoluwa Adeoye",

  openGraph: {
    title: "MyCryptoX | Secure Cryptocurrency Platform",
    description:
      "Trade, manage, and track your digital assets securely with MyCryptoX.",
    url: "https://mycryptox.vercel.app",
    siteName: "MyCryptoX",
    images: [
      {
        url: "https://mycryptox.netlify.app/bg.jpg",
        width: 1200,
        height: 630,
        alt: "MyCryptoX Cryptocurrency Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MyCryptoX | Secure Cryptocurrency Platform",
    description:
      "Trade, manage, and track your digital assets securely with MyCryptoX.",
    images: ["https://mycryptox.netlify.app/bg.jpg"],
    creator: "@mycryptox", // update if needed
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://mycryptox.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={inter.variable}
      suppressHydrationWarning
    >
      <body className="font-sans bg-background text-foreground">
        <Providers>
          <Header />

          <main className="min-h-screen pt-20">{children}</main>

          <Footer />
        </Providers>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "MyCryptoX",
              url: "https://mycryptox.vercel.app",
              logo: "https://mycryptox.vercel.app/bg.png",
              description:
                "A secure cryptocurrency platform for trading, managing, and tracking digital assets.",
              sameAs: [
                "https://twitter.com/mycryptox",
                "https://instagram.com/mycryptox",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}