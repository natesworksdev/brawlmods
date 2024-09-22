'use client'

import { MailIcon, MessageCircleIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Head from 'next/head'

const experienceOptions = [
  { value: "very", label: "Very experienced" },
  { value: "alot", label: "A lot of experience" },
  { value: "abit", label: "A bit of experience" },
  { value: "notatall", label: "Not at all experienced" },
]

export default function DeveloperApplicationForm() {
  return (
    <>
      <Head>
        <title>All Brawl - Developer Application</title>
        <meta name="description" content="Apply to become an All Brawl Developer" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-4">All Brawl Developer Application</h1>
          <p className="text-center text-muted-foreground mb-8">
            Apply to join our development team and contribute to All Brawl!
          </p>
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Developer Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form 
                action="https://formsubmit.co/6650b3d735e3c9c77c9734ce9168ea10" 
                method="POST" 
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="discordHandle">Discord Handle</Label>
                  <Input 
                    type="text" 
                    id="discordHandle" 
                    name="discordHandle" 
                    required 
                    placeholder="johniscool"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="githubUsername">GitHub Username</Label>
                  <Input 
                    type="text" 
                    id="githubUsername" 
                    name="githubUsername" 
                    required 
                    placeholder="epicgithub12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input 
                    type="email" 
                    id="contactEmail" 
                    name="contactEmail" 
                    required 
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gitExperience">Git and GitHub Experience</Label>
                  <Select name="gitExperience" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      {experienceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pandaExperience">Panda (CSV manipulation library) Experience</Label>
                  <Select name="pandaExperience" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      {experienceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pythonExperience">Python Experience</Label>
                  <Select name="pythonExperience" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      {experienceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  )
}
