import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function GameBenefits() {
  return (
    <div className="bg-[#222] rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Doctor/Guardian</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span>Game Benefits</span>
            <ChevronRight className="w-5 h-5" />
          </div>
          <p className="text-sm text-gray-400">Enjoy learning with Cogno.</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span>Game Benefits</span>
            <ChevronRight className="w-5 h-5" />
          </div>
          <p className="text-sm text-gray-400">Check out how much your child has improved!</p>
        </div>
        <Button variant="outline" className="w-full text-black">
          Sign Up
        </Button>
      </div>
    </div>
  )
}

