'use client'

import { useState, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DownloadIcon, MailIcon, MessageCircleIcon, Search as SearchIcon } from "lucide-react"
import Link from "next/link"

interface ModVersion {
  version: string;
  mirrorLink: string;
  secondaryMirror?: string;
}

interface Mod {
  name: string;
  description: string;
  tags: string[];
  versions: ModVersion[];
}

const mods: Mod[] = [
  {
    name: "Nulls Brawl",
    description: "Null's Brawl is a Brawl Stars private server with unlimited gems, gold and boxes. Play with friends on any brawler you want.",
    tags: ["Private server", "Supports iOS"],
    versions: [
      {
        version: "Latest",
        mirrorLink: "https://dnull.xyz/latest_bs"
      },
      {
        version: "Latest iOS",
        mirrorLink: "https://dnull.xyz/latest_bs_i",
        secondaryMirror: "https://drive.google.com/uc?export=download&id=1qDaEwLtDQLpsIRh8ejg7F5_ysMyfPTA9"
      }
    ]
  },
  {
    name: "Magic Brawl",
    description: "Magic Brawl is the rebirth of Brawl Stars and its best times! All content is available on the server: online battles, all the characters and everything. By downloading this server, you can get great pleasure from the updates, because we update the server every month!",
    tags: ["Private server"],
    versions: [
      {
        version: "Latest",
        mirrorLink: "https://files.magic-servers.xyz/mb.apk"
      }
    ]
  },
  {
    name: "Retro Brawl",
    description: "Retro Brawl is the old version of Brawl Stars (2018). Online battles, 21 characters and star powers for them, clans, etc. are available on the server. Feel better times, from the old menu to the atmosphere!",
    tags: ["Private server"],
    versions: [
      {
        version: "Latest",
        mirrorLink: "https://files.magic-servers.xyz/retrobrawl.apk"
      }
    ]
  },
  {
    name: "BSD Brawl",
    description: "Allows changing server region, viewing enemies ammo and more!",
    tags: ["Official server"],
    versions: [
      {
        version: "V56",
        mirrorLink: "https://drive.google.com/uc?export=download&id=17LsS_wizr9CZ2Yo0oqWFU5PWpMDltjib"
      }
    ]
  },
  {
    name: "Gene Brawl",
    description: "Adds a debug menu allowing you to visually unlock all brawlers and more!",
    tags: ["Official server"],
    versions: [
      {
        version: "V56",
        mirrorLink: "https://drive.google.com/uc?export=download&id=1IStoE_bUPRq1rkZ9OWE0SF_-oXWYu_8y"
      }
    ]
  },
  {
    name: "Supercell Jailbreak",
    description: "Official ipas, but without the annoying crash of the jailbreak detection.",
    tags: ["Official server", "Supports iOS"],
    versions: [
      {
        version: "V57",
        mirrorLink: "https://drive.google.com/file/d/1eQUsIbt2alGLtzxmy0Zh48QpRNz9qjZe/view?usp=sharing",
        secondaryMirror: "https://www.mediafire.com/file/dtev6981ol4j7du/Brawl_Stars57.325NoJb.ipa/file"
      }
    ]
  },
  {
    name: "Brawl Stars",
    description: "Unmodified official game. Must be installed using SAI (Split Apk Installer)!",
    tags: ["Official server"],
    versions: [
      {
        version: "V57",
        mirrorLink: "https://drive.google.com/file/d/1pAX1XcRuR7dgCJSxwPHFREp0cHHJ-np3/view?usp=sharing"
      }
    ]
  },
  {
    name: "Surge Offline",
    description: "An offline version of brawl stars! Allows you to open boxes to unlock brawlers, gain trophies and play any mode. It also adds new skins and 3rd star powers for some brawlers",
    tags: ["Offline"],
    versions: [
      {
        version: "V28",
        mirrorLink: "https://drive.google.com/uc?export=download&id=1fxULYszSieEy3JkTW10E-ArK5LEmMBEK"
      }
    ]
  },
  {
    name: "BSL Client",
    description: "Play on your selfhosted server.",
    tags: ["Selfhosted"],
    versions: [
      {
        version: "V53",
        mirrorLink: "https://drive.google.com/uc?export=download&id=1wE1V2cN1msRYbTSKT3tZfVv9r-TqyPAK",
        secondaryMirror: "https://www.mediafire.com/file/n7gptweb86ncf5a/com.bsl.v53-rev1.apk/file"
      },
      {
        version: "V55",
        mirrorLink: "https://drive.google.com/uc?export=download&id=1jtEw9lOfs1YEBh9JipP7nR0h1JY6XAM_",
        secondaryMirror: "https://www.mediafire.com/file/v7zgn71r0gw1nqi/com.bsl.v55.apk/file"
      }
    ]
  },
  {
    name: "BSL Server",
    description: "Brawl stars server made from scratch!",
    tags: ["Selfhosted"],
    versions: [
      {
        version: "V53",
        mirrorLink: "https://drive.google.com/uc?export=download&id=1Uwjb8nJgT73KFns71R2-4YLnyCyWD8iO",
        secondaryMirror: "https://github.com/LkPrtctrd/BSL-V53/archive/refs/heads/master.zip"
      },
      {
        version: "V55",
        mirrorLink: "https://drive.google.com/uc?export=download&id=1KGPzvCRW_Hdq6JP9KzqDa6WsM1bk0ig5",
        secondaryMirror: "https://github.com/LkPrtctrd/BSL-V55/archive/refs/heads/master.zip"
      }
    ]
  },
  {
    name: "BSDS Client",
    description: "Selfhost your own V41 private server.",
    tags: ["Selfhosted"],
    versions: [
      {
        version: "V41",
        mirrorLink: "https://drive.google.com/uc?export=download&id=1zUZw9Sq0Z2uRIDKi35cKmRIqqoA6S8Z8"
      }
    ]
  },
  {
    name: "BSDS Server",
    description: "Brawl stars V41 server made from scratch!",
    tags: ["Selfhosted"],
    versions: [
      {
        version: "V41",
        mirrorLink: "https://drive.google.com/file/d/15bD-aZFFVfGmJ1zpOd3O61IrJ-I_pCmY/view?usp=drivesdk"
      }
    ]
  },
  {
    name: "Infinity Reverse Brawl",
    description: "All characters unlocked and third star powers added for some brawlers and new skins.",
    tags: ["Offline"],
    versions: [
      {
        version: "V15",
        mirrorLink: "https://drive.google.com/uc?export=download&id=1dP-EnCmu-yAGSCb27bcTRRXisxFjJxXX"
      }
    ]
  },
  {
    name: "Buster's Brawl",
    description: "All brawlers unlocked and maxed out. Attempts to recreate brawlers from newer versions of the game.",
    tags: ["Offline"],
    versions: [
      {
        version: "V12",
        mirrorLink: "https://drive.google.com/uc?export=download&id=1UWmaBt635O0TaS6H4oNB-wnVFefBimAs"
      }
    ]
  },
  {
    name: "TomatoBrawlOG",
    description: "Adds 4 new brawlers - Melee bot, mouse bot, ranged bot and boss bot! Based on Beta Brawl.",
    tags: ["Offline"],
    versions: [
      {
        version: "V11",
        mirrorLink: "https://drive.google.com/uc?export=download&id=1as-qDZ7pcCJryay58eE67DvvP3sWGP04"
      }
    ]
  },
  {
    name: "Mechaoffline",
    description: "An offline version of V19.",
    tags: ["Offline"],
    versions: [
      {
        version: "V19",
        mirrorLink: "https://drive.google.com/uc?export=download&id=1Ilz1Ob71x9EOi7k9Yub8NqllNQ5_6P0E"
      }
    ]
  },
  {
    name: "Multi Brawl",
    description: "A modified version of V47 that replaces ALL the brawlers will new ones.",
    tags: ["Offline"],
    versions: [
      {
        version: "V47",
        mirrorLink: "https://drive.google.com/uc?export=download&id=1LGlIygczbCzEhx-M6JCP6BCtE_Oq8h_1"
      }
    ]
  },
  {
    name: "Brawl Mod Beta",
    description: "Offline version of V11",
    tags: ["Offline"],
    versions: [
      {
        version: "V11",
        mirrorLink: "https://drive.google.com/uc?export=download&id=1DH6SOJbjTUAuBAENPhY8Xhuu1tvCqspO"
      }
    ]
  },
  {
    name: "Rowsor Brawl",
    description: "Brawl Stars V28 private server.",
    tags: ["Private server"],
    versions: [
      {
        version: "V28",
        mirrorLink: "https://drive.google.com/uc?export=download&id=1s_hO8iL991U3sdyKthqkx7goOtVwxTFJ"
      }
    ]
  },
  {
    name: "GioBrawl",
    description: "Offline version of V29 with new skins and... interesting brawler names.",
    tags: ["Offline"],
    versions: [
      {
        version: "V29",
        mirrorLink: "https://drive.google.com/uc?export=download&id=1DH6SOJbjTUAuBAENPhY8Xhuu1tvCqspO"
      }
    ]
  }
];


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
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
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
          <div className="flex flex-wrap gap-2 justify-center mb-4">
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
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{mod.name}</CardTitle>
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
              <CardFooter className="flex flex-col items-center mt-auto">
                <Select defaultValue={mod.versions[mod.versions.length - 1].version}>
                  <SelectTrigger className="w-full mb-2">
                    <SelectValue placeholder="Select version" />
                  </SelectTrigger>
                  <SelectContent>
                    {mod.versions.map((version, vIndex) => (
                      <SelectItem key={vIndex} value={version.version}>
                        {version.version}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="flex gap-2 w-full">
                  <Button variant="default" asChild className="flex-1">
                    <Link href={mod.versions[mod.versions.length - 1].mirrorLink}>
                      <DownloadIcon className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                  {mod.versions[mod.versions.length - 1].secondaryMirror && (
                    <Button variant="outline" asChild className="flex-1">
                      <Link href={mod.versions[mod.versions.length - 1].secondaryMirror!}>
                        <DownloadIcon className="mr-2 h-4 w-4" />
                        Mirror 2
                      </Link>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <footer className="w-full py-6 bg-muted mt-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            This content is not affiliated nor endorsed by Supercell, use at your own risk
          </p>
          <nav className="flex gap-6">
            <Link href="mailto:contact@natesworks.com" className="text-sm hover:underline underline-offset-4 flex items-center">
              <MailIcon className="mr-2 h-4 w-4" />
              Contact
            </Link>
            <Link href="https://discord.com/users/1272251195133526046" className="text-sm hover:underline underline-offset-4 flex items-center">
              <MessageCircleIcon className="mr-2 h-4 w-4" />
              Discord
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
