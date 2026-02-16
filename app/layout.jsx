import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
});

export const metadata = {
  title: "BMI Checker",
  description: "A Next-app to calculate Body-Mass Index ( BMI ) of a person over 20 years age.",
  keywords: [ "bmi", "health", "weight", "body mass", "body mass index", "bmi calculator", "next.js" ],
  verification: { 
     google: "w6NUiZO5uyHHC7uKJOp4nGC1Tq3a8Zm7yf8cjt1foMo",
   },
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" translate="yes">
        <head color="light">
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
        </head>
        <body className={jakarta.className}>
          {children}
          <Analytics />
        </body>
      </html>
    </>
  );
}
