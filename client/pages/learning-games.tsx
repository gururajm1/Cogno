import { Button } from "@/components/ui/button"
import { Eye, MessageSquare, Brain, Activity, Clock, Puzzle, Users, BookOpen } from "lucide-react"

export default function LearningGames() {
  const categories = [
    {
      title: "Attention",
      icon: Eye,
      description: "Improve focus and concentration with memory games.",
    },
    {
      title: "Speech",
      icon: MessageSquare,
      description: "Practice pronunciation and language skills.",
    },
    {
      title: "Cognitive",
      icon: Brain,
      description: "Enhance problem-solving and critical thinking abilities.",
    },
    {
      title: "Processing",
      icon: Activity,
      description: "Develop quicker information processing and response times.",
    },
    {
      title: "Memory",
      icon: Clock,
      description: "Strengthen short and long-term memory retention.",
    },
    {
      title: "Logic",
      icon: Puzzle,
      description: "Build logical reasoning through strategic puzzles.",
    },
    {
      title: "Social Skills",
      icon: Users,
      description: "Develop appropriate social interactions and responses.",
    },
    {
      title: "Reading",
      icon: BookOpen,
      description: "Improve reading comprehension and fluency skills.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Learning <span className="text-[#9333ea]">Games</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Choose a learning area to start playing! Our interactive games help develop essential skills.
          </p>
          <div className="mt-4 h-1 w-32 bg-[#9333ea] mx-auto rounded-full"></div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="bg-[#9333ea] p-6">
                <category.icon className="h-8 w-8 text-white" />
                <h3 className="mt-2 text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="bg-white p-6">
                <p className="text-gray-600">{category.description}</p>
                <Button className="mt-6 w-full bg-black text-white hover:bg-gray-800 transition-all group-hover:bg-[#9333ea]">
                  Start Games
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

