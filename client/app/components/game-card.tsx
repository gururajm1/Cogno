import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface GameCardProps {
  title: string
  description: string
  imageUrl: string
  difficulty: "easy" | "medium" | "hard"
  onClick: () => void
}

export function GameCard({
  title,
  description,
  imageUrl,
  difficulty,
  onClick,
}: GameCardProps) {
  return (
    <Card 
      className="overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <Badge variant={difficulty === "easy" ? "success" : "warning"}>
          {difficulty}
        </Badge>
      </CardContent>
    </Card>
  )
}

