import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MailIcon, MessageCircleIcon, Menu } from "lucide-react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brawl Stars Mods',
  description: 'Explore and download mods for Brawl Stars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800`}>
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <div className="mr-4 hidden md:flex">
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link href="/" className="text-foreground/60 transition-colors hover:text-foreground/80">Home</Link>
                <Link href="/submit" className="text-foreground/60 transition-colors hover:text-foreground/80">Submit</Link>
              </nav>
            </div>
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
              <SheetContent side="left" className="pr-0">
                <nav className="flex flex-col space-y-4">
                  <Link href="/" className="text-lg font-medium">Home</Link>
                  <Link href="/submit" className="text-lg font-medium">Submit</Link>
                </nav>
              </SheetContent>
            </Sheet>
            {/*
            <div className="flex flex-1 items-center justify-end space-x-2">
              <Button variant="ghost" size="sm" className="text-foreground/60 hover:text-foreground/80">
                Sign In
              </Button>
            </div>
            */}
          </div>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

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
      </body>
    </html>
  )
}
