'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { User, Heart, Stethoscope, Users, GamepadIcon, LogOut } from 'lucide-react'

export function SidebarNav() {
  const pathname = usePathname()

  const navItems = [
    { href: '/benefits', label: 'Benefits', icon: Heart },
    // { href: '/doctor-portal', label: 'Doctor Portal', icon: Stethoscope },
    { href: '/guardian-portal', label: 'Guardian Portal', icon: Users },
    { href: '/game-progress', label: 'Game Progress', icon: GamepadIcon },
    { href: '/profile', label: 'Profile', icon: User },
  ]

  return (
    <nav className="w-64 bg-[#222] p-4 space-y-2 min-h-screen">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-black" />
        </div>
        <span className="font-semibold text-lg">Cogno</span>
      </div>
      {navItems.map((item) => {
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
              pathname === item.href
                ? 'bg-purple-600'
                : 'hover:bg-purple-600/10'
            }`}
          >
            <Icon className="w-5 h-5" />
            {item.label}
          </Link>
        )
      })}
      <button className="flex items-center gap-3 w-full p-3 mt-auto text-left hover:bg-purple-600/10 rounded-lg">
        <LogOut className="w-5 h-5" />
        Sign out
      </button>
    </nav>
  )
}

