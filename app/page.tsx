"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store user data for demo
    localStorage.setItem("userName", formData.name || "Natshathra")
    router.push("/dashboard")
  }

  return (
    <div className="gradient-bg-main relative">
      {/* Floating Hearts */}
      <div className="floating-hearts">
        <div className="heart">💖</div>
        <div className="heart">💕</div>
        <div className="heart">💗</div>
        <div className="heart">💖</div>
        <div className="heart">💕</div>
        <div className="heart">💗</div>
        <div className="heart">💖</div>
        <div className="heart">💕</div>
        <div className="heart">💗</div>
      </div>

      {/* Floating Bubbles */}
      <div className="floating-bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "20px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div style={{ width: "100%", maxWidth: "420px" }}>
          {/* Logo Section */}
          <div className="fade-in" style={{ textAlign: "center", marginBottom: "40px" }}>
            <div
              className="bounce-in"
              style={{
                display: "inline-block",
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "25px",
                padding: "20px",
                boxShadow: "0 15px 35px rgba(255, 193, 227, 0.4)",
                marginBottom: "25px",
                backdropFilter: "blur(10px)",
              }}
            >
              <img src="/she-can-logo.png" alt="She Can Foundation" style={{ width: "120px", height: "120px" }} />
            </div>
            <p
              style={{
                color: "rgba(74, 74, 74, 0.8)",
                fontSize: "18px",
                fontWeight: "500",
                textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)",
              }}
            >
              Together We Can Change The World 💕
            </p>
          </div>

          {/* Login Form */}
          <div className="soft-card slide-up" style={{ padding: "40px" }}>
            {/* Toggle Buttons */}
            <div style={{ display: "flex", marginBottom: "30px", gap: "10px" }}>
              <button
                onClick={() => setIsLogin(true)}
                style={{
                  flex: 1,
                  padding: "15px",
                  border: "none",
                  borderRadius: "20px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  background: isLogin ? "linear-gradient(135deg, #FFC1E3, #C8A2C8)" : "rgba(255, 193, 227, 0.1)",
                  color: isLogin ? "white" : "#C8A2C8",
                  boxShadow: isLogin ? "0 4px 15px rgba(255, 193, 227, 0.4)" : "none",
                }}
              >
                Login 💖
              </button>
              <button
                onClick={() => setIsLogin(false)}
                style={{
                  flex: 1,
                  padding: "15px",
                  border: "none",
                  borderRadius: "20px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  background: !isLogin ? "linear-gradient(135deg, #FFC1E3, #C8A2C8)" : "rgba(255, 193, 227, 0.1)",
                  color: !isLogin ? "white" : "#C8A2C8",
                  boxShadow: !isLogin ? "0 4px 15px rgba(255, 193, 227, 0.4)" : "none",
                }}
              >
                Sign Up ✨
              </button>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {!isLogin && (
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#C8A2C8",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    Full Name 🌸
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your beautiful name..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="soft-input"
                    required={!isLogin}
                  />
                </div>
              )}

              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#C8A2C8",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Email Address 💌
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="soft-input"
                  required
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#C8A2C8",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Password 🔐
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your secret password..."
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="soft-input"
                    style={{ paddingRight: "50px" }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "15px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "18px",
                    }}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              <button type="submit" className="btn-soft" style={{ fontSize: "16px", marginTop: "10px" }}>
                {isLogin ? "Login to Dashboard ✨" : "Create Account 💕"}
              </button>
            </form>

            <div style={{ textAlign: "center", marginTop: "25px" }}>
              <p style={{ color: "#6B6B6B", fontSize: "14px" }}>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#C8A2C8",
                    fontWeight: "600",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  {isLogin ? "Sign Up 💖" : "Login ✨"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
