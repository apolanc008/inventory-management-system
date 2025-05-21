'use client'

import { useState } from "react"
import { BellAlertIcon } from "@heroicons/react/24/solid"

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="focus:outline-none"
      >
        <BellAlertIcon className="h-10 w-10 text-red-900"/>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-100 rounded-lg shadow-lg z-50 p-4 text-sm">
            <p
                className="text-black mb-2">
                    Notifications should appear here!
            </p>

        </div>
      )}
    </div>
  )
}
