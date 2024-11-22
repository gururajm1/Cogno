"use client"

import { useRouter } from 'next/navigation'
import { type LucideIcon } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

interface DisorderCardProps {
  id: string
  icon: LucideIcon
  title: string
  description: string
  isSelected?: boolean
}

export function DisorderCard({ id, icon: Icon, title, description }: DisorderCardProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/games/disorders/${id}`)
  }

  return (
    <Card 
      className="cursor-pointer transition-all hover:shadow-lg" 
      onClick={handleClick}
    >
      <CardContent className="p-6">
        <Icon className="w-8 h-8 mb-4" />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

