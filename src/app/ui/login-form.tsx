"use client";

import { useState } from "react";

export default function LoginForm() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("")

  return (
    <div className="relative z-10 bg-white p-10 rounded-full shadow-lg max-w-md w-full min-h-[700px] flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>

      <label 
        htmlFor="user"
        className="self-start mb-2 font-medium text-gray-700" 
      >
        User
      </label>
      <input
        id="user"
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Username"
        className="w-full mb-6 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-800"
      />

      <label 
        htmlFor="password"
        className="self-start mb-2 font-medium text-gray-700"
      >
        Password
      </label>
      <div className="relative w-full">
        <input
          className="w-full mb-6 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-800"
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  );
}