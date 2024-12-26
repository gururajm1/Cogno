import { SidebarNav } from '@/components/sidebar-nav'
import { Button } from '@/components/ui/button'
import { Book, HourglassIcon, CheckCircle, ChevronDown, MoreHorizontal } from 'lucide-react'

export default function GameProgress() {
  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold">Platform Overview</h1>
          
          <div className="grid md:grid-cols-[2fr_1fr] gap-6">
            <div className="space-y-6">
              {/* EEG Analysis Section */}
              <div className="bg-[#222] rounded-lg p-6">
                <h2 className="text-sm text-gray-400 mb-2">EEG Analysis</h2>
                <h3 className="text-xl mb-6">Game</h3>
                
                <div className="grid grid-cols-7 gap-4 mb-8 h-48">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                    <div key={day} className="flex flex-col h-full justify-end">
                      <div className="bg-[#333] w-full" style={{ height: `${Math.random() * 100}%` }} />
                      <span className="text-sm text-gray-400 mt-2">{day}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Button variant="purple" className="py-3">
                    Progress Overview
                  </Button>
                  <Button variant="purple" className="py-3">
                    Game Analysis
                  </Button>
                </div>

                <h3 className="text-xl mb-4">Performance</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[#333] p-4 rounded-lg">
                    <Book className="w-6 h-6 mb-2" />
                    <div className="text-sm text-gray-400">EEG Insights</div>
                    <div className="font-medium">Game Time</div>
                  </div>
                  <div className="bg-[#333] p-4 rounded-lg">
                    <HourglassIcon className="w-6 h-6 mb-2" />
                    <div className="text-sm text-gray-400">Daily Average</div>
                    <div className="font-medium">Learning</div>
                  </div>
                  <div className="bg-[#333] p-4 rounded-lg">
                    <CheckCircle className="w-6 h-6 mb-2" />
                    <div className="text-sm text-gray-400">Course Completion</div>
                    <div className="font-medium">Course</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Game Progress Graph */}
              <div className="bg-[#222] rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Game Progress Graph</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <img src="/placeholder.svg" alt="" className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="font-medium">Game-based Learning</div>
                      <div className="text-sm text-gray-400">EEG Analysis</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/placeholder.svg" alt="" className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="font-medium">Game Progress Tracking</div>
                      <div className="text-sm text-gray-400">Game</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/placeholder.svg" alt="" className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="font-medium">Game Performance Graphs</div>
                      <div className="text-sm text-gray-400">Guardian Portal Access</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full text-black">
                    View Insights
                  </Button>
                </div>
              </div>

              {/* Progress Comparison */}
              <div className="bg-[#222] rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-6">Progress Comparison</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Game Time Analysis</span>
                      <span className="bg-white text-black rounded-full px-2">gress R</span>
                    </div>
                    <div className="h-2 bg-[#333] rounded-full">
                      <div className="h-full bg-purple-600 rounded-full" style={{ width: '75%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Learning Progress</span>
                      <span className="bg-white text-black rounded-full px-2">Comp</span>
                    </div>
                    <div className="h-2 bg-[#333] rounded-full">
                      <div className="h-full bg-purple-600 rounded-full" style={{ width: '60%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Course Completion</span>
                      <span className="bg-white text-black rounded-full px-2">ement</span>
                    </div>
                    <div className="h-2 bg-[#333] rounded-full">
                      <div className="h-full bg-purple-600 rounded-full" style={{ width: '90%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

