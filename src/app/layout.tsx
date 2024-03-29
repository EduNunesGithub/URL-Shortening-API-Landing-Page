import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { LayoutClient } from "@/app/LayoutClient";
import "@/app/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          poppins.variable,
          "sm:grid sm:grid-cols-1 sm:grid-rows-[auto_1fr_auto] sm:min-h-dvh sm:w-full",
        )}
      >
        <LayoutClient>
          <div></div>

          {children}

          <div></div>
        </LayoutClient>
      </body>
    </html>
  );
}
