import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AccessibilityMenu from "@/src/components/AccessibilityMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Philipp Wood | Handcrafted Nature",
  description: "Custom handcrafted furniture from Be'er Sheva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* עכשיו הוא במקום הנכון - בתוך ה-body */}
        {children}
        <AccessibilityMenu />
      </body>
    </html>
  );
}