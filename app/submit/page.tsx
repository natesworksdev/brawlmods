'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GoogleFormPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Feedback Form</h1>
        <p className="text-center text-muted-foreground mb-8">
          We value your feedback! Please fill out the form below.
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
                frameborder="0" 
                marginheight="0" 
                marginwidth="0"
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
            Thank you for taking the time to provide feedback.
          </p>
        </div>
      </footer>
    </div>
  )
}