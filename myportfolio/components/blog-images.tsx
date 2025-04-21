import Image from "next/image"

interface BlogImageProps {
  index: number
  title: string
}

export default function BlogImage({ index, title }: BlogImageProps) {
  // Create different colored placeholders based on index
  const colors = ["FFCF33", "33CFFF", "CF33FF", "CFFF33", "FF33CF", "33FFCF"]
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

