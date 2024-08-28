'use client'

import { useState, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DownloadIcon, MailIcon, MessageCircleIcon, SearchIcon } from "lucide-react"
import Link from "next/link"

const mods = [
  {
    name: "Nulls Brawl",
    description: "Null's Brawl is a Brawl Stars private server with unlimited gems, gold and boxes. Play with friends on any brawler you want.",
    mirrorLink: "https://dnull.xyz/latest_bs",
    torrentLink:"torrents",
    tags: ["Private server"]
  },
  {
    name: "Magic Brawl",
    description: "Magic Brawl is the rebirth of Brawl Stars and its best times! All content is available on the server: online battles, all the characters and everything. By downloading this server, you can get great pleasure from the updates, because we update the server every month!",
    mirrorLink: "https://files.magic-servers.xyz/mb.apk",
    torrentLink:"torrents",
    tags: ["Private server"]
  },
  {
    name: "Retro Brawl",
    description: "Retro Brawl is the old version of Brawl Stars (2018). Online battles, 21 characters and star powers for them, clans, etc. are available on the server. Feel better times, from the old menu to the atmosphere!",
    mirrorLink: "https://files.magic-servers.xyz/retrobrawl.apk",
    torrentLink:"torrents",
    tags: ["Private server"]
  },
  {
    name: "BSD Brawl",
    description: "Allows changing server region, viewing enemies ammo and more!",
    mirrorLink: "https://drive.google.com/uc?export=download&id=17LsS_wizr9CZ2Yo0oqWFU5PWpMDltjib",
    torrentLink:"torrents",
    tags: ["Official server"]
  },
  {
    name: "Gene Brawl",
    description: "Adds a debug menu allowing you to visually unlock all brawlers and more!",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1IStoE_bUPRq1rkZ9OWE0SF_-oXWYu_8y",
    torrentLink:"torrents",
    tags: ["Official server"]
  },
  {
    name: "Surge Offline",
    description: "An offline version of brawl stars! Allows you to open boxes to unlock brawlers, gain trophies and play any mode. It also adds new skins and 3rd star powers for some brawlers",
    mirrorLink: "https://example.com/mirror/hyper-speed-mod",
    torrentLink:"torrents",
    tags: ["Offline"]
  },
  {
    name: "BSL v53 Client",
    description: "Selfhost your own private server.",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1wE1V2cN1msRYbTSKT3tZfVv9r-TqyPAK",
    torrentLink:"torrents",
    tags: ["Selfhosted"]
  },
  {
    name: "BSL v53 Server",
    description: "Brawl stars V53 server made from scratch!",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1Uwjb8nJgT73KFns71R2-4YLnyCyWD8iO",
    torrentLink:"torrents",
    tags: ["Selfhosted"]
  },
  {
    name: "BSL v55 Client",
    description: "Selfhost your own V55 private server.",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1jtEw9lOfs1YEBh9JipP7nR0h1JY6XAM_",
    torrentLink:"torrents",
    tags: ["Selfhosted"]
  },
  {
    name: "BSL v55 Server",
    description: "Brawl stars V55 server made from scratch!",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1KGPzvCRW_Hdq6JP9KzqDa6WsM1bk0ig5",
    torrentLink:"torrents",
    tags: ["Selfhosted"]
  },
  {
    name: "BSDS v41 Client",
    description: "Selfhost your own V41 private server.",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1zUZw9Sq0Z2uRIDKi35cKmRIqqoA6S8Z8",
    torrentLink:"torrents",
    tags: ["Selfhosted"]
  },
  {
    name: "BSDS v41 Server",
    description: "Brawl stars V41 server made from scratch!",
    mirrorLink: "https://drive.google.com/file/d/15bD-aZFFVfGmJ1zpOd3O61IrJ-I_pCmY/view?usp=drivesdk",
    torrentLink:"torrents",
    tags: ["Selfhosted"]
  },
  {
    name: "Infinity Reverse Brawl",
    description: "All characters unlocked and third star powers added for some brawlers and new skins.",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1dP-EnCmu-yAGSCb27bcTRRXisxFjJxXX",
    torrentLink:"torrents",
    tags: ["Offline"]
  },
  {
    name: "Buster's Brawl",
    description: "All brawlers unlocked and maxed out. Attempts to recreate brawlers from newer versions of the game.",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1UWmaBt635O0TaS6H4oNB-wnVFefBimAs",
    torrentLink:"torrents",
    tags: ["Offline"]
  },
  {
    name: "TomatoBrawlOG",
    description: "Adds 4 new brawlers - Melee bot, mouse bot, ranged bot and boss bot! Based on Beta Brawl (V11).",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1as-qDZ7pcCJryay58eE67DvvP3sWGP04",
    torrentLink:"torrents",
    tags: ["Offline"]
  },
  {
    name: "Mechaoffline",
    description: "An offline version of V19.",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1Ilz1Ob71x9EOi7k9Yub8NqllNQ5_6P0E",
    torrentLink:"torrents",
    tags: ["Offline"]
  },
  {
    name: "Multi Brawl",
    description: "A modified version of V47 that replaces ALL the brawlers will new ones.",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1LGlIygczbCzEhx-M6JCP6BCtE_Oq8h_1",
    torrentLink:"torrents",
    tags: ["Offline"]
  },
  {
    name: "Brawl Mod Beta",
    description: "Offline version of V11",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1DH6SOJbjTUAuBAENPhY8Xhuu1tvCqspO",
    torrentLink:"torrents",
    tags: ["Offline"]
  },
  {
    name: "GioBrawl",
    description: "Brawl Stars V29 private server.",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1m0uJLjT1uyLGZECvXvuwyeG6XevgXRVq",
    torrentLink:"torrents",
    tags: ["Private server"]
  }

]

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    mods.forEach(mod => mod.tags.forEach(tag => tagSet.add(tag)))
    return Array.from(tagSet)
  }, [])

  const filteredMods = useMemo(() => {
    return mods.filter(mod =>
      (mod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       mod.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedTags.length === 0 || selectedTags.every(tag => mod.tags.includes(tag)))
    )
  }, [searchTerm, selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Brawl Stars Mods Collection</h1>
        <p className="text-center text-muted-foreground mb-8">
          Check out these Brawl Stars mods, which include private servers with new star powers, skins, and brawlers. There are also modded versions of the official game that let you see enemy ammo, switch servers, and access other new features!
        </p>
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative mb-4">
            <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search mods..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {allTags.map(tag => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMods.map((mod, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{mod.name}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {mod.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{mod.description}</p>
              </CardContent>
              <CardFooter className="flex justify-center mt-auto">
                <Button variant="outline" asChild>
                  <Link href={mod.mirrorLink}>
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    Download
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <footer className="w-full py-6 bg-muted mt-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Brawl Stars Mods. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="mailto:contact@natesworks.com" className="text-sm hover:underline underline-offset-4 flex items-center">
              <MailIcon className="mr-2 h-4 w-4" />
              Contact
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4 flex items-center">
              <MessageCircleIcon className="mr-2 h-4 w-4" />
              Discord
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
