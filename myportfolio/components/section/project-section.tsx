'use client';

import React from 'react';
import ProjectCard from '../project-card';
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-8 md:py-12 lg:py-20">
            <div className="container px-4 md:px-6">
              <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-br from-blue-400 to-purple-500 text-transparent bg-clip-text animate-fade-in">MY PROJECTS</h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                  Check out my recent work and personal projects.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="FurniRent"
                  description="A rental platform providing students and government employees with affordable and hassle-free furniture solutions when relocating to new cities."
                  tags={["React JS", "Next JS", "Express JS", "MongoDB", "HTML", "CSS"]}
                  image="/FurniRent.png?height=400&width=600&text=Furniture+Rent"
                  link="https://github.com/Devanshi0816/FurniRent"
                  period="2024"
                />
                <ProjectCard
                  title="Portfolio Website"
                  description="A responsive personal portfolio website built with Next.js and Tailwind CSS, featuring dark mode and smooth animations."
                  tags={["Next.js", "Tailwind CSS", "React"]}
                  image="/Portfolio.png"
                  link="https://github.com/Devanshi0816/"
                  period="2025"
                />
                <ProjectCard
                  title="Elevator System"
                  description="A simple elevator simulation built using HTML, CSS, and JavaScript. The system features a 10-floor building with 5 elevators, handling elevator calls efficiently with a queue-based mechanism."
                  tags={["HTML", "CSS", "Javascript"]}
                  image="/Elevator-system.png?height=400&width=600"
                  link="https://github.com/Devanshi0816/Tasks/"
                  period="2024"
                />
              </div>
    
              <div className="flex justify-center">
                <Link href="/projects">
                  <Button>
                    View All Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
  );
}
