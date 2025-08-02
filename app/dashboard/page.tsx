"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// Dummy data
const userData = {
  name: "Natshathra",
  referralCode: "natshathra2025",
  totalDonations: 2500,
  goal: 5000,
}

export default function Dashboard() {
  const [user, setUser] = useState(userData)
  const [copiedCode, setCopiedCode] = useState(false)
  const [progressWidth, setProgressWidth] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const storedName = localStorage.getItem("userName")
    if (storedName) {
      setUser({ ...userData, name: storedName })
    }

    // Animate progress bar
    setTimeout(() => {
      setProgressWidth((user.totalDonations / user.goal) * 100)
    }, 500)
  }, [user.totalDonations, user.goal])

  const copyReferralCode = () => {
    navigator.clipboard.writeText(user.referralCode)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  const getBadgeInfo = (donations: number) => {
    if (donations >= 5000) return { level: "Gold", unlocked: true, icon: "👑", class: "badge-gold" }
    if (donations >= 2000) return { level: "Silver", unlocked: true, icon: "🥈", class: "badge-silver" }
    if (donations >= 500) return { level: "Bronze", unlocked: true, icon: "🥉", class: "badge-bronze" }
    return { level: "Starter", unlocked: false, icon: "🌟", class: "badge-locked" }
  }

  const currentBadge = getBadgeInfo(user.totalDonations)

  return (
    <div className="gradient-bg-soft relative">
      {/* Floating Hearts */}
      <div className="floating-hearts">
        <div className="heart">💖</div>
        <div className="heart">💕</div>
        <div className="heart">💗</div>
        <div className="heart">🌸</div>
        <div className="heart">✨</div>
        <div className="heart">💖</div>
        <div className="heart">💕</div>
        <div className="heart">🌸</div>
        <div className="heart">✨</div>
      </div>

      {/* Floating Action Button */}
      <div className="fab" onClick={copyReferralCode} title="Share Referral Link">
        📤
      </div>

      <div style={{ padding: "20px", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <header className="soft-card fade-in" style={{ padding: "30px", marginBottom: "30px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img
                src="/she-can-logo.png"
                alt="She Can Foundation"
                style={{
                  width: "70px",
                  height: "70px",
                  background: "rgba(255, 193, 227, 0.1)",
                  borderRadius: "15px",
                  padding: "8px",
                }}
              />
              <div>
                <h1
                  className="glow-pulse"
                  style={{
                    background: "linear-gradient(135deg, #C8A2C8, #A7C7E7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "28px",
                    fontWeight: "700",
                    margin: "0 0 5px 0",
                  }}
                >
                  Welcome back, {user.name}! ✨
                </h1>
                <p style={{ color: "#6B6B6B", fontSize: "16px", margin: "0" }}>Let's make magic happen together 💕</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <div style={{ textAlign: "right" }}>
                <p style={{ margin: "0", fontSize: "12px", color: "#6B6B6B" }}>Current Badge</p>
                <p style={{ margin: "0", fontWeight: "600", color: "#C8A2C8" }}>{currentBadge.level}</p>
              </div>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #FFC1E3, #C8A2C8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  boxShadow: "0 8px 25px rgba(255, 193, 227, 0.4)",
                }}
              >
                {currentBadge.icon}
              </div>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div
          className="slide-up"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
            marginBottom: "40px",
          }}
        >
          <div className="soft-card" style={{ padding: "30px", textAlign: "center" }}>
            <div style={{ fontSize: "48px", marginBottom: "15px" }}>💰</div>
            <h3 style={{ color: "#C8A2C8", fontSize: "16px", margin: "0 0 10px 0", fontWeight: "600" }}>
              Total Donations
            </h3>
            <p
              style={{
                background: "linear-gradient(135deg, #FFC1E3, #C8A2C8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "36px",
                fontWeight: "700",
                margin: "0",
              }}
            >
              ₹{user.totalDonations.toLocaleString()}
            </p>
          </div>

          <div className="soft-card" style={{ padding: "30px", textAlign: "center" }}>
            <div style={{ fontSize: "48px", marginBottom: "15px" }}>🔗</div>
            <h3 style={{ color: "#C8A2C8", fontSize: "16px", margin: "0 0 10px 0", fontWeight: "600" }}>
              Referral Code
            </h3>
            <p style={{ fontSize: "20px", fontWeight: "600", color: "#4A4A4A", margin: "0 0 15px 0" }}>
              {user.referralCode}
            </p>
            <button onClick={copyReferralCode} className="btn-soft" style={{ fontSize: "14px", padding: "8px 20px" }}>
              {copiedCode ? "Copied! ✨" : "Copy Code 📋"}
            </button>
          </div>

          <div className="soft-card" style={{ padding: "30px", textAlign: "center" }}>
            <div style={{ fontSize: "48px", marginBottom: "15px" }}>🏆</div>
            <h3 style={{ color: "#C8A2C8", fontSize: "16px", margin: "0 0 10px 0", fontWeight: "600" }}>
              Current Rank
            </h3>
            <p
              style={{
                background: "linear-gradient(135deg, #FFC1E3, #C8A2C8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "36px",
                fontWeight: "700",
                margin: "0",
              }}
            >
              #1
            </p>
          </div>
        </div>

        {/* Progress Section */}
        <div className="soft-card bounce-in" style={{ padding: "30px", marginBottom: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h2 style={{ color: "#C8A2C8", fontSize: "24px", fontWeight: "700", margin: "0" }}>🎯 Progress to Goal</h2>
            <span style={{ color: "#6B6B6B", fontSize: "16px", fontWeight: "600" }}>
              ₹{user.totalDonations.toLocaleString()} / ₹{user.goal.toLocaleString()}
            </span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressWidth}%` }}></div>
          </div>
          <p style={{ textAlign: "center", color: "#6B6B6B", fontSize: "14px", marginTop: "15px" }}>
            {Math.round(progressWidth)}% Complete! Keep going! 💪✨
          </p>
        </div>

        {/* Rewards Section */}
        <div className="soft-card slide-up" style={{ padding: "40px", marginBottom: "40px" }}>
          <h2
            style={{
              color: "#C8A2C8",
              fontSize: "28px",
              fontWeight: "700",
              margin: "0 0 30px 0",
              textAlign: "center",
            }}
          >
            🎁 Rewards & Achievements
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "25px",
            }}
          >
            {/* Bronze */}
            <div
              className="soft-card"
              style={{
                padding: "25px",
                textAlign: "center",
                background: user.totalDonations >= 500 ? "rgba(205, 127, 50, 0.1)" : "rgba(211, 211, 211, 0.1)",
                border: user.totalDonations >= 500 ? "2px solid #CD7F32" : "2px solid #D3D3D3",
                transform: user.totalDonations >= 500 ? "scale(1.02)" : "scale(1)",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background:
                    user.totalDonations >= 500
                      ? "linear-gradient(135deg, #CD7F32, #DEB887)"
                      : "linear-gradient(135deg, #D3D3D3, #F5F5F5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px auto",
                  fontSize: "32px",
                  boxShadow: user.totalDonations >= 500 ? "0 8px 25px rgba(205, 127, 50, 0.3)" : "none",
                  animation: user.totalDonations >= 500 ? "glowPulse 2s ease-in-out infinite" : "none",
                }}
              >
                🥉
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "700", margin: "0 0 10px 0", color: "#4A4A4A" }}>
                Bronze Achiever
              </h3>
              <p style={{ color: "#6B6B6B", fontSize: "14px", margin: "0 0 20px 0" }}>Raise ₹500 or more</p>
              <span className={`badge ${user.totalDonations >= 500 ? "badge-bronze" : "badge-locked"}`}>
                {user.totalDonations >= 500 ? "Unlocked! ✨" : "Locked 🔒"}
              </span>
            </div>

            {/* Silver */}
            <div
              className="soft-card"
              style={{
                padding: "25px",
                textAlign: "center",
                background: user.totalDonations >= 2000 ? "rgba(192, 192, 192, 0.1)" : "rgba(211, 211, 211, 0.1)",
                border: user.totalDonations >= 2000 ? "2px solid #C0C0C0" : "2px solid #D3D3D3",
                transform: user.totalDonations >= 2000 ? "scale(1.02)" : "scale(1)",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background:
                    user.totalDonations >= 2000
                      ? "linear-gradient(135deg, #C0C0C0, #E5E5E5)"
                      : "linear-gradient(135deg, #D3D3D3, #F5F5F5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px auto",
                  fontSize: "32px",
                  boxShadow: user.totalDonations >= 2000 ? "0 8px 25px rgba(192, 192, 192, 0.3)" : "none",
                  animation: user.totalDonations >= 2000 ? "glowPulse 2s ease-in-out infinite" : "none",
                }}
              >
                🥈
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "700", margin: "0 0 10px 0", color: "#4A4A4A" }}>
                Silver Champion
              </h3>
              <p style={{ color: "#6B6B6B", fontSize: "14px", margin: "0 0 20px 0" }}>Raise ₹2,000 or more</p>
              <span className={`badge ${user.totalDonations >= 2000 ? "badge-silver" : "badge-locked"}`}>
                {user.totalDonations >= 2000 ? "Unlocked! ✨" : "Locked 🔒"}
              </span>
            </div>

            {/* Gold */}
            <div
              className="soft-card"
              style={{
                padding: "25px",
                textAlign: "center",
                background: user.totalDonations >= 5000 ? "rgba(255, 215, 0, 0.1)" : "rgba(211, 211, 211, 0.1)",
                border: user.totalDonations >= 5000 ? "2px solid #FFD700" : "2px solid #D3D3D3",
                transform: user.totalDonations >= 5000 ? "scale(1.02)" : "scale(1)",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background:
                    user.totalDonations >= 5000
                      ? "linear-gradient(135deg, #FFD700, #FFA500)"
                      : "linear-gradient(135deg, #D3D3D3, #F5F5F5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px auto",
                  fontSize: "32px",
                  boxShadow: user.totalDonations >= 5000 ? "0 8px 25px rgba(255, 215, 0, 0.3)" : "none",
                  animation: user.totalDonations >= 5000 ? "glowPulse 2s ease-in-out infinite" : "none",
                }}
              >
                👑
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "700", margin: "0 0 10px 0", color: "#4A4A4A" }}>
                Gold Legend
              </h3>
              <p style={{ color: "#6B6B6B", fontSize: "14px", margin: "0 0 20px 0" }}>Raise ₹5,000 or more</p>
              <span className={`badge ${user.totalDonations >= 5000 ? "badge-gold" : "badge-locked"}`}>
                {user.totalDonations >= 5000 ? "Unlocked! ✨" : "Locked 🔒"}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="soft-card bounce-in" style={{ padding: "40px" }}>
          <h2
            style={{
              color: "#C8A2C8",
              fontSize: "24px",
              fontWeight: "700",
              margin: "0 0 25px 0",
              textAlign: "center",
            }}
          >
            ✨ Quick Actions
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
            <button
              className="btn-soft"
              style={{
                padding: "20px",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                fontSize: "16px",
              }}
            >
              <span style={{ fontSize: "28px" }}>👥</span>
              <div>
                <div style={{ fontWeight: "700", marginBottom: "5px" }}>Share Referral Code</div>
                <div style={{ fontSize: "14px", opacity: 0.9 }}>Invite friends to join the cause</div>
              </div>
            </button>

            <a
              href="/leaderboard"
              className="btn-soft"
              style={{
                padding: "20px",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                fontSize: "16px",
                textDecoration: "none",
                background: "linear-gradient(135deg, #A7C7E7, #C8A2C8)",
              }}
            >
              <span style={{ fontSize: "28px" }}>🏆</span>
              <div>
                <div style={{ fontWeight: "700", marginBottom: "5px" }}>View Leaderboard</div>
                <div style={{ fontSize: "14px", opacity: 0.9 }}>See how you rank against others</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
