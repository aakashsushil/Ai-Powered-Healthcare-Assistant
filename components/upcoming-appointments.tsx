import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface Appointment {
  id: number
  doctor: string
  specialty: string
  date: string
  time: string
}

interface UpcomingAppointmentsProps {
  appointments: Appointment[]
}

export default function UpcomingAppointments({ appointments }: UpcomingAppointmentsProps) {
  return (
    <div className="space-y-3">
      {appointments.length === 0 ? (
        <p className="text-center text-gray-500 py-4">No upcoming appointments</p>
      ) : (
        appointments.map((appointment) => (
          <div key={appointment.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-md">
            <div className="bg-teal-100 p-2 rounded-full">
              <Calendar className="h-4 w-4 text-teal-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium">{appointment.doctor}</p>
              <p className="text-xs text-gray-500">{appointment.specialty}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-gray-600">
                  {appointment.date}, {appointment.time}
                </p>
                <Button variant="outline" size="sm" className="text-xs h-7">
                  Details
                </Button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
