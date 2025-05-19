import React from "react";
import Link from "next/link";
import Background from "../app/ui/background";
import { Button } from "./ui/button";


export default function FrontPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4">
      
      {/*Box Container */}
      <div className="relative z-10 p-10 rounded-[5rem] shadow-2xl w-[1200px] h-[700px] flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background inside the box */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Background />
        </div>

        <div className="absolute top-28 right-18 z-10 flex flex-row items-start mb-1">
          <img 
            src="/boxes.png"
            className="w-22 h-22 mr-5" 
          />

          {/* Title */}
          <div className="flex flex-col items-start">
            <h2 
              className="text-5xl font-extrabold text-red-800"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              STOCKWISE
            </h2>
            <p 
              className="text-2xl font-bold text-red-800"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              Inventory Management System
            </p>
          </div>
        </div>

        <div className="z-10 flex flex-col items-center text-center max-w-xl ml-auto">
          {/* Description */}
          <p
            className="text-xl font-semibold text-black mt-28 mb-10"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
          >
            Track, manage, and optimize your product inventory with our user-friendly web platform. 
            Designed for small businesses, retailers, and warehouse managers, this system helps you stay organized and in control of your stock.
          </p>
          
          <div className="flex gap-10">
            {/* Buttons */}
            <Button>
              <Link
                href="/login"
              >
                Log in
              </Link>
            </Button>

            <Button>
              <Link
                href="/sign-up"
              >
                Sign up
              </Link>
            </Button>
          </div>
          
        </div>

      </div>

    </div>
  );
}