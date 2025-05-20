"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { submitSignUpForm } from "../lib/formhandler"
import { Button } from "./button";
import { 
    PencilIcon, 
    AtSymbolIcon, 
    UserIcon, 
    LockClosedIcon 
} from "@heroicons/react/24/solid"


export default function SingForm() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    try {
        await submitSignUpForm({
        name,
        lastname: lastName,
        username: user,
        email,
        password,
        confirmPassword,
        });
        router.push("/dashboard");
    } catch (error) {
        if (error instanceof Error) {
        alert(error.message);
        } else {
        alert("Unknown error has occurred.");
        }
    }};

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-10 bg-gray-100 p-10 rounded-full shadow-2xl max-w-md w-full min-h-[650px] flex flex-col items-center"
    >
        <img 
            src="/boxes.png"
            className="w-30 h-30 mb-8" 
        />

        <h2 className="text-2xl font-semibold mb-8 text-center text-red-800">Create New Account</h2>

        <div className="flex w-full gap-5 mb-10">
            
            {/* Name textfield*/}
            <div className="relative w-full">
                <PencilIcon className="absolute left-2 top-5 -translate-y-1/2 h-5 w-5 text-red-700" />
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="pl-8 w-full p-2 border-0 border-b-2 border-red-500 focus:outline-none focus:border-red-700 bg-red-50 rounded-sm placeholder-gray-500 text-black"
                />
            </div>

            {/* lastName textfield*/}
            <div className="relative w-full">
                <PencilIcon className="absolute left-2 top-5 -translate-y-1/2 h-5 w-5 text-red-700" />
                <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="pl-8 w-full p-2 border-0 border-b-2 border-red-500 focus:outline-none focus:border-red-700 bg-red-50 rounded-sm placeholder-gray-500 text-black"
                />
            </div>

        </div>
    
        {/* Username textfield*/}
        <div className="relative w-full">
            <UserIcon className="absolute left-2 top-5 -translate-y-1/2 h-5 w-5 text-red-700" />
            <input
                id="user"
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="Username"
                className="pl-8 w-full mb-12 p-2 border-0 border-b-2 border-red-500 focus:outline-none focus:border-red-700 bg-red-50 rounded-sm placeholder-gray-500 text-black"
            />
        </div>


        {/* Email textfield*/}
        <div className="relative w-full">
            <AtSymbolIcon className="absolute left-2 top-5 -translate-y-1/2 h-5 w-5 text-red-700" />
            <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-8 w-full mb-12 p-2 border-0 border-b-2 border-red-500 focus:outline-none focus:border-red-700 bg-red-50 rounded-sm placeholder-gray-500 text-black"
            />
        </div>

        <div className="flex w-full gap-5 mb-10">

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
                className="pl-8 w-full mb-2 p-2 border-0 border-b-2 border-red-500 focus:outline-none focus:border-red-700 bg-red-50 rounded-sm placeholder-gray-500 text-black"
                />
            </div>

            {/* Confirm Password textfield */}
            <div className="relative w-full">
                <LockClosedIcon className="absolute left-2 top-5 -translate-y-1/2 h-5 w-5 text-red-700" />
                <input
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
                required
                minLength={8}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="pl-8 w-full mb-2 p-2 border-0 border-b-2 border-red-500 focus:outline-none focus:border-red-700 bg-red-50 rounded-sm placeholder-gray-500 text-black"
                />
            </div>
        </div>

        {/* Submit Button */}
        <Button type="submit">
            Create
        </Button>

    </form>

  );
}