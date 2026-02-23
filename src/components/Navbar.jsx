import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/academics', label: 'Academics' },
    { path: '/teachers', label: 'Teachers' },
    { path: '/announcements', label: 'Announcements' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/alumni', label: 'Alumni' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
      <nav className={`
        w-full h-20 pointer-events-auto
        transition-all duration-500 ease-in-out px-6 md:px-12 flex items-center justify-between
        ${scrolled
          ? 'bg-slate-900/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/20'
          : 'bg-white/5 backdrop-blur-md border-b border-white/5'
        }
      `}>
        {/* Institutional Branding */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform duration-500">🏫</div>
          <div className="flex flex-col">
            <h1 className="text-sm md:text-lg font-black text-white tracking-tighter leading-none group-hover:text-primary transition-colors">Gaighata H.S.</h1>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/50">Established 1948</span>
            </div>
          </div>
        </Link>

        {/* Desktop Pillars */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`
                px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 relative group
                ${isActive(link.path)
                  ? 'bg-white text-primary shadow-lg shadow-white/10'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
                }
              `}
            >
              {link.label}
              {isActive(link.path) && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(124,58,237,0.5)]"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Action Portal Button (Contact) */}
        <Link to="/contact" className="hidden lg:flex bg-highlight text-white hover:bg-white hover:text-primary px-8 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-500 hover:scale-105 active:scale-95 border border-white/20">
          Student & Staff Login
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-10 h-10 rounded-xl bg-white/10 flex flex-col items-center justify-center space-y-1.5 transition-all duration-300 hover:bg-white/20"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile App-Style Menu */}
        <div className={`
          absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 p-8 shadow-2xl transition-all duration-500 lg:hidden
          ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-10 invisible'}
        `}>
          <div className="grid grid-cols-2 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  flex flex-col items-center justify-center gap-3 p-6 rounded-3xl transition-all duration-300 border
                  ${isActive(link.path)
                    ? 'bg-primary text-white border-primary-mid shadow-xl shadow-primary/30'
                    : 'bg-white/5 text-white/60 border-white/5 hover:bg-white/10 hover:text-white'
                  }
                `}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xs font-black uppercase tracking-widest">{link.label}</span>
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="w-full mt-6 bg-highlight text-white font-black py-5 rounded-2xl flex items-center justify-center text-xs uppercase tracking-[0.3em] hover:scale-[1.02] transition-transform"
            onClick={() => setIsOpen(false)}
          >
            Student & Staff Login
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
