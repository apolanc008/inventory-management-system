'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/products', label: 'Products' },
    { href: '/orders', label: 'Orders' },
    { href: '/stock', label: 'Stock' },
    { href: '/categories', label: 'Categories' },
    { href: '/suppliers', label: 'Suppliers' },
    { href: '/reports', label: 'Reports' },
    { href: '/settings', label: 'Settings' }
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white shadow-md h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Inventory System</h2>
      <nav className="space-y-2">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`block px-3 py-2 rounded ${
              pathname === href
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-blue-100'
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}