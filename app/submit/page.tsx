'use client'

import { MailIcon, MessageCircleIcon } from "lucide-react"
import Link from "next/link"

export default function ModSubmissionForm() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Submit mod</h1>
        <p className="text-center text-muted-foreground mb-8">
          Submit a mod to be published on our website.
        </p>
        <div className="max-w-4xl mx-auto">
          <form 
            action="https://formsubmit.co/6650b3d735e3c9c77c9734ce9168ea10" 
            method="POST" 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label htmlFor="modName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mod Name:</label>
              <input 
                type="text" 
                id="modName" 
                name="modName" 
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300" 
                required 
              />
            </div>

            <div className="mb-4">
              <label htmlFor="modLink" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mod Download or Telegram Link:</label>
              <input 
                type="url" 
                id="modLink" 
                name="modLink" 
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300" 
                required 
              />
            </div>

            <div className="mb-4">
              <label htmlFor="modDescription" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Short Mod Description:</label>
              <textarea 
                id="modDescription" 
                name="modDescription" 
                rows={4} 
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300" 
                required 
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Submit Mod
            </button>
          </form>
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
