'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Head from 'next/head'

export default function GiveawayForm() {
  return (
    <>
      <Head>
        <title>Hyper Brawl Giveaway</title>
        <meta name="description" content="Participate in the Hyper Brawl 5 Boxes Giveaway." />
      </Head>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-4">Hyper Brawl Giveaway</h1>
          <p className="text-center text-muted-foreground mb-8">
            Participate in the Hyper Brawl 5 Boxes Giveaway.
          </p>
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Hyper Brawl Giveaway</CardTitle>
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
                  <Input 
                    id="tgname" 
                    name="tgname" 
                    required 
                  />
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
