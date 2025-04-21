import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <Badge variant="secondary" className="px-3 py-1 text-sm">
      {name}
    </Badge>
  )
}

