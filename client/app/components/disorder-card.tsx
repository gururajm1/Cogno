import { type LucideIcon } from 'lucide-react'
import { cn } from "@/lib/utils"

interface DisorderCardProps {
  icon: LucideIcon
  title: string
  description: string
  isSelected: boolean
  onClick: () => void
}

export function DisorderCard({
  icon: Icon,
  title,
  description,
  isSelected,
  onClick,
}: DisorderCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full p-6 rounded-xl transition-all duration-200 hover:scale-105",
        "flex flex-col items-center text-center",
        isSelected ? "bg-primary/20" : "bg-white hover:shadow-lg"
      )}
    >
      <Icon className="w-8 h-8 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </button>
  )
}

