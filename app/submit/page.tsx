'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GoogleFormPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Submit mod</h1>
        <p className="text-center text-muted-foreground mb-8">
          Submit a mod to be published on our website.
        </p>
        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Google Form</CardTitle>
            </CardHeader>
            <CardContent>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSfm_ck5gkRyiXl9labtuM7l1c1U7wUExrzelMa4PWXOVI8RPg/viewform?embedded=true" 
                width="100%"
                height="750"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg shadow-md"
              >
                Loading…
              </iframe>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="w-full py-6 bg-muted mt-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            Thank you!
          </p>
        </div>
      </footer>
    </div>
  )
}
