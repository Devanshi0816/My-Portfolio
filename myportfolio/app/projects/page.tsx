import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ProjectCard from "@/components/project-card"
import AnimatedBackground from "@/components/animatedbackground"

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <AnimatedBackground/>
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Projects</h1>
        <p className="mt-2 text-lg text-muted-foreground">A collection of my recent work and personal projects.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        <ProjectCard
         title="FurniRent"
         description="A rental platform providing students and government employees with affordable and hassle-free furniture solutions when relocating to new cities."
         tags={["React JS","Next JS", "Express JS"]}
         image="/FurniRent.png?height=400&width=600&text=Furniture+Rent"
         link="https://github.com/Devanshi0816/FurniRent"
         period="2024"
        />
        <ProjectCard
         title="Portfolio Website"
          description="A responsive personal portfolio website built with Next.js and Tailwind CSS, featuring dark mode and smooth animations."
          tags={["Next.js", "Tailwind CSS", "React"]}
          image="/Portfolio.png"
          link="#"
          period="2025"
        />
        {/* <ProjectCard
         title="E-commerce Website"
         description="A E-commerce website with WooCommerce integration, custom themes, and payment gateway integration."
         tags={["HTML","CSS", "Javascript"]}
         image="/E-commarce web.png?height=400&width=600&text=E-commerce"
         link="#"
         period="2023"
        /> */}
       
        <ProjectCard
          title="Weather Dashboard"
          description="A real-time weather dashboard with location-based forecasts and interactive maps."
          tags={["Next.js", "Weather API", "Chart.js"]}
          image="/weather dashboard.png?height=400&width=600"
          link="https://github.com/Devanshi0816/India-Weather-Dashboard"
          period="2024"
        />

        <ProjectCard
          title="Elevator System"
          description="A simple elevator simulation built using HTML, CSS, and JavaScript. The system features a 10-floor building with 5 elevators, handling elevator calls efficiently with a queue-based mechanism."
          tags={["HTML", "CSS", "Javascript"]}
          image="/Elevator-system.png?height=400&width=600"
          link="https://github.com/Devanshi0816/Tasks/tree/main/Elevator-service"
          period="2024"
        />

        <ProjectCard
        title="Expense Tracker"
        description="A simple and efficient expense tracker that helps you manage your income and expenses."
        tags={["React.js", "Firebase", "Tailwind CSS"]}
        image="/Expense Tracker.png?height=400&width=600"
        link="https://github.com/Devanshi0816/Expense-Tracker"
        period="2025"
        />

      </div>
    </main>
  )
}

