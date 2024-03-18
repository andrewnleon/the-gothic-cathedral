import { Inter } from "next/font/google";
import Script from "next/script";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });
import "../styles/app.css";

export const metadata: Metadata = {
  title: 'The Gothic Cathedral Kiosk | Created By Andrew Leonberger',
  description: 'Created By Andrew Leonberger',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-V61ERZC46Z" />
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-V61ERZC46Z');
      `}
      </Script>
      <html lang="en-us">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
