import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Veloura – Premium Jewelry | Coming Soon",
  description:
    "Discover Veloura: imported, minimal yet timeless jewelry inspired by European and Korean fashion. Non-tarnish, affordable and perfect to gift your girl. Our exclusive collection is launching soon – stay tuned for elegance redefined.",
  keywords: [
    "Veloura",
    "Veloura jewelry",
    "imported jewelry",
    "european fashion jewelry",
    "korean jewelry",
    "affordable jewelry online",
    "non tarnish jewelry",
    "stylish jewelry India",
    "pendants and chains",
    "minimal jewelry India",
    "modern jewelry",
    "gift jewelry for her",
    "premium jewelry brand",
  ],
  authors: [{ name: "Veloura" }],
  openGraph: {
    title: "Veloura – Premium Jewelry | Coming Soon",
    description:
      "Veloura brings you imported, affordable and non-tarnish jewelry inspired by European and Korean fashion. Minimal yet premium, launching soon.",
    url: "https://veloura.com", // apni site ka actual URL daalna
    siteName: "Veloura",
    images: [
      {
        url: "/seofriendly.jpg", // ek SEO friendly OG image bana lena
        width: 1200,
        height: 630,
        alt: "Veloura Premium Jewelry Coming Soon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veloura – Premium Jewelry | Coming Soon",
    description:
      "Veloura brings you imported, affordable, non-tarnish jewelry inspired by European & Korean fashion. Perfect to gift her. Launching soon.",
    images: ["/seofriendly.jpg"],
    creator: "@veloura", 
  },
  icons: {
    icon: "/logofortab.png",
    shortcut: "/logofortab.png",
    apple: "/logofortab.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
