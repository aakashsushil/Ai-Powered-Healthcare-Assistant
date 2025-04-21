import { NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(request: Request) {
  try {
    const { symptoms } = await request.json()

    if (!symptoms || symptoms.trim() === "") {
      return NextResponse.json({ error: "Symptoms description is required" }, { status: 400 })
    }

    // Use AI SDK to analyze symptoms
    const { text } = await generateText({
      model: openai("gpt-4o"),
      system: `You are a medical symptom analyzer AI. 
      Analyze the symptoms provided and suggest possible conditions, 
      but always include a disclaimer that this is not medical advice and recommend consulting with a healthcare professional for proper diagnosis and treatment.`,
      prompt: `Analyze the following symptoms and provide possible conditions, severity assessment, and general recommendations: ${symptoms}`,
    })

    return NextResponse.json({
      analysis: text,
    })
  } catch (error) {
    console.error("Error analyzing symptoms:", error)
    return NextResponse.json({ error: "Failed to analyze symptoms" }, { status: 500 })
  }
}
