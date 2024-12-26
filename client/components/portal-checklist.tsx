export function PortalChecklist() {
  const items = [
    { title: 'Track EEG progress', status: "Today's" },
    { title: 'Game insights', status: "Today's" },
    { title: 'Game overview with EEG insights', status: "Tomorrow's" },
    { title: 'Game research and development', status: 'Welcome to' },
    { title: "Improve your child's mental health.", status: 'Track Progress' },
  ]

  return (
    <div className="bg-[#222] rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Doctor/Guardian portal</h2>
        <button className="text-gray-400">⋮</button>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded bg-purple-600 flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span>{item.title}</span>
            </div>
            <span className="text-sm text-gray-400">{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

