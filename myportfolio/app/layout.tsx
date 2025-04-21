import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import MobileNav from "@/components/mobile-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Devanshi Tadvi | Front-End Developer",
  description:
    "Personal portfolio website of Devanshi Tadvi, a front-end developer specializing in creating exceptional user experiences.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">

            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                <div className="flex gap-6 md:gap-10">
                  <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold inline-block">Devanshi Tadvi</span>
                  </Link>
                  <nav className="hidden gap-6 md:flex">
                    <Link
                      href="/#about"
                      className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      About
                    </Link>
                    <Link
                      href="/#experience"
                      className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      Experience
                    </Link>
                    <Link
                      href="/#projects"
                      className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      Projects
                    </Link>
                    <Link
                      href="/#contact"
                      className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      Contact
                    </Link>
                  </nav>
                </div>
                <div className="flex items-center gap-2">
                  
                  <ThemeToggle />

                  <MobileNav />

                  <Link
                    href="/#contact"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 md:hidden"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </header>
            
            <main className="flex-1">{children}</main>

            <footer className="w-full border-t bg-background py-6">
              <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © {new Date().getFullYear()} Devanshi Tadvi. All rights reserved.
                </p>
                <div className="flex gap-4">
                  <Link href="/#about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                  <Link href="/#experience" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                    Experience
                  </Link>
                  <Link href="/#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                    Projects
                  </Link>
                  <Link href="/#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </div>
              </div>
            </footer>

          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'