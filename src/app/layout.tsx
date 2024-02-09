import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "トレマート",
  description: "下取りEC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body
        className={cn(
          "relative h-full max-w-md mx-auto border",
          inter.className
        )}
      >
        <Navbar />

        <main className="relarive flex flex-col min-h-screen">{children}</main>
      </body>
    </html>
  );
}
