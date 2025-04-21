"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Pill, Plus, Check, Clock, AlertTriangle, X, Calendar } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import PatientSidebar from "@/components/patient-sidebar"

export default function Medications() {
  const [medications, setMedications] = useState([
    {
      id: 1,
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      time: "8:00 PM",
      startDate: "March 15, 2025",
      endDate: "Ongoing",
      instructions: "Take with food",
      refillDate: "May 15, 2025",
      prescribedBy: "Dr. Sarah Johnson",
    },
    {
      id: 2,
      name: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      time: "8:00 AM, 8:00 PM",
      startDate: "February 10, 2025",
      endDate: "Ongoing",
      instructions: "Take with meals",
      refillDate: "May 10, 2025",
      prescribedBy: "Dr. Michael Chen",
    },
    {
      id: 3,
      name: "Atorvastatin",
      dosage: "20mg",
      frequency: "Once daily",
      time: "9:00 PM",
      startDate: "April 1, 2025",
      endDate: "Ongoing",
      instructions: "Take at bedtime",
      refillDate: "June 1, 2025",
      prescribedBy: "Dr. Sarah Johnson",
    },
  ])

  const [newMedication, setNewMedication] = useState({
    name: "",
    dosage: "",
    frequency: "once",
    time: "",
    instructions: "",
    startDate: "",
    endDate: "",
    refillDate: "",
    prescribedBy: "",
  })

  const [openDialog, setOpenDialog] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewMedication((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setNewMedication((prev) => ({ ...prev, [name]: value }))
  }

  const addMedication = () => {
    const newMed = {
      id: medications.length + 1,
      ...newMedication,
    }
    setMedications([...medications, newMed])
    setOpenDialog(false)
    setNewMedication({
      name: "",
      dosage: "",
      frequency: "once",
      time: "",
      instructions: "",
      startDate: "",
      endDate: "",
      refillDate: "",
      prescribedBy: "",
    })
  }

  const removeMedication = (id) => {
    setMedications(medications.filter((med) => med.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <PatientSidebar activeItem="medications" />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Medications</h1>
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
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Medication Management</h2>
              <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogTrigger asChild>
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    <Plus className="h-4 w-4 mr-2" /> Add Medication
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Add New Medication</DialogTitle>
                    <DialogDescription>Enter the details of your medication</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Medication Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={newMedication.name}
                          onChange={handleInputChange}
                          placeholder="e.g., Lisinopril"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dosage">Dosage</Label>
                        <Input
                          id="dosage"
                          name="dosage"
                          value={newMedication.dosage}
                          onChange={handleInputChange}
                          placeholder="e.g., 10mg"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="frequency">Frequency</Label>
                        <Select
                          value={newMedication.frequency}
                          onValueChange={(value) => handleSelectChange("frequency", value)}
                        >
                          <SelectTrigger id="frequency">
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="once">Once daily</SelectItem>
                            <SelectItem value="twice">Twice daily</SelectItem>
                            <SelectItem value="three">Three times daily</SelectItem>
                            <SelectItem value="four">Four times daily</SelectItem>
                            <SelectItem value="asneeded">As needed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Time</Label>
                        <Input
                          id="time"
                          name="time"
                          value={newMedication.time}
                          onChange={handleInputChange}
                          placeholder="e.g., 8:00 AM"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="instructions">Special Instructions</Label>
                      <Input
                        id="instructions"
                        name="instructions"
                        value={newMedication.instructions}
                        onChange={handleInputChange}
                        placeholder="e.g., Take with food"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input
                          id="startDate"
                          name="startDate"
                          type="date"
                          value={newMedication.startDate}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="endDate">End Date (if applicable)</Label>
                        <Input
                          id="endDate"
                          name="endDate"
                          type="date"
                          value={newMedication.endDate}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="refillDate">Next Refill Date</Label>
                        <Input
                          id="refillDate"
                          name="refillDate"
                          type="date"
                          value={newMedication.refillDate}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="prescribedBy">Prescribed By</Label>
                        <Input
                          id="prescribedBy"
                          name="prescribedBy"
                          value={newMedication.prescribedBy}
                          onChange={handleInputChange}
                          placeholder="e.g., Dr. Smith"
                        />
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setOpenDialog(false)}>
                      Cancel
                    </Button>
                    <Button className="bg-teal-600 hover:bg-teal-700" onClick={addMedication}>
                      Add Medication
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {medications.map((medication) => (
                <Card key={medication.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Pill className="h-5 w-5 text-teal-600" />
                        <CardTitle className="text-lg">{medication.name}</CardTitle>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-red-500"
                        onClick={() => removeMedication(medication.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardDescription>
                      {medication.dosage} - {medication.frequency}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Time: {medication.time}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Started: {medication.startDate}</span>
                      </div>
                      {medication.instructions && (
                        <div className="flex items-start text-sm">
                          <AlertTriangle className="h-4 w-4 mr-2 text-amber-500 mt-0.5" />
                          <span>Instructions: {medication.instructions}</span>
                        </div>
                      )}
                      <div className="flex items-center text-sm text-amber-600">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        <span>Refill by: {medication.refillDate}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>Prescribed by: {medication.prescribedBy}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Check className="h-3 w-3" /> Mark as Taken
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Medication Reminder Settings</CardTitle>
                <CardDescription>Configure how you want to receive medication reminders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h4 className="font-medium">Push Notifications</h4>
                      <p className="text-sm text-gray-500">Receive reminders on your device</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h4 className="font-medium">Email Notifications</h4>
                      <p className="text-sm text-gray-500">Receive reminders via email</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h4 className="font-medium">Reminder Time Buffer</h4>
                      <p className="text-sm text-gray-500">How early to send reminders before scheduled time</p>
                    </div>
                    <Select defaultValue="15">
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 minutes</SelectItem>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h4 className="font-medium">Missed Dose Reminders</h4>
                      <p className="text-sm text-gray-500">Send follow-up reminders for missed doses</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-teal-600 hover:bg-teal-700">Save Settings</Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
