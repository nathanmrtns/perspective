"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";
import { FileProvider } from "./context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FileProvider>
          <Sidebar />
          {children}
        </FileProvider>
      </body>
    </html>
  );
}
