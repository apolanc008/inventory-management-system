"use client";

import { Suspense } from "react";
import Background from "../ui/background";
import LoginForm from "../ui/login-form";


export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      {/* Full-page background behind everything */}
      <Background />

      {/* Centered login form on top of background */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}