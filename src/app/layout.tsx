import type { Metadata } from "next";
import "./globals.css";
import Sidebar from '@/../components/Sidebar'
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
      <body className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100"> {children} </main>
      </body>
    </html>
  );
}
