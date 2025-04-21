import Image from "next/image"

interface ProjectImageProps {
  index: number
  title: string
}

export default function ProjectImage({ index, title }: ProjectImageProps) {
  // Create different colored placeholders based on index
  const colors = ["FF5733", "33FF57", "3357FF", "F3FF33", "FF33F3", "33FFF3"]
  const color = colors[index % colors.length]

  return (
    <Image
      src={`/placeholder.svg?height=400&width=600&text=${title}&bgcolor=${color}`}
      alt={title}
      width={600}
      height={400}
      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
    />
  )
}

