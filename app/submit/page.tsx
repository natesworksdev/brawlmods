'use client'

import { MailIcon, MessageCircleIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button" // Import Button from your UI library

export default function ModSubmissionForm() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Submit mod</h1>
        <p className="text-center text-muted-foreground mb-8">
          Submit a mod to be published on our website.
        </p>
        <div className="max-w-4xl mx-auto">
          <form 
            action="https://formsubmit.co/6650b3d735e3c9c77c9734ce9168ea10" 
            method="POST" 
            className="bg-white p-6 rounded-lg"
          >
            <div className="mb-4">
              <label htmlFor="modName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mod Name:</label>
              <input 
                type="text" 
                id="modName" 
                name="modName" 
                className="mt-1 p-2 block w-full rounded-md dark:text-gray-300" 
                required 
              />
            </div>

            <div className="mb-4">
              <label htmlFor="modLink" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mod Download or Telegram Link:</label>
              <input 
                type="url" 
                id="modLink" 
                name="modLink" 
                className="mt-1 p-2 block w-full border rounded-md dark:text-gray-300" 
                required 
              />
            </div>

            <div className="mb-4">
              <label htmlFor="modDescription" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Short Mod Description:</label>
              <textarea 
                id="modDescription" 
                name="modDescription" 
                rows={4} 
                className="mt-1 p-2 block w-full border rounded-md dark:text-gray-300" 
                required 
              />
            </div>

            <div className="flex gap-2 w-full">
              <Button variant="default" asChild className="flex-1">
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Submit Mod
                </button>
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
              }
