import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Activity, Clock, Target } from "lucide-react"

export default function PlatformOverview() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-white">
        <div className="min-h-screen">
          <header className="border-b border-gray-200 px-8 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Platform Overview</h1>
          </header>

          <div className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-3">
            <div className="col-span-2 space-y-8">
              <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-gray-500">EEG Analysis</span>
                    <h2 className="text-xl font-semibold text-gray-900">Game</h2>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-7 gap-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="mb-2 h-32 w-full rounded-md bg-gray-200 transition-all hover:bg-gray-300"></div>
                      <span className="text-sm text-gray-500">{day}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex justify-between">
                  <button className="text-sm font-medium text-[#9333ea] hover:text-[#9333ea]/80">
                    Progress Overview
                  </button>
                  <button className="text-sm font-medium text-[#9333ea] hover:text-[#9333ea]/80">Game Analysis</button>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
                <h2 className="mb-6 text-xl font-semibold text-gray-900">Performance</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {[
                    { icon: Activity, title: "EEG Insights", subtitle: "Game Time" },
                    { icon: Clock, title: "Daily Average", subtitle: "Learning" },
                    { icon: Target, title: "Course Completion", subtitle: "Course" },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-gray-200 p-4 transition-all hover:border-[#9333ea]/30 hover:shadow-md"
                    >
                      <card.icon className="mb-3 h-6 w-6 text-[#9333ea]" />
                      <div className="text-sm text-gray-500">{card.title}</div>
                      <div className="font-medium text-gray-900">{card.subtitle}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
                <h2 className="mb-4 text-xl font-semibold text-gray-900">Game Progress Graph</h2>

                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Game-based Learning</span>
                      <span className="text-xs text-gray-500">EEG Analysis</span>
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Game Progress Tracking</span>
                      <span className="text-xs text-gray-500">Game</span>
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Game Performance Graphs</span>
                      <span className="text-xs text-gray-500">Guardian Portal Access</span>
                    </div>
                  </div>
                </div>

                <Button className="mt-6 w-full bg-white text-gray-800 hover:bg-gray-100">View Insights</Button>
              </div>

              <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
                <h2 className="mb-4 text-xl font-semibold text-gray-900">Progress Comparison</h2>

                <div className="space-y-6">
                  {[
                    { label: "Game Time Analysis", value: 85, badge: "Progress" },
                    { label: "Learning Progress", value: 70, badge: "Comp" },
                    { label: "Course Completion", value: 95, badge: "ement" },
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">{item.label}</span>
                        <span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-700">
                          {item.badge}
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                        <div className="h-full rounded-full bg-[#9333ea]" style={{ width: `${item.value}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

