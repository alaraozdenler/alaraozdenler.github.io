import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alara Özdenler | Portfolio",
  description:
    "Software developer with experience in iOS, web, and machine learning projects.",
  icons: {
    icon: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
