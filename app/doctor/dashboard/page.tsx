"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Calendar, Users, Search, User, ClipboardList, Clock } from "lucide-react"
import DoctorSidebar from "@/components/doctor-sidebar"
import PatientList from "@/components/patient-list"
import AppointmentSchedule from "@/components/appointment-schedule"

export default function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DoctorSidebar activeItem="dashboard" />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Doctor Dashboard</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Doctor" />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Dr. Robert Smith</p>
                <p className="text-xs text-gray-500">Cardiologist</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="patients">Patients</TabsTrigger>
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-teal-600" />
                      Today's Schedule
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                        <div>
                          <p className="font-medium">John Doe</p>
                          <p className="text-xs text-gray-500">Checkup</p>
                        </div>
                        <p className="text-sm text-gray-600">9:00 AM</p>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                        <div>
                          <p className="font-medium">Sarah Johnson</p>
                          <p className="text-xs text-gray-500">Follow-up</p>
                        </div>
                        <p className="text-sm text-gray-600">11:30 AM</p>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                        <div>
                          <p className="font-medium">Michael Brown</p>
                          <p className="text-xs text-gray-500">Consultation</p>
                        </div>
                        <p className="text-sm text-gray-600">2:15 PM</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      View Full Schedule
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Users className="h-5 w-5 mr-2 text-teal-600" />
                      Patient Statistics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">Total Patients</p>
                        <p className="font-medium">248</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">New This Month</p>
                        <p className="font-medium">12</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">Appointments This Week</p>
                        <p className="font-medium">28</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">Pending Reports</p>
                        <p className="font-medium text-amber-600">5</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      View Patient Analytics
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-teal-600" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <ClipboardList className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Medical Record Updated</p>
                          <p className="text-xs text-gray-500">Patient: John Doe - 30 mins ago</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Calendar className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Appointment Scheduled</p>
                          <p className="text-xs text-gray-500">Patient: Emily Wilson - 2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <User className="h-4 w-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">New Patient Registered</p>
                          <p className="text-xs text-gray-500">Patient: Robert Johnson - Today</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      View All Activity
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Patient Health Insights */}
              <Card>
                <CardHeader>
                  <CardTitle>Patient Health Insights</CardTitle>
                  <CardDescription>AI-powered analysis of your patient population</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-center justify-center border border-dashed border-gray-300 rounded-md">
                    <p className="text-gray-500">Patient health trends visualization would appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Patients Tab */}
            <TabsContent value="patients">
              <Card>
                <CardHeader>
                  <CardTitle>Patient Management</CardTitle>
                  <CardDescription>View and manage your patient records</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="relative w-64">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search patients..."
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                      <Button>Add New Patient</Button>
                    </div>

                    <PatientList
                      patients={[
                        {
                          id: 1,
                          name: "John Doe",
                          age: 45,
                          condition: "Hypertension",
                          lastVisit: "April 15, 2025",
                        },
                        {
                          id: 2,
                          name: "Sarah Johnson",
                          age: 38,
                          condition: "Diabetes Type 2",
                          lastVisit: "April 10, 2025",
                        },
                        {
                          id: 3,
                          name: "Michael Brown",
                          age: 52,
                          condition: "Coronary Artery Disease",
                          lastVisit: "April 18, 2025",
                        },
                        {
                          id: 4,
                          name: "Emily Wilson",
                          age: 29,
                          condition: "Asthma",
                          lastVisit: "April 5, 2025",
                        },
                        {
                          id: 5,
                          name: "Robert Johnson",
                          age: 61,
                          condition: "Arthritis",
                          lastVisit: "April 20, 2025",
                        },
                      ]}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Appointments Tab */}
            <TabsContent value="appointments">
              <Card>
                <CardHeader>
                  <CardTitle>Appointment Schedule</CardTitle>
                  <CardDescription>Manage your appointments and schedule</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Today
                        </Button>
                        <Button variant="outline" size="sm">
                          This Week
                        </Button>
                        <Button variant="outline" size="sm">
                          This Month
                        </Button>
                      </div>
                      <Button>Schedule Appointment</Button>
                    </div>

                    <AppointmentSchedule
                      appointments={[
                        {
                          id: 1,
                          patient: "John Doe",
                          type: "Checkup",
                          date: "April 21, 2025",
                          time: "9:00 AM",
                          status: "Confirmed",
                        },
                        {
                          id: 2,
                          patient: "Sarah Johnson",
                          type: "Follow-up",
                          date: "April 21, 2025",
                          time: "11:30 AM",
                          status: "Confirmed",
                        },
                        {
                          id: 3,
                          patient: "Michael Brown",
                          type: "Consultation",
                          date: "April 21, 2025",
                          time: "2:15 PM",
                          status: "Confirmed",
                        },
                        {
                          id: 4,
                          patient: "Emily Wilson",
                          type: "Checkup",
                          date: "April 22, 2025",
                          time: "10:00 AM",
                          status: "Pending",
                        },
                        {
                          id: 5,
                          patient: "Robert Johnson",
                          type: "Initial Consultation",
                          date: "April 22, 2025",
                          time: "3:30 PM",
                          status: "Confirmed",
                        },
                      ]}
                    />
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
