"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Calendar, Plus, Search, Filter } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import PatientSidebar from "@/components/patient-sidebar"

export default function Appointments() {
  const [activeTab, setActiveTab] = useState("upcoming")

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <PatientSidebar activeItem="appointments" />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Appointments</h1>
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
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Manage Your Appointments</h2>
              <Button className="bg-teal-600 hover:bg-teal-700">
                <Plus className="h-4 w-4 mr-2" /> Schedule New Appointment
              </Button>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <div className="flex justify-between items-center">
                <TabsList>
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="past">Past</TabsTrigger>
                  <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                </TabsList>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input type="text" placeholder="Search appointments..." className="pl-9 w-[200px] h-9" />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[130px] h-9">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Doctors</SelectItem>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="dermatology">Dermatology</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <TabsContent value="upcoming" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <AppointmentCard
                        doctor="Dr. Sarah Johnson"
                        specialty="Cardiologist"
                        date="May 15, 2025"
                        time="10:30 AM"
                        status="Confirmed"
                        location="Heart Care Center, Building A, Room 305"
                      />

                      <AppointmentCard
                        doctor="Dr. Michael Chen"
                        specialty="General Physician"
                        date="May 22, 2025"
                        time="2:00 PM"
                        status="Confirmed"
                        location="Primary Care Clinic, Main Building, Room 112"
                      />

                      <AppointmentCard
                        doctor="Dr. Emily Rodriguez"
                        specialty="Dermatologist"
                        date="June 3, 2025"
                        time="9:15 AM"
                        status="Pending"
                        location="Dermatology Center, Medical Plaza, Suite 240"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="past" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <AppointmentCard
                        doctor="Dr. Sarah Johnson"
                        specialty="Cardiologist"
                        date="April 10, 2025"
                        time="11:00 AM"
                        status="Completed"
                        location="Heart Care Center, Building A, Room 305"
                      />

                      <AppointmentCard
                        doctor="Dr. Robert Williams"
                        specialty="Neurologist"
                        date="March 25, 2025"
                        time="3:30 PM"
                        status="Completed"
                        location="Neurology Department, Medical Tower, Floor 5"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cancelled" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <AppointmentCard
                        doctor="Dr. James Wilson"
                        specialty="Orthopedist"
                        date="April 5, 2025"
                        time="2:45 PM"
                        status="Cancelled"
                        location="Orthopedic Center, West Wing, Room 210"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Find a Doctor</CardTitle>
                <CardDescription>Search for specialists and schedule an appointment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Specialty</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                        <SelectItem value="dermatology">Dermatology</SelectItem>
                        <SelectItem value="neurology">Neurology</SelectItem>
                        <SelectItem value="orthopedics">Orthopedics</SelectItem>
                        <SelectItem value="general">General Medicine</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Date</label>
                    <Input type="date" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Location</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="main">Main Hospital</SelectItem>
                        <SelectItem value="north">North Clinic</SelectItem>
                        <SelectItem value="south">South Clinic</SelectItem>
                        <SelectItem value="east">East Medical Center</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="mt-4 bg-teal-600 hover:bg-teal-700">Search Doctors</Button>

                <div className="mt-6 border-t pt-6">
                  <h3 className="font-medium mb-4">Popular Specialists</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <DoctorCard
                      name="Dr. Sarah Johnson"
                      specialty="Cardiologist"
                      rating={4.9}
                      availability="Next available: Tomorrow"
                    />
                    <DoctorCard
                      name="Dr. Michael Chen"
                      specialty="General Physician"
                      rating={4.8}
                      availability="Next available: Today"
                    />
                    <DoctorCard
                      name="Dr. Emily Rodriguez"
                      specialty="Dermatologist"
                      rating={4.7}
                      availability="Next available: May 5"
                    />
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

function AppointmentCard({ doctor, specialty, date, time, status, location }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
      case "Completed":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt={doctor} />
            <AvatarFallback>
              {doctor
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">{doctor}</h3>
            <p className="text-sm text-gray-500">{specialty}</p>
          </div>
        </div>
        <Badge className={getStatusColor(status)}>{status}</Badge>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm">
          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
          <span>
            {date} at {time}
          </span>
        </div>
        <div className="text-sm text-gray-600">
          <span className="font-medium">Location:</span> {location}
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          Reschedule
        </Button>
        <Button variant="outline" size="sm" className="flex-1 text-red-500 border-red-200 hover:bg-red-50">
          Cancel
        </Button>
      </div>
    </div>
  )
}

function DoctorCard({ name, specialty, rating, availability }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt={name} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-gray-500">{specialty}</p>
        </div>
      </div>

      <div className="flex justify-between text-sm mb-3">
        <span className="text-yellow-500">★ {rating}</span>
        <span className="text-green-600">{availability}</span>
      </div>

      <Button variant="outline" size="sm" className="w-full">
        Book Appointment
      </Button>
    </div>
  )
}
