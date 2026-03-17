import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'id' }]
}

export const metadata: Metadata = {
  metadataBase: new URL("https://skylineai.example.com"),
  title: "SkylineAI - Flow with the Future | Open-Source Automation",
  description: "SkylineAI is the fair-code automation platform for modern engineers. Design powerful AI workflows node-by-node. Self-host or scale in the cloud.",
  keywords: ["automation", "workflow", "ai", "open-source", "n8n", "low-code", "developer tools"],
  authors: [{ name: "SkylineAI Team" }],
  openGraph: {
    title: "SkylineAI - Flow with the Future",
    description: "The flexible automation platform for modern engineers.",
    url: "https://skylineai.example.com",
    siteName: "SkylineAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SkylineAI Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkylineAI - Flow with the Future",
    description: "The flexible automation platform for modern engineers.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SkylineAI",
    "operatingSystem": "Web, Windows, Linux, macOS",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "The open-source automation platform for modern engineers.",
  };

  return (
    <html lang={lang} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${outfit.variable} antialiased font-sans bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
