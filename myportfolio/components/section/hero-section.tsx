

'use client';

import React from 'react';
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-6 md:py-6 lg:py-12 xl:py-20 min-h-screen flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text animate-fade-in">
                Hello, I'm Devanshi Tadvi
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">
                A passionate Front-End Developer with a focus on creating exceptional user experiences.
              </p>
            </div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#contact">
                <Button>
                  Hire Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a
                href="/Devanshi%20Tadvi-Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  Download CV
                </Button>
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/Devanshi0816"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/devanshi-tadvi-021139213/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:devanshitadvi0809@gmail.com"
                className="text-white hover:text-purple-400 transition"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="tel:+919687960816"
                className="text-white hover:text-purple-400 transition"
              >
                <Phone className="h-6 w-6" />
                <span className="sr-only">Phone</span>
              </a>
            </div>
          </div>
        </div>
      </section>

  );
}
