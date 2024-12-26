'use client'

export function Calendar() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const indianTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
  const currentDay = new Date(indianTime).getDate()

  return (
    <div className="grid grid-cols-7 gap-2 text-center">
      {days.map(day => (
        <div key={day} className="text-sm text-gray-400">{day}</div>
      ))}
      {Array.from({ length: 31 }).map((_, i) => {
        const day = i + 1
        const isToday = day === currentDay
        return (
          <div
            key={i}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isToday ? 'bg-purple-600 text-white' : 'bg-[#333] text-gray-200'
            }`}
          >
            {day}
          </div>
        )
      })}
    </div>
  )
}