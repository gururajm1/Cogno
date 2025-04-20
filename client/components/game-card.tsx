"use client"

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface GameCardProps {
  id: string
  disorderId: string
  title: string
  description: string
  imageUrl: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export function GameCard({ id, disorderId, title, description, imageUrl, difficulty }: GameCardProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/games/${disorderId}/${id}`)
  }

  return (
    <Card className="overflow-hidden cursor-pointer transition-shadow hover:shadow-lg" onClick={handleClick}>
      <CardContent className="p-0">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
      </CardContent>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Badge variant={difficulty === 'easy' ? 'default' : difficulty === 'medium' ? 'secondary' : 'destructive'}>
          {difficulty}
        </Badge>
      </CardFooter>
    </Card>
  )
}