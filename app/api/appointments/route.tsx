import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Appointment from "@/models/appointment";

// GET: Fetch all appointments
export async function GET() {
  await connectDB();
  const data = await Appointment.find();
  return NextResponse.json({ success: true, data });
}

// POST: Create new appointment
export async function POST(req: NextRequest) {
  await connectDB();
  const body = await req.json();
  const data = await Appointment.create(body);
  return NextResponse.json({ success: true, data });
}

// PUT: Update appointment (reschedule)
export async function PUT(req: NextRequest) {
  await connectDB();
  const body = await req.json();
  const { id, date, time } = body;
  const data = await Appointment.findByIdAndUpdate(id, { date, time });
  return NextResponse.json({ success: true, data });
}

// DELETE: Cancel appointment
export async function DELETE(req: NextRequest) {
  await connectDB();
  const id = new URL(req.url).searchParams.get("id");
  const data = await Appointment.findByIdAndDelete(id);
  return NextResponse.json({ success: true, data });
}