

import { DM_Sans as MainFont } from "next/font/google";
import Provider from "@/components/Provider";
import { mainMetadata } from "@/configs/seo";
import { Analytics } from '@vercel/analytics/react';
import "@/styles/globals.css";
import Script from "next/script";


const mainFont = MainFont({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = mainMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body
        className={`overflow-x-hidden bg-white text-gray-900 dark:bg-gray-800 dark:text-slate-100 ${mainFont.className}`}
      >
        <Script id="Adsense-id" data-ad-client="ca-pub-7411835281209518"
  async strategy="afterInteractive"
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
/>
<Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2VDKJKTX6F"
        strategy="afterInteractive"
      />
        <Provider>{children}</Provider>
        <Analytics />
      </body>
    </html>
  );
}
