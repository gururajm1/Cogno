import { Home, Users, Edit, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function PortalProgress() {
  const items = [
    { icon: Home, title: 'Dashboard', avatars: ['/placeholder.svg', '/placeholder.svg'] },
    { icon: Users, title: 'Family', avatars: ['/placeholder.svg', '/placeholder.svg'] },
    { icon: Edit, title: 'Freelance work 01', avatars: ['/placeholder.svg', '/placeholder.svg'] },
    { icon: Calendar, title: 'Conference planning', avatars: ['/placeholder.svg'] },
  ]

  return (
    <div className="bg-[#222] rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Doctor/Guardian Portal</h2>
        <button className="text-gray-400">⋮</button>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#333] rounded-lg flex items-center justify-center">
                <item.icon className="w-5 h-5" />
              </div>
              <span>{item.title}</span>
            </div>
            <div className="flex -space-x-2">
              {item.avatars.map((avatar, avatarIndex) => (
                <img
                  key={avatarIndex}
                  src={avatar}
                  alt=""
                  className="w-6 h-6 rounded-full border-2 border-[#222]"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full mt-4 text-black">
        Add more
      </Button>
    </div>
  )
}

