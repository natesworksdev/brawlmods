import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DownloadIcon, MagnetIcon, MailIcon, MessageCircleIcon } from "lucide-react"
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
    tags: ["Private server", "Offline"]
  },
  {
    name: "BSL v53 Client",
    description: "Selfhost your own private server.",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1wE1V2cN1msRYbTSKT3tZfVv9r-TqyPAK",
    torrentLink:"torrents",
    tags: ["Private server", "Selfhosted", "Offline"]
  },
  {
    name: "BSL v53 Server",
    description: "Brawl stars V53 server made from scratch!",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1Uwjb8nJgT73KFns71R2-4YLnyCyWD8iO",
    torrentLink:"torrents",
    tags: ["Private server", "Selfhosted", "Offline"]
  },
  {
    name: "BSL v55 Client",
    description: "Selfhost your own V55 private server.",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1jtEw9lOfs1YEBh9JipP7nR0h1JY6XAM_",
    torrentLink:"torrents",
    tags: ["Private server", "Selfhosted", "Offline"]
  },
  {
    name: "BSL v55 Server",
    description: "Brawl stars V55 server made from scratch!",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1KGPzvCRW_Hdq6JP9KzqDa6WsM1bk0ig5",
    torrentLink:"torrents",
    tags: ["Private server", "Selfhosted", "Offline"]
  },
  {
    name: "BSDS v41 Client",
    description: "Selfhost your own V41 private server.",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1zUZw9Sq0Z2uRIDKi35cKmRIqqoA6S8Z8",
    torrentLink:"torrents",
    tags: ["Private server", "Selfhosted", "Offline"]
  },
  {
    name: "BSDS v41 Server",
    description: "Brawl stars V41 server made from scratch!",
    mirrorLink: "https://drive.google.com/file/d/15bD-aZFFVfGmJ1zpOd3O61IrJ-I_pCmY/view?usp=drivesdk",
    torrentLink:"torrents",
    tags: ["Private server", "Selfhosted", "Offline"]
  },
  {
    name: "Infinity Reverse Brawl",
    description: "All characters unlocked and third star powers added for some brawlers and new skins.",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1dP-EnCmu-yAGSCb27bcTRRXisxFjJxXX",
    torrentLink:"torrents",
    tags: ["Private server", "Offline"]
  },
  {
    name: "Buster's Brawl",
    description: "All brawlers unlocked and maxed out. Attempts to recreate brawlers from newer versions of the game.",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1UWmaBt635O0TaS6H4oNB-wnVFefBimAs",
    torrentLink:"torrents",
    tags: ["Private server", "Offline"]
  },
  {
    name: "TomatoBrawlOG",
    description: "Adds 4 new brawlers - Melee bot, mouse bot, ranged bot and boss bot! Based on Beta Brawl (V11).",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1as-qDZ7pcCJryay58eE67DvvP3sWGP04",
    torrentLink:"torrents",
    tags: ["Private server", "Offline"]
  },
  {
    name: "Mechaoffline",
    description: "An offline version of V19.",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1Ilz1Ob71x9EOi7k9Yub8NqllNQ5_6P0E",
    torrentLink:"torrents",
    tags: ["Private server", "Offline"]
  },
  {
    name: "Multi Brawl",
    description: "A modified version of V47 that replaces ALL the brawlers will new ones.",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1LGlIygczbCzEhx-M6JCP6BCtE_Oq8h_1",
    torrentLink:"torrents",
    tags: ["Private server", "Offline"]
  },
  {
    name: "Brawl Mod Beta",
    description: "Offline version of V11",
    mirrorLink: "https://drive.google.com/uc?export=download&id=1DH6SOJbjTUAuBAENPhY8Xhuu1tvCqspO",
    torrentLink:"torrents",
    tags: ["Private server", "Offline"]
  }

]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Brawl Stars Mods Collection</h1>
        <p className="text-center text-muted-foreground mb-8">
        Check out these Brawl Stars mods, which include private servers with new star powers, skins, and brawlers. There are also modded versions of the official game that let you see enemy ammo, switch servers, and access other new features!        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mods.map((mod, index) => (
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
              <CardFooter className="flex justify-between mt-auto">
                <Button variant="outline" asChild>
                  <Link href={mod.mirrorLink}>
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    Mirror
                  </Link>
                </Button>
{/*
                <Button variant="outline" asChild>
                  <Link href={mod.torrentLink}>
                    <MagnetIcon className="mr-2 h-4 w-4" />
                    Torrent
                  </Link>
                </Button>
*/}
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
