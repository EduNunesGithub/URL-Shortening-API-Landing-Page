import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { LayoutClient } from "@/app/LayoutClient";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import "@/app/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Shortly | Link Shortener",
  },
  applicationName: "Shortly | Link Shortener",
  description:
    "Enhance your link management with our feature-rich link shortener with analytics. Measure clicks, conversions, and engagement to make data-driven decisions. Start optimizing your links today!",
  formatDetection: { telephone: false },
  openGraph: {
    description:
      "Enhance your link management with our feature-rich link shortener with analytics. Measure clicks, conversions, and engagement to make data-driven decisions. Start optimizing your links today!",
    siteName: "Shortly | Link Shortener | PWA",
    title: "Shortly | Link Shortener",
    type: "website",
  },
  title: "Shortly | Link Shortener",
  twitter: {
    card: "summary",
    description:
      "Enhance your link management with our feature-rich link shortener with analytics. Measure clicks, conversions, and engagement to make data-driven decisions. Start optimizing your links today!",
    title: "Shortly | Link Shortener",
  },
};

export const viewport: Viewport = {
  themeColor: "#008485",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <meta
          name="google-site-verification"
          content="IqqD4SlrqMlvQ6DRNdoR8Euud5vU4r6mvcp9N6Pwj_A"
        />

        <link
          rel="shortcut icon"
          href="/PNG/icon-128x128.png"
          type="image/png"
        />
      </head>

      <body
        className={twMerge(
          poppins.variable,
          "sm:grid sm:grid-cols-1 sm:grid-rows-[auto_1fr_auto] sm:min-h-dvh sm:w-full",
        )}
      >
        <LayoutClient>
          <Header />

          {children}

          <Footer />
        </LayoutClient>

        <Analytics />
      </body>
    </html>
  );
}
