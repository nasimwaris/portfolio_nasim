import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nasim Waris | Co-Founder @ PreepX | Full Stack Engineer",
  description: "Building AI-powered SaaS products, scalable backend systems, and modern web applications. Co-Founder of PreepX.",
  openGraph: {
    title: "Nasim Waris | Co-Founder @ PreepX",
    description: "Building AI-powered SaaS products and scalable backend systems.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Nasim Waris",
              "jobTitle": "Co-Founder & Full Stack Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "PreepX"
              },
              "url": "https://nasimwaris.com",
              "sameAs": [
                "https://www.linkedin.com/in/nasim-waris/",
                "https://github.com/nasimwaris"
              ]
            })
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ScrollProgress />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
