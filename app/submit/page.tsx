'use client'

import { MailIcon, MessageCircleIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function ModSubmissionForm() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Submit mod</h1>
        <p className="text-center text-muted-foreground mb-8">
          Submit a mod to be published on our website.
        </p>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Mod Submission Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form 
              action="https://formsubmit.co/6650b3d735e3c9c77c9734ce9168ea10" 
              method="POST" 
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="modName">Mod Name</Label>
                <Input 
                  type="text" 
                  id="modName" 
                  name="modName" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="modLink">Mod Download or Telegram Link</Label>
                <Input 
                  type="url" 
                  id="modLink" 
                  name="modLink" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="modDescription">Short Mod Description</Label>
                <Textarea 
                  id="modDescription" 
                  name="modDescription" 
                  rows={4} 
                  required 
                />
              </div>

              <Button type="submit" className="w-full">
                Submit Mod
              </Button>
            </form>
          </CardContent>
        </Card>
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
    </div>
  )
}
