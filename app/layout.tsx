import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import "./globals.css";
import { EdgeStoreProvider } from "@/utils/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "img upload",
  description: "The app for uploading images with various services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <EdgeStoreProvider>
          <Navbar />
          <main className="p-8">
            {children}
          </main>
        </EdgeStoreProvider>
      </body>
    </html>
  );
}
