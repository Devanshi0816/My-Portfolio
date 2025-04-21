
'use client';

import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-8 md:py-12 lg:py-20 xl:py-20 min-h-screen">
    <div className="container px-4 md:px-6">
      <div className="mx-auto pb-10 flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl pb-8 font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-br from-blue-400 to-purple-500 text-transparent bg-clip-text animate-fade-in">ABOUT ME</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          I hold a B.E. in Information Technology from Dr. Jivraj Mehta Institute of Technology.
          With hands-on experience in full-stack development and WordPress through internships,
          I am passionate about web development and crafting user-friendly interfaces.
          I am eager to apply my skills to new challenges and create impactful digital experiences.
        </p>
      </div>

      <div className="flex justify-center gap-6 mt-6 ">
        <div className="flex flex-col items-center text-center space-y-3 rounded-lg border p-6 shadow-sm w-80">
          <div className="rounded-full bg-primary p-3 ">
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
              className="h-6 w-6 text-primary-foreground"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            </svg>
          </div>
          <h3 className="text-xl font-bold ">Frontend Development</h3>
          <p className="text-center text-sm text-muted-foreground">
            Creating responsive and accessible web applications with modern frameworks like React and Next.js.
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-3 rounded-lg border p-6 shadow-sm w-80">
          <div className="rounded-full bg-primary p-3">
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
              className="h-6 w-6 text-primary-foreground"
            >
              <path d="M2 9.5V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5.5" />
              <path d="M2 14.5V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.5" />
              <rect width="18" height="3" x="3" y="11" rx="1" />
            </svg>
          </div>
          <h3 className="text-xl font-bold ">Backend Development</h3>
          <p className="text-center text-sm text-muted-foreground">
            Building robust server-side applications with Node.js, Express, and various database technologies.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
}
