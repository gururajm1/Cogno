"use client"

import { useParams } from 'next/navigation'
import { disorders } from '@/data/disorders'

export default function GamePage() {
  const params = useParams()
  const { disorderId, gameId } = params

  const disorder = disorders.find(d => d.id === disorderId)
  const game = disorder?.games?.find(g => g.id === gameId)

  if (!game) {
    return <div>Game not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
      <p className="text-xl mb-4">{game.description}</p>
      <p className="text-lg">Difficulty: {game.difficulty}</p>
      {/* Add your game content here */}
    </div>
  )
}

