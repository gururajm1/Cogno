"use client"

import * as React from "react"
import { LogOut, BarChart2, User, Gamepad2, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import type { JSX } from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

interface AppSidebarProps {
  params: string;
}

export function AppSidebar({ params }: AppSidebarProps) {
  const [activeItem, setActiveItem] = React.useState<string>(params)

  const menuItems = [
    {
      id: "games",
      title: "Games",
      icon: Gamepad2,
      href: "/games",
    },
    {
      id: "game-progress",
      title: "Game Progress",
      icon: Users,
      href: "/game-progress",
    },
    {
      id: "game-progress-charts",
      title: "Progress Charts",
      icon: BarChart2,
      href: "/progress-charts",
    },
    {
      id: "profile",
      title: "Profile",
      icon: User,
      href: "/profile",
    },
    {
      id: "sign-out",
      title: "Sign out",
      icon: LogOut,
      href: "/sign-out",
      className: "mt-auto",
    },
  ]

  return (
    <Sidebar className="border-r-0">
      <SidebarContent>
        <div className="flex items-center px-6 py-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9333ea]">
            <User className="h-5 w-5 text-white" />
          </div>
          <span className="ml-3 text-xl font-semibold tracking-tight text-white">Cogno</span>
        </div>
        <SidebarMenu className="px-3">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.id} className={item.className}>
              <SidebarMenuButton
                asChild
                isActive={activeItem === item.id}
                className={cn(
                  "my-1 transition-all duration-200 ease-in-out",
                  "text-gray-400 hover:bg-[#9333ea]/10 hover:text-white",
                  "data-[active=true]:bg-gradient-to-r data-[active=true]:from-[#9333ea] data-[active=true]:to-[#9333ea]/80",
                  "data-[active=true]:text-white data-[active=true]:shadow-sm",
                  item.id === "sign-out" && "hover:bg-red-500/10 hover:text-red-400",
                  item.id === "sign-out" && activeItem === "sign-out" && "bg-red-500/20 text-red-400",
                )}
                onClick={() => setActiveItem(item.id)}
              >
                <a href={item.href} className="flex items-center py-2.5">
                  <item.icon className={cn("h-5 w-5", activeItem === item.id ? "text-white" : "text-gray-400")} />
                  <span className="ml-3 font-medium">{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail className="after:bg-gray-800" />
    </Sidebar>
  )
}

