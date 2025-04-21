
'use client';

import React, { useEffect, useRef, useState } from 'react';
import ExperienceCard from "@/components/experience-card"
import { Briefcase } from "lucide-react"


// Define types for our data structures
interface Skill {
    name: string;
    category: string;
  }
  
  interface Responsibility {
    [index: number]: string;
  }
  
  interface Job {
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
  }
  
  // Type for the TimelineItem props
  interface TimelineItemProps {
    job: Job;
    index: number;
  }
  

export default function ExperienceSection() {

    const experience: Job[] = [
        {
          title: "Full-stack Developer Intern",
          company: "V-ex Tech Solution",
          period: "Jan 2024 - Mar 2024",
          responsibilities: [
            "Developed responsive web components using React.js and Tailwind CSS.",
            "Collaborated with designers to improve UI/UX across multiple projects.",
            "Integrated REST APIs and optimized performance across pages.",
          ],
        },
        {
          title: "WordPress Intern",
          company: "Infonaya Software",
          period: "Aug 2023 - Dec 2023",
          responsibilities: [
            "Built end-to-end features using Node.js, Express, and MongoDB.",
            "Maintained codebase with Git and participated in code reviews.",
            "Worked on authentication, form validations, and CRUD operations.",
          ],
        },
      ];

      
    
    
  return (
    <section id="experience" className="w-full py-8 md:py-12 lg:py-20">
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex gap-3 mb-8 pb-10 justify-center items-center">
        <Briefcase className="text-blue-400 animate-fade-in" size={40} />
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-br from-blue-400 to-purple-500 text-transparent bg-clip-text animate-fade-in">
          EXPERIENCE
        </h2>
      </div>

      {/* Timeline */}
      <div className="space-y-12">
        {experience.map((job, index) => (
          <TimelineItem  key={index} job={job} index={index} />
        ))}
      </div>
    </div>
  </section>
  );
}


// Timeline Item Component with scroll-based dot animation
function TimelineItem({ job, index }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  
  // Set up intersection observer to detect when item is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);
  
  // Set up scroll listener to update dot position
  useEffect(() => {
    const handleScroll = () => {
      if (itemRef.current) {
        const rect = itemRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how far the element is through the viewport (0 to 1)
        const scrollProgress = 1 - (rect.top / windowHeight);
        
        // Limit the value between 0 and 1
        const limitedProgress = Math.max(0, Math.min(1, scrollProgress));
        
        setScrollPosition(limitedProgress);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Calculate dot position (moves up to 24px based on scroll position)
  const dotTransform = isVisible ? `translateY(${scrollPosition * 24}px)` : "translateY(0)";
  
  return (
    <div
      ref={itemRef}
      className={`relative pl-8 border-l-2 border-blue-400 animate-fade-in-up ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Animated Dot */}
      <div
        className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-2 transition-all duration-300"
        style={{ 
          transform: dotTransform,
          transition: "transform 0.3s ease-out"
        }}
      ></div>
      
      {/* Job Info */}
      <div className="mb-2">
        <h3 className="text-xl font-bold">{job.title}</h3>
        <p className="text-blue-400">{job.company}</p>
        <p className="text-sm -400">{job.period}</p>
      </div>
      
      {/* Responsibilities */}
      <ul className="list-disc list-inside space-y-2">
        {job.responsibilities.map((resp, i) => (
          <li key={i}>{resp}</li>
        ))}
      </ul>
    </div>
  );
}