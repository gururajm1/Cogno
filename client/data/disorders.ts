import { BookOpen, Calculator, Edit3, Move3d, MessageSquare, Ear, Eye, Users } from 'lucide-react'

export const disorders = [
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
    games: [],
  },
  {
    id: "dyspraxia",
    icon: Move3d,
    title: "Dyspraxia",
    description: "Motor planning and coordination",
    color: "bg-yellow-500",
    games: [],
  },
  {
    id: "dysphasia",
    icon: MessageSquare,
    title: "Dysphasia/Aphasia",
    description: "Language and communication skills",
    color: "bg-red-500",
    games: [],
  },
  {
    id: "auditory",
    icon: Ear,
    title: "Auditory Processing",
    description: "Sound recognition and processing",
    color: "bg-pink-500",
    games: [],
  },
  {
    id: "visual",
    icon: Eye,
    title: "Visual Processing",
    description: "Visual perception and memory",
    color: "bg-indigo-500",
    games: [],
  },
  {
    id: "nonverbal",
    icon: Users,
    title: "Nonverbal Learning",
    description: "Social cues and spatial awareness",
    color: "bg-orange-500",
    games: [],
  },
]

