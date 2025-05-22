'use client'

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
     UserCircleIcon,
     UserIcon 
} from "@heroicons/react/24/solid"
import { Button } from "../ui/button"

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const [userData, setUserData] = useState({
     name: "",
     lastname: "",
     username: "" 
  })

   useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await fetch("http://localhost:3000/user", {
          method: "GET",
          credentials: "include",
        })

        if (res.ok) {
          const data = await res.json()
          setUserData(data)
        } else {
          console.error("User not logged in")
        }
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }

    fetchUserInfo()
  }, [])

  const handleLogout = async () => {
    await fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include",
    })
    router.push("/login")
  }

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="focus:outline-none"
      >
        <UserIcon className="h-10 w-10 text-red-900"/>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-100 rounded-lg shadow-lg z-50 p-4 text-sm">
            <div
                className="text-black mb-4">
                    <div className="flex flex-col items-center">
                        <UserCircleIcon className="h-10 w-10 text-black" />
                    </div>
                    
                   <br />
                    <div className="text-center">
                        <span>
                            Name: {userData.name} {userData.lastname}
                            <br />
                            Username: @{userData.username}
                            <br />
                        </span>
                    </div>
            </div>

            <div className="flex justify-center gap-x-4">
                <Button
                    onClick={() => router.push('/edit-profile')}
                    className="bg-red-800 text-white"
                >
                    Edit Profile
                </Button>

                <Button 
                    onClick={handleLogout} 
                    className="bg-red-800 text-white"
                >
                    Log out
                </Button>
            </div>
        </div>
      )}
    </div>
  )
}
