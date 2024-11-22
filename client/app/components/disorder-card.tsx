import { useRouter } from 'next/navigation'
import { Card, CardContent } from "@/components/ui/card"
import { LucideProps } from 'lucide-react'

interface DisorderCardProps {
  id: string
  icon: React.ComponentType<LucideProps>
  title: string
  description: string
  isSelected?: boolean
  onClick?: () => void // Add the onClick prop here
}

export function DisorderCard({ id, icon: Icon, title, description, onClick }: DisorderCardProps) {
  const router = useRouter()

  const handleClick = () => {
    if (onClick) {
      onClick() // Call the onClick handler if it exists
    } else {
      router.push(`/games/disorders/${id}`) // Default action if onClick is not passed
    }
  }

  return (
    <Card 
      className="cursor-pointer transition-all hover:shadow-lg" 
      onClick={handleClick}
    >
      <CardContent className="p-6">
        <Icon className="w-8 h-8 mb-4" />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
