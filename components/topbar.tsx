'use client'

import { useState } from "react"
import { usePathname } from "next/navigation"
import { getPageTitle } from "@/app/routes"
import {
    ChartBarSquareIcon, 
    ArrowPathIcon,
    MagnifyingGlassIcon,
    BellAlertIcon,
    UserIcon, 
    Cog6ToothIcon
} from "@heroicons/react/24/solid"

export default function TopBar() {
    const pathname = usePathname();
    const title = getPageTitle(pathname);

    const [searchQuery, setSearchQuery] = useState("")

    return (
        <div className="bg-yellow-50 h-14 flex items-center justify-between mt-5 shadow-lg z-10 px-4">
            <div className="flex">
                {/* Ttile page */}
                <h2 className="text-2xl font-semibold text-black flex items-center space-x-2">
                    <ChartBarSquareIcon className="h-15 w-15 text-red-900" />
                    {title}
                </h2>
            </div>

            <div className="flex items-center space-x-8">
                {/* Refresh page */}
                <button
                    onClick={() => window.location.reload()}
                >
                    <ArrowPathIcon className="h-10 w-10 text-red-900"/>
                </button>

                {/* Search */}
                <div className="flex items-center space-x-2 text-red-900">
                    <MagnifyingGlassIcon className="h-10 w-10 text-red-900" />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                </div>

                {/* Notifications */}
                <button>
                    <BellAlertIcon className="h-10 w-10 text-red-900"/>
                </button>

                {/* User */}
                <button>
                    <UserIcon className="h-10 w-10 text-red-900"/>
                </button>

                {/* Settings */}
                <button>
                    <Cog6ToothIcon className="h-10 w-10 text-red-900"/>
                </button>

            </div>
        </div>
    )
}