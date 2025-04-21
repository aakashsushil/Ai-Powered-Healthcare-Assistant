import { NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const condition = searchParams.get("condition")

  if (!condition) {
    return NextResponse.json({ error: "Condition parameter is required" }, { status: 400 })
  }

  try {
    // Use AI SDK to get home remedies for the condition
    const { text } = await generateText({
      model: openai("gpt-4o"),
      system: `You are a home remedies expert AI. Provide evidence-based home remedies for common conditions.
      Always include a disclaimer that these remedies are not a substitute for professional medical advice.
      Format your response as JSON with the following structure:
      {
        "condition": "name of condition",
        "remedies": [
          {
            "name": "remedy name",
            "ingredients": ["ingredient 1", "ingredient 2"],
            "instructions": "how to prepare and use",
            "effectiveness": "scientific evidence rating (High/Medium/Low)"
          }
        ],
        "disclaimer": "medical disclaimer"
      }`,
      prompt: `Provide home remedies for: ${condition}`,
    })

    // Parse the response as JSON
    const remediesData = JSON.parse(text)

    return NextResponse.json(remediesData)
  } catch (error) {
    console.error("Error fetching home remedies:", error)
    return NextResponse.json({ error: "Failed to fetch home remedies" }, { status: 500 })
  }
}
