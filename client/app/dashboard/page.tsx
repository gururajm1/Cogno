import { SidebarNav } from '../../components/sidebar-nav'

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div className="relative w-full max-w-lg">
              <input
                type="search"
                placeholder="Search for games"
                className="w-full bg-[#222] rounded-lg py-2 px-4 text-white"
              />
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-purple-600 px-4 py-2 rounded-lg">
                Start game
              </button>
              <button className="bg-[#222] p-2 rounded-lg">
                <span className="sr-only">Game settings</span>
                🎮
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#222] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Game updates</h2>
              <div className="space-y-4">
                {['Memory challenges', 'Creative thinking tasks', 'Visual puzzles and games'].map((game) => (
                  <div key={game} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full" />
                    <div>
                      <h3 className="font-medium">{game}</h3>
                      <p className="text-sm text-gray-400">New game unlocked</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#222] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Memory challenges</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Player</span>
                  <span className="bg-white text-black px-3 py-1 rounded">Myself</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Games list</span>
                  <span className="bg-white text-black px-3 py-1 rounded">Special game</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Urgency level</span>
                  <span className="bg-purple-600 px-3 py-1 rounded">High</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

