"use client"

import { useState } from "react"
import { BookOpen, Calculator, Edit3, Move3d, MessageSquare, Ear, Eye, Users } from 'lucide-react'
import { DisorderCard } from "../components/disorder-card"
import { GameCard } from "../components/game-card"
import DoctorDashboard from "../components/sidebar"

const disorders = [
  {
    id: "dyslexia",
    icon: BookOpen,
    title: "Dyslexia",
    description: "Reading and word recognition exercises",
    color: "bg-purple-500",
    games: [
      {
        id: "word-explorer",
        title: "Word Explorer",
        description: "Match spoken words with pictures",
        imageUrl: "/placeholder.svg?height=200&width=400",
        difficulty: "easy" as const,
      },
      {
        id: "rhyme-time",
        title: "Rhyme Time",
        description: "Find words that rhyme together",
        imageUrl: "/placeholder.svg?height=200&width=400",
        difficulty: "medium" as const,
      },
    ],
  },
  {
    id: "dyscalculia",
    icon: Calculator,
    title: "Dyscalculia",
    description: "Number sense and math skills",
    color: "bg-blue-500",
    games: [
      {
        id: "number-patterns",
        title: "Number Patterns",
        description: "Identify and complete number sequences",
        imageUrl: "/placeholder.svg?height=200&width=400",
        difficulty: "easy" as const,
      },
      {
        id: "shape-counter",
        title: "Shape Counter",
        description: "Count shapes and match with numbers",
        imageUrl: "/placeholder.svg?height=200&width=400",
        difficulty: "medium" as const,
      },
    ],
  },
  {
    id: "dysgraphia",
    icon: Edit3,
    title: "Dysgraphia",
    description: "Writing and fine motor skills",
    color: "bg-green-500",
  },
  {
    id: "dyspraxia",
    icon: Move3d,
    title: "Dyspraxia",
    description: "Motor planning and coordination",
    color: "bg-yellow-500",
  },
  {
    id: "dysphasia",
    icon: MessageSquare,
    title: "Dysphasia/Aphasia",
    description: "Language and communication skills",
    color: "bg-red-500",
  },
  {
    id: "auditory",
    icon: Ear,
    title: "Auditory Processing",
    description: "Sound recognition and processing",
    color: "bg-pink-500",
  },
  {
    id: "visual",
    icon: Eye,
    title: "Visual Processing",
    description: "Visual perception and memory",
    color: "bg-indigo-500",
  },
  {
    id: "nonverbal",
    icon: Users,
    title: "Nonverbal Learning",
    description: "Social cues and spatial awareness",
    color: "bg-orange-500",
  },
]

export default function Home() {
  const [selectedDisorder, setSelectedDisorder] = useState<string | null>(null)

  const selected = disorders.find(d => d.id === selectedDisorder)

  return (
  <div className="flex">
    <DoctorDashboard />
    <div className="flex-grow p-4">
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Learning Games</h1>
          <p className="text-lg text-muted-foreground">
            Choose a learning area to start playing!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {disorders.map((disorder) => (
            <DisorderCard
              key={disorder.id}
              icon={disorder.icon}
              title={disorder.title}
              description={disorder.description}
              isSelected={disorder.id === selectedDisorder}
              onClick={() => setSelectedDisorder(disorder.id)}
            />
          ))}
        </div>

        {selected?.games && (
          <div className="mt-12 rounded-xl bg-primary/5 p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">{selected.title}</h2>
              <p className="text-lg text-muted-foreground">
                {selected.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selected.games.map((game) => (
                <GameCard
                  key={game.id}
                  title={game.title}
                  description={game.description}
                  imageUrl={game.imageUrl}
                  difficulty={game.difficulty}
                  onClick={() => console.log("Starting game:", game.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  </div>
</div>
  )
}

