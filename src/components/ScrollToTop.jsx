import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

function ScrollToTop() {
  const { pathname } = useLocation()
  const [isVisible, setIsVisible] = useState(false)

  // 1. Automatic Reset: Scroll to top of the page on every route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const [scrollProgress, setScrollProgress] = useState(0)

  // 2. Visible Button & Progress Logic
  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = (window.scrollY / totalHeight) * 100
    setScrollProgress(progress)
    setIsVisible(window.scrollY > 300)
  }

  // Scroll to top smoothly when button clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className={`fixed bottom-8 right-8 z-[100] transition-all duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50'}`}>
        <button
          onClick={scrollToTop}
          className="group relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-90"
          aria-label="Scroll to top"
        >
          {/* Dynamic Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="30"
              stroke="white"
              strokeWidth="1.5"
              fill="transparent"
              className="opacity-10"
            />
            <circle
              cx="32"
              cy="32"
              r="30"
              stroke="var(--color-primary)"
              strokeWidth="2.5"
              fill="transparent"
              strokeDasharray="188.5"
              strokeDashoffset={188.5 - (188.5 * scrollProgress) / 100}
              strokeLinecap="round"
              className="transition-all duration-200"
            />
          </svg>

          {/* Luminous Glass Orb */}
          <div className="absolute inset-2 bg-slate-900/40 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl group-hover:bg-primary/20 transition-colors"></div>

          {/* Pulsing Core Glow */}
          <div className="absolute inset-4 bg-primary/20 rounded-full blur-md animate-pulse"></div>

          {/* Arrow Icon */}
          <svg
            className="w-6 h-6 text-white relative z-10 transform transition-transform duration-500 group-hover:-translate-y-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
          </svg>

          {/* Active Status Pulse */}
          <span className="absolute top-3 right-3 w-2 h-2 bg-highlight rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
        </button>
      </div>
    </>
  )
}

export default ScrollToTop
