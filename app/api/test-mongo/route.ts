import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("doctor-ai");

    const result = await db.collection("test").find({}).toArray();

    return NextResponse.json({ success: true, data: result });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: false, error: "Unknown error occurred" }, { status: 500 });
  }
}