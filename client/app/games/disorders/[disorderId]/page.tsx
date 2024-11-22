"use client"

import { useParams } from 'next/navigation'
import { GameCard } from "@/components/game-card"
import { disorders } from '@/data/disorders'
import DoctorDashboard from '@/app/components/sidebar'

export default function DisorderPage() {
  const params = useParams()
  const { disorderId } = params

  const disorder = disorders.find(d => d.id === disorderId)

  if (!disorder) {
    return <div>Disorder not found</div>
  }

  return (
    <div className="flex">
    {/* Sidebar */}
    <aside className="w-64 h-screen bg-gray-100 border-r">
      <DoctorDashboard />
    </aside>
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{disorder.title}</h1>
          <p className="text-lg text-muted-foreground">
            {disorder.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disorder.games?.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              disorderId={disorder.id}
              title={game.title}
              description={game.description}
              imageUrl={game.imageUrl}
              difficulty={game.difficulty}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

