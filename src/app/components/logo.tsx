import React from "react"

export default function Logo() {
  return (
    <div className="top-28 right-18 z-10 flex flex-row items-start mt-12 mb-4">
      <img 
        src="/boxes.png"
        className="w-15 h-18 mr-5 invert brightness-200" 
      />
    
      {/* Title */}
      <div className="flex flex-col items-start">
        <h2 
          className="text-xl font-extrabold text-white"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
        >
          STOCKWISE
        </h2>
        <p 
          className="text-m font-bold text-white-800"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
        >
          Inventory 
        <br />
          Management System
        </p>
      </div>

    </div>     
  )
}