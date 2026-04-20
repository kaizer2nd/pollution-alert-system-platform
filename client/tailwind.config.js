/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b"
        },
        ocean: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)",
        glow: "0 0 40px rgba(59, 130, 246, 0.25)"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top left, rgba(34,197,94,0.25), transparent 55%), radial-gradient(circle at top right, rgba(59,130,246,0.2), transparent 50%)",
        "glass":
          "linear-gradient(135deg, rgba(255,255,255,0.75), rgba(255,255,255,0.25))"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "pulseGlow 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
}
