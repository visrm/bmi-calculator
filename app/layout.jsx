import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BMI Checker",
  description: "A next app to calculate Body-Mass Index ( BMI ) of a person.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" translate="yes">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap"
            as="font"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
            as="font"
            rel="stylesheet"
          />
        </head>
        <body className={inter.className}>
          {children}
          <Analytics />
        </body>
      </html>
    </>
  );
}
