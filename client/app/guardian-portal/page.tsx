'use client'

import { SidebarNav } from '@/components/sidebar-nav'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/calendar'
import { PortalChecklist } from '@/components/portal-checklist'
import { PortalProgress } from '@/components/portal-progress'
import { GameBenefits } from '@/components/game-benefits'
import { Search, Settings, Play } from 'lucide-react'

export default function GuardianPortal() {
  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Input 
                type="search" 
                placeholder="Search for games and activities"
                className="w-full bg-[#333] rounded-lg pl-4 pr-10"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <Button variant="purple">New game</Button>
            <Button variant="ghost" className="p-2">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" className="p-2">
              <Play className="w-5 h-5" />
            </Button>
          </div>

          <div className="grid md:grid-cols-[1fr_1.5fr_1fr] gap-6">
            <div className="bg-[#222] rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Game progress</h2>
                <div className="flex gap-2">
                  <Button variant="ghost" className="p-1">←</Button>
                  <Button variant="ghost" className="p-1">→</Button>
                </div>
              </div>
              <Calendar />
            </div>

            <PortalChecklist />
            
            <GameBenefits />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <PortalProgress />
            
            <div className="bg-[#222] rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">My Progress</h2>
              <div className="space-y-4">
                {[
                  { title: 'Create a game', time: 'EEG and', tags: ['t Det', 't Ga'] },
                  { title: 'Cognoy Logo Design', time: '30m 18s', tags: ['v Det', 't Des'] },
                  { title: 'Dashboard Design', time: '1h 48m 22s', tags: ['v Det', 't Des'] },
                  { title: 'Create a game', time: '17m 1s', tags: ['v Det', 't Ga'] },
                  { title: 'Mood Tracker', time: '15h 5m 58s', tags: ['v Det', 'Trac'] },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-xs">⏱</span>
                      </div>
                      <span>{item.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">{item.time}</span>
                      <div className="flex gap-1">
                        {item.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs px-2 py-1 bg-[#333] rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

