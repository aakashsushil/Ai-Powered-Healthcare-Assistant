import { Button } from "@/components/ui/button"
import { Pill, Check } from "lucide-react"

interface Medication {
  id: number
  name: string
  dosage: string
  frequency: string
  nextDose: string
}

interface MedicationRemindersProps {
  medications: Medication[]
}

export default function MedicationReminders({ medications }: MedicationRemindersProps) {
  return (
    <div className="space-y-3">
      {medications.length === 0 ? (
        <p className="text-center text-gray-500 py-4">No medication reminders</p>
      ) : (
        medications.map((medication) => (
          <div key={medication.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-md">
            <div className="bg-teal-100 p-2 rounded-full">
              <Pill className="h-4 w-4 text-teal-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium">
                {medication.name} {medication.dosage}
              </p>
              <p className="text-xs text-gray-500">{medication.frequency}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-gray-600">Next: {medication.nextDose}</p>
                <Button variant="outline" size="sm" className="text-xs h-7 flex items-center gap-1">
                  <Check className="h-3 w-3" /> Taken
                </Button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
