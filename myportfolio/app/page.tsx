"use client"
// import Link from "next/link"
// import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import ProjectCard from "@/components/project-card"
// import ContactForm from "@/components/contact-form"
// import ProfileImage from "@/components/profile-image"
// import SkillBadge from "@/components/skill-badge"
// import ExperienceCard from "@/components/experience-card"
// import { Briefcase } from "lucide-react"
import AnimatedBackground from "@/components/animatedbackground"
// import { useState, useEffect, useRef } from "react";
import HeroSection from "@/components/section/hero-section"
import AboutSection from "@/components/section/about-section"
import ExperienceSection from "@/components/section/experience-section"
import ProjectsSection from "@/components/section/project-section"
import ContactSection from "@/components/section/contact-section"


export default function Home() {

  
  return (
    <main className="min-h-screen">
     
     <AnimatedBackground/>
     <HeroSection/>
     <AboutSection/>
     <ExperienceSection/>
     <ProjectsSection/>
     <ContactSection/>

     
    </main>
  )
}