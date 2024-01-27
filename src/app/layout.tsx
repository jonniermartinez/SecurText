import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Encrypt and decrypt text",
  description:
    "The algorithm employed is AES (Advanced Encryption Standard) encryption ensures robust security for your data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-BW6Z81EHEL" />
      <body className={cn(inter.className)}>{children}</body>
    </html>
  );
}
