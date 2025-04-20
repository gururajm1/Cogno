"use client"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import type { LucideIcon } from "lucide-react"
import { Activity, Brain, BookOpen, Speech, Clock, Puzzle, Network, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Dyslexia, Dyscalculia, Dysgraphia, Dyspraxia, Dysphasia, Auditory Processing Disorder, and Visual Processing Disorder.
const disorders = [
  {
    id: "dyslexia",
    title: "Dyslexia",
    icon: Eye,
    description: "Improve focus and concentration with memory games.",
  },
  {
    id: "dyscalculia",
    title: "Dyscalculia",
    icon: Speech,
    description: "Practice pronunciation and language skills.",
  },
  {
    id: "dysgraphia",
    title: "Dysgraphia",
    icon: Network,
    description: "Develop appropriate social interactions and responses.",
  },
  {
    id: "dyspraxia",
    title: "Dyspraxia",
    icon: Brain,
    description: "Enhance problem-solving and critical thinking abilities.",
  },
  {
    id: "dysphasia",
    title: "Dysphasia",
    icon: Activity,
    description: "Develop quicker information processing and response times.",
  },
  {
    id: "auditory Disorder",
    title: "Auditory Disorder",
    icon: Clock,
    description: "Strengthen short and long-term memory retention.",
  },
  {
    id: "visual Processing Disorder",
    title: "Visual Processing Disorder",
    icon: Puzzle,
    description: "Build logical reasoning through strategic puzzles.",
  },
  {
    id: "reading",
    title: "Reading",
    icon: BookOpen,
    description: "Improve reading comprehension and fluency skills.",
  },
]

// DisorderCard component
interface DisorderCardProps {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

function DisorderCard({ id, icon: Icon, title, description }: DisorderCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md transition-all duration-200 hover:shadow-lg bg-white">
      <CardHeader className="bg-gradient-to-br from-[#9333ea] to-[#7928ca] p-5">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/10 backdrop-blur-sm mb-3">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <CardTitle className="text-white text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription className="text-gray-700 min-h-[60px]">{description}</CardDescription>
      </CardContent>
      <CardFooter className="p-3 pt-0 flex justify-center">
        <Button className="w-full bg-black hover:bg-[#9333ea] text-white transition-colors" variant="default">
          Start Games
        </Button>
      </CardFooter>
    </Card>
  )
}

// Main Games component
export default function Games() {
  return (
    <SidebarProvider>
      <AppSidebar params={"games"}/>
      <SidebarInset className="flex overflow-hidden h-screen">
        <div className="flex-grow p-4">
          <main className="min-h-screen bg-gradient-to-b from-[#f8f7fa] to-[#f1e8fd] py-4 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-4">
                <h1 className="text-4xl font-bold mb-9 text-black">
                  Learning <span className="text-[#9333ea]">Games</span>
                </h1>
                {/* <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Choose a learning area to start playing! Our interactive games help develop essential skills.
                </p> */}
                <div className="h-3 w-24 bg-[#9333ea] mx-auto mt-3 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {disorders.map((disorder) => (
                  <DisorderCard
                    key={disorder.id}
                    id={disorder.id}
                    icon={disorder.icon}
                    title={disorder.title}
                    description={disorder.description}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
    </SidebarInset>
  </SidebarProvider>
  )
}

