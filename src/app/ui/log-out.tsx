"use client"

import { useRouter } from "next/navigation"
import { Button } from "../ui/button"

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include", 
    })

    router.push("/login")
  }

  return (
    <Button onClick={handleLogout}>
      Log out
    </Button>
  )
}
