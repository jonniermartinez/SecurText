import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Script from "next/script";

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
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-BW6Z81EHEL`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-BW6Z81EHEL', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <body className={cn(inter.className)}>{children}</body>
    </html>
  );
}
