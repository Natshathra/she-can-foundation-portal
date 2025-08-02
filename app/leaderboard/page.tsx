"use client"
import { useRouter } from "next/navigation"

// Dummy leaderboard data
const leaderboardData = [
  { rank: 1, name: "Natshathra", referralCode: "natshathra2025", donations: 2500 },
  { rank: 2, name: "Sakura", referralCode: "sakura2025", donations: 2200 },
  { rank: 3, name: "Luna", referralCode: "luna2025", donations: 1800 },
  { rank: 4, name: "Aria", referralCode: "aria2025", donations: 1500 },
  { rank: 5, name: "Maya", referralCode: "maya2025", donations: 1200 },
  { rank: 6, name: "Zara", referralCode: "zara2025", donations: 1000 },
  { rank: 7, name: "Nova", referralCode: "nova2025", donations: 800 },
  { rank: 8, name: "Iris", referralCode: "iris2025", donations: 600 },
]

export default function Leaderboard() {
  const router = useRouter()

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return "👑"
      case 2:
        return "🥈"
      case 3:
        return "🥉"
      default:
        return "✨"
    }
  }

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "linear-gradient(135deg, #FFD700, #FFA500)"
      case 2:
        return "linear-gradient(135deg, #C0C0C0, #E5E5E5)"
      case 3:
        return "linear-gradient(135deg, #CD7F32, #DEB887)"
      default:
        return "linear-gradient(135deg, #FFC1E3, #C8A2C8)"
    }
  }

  return (
    <div className="gradient-bg-soft relative">
      {/* Floating Hearts */}
      <div className="floating-hearts">
        <div className="heart">🏆</div>
        <div className="heart">⭐</div>
        <div className="heart">💖</div>
        <div className="heart">🌟</div>
        <div className="heart">✨</div>
        <div className="heart">🏆</div>
        <div className="heart">⭐</div>
        <div className="heart">💖</div>
        <div className="heart">🌟</div>
      </div>

      <div style={{ padding: "20px", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <header className="soft-card fade-in" style={{ padding: "30px", marginBottom: "30px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
            <button
              onClick={() => router.back()}
              style={{
                background: "linear-gradient(135deg, #FFC1E3, #C8A2C8)",
                color: "white",
                border: "none",
                borderRadius: "15px",
                padding: "12px 20px",
                cursor: "pointer",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 15px rgba(255, 193, 227, 0.4)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.transform = "translateY(-2px)")}
              onMouseOut={(e) => (e.target.style.transform = "translateY(0)")}
            >
              ← Back
            </button>
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
                style={{
                  background: "linear-gradient(135deg, #C8A2C8, #A7C7E7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "28px",
                  fontWeight: "700",
                  margin: "0 0 5px 0",
                }}
              >
                🏆 Leaderboard ✨
              </h1>
              <p style={{ color: "#6B6B6B", fontSize: "16px", margin: "0" }}>
                See how our amazing interns are making a difference! 💕
              </p>
            </div>
          </div>
        </header>

        {/* Top 3 Podium */}
        <div className="soft-card bounce-in" style={{ padding: "40px", marginBottom: "30px" }}>
          <h2
            style={{
              textAlign: "center",
              margin: "0 0 40px 0",
              fontSize: "24px",
              fontWeight: "700",
              color: "#C8A2C8",
            }}
          >
            🌟 Top Performers 🌟
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            {/* Second Place */}
            {leaderboardData[1] && (
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "100px",
                    height: "80px",
                    background: getRankColor(2),
                    borderRadius: "20px 20px 0 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "32px",
                    marginBottom: "20px",
                    boxShadow: "0 8px 25px rgba(192, 192, 192, 0.3)",
                  }}
                >
                  🥈
                </div>
                <div
                  className="soft-card"
                  style={{
                    padding: "20px",
                    minWidth: "140px",
                    background: "rgba(192, 192, 192, 0.1)",
                  }}
                >
                  <h3 style={{ margin: "0 0 8px 0", fontSize: "18px", fontWeight: "700", color: "#4A4A4A" }}>
                    {leaderboardData[1].name}
                  </h3>
                  <p style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#6B6B6B", fontFamily: "monospace" }}>
                    {leaderboardData[1].referralCode}
                  </p>
                  <p style={{ margin: "0", fontWeight: "700", color: "#C8A2C8", fontSize: "16px" }}>
                    ₹{leaderboardData[1].donations.toLocaleString()}
                  </p>
                </div>
              </div>
            )}

            {/* First Place */}
            {leaderboardData[0] && (
              <div style={{ textAlign: "center" }}>
                <div
                  className="glow-pulse"
                  style={{
                    width: "120px",
                    height: "100px",
                    background: getRankColor(1),
                    borderRadius: "20px 20px 0 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "40px",
                    marginBottom: "20px",
                    boxShadow: "0 12px 35px rgba(255, 215, 0, 0.4)",
                    animation: "fabPulse 2s ease-in-out infinite",
                  }}
                >
                  👑
                </div>
                <div
                  className="soft-card"
                  style={{
                    padding: "25px",
                    minWidth: "160px",
                    background: "rgba(255, 215, 0, 0.1)",
                    border: "2px solid #FFD700",
                  }}
                >
                  <h3 style={{ margin: "0 0 8px 0", fontSize: "20px", fontWeight: "700", color: "#4A4A4A" }}>
                    {leaderboardData[0].name}
                  </h3>
                  <p style={{ margin: "0 0 8px 0", fontSize: "14px", color: "#6B6B6B", fontFamily: "monospace" }}>
                    {leaderboardData[0].referralCode}
                  </p>
                  <p style={{ margin: "0", fontWeight: "700", color: "#C8A2C8", fontSize: "18px" }}>
                    ₹{leaderboardData[0].donations.toLocaleString()}
                  </p>
                </div>
              </div>
            )}

            {/* Third Place */}
            {leaderboardData[2] && (
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "100px",
                    height: "60px",
                    background: getRankColor(3),
                    borderRadius: "20px 20px 0 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "32px",
                    marginBottom: "20px",
                    boxShadow: "0 8px 25px rgba(205, 127, 50, 0.3)",
                  }}
                >
                  🥉
                </div>
                <div
                  className="soft-card"
                  style={{
                    padding: "20px",
                    minWidth: "140px",
                    background: "rgba(205, 127, 50, 0.1)",
                  }}
                >
                  <h3 style={{ margin: "0 0 8px 0", fontSize: "18px", fontWeight: "700", color: "#4A4A4A" }}>
                    {leaderboardData[2].name}
                  </h3>
                  <p style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#6B6B6B", fontFamily: "monospace" }}>
                    {leaderboardData[2].referralCode}
                  </p>
                  <p style={{ margin: "0", fontWeight: "700", color: "#C8A2C8", fontSize: "16px" }}>
                    ₹{leaderboardData[2].donations.toLocaleString()}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Full Leaderboard Table */}
        <div className="soft-table slide-up" style={{ marginBottom: "30px" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #FFC1E3, #C8A2C8, #A7C7E7)",
              padding: "25px",
              color: "white",
              borderRadius: "15px 15px 0 0",
            }}
          >
            <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "700", textAlign: "center" }}>
              ✨ Complete Rankings ✨
            </h2>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead style={{ background: "rgba(255, 193, 227, 0.1)" }}>
                <tr>
                  <th
                    style={{
                      padding: "20px",
                      textAlign: "left",
                      fontWeight: "700",
                      color: "#C8A2C8",
                      fontSize: "16px",
                    }}
                  >
                    Rank
                  </th>
                  <th
                    style={{
                      padding: "20px",
                      textAlign: "left",
                      fontWeight: "700",
                      color: "#C8A2C8",
                      fontSize: "16px",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      padding: "20px",
                      textAlign: "left",
                      fontWeight: "700",
                      color: "#C8A2C8",
                      fontSize: "16px",
                    }}
                  >
                    Referral Code
                  </th>
                  <th
                    style={{
                      padding: "20px",
                      textAlign: "right",
                      fontWeight: "700",
                      color: "#C8A2C8",
                      fontSize: "16px",
                    }}
                  >
                    Donations
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((entry, index) => (
                  <tr
                    key={entry.referralCode}
                    style={{
                      borderBottom: "1px solid rgba(255, 193, 227, 0.2)",
                      background: index < 3 ? "rgba(255, 193, 227, 0.05)" : "transparent",
                    }}
                  >
                    <td style={{ padding: "20px" }}>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "45px",
                          height: "45px",
                          borderRadius: "50%",
                          background: getRankColor(entry.rank),
                          color: "white",
                          fontWeight: "700",
                          fontSize: entry.rank <= 3 ? "20px" : "16px",
                          boxShadow: "0 4px 15px rgba(255, 193, 227, 0.3)",
                        }}
                      >
                        {entry.rank <= 3 ? getRankIcon(entry.rank) : entry.rank}
                      </div>
                    </td>
                    <td style={{ padding: "20px", fontWeight: "700", color: "#4A4A4A", fontSize: "16px" }}>
                      {entry.name}
                    </td>
                    <td
                      style={{
                        padding: "20px",
                        color: "#6B6B6B",
                        fontFamily: "monospace",
                        fontSize: "14px",
                      }}
                    >
                      {entry.referralCode}
                    </td>
                    <td
                      style={{
                        padding: "20px",
                        textAlign: "right",
                        fontWeight: "700",
                        color: "#C8A2C8",
                        fontSize: "16px",
                      }}
                    >
                      ₹{entry.donations.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats Summary */}
        <div
          className="bounce-in"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "25px",
          }}
        >
          <div className="soft-card" style={{ padding: "30px", textAlign: "center" }}>
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>👥</div>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "700",
                background: "linear-gradient(135deg, #FFC1E3, #C8A2C8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "10px",
              }}
            >
              {leaderboardData.length}
            </div>
            <div style={{ color: "#6B6B6B", fontWeight: "600" }}>Amazing Interns</div>
          </div>

          <div className="soft-card" style={{ padding: "30px", textAlign: "center" }}>
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>💰</div>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "700",
                background: "linear-gradient(135deg, #FFC1E3, #C8A2C8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "10px",
              }}
            >
              ₹{leaderboardData.reduce((sum, entry) => sum + entry.donations, 0).toLocaleString()}
            </div>
            <div style={{ color: "#6B6B6B", fontWeight: "600" }}>Total Raised</div>
          </div>

          <div className="soft-card" style={{ padding: "30px", textAlign: "center" }}>
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>📊</div>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "700",
                background: "linear-gradient(135deg, #FFC1E3, #C8A2C8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "10px",
              }}
            >
              ₹
              {Math.round(
                leaderboardData.reduce((sum, entry) => sum + entry.donations, 0) / leaderboardData.length,
              ).toLocaleString()}
            </div>
            <div style={{ color: "#6B6B6B", fontWeight: "600" }}>Average per Intern</div>
          </div>
        </div>
      </div>
    </div>
  )
}
