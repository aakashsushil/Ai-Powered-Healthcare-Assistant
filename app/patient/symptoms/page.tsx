"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, AlertCircle, Loader2 } from "lucide-react"
import PatientSidebar from "@/components/patient-sidebar"

export default function SymptomDetector() {
  const [symptoms, setSymptoms] = useState("")
  const [analysis, setAnalysis] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const analyzeSymptoms = async () => {
    if (!symptoms.trim()) {
      setError("Please describe your symptoms first")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/symptom-analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ symptoms }),
      })

      if (!response.ok) {
        throw new Error("Failed to analyze symptoms")
      }

      const data = await response.json()
      setAnalysis(data.analysis)
    } catch (err) {
      setError("An error occurred while analyzing your symptoms. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <PatientSidebar activeItem="symptoms" />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Symptom Detector</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-gray-500">Patient</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI Symptom Detector</CardTitle>
                <CardDescription>
                  Describe your symptoms in detail to get AI-powered insights. This is not a replacement for
                  professional medical advice.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-medium mb-4">Describe Your Symptoms</h3>
                    <Textarea
                      className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Describe your symptoms in detail. For example: I've had a headache for 3 days, along with a mild fever and sore throat..."
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                    />
                    {error && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" /> {error}
                      </p>
                    )}
                    <Button
                      className="mt-4 bg-teal-600 hover:bg-teal-700"
                      onClick={analyzeSymptoms}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
                        </>
                      ) : (
                        "Analyze Symptoms"
                      )}
                    </Button>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-medium mb-4">Symptom Analysis Results</h3>
                    {analysis ? (
                      <div className="prose max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: analysis.replace(/\n/g, "<br />") }} />
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-8">
                        Your symptom analysis results will appear here after analysis
                      </p>
                    )}
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-amber-800 text-sm">
                      <strong>Important:</strong> This symptom analyzer provides preliminary insights only and is not a
                      substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of
                      your physician or other qualified health provider.
                    </p>
                  </div>

                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                    <h3 className="font-medium text-teal-800 mb-2">Common Symptoms Guide</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      <div>
                        <h4 className="font-medium text-teal-700 text-sm">Respiratory</h4>
                        <ul className="text-sm text-teal-600 list-disc list-inside">
                          <li>Shortness of breath</li>
                          <li>Coughing</li>
                          <li>Wheezing</li>
                          <li>Chest tightness</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-teal-700 text-sm">Digestive</h4>
                        <ul className="text-sm text-teal-600 list-disc list-inside">
                          <li>Nausea</li>
                          <li>Vomiting</li>
                          <li>Diarrhea</li>
                          <li>Abdominal pain</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Symptom Checks</CardTitle>
                <CardDescription>Your previous symptom analysis history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <div className="bg-teal-100 p-2 rounded-full">
                      <AlertCircle className="h-4 w-4 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-medium">Headache and Fever</p>
                      <p className="text-sm text-gray-500">April 15, 2025</p>
                      <p className="text-sm text-gray-600 mt-1">Possible causes: Common cold, Influenza, Sinusitis</p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto">
                      View Details
                    </Button>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <div className="bg-teal-100 p-2 rounded-full">
                      <AlertCircle className="h-4 w-4 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-medium">Stomach Pain</p>
                      <p className="text-sm text-gray-500">April 2, 2025</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Possible causes: Indigestion, Gastritis, Food poisoning
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
