"use client";

import { useState } from "react";
import { Button } from "./button";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/solid"
import Link from "next/link";


export default function LoginForm() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("")

  return (
    <div className="relative z-10 bg-gray-100 p-10 rounded-full shadow-2xl max-w-md w-full min-h-[650px] flex flex-col items-center">

      <img 
        src="/boxes.png"
        className="w-30 h-30 mb-8" 
      />

      <h2 className="text-3xl font-semibold mb-8 text-center text-red-800">LOG IN</h2>

      {/* Username textfield*/}
      <UserIcon className="absolute left-12 top-3/7 -translate-y-1/2 h-5 w-5 text-red-700" />
      <input
        id="user"
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Username"
        className="pl-8 w-full mb-12 p-2 border-0 border-b-2 border-red-500 focus:outline-none focus:border-red-700 bg-red-50 rounded-sm placeholder-gray-500 text-black"
      />

      {/* Password textfield */}
      <div className="relative w-full">
        <LockClosedIcon className="absolute left-2 top-5 -translate-y-1/2 h-5 w-5 text-red-700" />
        <input
          id="password"
          type="password"
          placeholder="Password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="pl-8 w-full mb-10 p-2 border-0 border-b-2 border-red-500 focus:outline-none focus:border-red-700 bg-red-50 rounded-sm placeholder-gray-500 text-black"
        />
      </div>

      {/* Button */}
      <Button>
        <Link
          href="/dashboard"
        >
          Log in
        </Link> 
      </Button>

      <p className="mt-12 text-sm font-normal mb-8 text-center text-gray-800">
        Don't have an account?{" "}  
        <a href="/sign-up" className="text-red-900 italic hover:underline font-normal">
          Sign up  
        </a>
      </p>

    </div>
  );
}