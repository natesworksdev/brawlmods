'use client'

import { MailIcon, MessageCircleIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Head from 'next/head';

export default function ModSubmissionForm() {
  return (
    <>
      <Head>
        <title>Brawl Stars Mods - Submit</title>
        <meta name="description" content="Submit a mod to be published on our website." />
      </Head>
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
                <Label htmlFor="modDescription">Short Description</Label>
                <Textarea 
                  id="shortModDescription" 
                  name="shortModDescription" 
                  rows={2} 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="modDescription">Detailed Description</Label>
                <Textarea 
                  id="modDescription" 
                  name="modDescription" 
                  rows={6} 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="modDescription">Tags</Label>
                <Textarea 
                  id="tags" 
                  name="tags" 
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
    </div>
    </>
  )
}
