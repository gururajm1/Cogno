"use client"
import { useState } from "react"
import { Brain, BarChart3, Calendar, Clock, ArrowUpRight, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

interface SkillArea {
  id: number
  name: string
  score: number
  improvement: number
  lastAssessment: string
}

export default function CognitiveDevelopment() {
  const [skillAreas, setSkillAreas] = useState<SkillArea[]>([
    { id: 1, name: "Working Memory", score: 72, improvement: 8, lastAssessment: "2 weeks ago" },
    { id: 2, name: "Processing Speed", score: 65, improvement: 12, lastAssessment: "1 week ago" },
    { id: 3, name: "Attention Span", score: 80, improvement: 5, lastAssessment: "3 weeks ago" },
    { id: 4, name: "Visual Processing", score: 68, improvement: 10, lastAssessment: "5 days ago" },
    { id: 5, name: "Auditory Processing", score: 72, improvement: 20, lastAssessment: "1 day ago" },
  ])

  // Format today's date
  const today = new Date()
  const formattedToday = `${today.toLocaleString("default", { month: "long" })} ${today.getDate()}, ${today.getFullYear()}`

  return (
    <SidebarProvider>
      <AppSidebar params="cognitive-development" />
      <SidebarInset className="bg-white">
        <div className="min-h-screen bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900">
                Cognitive <span className="text-[#9333ea]">Development</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Track your cognitive skills progress and development milestones
              </p>
              <div className="mt-4 h-1 w-32 bg-[#9333ea] mx-auto rounded-full"></div>
            </div>

            {/* Overview Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Brain className="h-6 w-6 text-[#9333ea]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Overall Progress</h3>
                    <p className="text-sm text-gray-500">Based on all activities</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progress Score</span>
                    <span className="text-sm font-medium text-gray-900">71/100</span>
                  </div>
                  <Progress value={71} className="h-2 bg-gray-100" indicatorClassName="bg-[#9333ea]" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Activity className="h-6 w-6 text-[#9333ea]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Weekly Activity</h3>
                    <p className="text-sm text-gray-500">Games completed this week</p>
                  </div>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div className="text-3xl font-bold text-gray-900">12</div>
                  <div className="flex items-center text-sm text-green-600">
                    <span>+3 from last week</span>
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Clock className="h-6 w-6 text-[#9333ea]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Time Spent</h3>
                    <p className="text-sm text-gray-500">Total learning time</p>
                  </div>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div className="text-3xl font-bold text-gray-900">5h 23m</div>
                  <div className="flex items-center text-sm text-green-600">
                    <span>+45m from last week</span>
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Skill Areas Section */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-[#9333ea]" />
                    Skill Areas
                  </h2>
                  <Button variant="outline" className="text-sm">
                    View All
                  </Button>
                </div>

                <div className="space-y-5">
                  {skillAreas.map((skill) => (
                    <div key={skill.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">{skill.name}</span>
                        <div className="flex items-center">
                          <span className="text-sm font-semibold text-gray-900 mr-2">{skill.score}/100</span>
                          <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                            +{skill.improvement}%
                          </span>
                        </div>
                      </div>
                      <Progress value={skill.score} className="h-2 bg-gray-100" indicatorClassName="bg-[#9333ea]" />
                      <div className="text-xs text-gray-500">Last assessment: {skill.lastAssessment}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Today's Tasks */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-[#9333ea]" />
                    Today's Tasks
                  </h2>
                  <div className="text-sm text-gray-600 font-medium">{formattedToday}</div>
                </div>

                <div className="space-y-4">
                  {[
                    { id: 1, name: "Letter Hunt", progress: 75 },
                    { id: 2, name: "Word Explorer", progress: 45 },
                    { id: 3, name: "Memory Match", progress: 90 },
                    { id: 4, name: "Focus Training", progress: 30 },
                    { id: 5, name: "Pattern Recognition", progress: 60 },
                  ].map((task) => (
                    <div key={task.id} className="p-4 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium text-gray-900">{task.name}</h3>
                        <span className="text-sm font-semibold text-gray-900">{task.progress}%</span>
                      </div>
                      <Progress
                        value={task.progress}
                        className="h-2 bg-gray-100"
                        indicatorClassName={`bg-gradient-to-r from-[#9333ea] to-purple-400`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendation Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#9333ea] p-6 rounded-xl shadow-md text-white hover:bg-[#8031c4] transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Personalized Learning Path</h3>
                    <p className="text-purple-100">Get a customized learning plan based on your cognitive profile</p>
                  </div>
                  <Brain className="h-12 w-12" />
                </div>
                <Button className="mt-4 bg-white text-[#9333ea] hover:bg-gray-100">View Learning Path</Button>
              </div>

              <div className="bg-[#9333ea] p-6 rounded-xl shadow-md text-white hover:bg-[#8031c4] transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Cognitive Assessment</h3>
                    <p className="text-purple-100">Take a comprehensive assessment to measure your progress</p>
                  </div>
                  <Activity className="h-12 w-12" />
                </div>
                <Button className="mt-4 bg-white text-[#9333ea] hover:bg-gray-100">Start Assessment</Button>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
