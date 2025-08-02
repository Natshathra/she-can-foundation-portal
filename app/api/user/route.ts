import { NextResponse } from "next/server"

export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Return dummy user data
  const userData = {
    name: "Natshathra",
    referralCode: "natshathra2025",
    totalDonations: 2500,
  }

  return NextResponse.json(userData)
}
