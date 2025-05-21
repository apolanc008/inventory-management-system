'use client'

import Link from 'next/link'
import Logo from "../components/logo"
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/app/ui/button'

const links = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/products', label: 'Products' },
    { href: '/dashboard/orders', label: 'Orders' },
    { href: '/dashboard/stock', label: 'Stock' },
    { href: '/dashboard/categories', label: 'Categories' },
    { href: '/dashboard/suppliers', label: 'Suppliers' },
    { href: '/dashboard/reports', label: 'Reports' },
    { href: '/dashboard/settings', label: 'Settings' }
]

export default function SideBar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include",
    })
    router.push("/login")
  }

    return (
    <aside className="w-70 bg-red-900 shadow-md h-screen flex flex-col justify-between">
      <div>
        <div className="p-4">
          <Logo />
        </div>
        <nav className="space-y-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block px-3 py-2 ${
                pathname === href
                  ? 'bg-red-800 font-bold text-white'
                  : 'text-white hover:bg-red-800'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 flex justify-center">
        <Button onClick={handleLogout} className="bg-red-800 text-white">
          Log out
        </Button>
      </div>
    </aside>
  )
}