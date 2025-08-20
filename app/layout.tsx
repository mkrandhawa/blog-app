import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header"; // Import the Header

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Blog App",
  description: "Blogs that help you learn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header /> {/* Add the Header here */}
        <main>{children}</main>
      </body>
    </html>
  );
}