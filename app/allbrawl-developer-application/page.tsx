'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectItem } from "@/components/ui/select"
import Head from 'next/head';

export default function DeveloperApplicationForm() {
  return (
    <>
      <Head>
        <title>All Brawl Developer - Apply</title>
        <meta name="description" content="Apply to become a developer for All Brawl." />
      </Head>
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Developer Application</h1>
        <p className="text-center text-muted-foreground mb-8">
          Apply to become a developer for All Brawl.
        </p>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Developer Application Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form 
              action="https://formsubmit.co/your-form-endpoint" 
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
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="githubUsername">GitHub Username</Label>
                <Input 
                  type="text" 
                  id="githubUsername" 
                  name="githubUsername" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactEmail">Contact Email</Label>
                <Input 
                  type="email" 
                  id="contactEmail" 
                  name="contactEmail" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gitExperience">How experienced are you with Git and GitHub?</Label>
                <Select id="gitExperience" name="gitExperience" required>
                  <SelectItem value="very">Very</SelectItem>
                  <SelectItem value="a-lot">A lot</SelectItem>
                  <SelectItem value="a-bit">A bit</SelectItem>
                  <SelectItem value="none">Not at all</SelectItem>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pandasExperience">How experienced are you with Pandas (CSV manipulation library for Python)?</Label>
                <Select id="pandasExperience" name="pandasExperience" required>
                  <SelectItem value="very">Very</SelectItem>
                  <SelectItem value="a-lot">A lot</SelectItem>
                  <SelectItem value="a-bit">A bit</SelectItem>
                  <SelectItem value="none">Not at all</SelectItem>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pythonExperience">How experienced are you with Python?</Label>
                <Select id="pythonExperience" name="pythonExperience" required>
                  <SelectItem value="very">Very</SelectItem>
                  <SelectItem value="a-lot">A lot</SelectItem>
                  <SelectItem value="a-bit">A bit</SelectItem>
                  <SelectItem value="none">Not at all</SelectItem>
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
