'use client'

import { useState, useEffect } from 'react'
import { Inter } from 'next/font/google'
import Link from "next/link"
import { ThemeProvider, useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MailIcon, MessageCircleIcon, Menu, Moon, Sun } from "lucide-react"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8 mt-14">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus:ring-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-lg font-medium">Home</Link>
                <Link href="/submit" className="text-lg font-medium">Submit</Link>
              </nav>
            </SheetContent>
          </Sheet>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="text-foreground/60 transition-colors hover:text-foreground/80">Home</Link>
            <Link href="/submit" className="text-foreground/60 transition-colors hover:text-foreground/80">Submit</Link>
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="w-full py-6 bg-background border-t">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
          This content is not affiliated with or endorsed by Supercell. Use at your own risk.
        </p>
        <nav className="flex gap-6">
          <Link href="mailto:contact@natesworks.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center">
            <MailIcon className="mr-2 h-4 w-4" />
            Contact
          </Link>
          <Link href="https://discord.com/users/1272251195133526046" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center">
            <MessageCircleIcon className="mr-2 h-4 w-4" />
            Discord
          </Link>
        </nav>
      </div>
    </footer>
  )
}

function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <Sun className="h-6 w-6" />
      ) : (
        <Moon className="h-6 w-6" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}