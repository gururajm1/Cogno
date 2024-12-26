'use client'

export function Calendar() {
  const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
  const currentDay = 3 // This would normally be calculated

  return (
    <div className="grid grid-cols-7 gap-2 text-center">
      {days.map(day => (
        <div key={day} className="text-sm text-gray-400">{day}</div>
      ))}
      {Array.from({ length: 35 }).map((_, i) => {
        const day = i + 1
        const isToday = day === currentDay
        return (
          <div
            key={i}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isToday ? 'bg-purple-600' : 'bg-[#333]'
            }`}
          >
            {day}
          </div>
        )
      })}
    </div>
  )
}

