import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";


export const metadata: Metadata = {
  title: "Inventory Management System",
  description: "Admin dashboard for inventory management",
};


export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen w-full">
        { children }
        </body>
    </html>
  );
}
