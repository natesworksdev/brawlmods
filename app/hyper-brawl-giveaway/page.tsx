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
            <CardTitle>Hyper Brawl 5 Boxes Giveaway</CardTitle>
          </CardHeader>
          <CardContent>
            <form 
              action="https://formsubmit.co/6650b3d735e3c9c77c9734ce9168ea10" 
              method="POST" 
              className="space-y-4"
            >


              <div className="space-y-2">
                <Label htmlFor="id">Hyper Brawl account ID</Label>
                <Input 
                  id="id" 
                  name="id" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tgname">Telegram Username</Label>
                <Textarea 
                  id="tgname" 
                  name="tgname" 
                  rows={2} 
                  required 
                />
              </div>
              </div>

              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
    </>
  )
}
