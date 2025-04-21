'use client';

import React from 'react';
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react"
import ContactForm from '../contact-form';


export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-8 md:py-12 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text animate-fade-in">GET IN TOUCH</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Have a project in mind or just want to say hello? Feel free to reach out to me.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <span>devanshitadvi0809@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span>+91 9687960816</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-primary"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Ahmedabad, Gujarat, India</span>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/Devanshi0816"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition focus-visible:outline focus-visible:outline-purple-500"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/devanshi-tadvi-021139213/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition focus-visible:outline focus-visible:outline-purple-500"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:devanshitadvi0809@gmail.com"
                className="text-white hover:text-purple-400 transition focus-visible:outline focus-visible:outline-purple-500"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="tel:+919687960816"
                className="text-white hover:text-purple-400 transition focus-visible:outline focus-visible:outline-purple-500"
                aria-label="Phone"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
