import OpenAI from "openai"
import { NextResponse } from "next/server"

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function GET() {

  const response = await client.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      { role: "user", content: "Explain machine learning" }
    ]
  })

  return NextResponse.json({
    message: response.choices[0].message.content
  })
}