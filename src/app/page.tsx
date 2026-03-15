"use client"

import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    const fetch1 = async () => {
      try {
        const response = await axios.get("/api/chat")
        setMessage(response.data.message)
      } catch (error) {
        console.error(error)
        setMessage("Failed to fetch message")
      }
    }

    fetch1()
  }, [])

  return <div>{message}</div>
}