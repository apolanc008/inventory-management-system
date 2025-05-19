import React from "react";
import Link from "next/link";
import Background from "../app/ui/background";


export default function FrontPage() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      {/* Full-page background behind everything */}
      <Background />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h2 className="text-3xl mb-4">
          Inventory Management System
        </h2>
        <Link href="/login">Login</Link>
      </div>
  
    </div>
  );
}
