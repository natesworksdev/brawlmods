'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DownloadIcon, Search as SearchIcon } from "lucide-react"
import { mods } from './mods'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedVersion, setSelectedVersion] = useState<{ [key: string]: string }>({})

  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    mods.forEach(mod => mod.tags.forEach(tag => tagSet.add(tag)))
    return Array.from(tagSet)
  }, [])

  const filteredMods = useMemo(() => {
    return mods.filter(mod =>
      (mod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mod.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedTags.length === 0 || selectedTags.every(tag => mod.tags.includes(tag)))
    )
  }, [searchTerm, selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Brawl Stars Mods</h1>
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
        {filteredMods.map((mod, index) => {
          const selectedModVersion = selectedVersion[mod.id] || mod.versions[0].version;
          const currentVersion = mod.versions.find(v => v.version === selectedModVersion);
          
          return (
            <Link href={`/mod?id=${mod.id}`} key={index} className="group">
              <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{mod.name}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {mod.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{mod.shortDescription}</p>
                </CardContent>
                <CardFooter className="flex flex-col items-center mt-auto">
                  <Select 
                    value={selectedModVersion}
                    onValueChange={(version) => {
                      setSelectedVersion(prev => ({ ...prev, [mod.id]: version }))
                    }}
                  >
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
                    <Button 
                      variant="default" 
                      asChild 
                      className="flex-1"
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(currentVersion?.downloadLink, '_blank')
                      }}
                    >
                      <span>
                        <DownloadIcon className="mr-2 h-4 w-4" />
                        Download
                      </span>
                    </Button>
                    {currentVersion?.altDownload && (
                      <Button 
                        variant="outline" 
                        asChild 
                        className="flex-1"
                        onClick={(e) => {
                          e.preventDefault()
                          window.open(currentVersion.altDownload, '_blank')
                        }}
                      >
                        <span>
                          <DownloadIcon className="mr-2 h-4 w-4" />
                          Alt Download
                        </span>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  )
}
