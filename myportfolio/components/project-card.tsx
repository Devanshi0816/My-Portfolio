import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link: string
  period?: string
}

export default function ProjectCard({ title, description, tags, image, link, period }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex flex-col space-y-1">
          <h3 className="text-xl font-bold">{title}</h3>
          {period && <p className="text-sm text-muted-foreground">{period}</p>}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-3">
         
          <Link
            href="https://github.com/Devanshi0816/"
            className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            View Project
          </Link>

          {/* <Link href="https://github.com/Devanshi0816/" target="_blank" rel="noopener noreferrer" >
            <Github className="h-8 w-8 text-muted-foreground transition-colors outline p-1  rounded bg-primary text-white " />
          </Link> */}
          
        </div>
      </CardFooter>
    </Card>
  )
}

