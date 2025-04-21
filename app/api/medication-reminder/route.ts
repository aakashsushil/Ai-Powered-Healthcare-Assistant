import { NextResponse } from "next/server"

// Mock database for medications
const medicationsDB = [
  {
    id: 1,
    userId: "user123",
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    time: "20:00",
    lastTaken: null,
  },
  {
    id: 2,
    userId: "user123",
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    time: "08:00,20:00",
    lastTaken: null,
  },
]

// GET endpoint to retrieve medications for a user
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("userId")

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 })
  }

  const userMedications = medicationsDB.filter((med) => med.userId === userId)

  return NextResponse.json({ medications: userMedications })
}

// POST endpoint to add a new medication
export async function POST(request: Request) {
  try {
    const { userId, name, dosage, frequency, time } = await request.json()

    if (!userId || !name || !dosage || !frequency || !time) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const newMedication = {
      id: medicationsDB.length + 1,
      userId,
      name,
      dosage,
      frequency,
      time,
      lastTaken: null,
    }

    medicationsDB.push(newMedication)

    return NextResponse.json({
      message: "Medication added successfully",
      medication: newMedication,
    })
  } catch (error) {
    console.error("Error adding medication:", error)
    return NextResponse.json({ error: "Failed to add medication" }, { status: 500 })
  }
}

// PUT endpoint to update medication status (taken)
export async function PUT(request: Request) {
  try {
    const { medicationId, takenAt } = await request.json()

    if (!medicationId) {
      return NextResponse.json({ error: "Medication ID is required" }, { status: 400 })
    }

    const medicationIndex = medicationsDB.findIndex((med) => med.id === medicationId)

    if (medicationIndex === -1) {
      return NextResponse.json({ error: "Medication not found" }, { status: 404 })
    }

    medicationsDB[medicationIndex].lastTaken = takenAt || new Date().toISOString()

    return NextResponse.json({
      message: "Medication status updated",
      medication: medicationsDB[medicationIndex],
    })
  } catch (error) {
    console.error("Error updating medication status:", error)
    return NextResponse.json({ error: "Failed to update medication status" }, { status: 500 })
  }
}
