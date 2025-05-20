"use client";

import { Suspense } from "react";
import Background from "../ui/background";
import SignForm from "../ui/sign-up-form";


export default function SignPage() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      {/* Full-page background behind everything */}
      <Background />

      {/* Centered sign-up form on top of background */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Suspense>
          <SignForm />
        </Suspense>
      </div>
    </div>
  );
}