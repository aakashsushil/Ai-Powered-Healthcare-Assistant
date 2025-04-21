"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Calendar, Pill, Search, AlertCircle, Clock } from "lucide-react"
import PatientSidebar from "@/components/patient-sidebar"
import UpcomingAppointments from "@/components/upcoming-appointments"
import MedicationReminders from "@/components/medication-reminders"

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <PatientSidebar activeItem="dashboard" />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
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
                <p className="text-sm font-medium">Sumit Kumar</p>
                <p className="text-xs text-gray-500">Patient</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="symptoms">Symptom Detector</TabsTrigger>
              <TabsTrigger value="medications">Medications</TabsTrigger>
              <TabsTrigger value="remedies">Home Remedies</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Health Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-teal-600" />
                      Upcoming Appointments
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <UpcomingAppointments
                      appointments={[
                        {
                          id: 1,
                          doctor: "Dr. Sarah Johnson",
                          specialty: "Cardiologist",
                          date: "May 15, 2025",
                          time: "10:30 AM",
                        },
                        {
                          id: 2,
                          doctor: "Dr. Michael Chen",
                          specialty: "General Physician",
                          date: "May 22, 2025",
                          time: "2:00 PM",
                        },
                      ]}
                    />
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      Schedule New Appointment
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Pill className="h-5 w-5 mr-2 text-teal-600" />
                      Medication Reminders
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <MedicationReminders
                      medications={[
                        {
                          id: 1,
                          name: "Lisinopril",
                          dosage: "10mg",
                          frequency: "Once daily",
                          nextDose: "Today, 8:00 PM",
                        },
                        {
                          id: 2,
                          name: "Metformin",
                          dosage: "500mg",
                          frequency: "Twice daily",
                          nextDose: "Tomorrow, 8:00 AM",
                        },
                      ]}
                    />
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      Manage Medications
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <AlertCircle className="h-5 w-5 mr-2 text-teal-600" />
                      Recent Health Alerts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                        <div className="bg-yellow-100 p-2 rounded-full">
                          <Clock className="h-4 w-4 text-yellow-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Medication Reminder</p>
                          <p className="text-xs text-gray-500">You missed your evening dose of Lisinopril yesterday</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-teal-100 p-2 rounded-full">
                          <Calendar className="h-4 w-4 text-teal-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Upcoming Appointment</p>
                          <p className="text-xs text-gray-500">Reminder: Dr. Johnson tomorrow at 10:30 AM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Health Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle>Health Metrics</CardTitle>
                  <CardDescription>Track your key health indicators over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-center justify-center border border-dashed border-gray-300 rounded-md">
                    <p className="text-gray-500">Health metrics visualization would appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Symptom Detector Tab */}
            <TabsContent value="symptoms">
              <Card>
                <CardHeader>
                  <CardTitle>AI Symptom Detector</CardTitle>
                  <CardDescription>
                    Describe your symptoms to get AI-powered insights. This is not a replacement for professional
                    medical advice.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-medium mb-4">Describe Your Symptoms</h3>
                      <textarea
                        className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Describe your symptoms in detail. For example: I've had a headache for 3 days, along with a mild fever and sore throat..."
                      ></textarea>
                      <Button className="mt-4 bg-teal-600 hover:bg-teal-700">Analyze Symptoms</Button>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-medium mb-4">Symptom Analysis Results</h3>
                      <p className="text-gray-500 text-center py-8">
                        Your symptom analysis results will appear here after analysis
                      </p>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="text-amber-800 text-sm">
                        <strong>Important:</strong> This symptom analyzer provides preliminary insights only and is not
                        a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of
                        your physician or other qualified health provider.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Medications Tab */}
            <TabsContent value="medications">
              <Card>
                <CardHeader>
                  <CardTitle>Medication Management</CardTitle>
                  <CardDescription>Track your medications and set up reminders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-medium mb-4">Current Medications</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg">
                          <div>
                            <h4 className="font-medium">Lisinopril</h4>
                            <p className="text-sm text-gray-500">10mg - Once daily</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">
                              Remove
                            </Button>
                          </div>
                        </div>

                        <div className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg">
                          <div>
                            <h4 className="font-medium">Metformin</h4>
                            <p className="text-sm text-gray-500">500mg - Twice daily</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Button className="mt-4">Add New Medication</Button>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-medium mb-4">Reminder Settings</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Notification Preferences</h4>
                            <p className="text-sm text-gray-500">Choose how you want to receive medication reminders</p>
                          </div>
                          <Button variant="outline">Configure</Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Reminder Schedule</h4>
                            <p className="text-sm text-gray-500">Set custom times for your medication reminders</p>
                          </div>
                          <Button variant="outline">Configure</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Home Remedies Tab */}
            <TabsContent value="remedies">
              <Card>
                <CardHeader>
                  <CardTitle>Home Remedies Database</CardTitle>
                  <CardDescription>Search for verified home remedies for common ailments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search for a condition or symptom..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <h3 className="font-medium text-lg mb-2">Common Cold</h3>
                        <p className="text-sm text-gray-600 mb-3">Natural remedies to relieve cold symptoms</p>
                        <Button variant="outline" size="sm">
                          View Remedies
                        </Button>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <h3 className="font-medium text-lg mb-2">Headache</h3>
                        <p className="text-sm text-gray-600 mb-3">Natural ways to alleviate headache pain</p>
                        <Button variant="outline" size="sm">
                          View Remedies
                        </Button>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <h3 className="font-medium text-lg mb-2">Digestive Issues</h3>
                        <p className="text-sm text-gray-600 mb-3">Home remedies for common digestive problems</p>
                        <Button variant="outline" size="sm">
                          View Remedies
                        </Button>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <h3 className="font-medium text-lg mb-2">Skin Conditions</h3>
                        <p className="text-sm text-gray-600 mb-3">Natural treatments for common skin issues</p>
                        <Button variant="outline" size="sm">
                          View Remedies
                        </Button>
                      </div>
                    </div>

                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                      <h3 className="font-medium text-teal-800 mb-2">
                        Featured Remedy: Honey & Ginger Tea for Sore Throat
                      </h3>
                      <p className="text-sm text-teal-700">
                        Mix 1 tablespoon of honey with freshly grated ginger in hot water. Drink 2-3 times daily to
                        soothe a sore throat and reduce inflammation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
