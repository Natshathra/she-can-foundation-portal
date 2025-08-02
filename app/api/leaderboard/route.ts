import { NextResponse } from "next/server"

export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Return dummy leaderboard data
  const leaderboardData = [
    { rank: 1, name: "Natshathra", referralCode: "natshathra2025", donations: 2500 },
    { rank: 2, name: "Alex Kumar", referralCode: "alex2025", donations: 2000 },
    { rank: 3, name: "Priya Sharma", referralCode: "priya2025", donations: 1500 },
    { rank: 4, name: "Rahul Patel", referralCode: "rahul2025", donations: 1200 },
    { rank: 5, name: "Sneha Reddy", referralCode: "sneha2025", donations: 1000 },
    { rank: 6, name: "Arjun Singh", referralCode: "arjun2025", donations: 800 },
    { rank: 7, name: "Kavya Nair", referralCode: "kavya2025", donations: 600 },
    { rank: 8, name: "Vikram Joshi", referralCode: "vikram2025", donations: 400 },
  ]

  return NextResponse.json(leaderboardData)
}
