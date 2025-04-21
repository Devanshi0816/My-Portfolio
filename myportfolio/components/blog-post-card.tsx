import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import BlogImage from "./blog-images"

interface BlogPostCardProps {
  title: string
  excerpt: string
  date: string
  image: string
  link: string
}

export default function BlogPostCard({ title, excerpt, date, image, link }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <BlogImage index={Math.floor(Math.random() * 6)} title={title} />
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{excerpt}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{date}</span>
        <Link href={link} className="inline-flex items-center text-sm font-medium text-primary hover:underline">
          Read More
        </Link>
      </CardFooter>
    </Card>
  )
}

