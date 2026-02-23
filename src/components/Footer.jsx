import { Link } from "react-router-dom"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0a192f] text-slate-400 overflow-hidden animate-fadeIn border-t-4 border-transparent" style={{ borderImage: 'linear-gradient(to right, var(--primary), var(--secondary)) 1' }}>
      {/* Signature Brand Blurs (Consistency with Hero) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

      {/* Main Footer Hub */}
      <div className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 mb-20">

            {/* Column 1: Institutional Identity (Large) */}
            <div className="lg:col-span-5 animate-slideUp" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">🏫</span>
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tighter leading-none">Gaighata H.S.</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Established 1948</span>
                  </div>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-slate-400 max-w-md mb-8 italic">
                "Nurturing intellect and character for over seven decades. An institution dedicated to the pursuit of educational excellence and holistic growth."
              </p>

              {/* Social Index - Glassmorphism */}
              <div>
                <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-4">Digital Connectivity</p>
                <div className="flex items-center gap-4">
                  {[
                    { icon: "f", color: "bg-blue-600" },
                    { icon: "𝕏", color: "bg-slate-800" },
                    { icon: "📷", color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500" },
                    { icon: "▶", color: "bg-red-600" }
                  ].map((social, idx) => (
                    <a key={idx} href="#" className={`w-10 h-10 rounded-xl ${social.color} flex items-center justify-center text-white text-sm hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/20`}>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Navigation Pillars */}
            <div className="lg:col-span-4 grid sm:grid-cols-2 gap-12">
              <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
                <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-8 border-l-2 border-primary pl-4">Navigation</h4>
                <ul className="space-y-4">
                  {[
                    { label: "Institutional Home", path: "/" },
                    { label: "About Heritage", path: "/about" },
                    { label: "Academic Domains", path: "/academics" },
                    { label: "Contact Portal", path: "/contact" }
                  ].map((link, idx) => (
                    <li key={idx}>
                      <Link to={link.path} className="text-sm font-medium hover:text-white transition-all duration-300 flex items-center group">
                        <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 text-primary">→</span>
                        <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-slideUp" style={{ animationDelay: '0.3s' }}>
                <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-8 border-l-2 border-secondary pl-4">Resources</h4>
                <ul className="space-y-4">
                  {[
                    { label: "Faculty Archive", path: "/teachers" },
                    { label: "Digital Gallery", path: "/gallery" },
                    { label: "Alumni Network", path: "/alumni" },
                    { label: "Announcements", path: "/announcements" }
                  ].map((link, idx) => (
                    <li key={idx}>
                      <Link to={link.path} className="text-sm font-medium hover:text-white transition-all duration-300 flex items-center group">
                        <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 text-secondary">→</span>
                        <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 3: Institutional Index (Contact) */}
            <div className="lg:col-span-3 animate-slideUp" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-8 border-l-2 border-highlight pl-4">Institutional Index</h4>
              <div className="space-y-6">
                <div className="group">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1 opacity-60 group-hover:opacity-100 transition-opacity">Campus Grounds</p>
                  <p className="text-sm text-slate-300 leading-relaxed">Gaighata, West Bengal<br />India - 743249</p>
                </div>
                <div className="group">
                  <p className="text-[10px] font-black text-secondary uppercase tracking-widest mb-1 opacity-60 group-hover:opacity-100 transition-opacity">Registrar Office</p>
                  <p className="text-sm text-slate-300">+91 12345 67890</p>
                </div>
                <div className="group">
                  <p className="text-[10px] font-black text-highlight uppercase tracking-widest mb-1 opacity-60 group-hover:opacity-100 transition-opacity">Correspondence</p>
                  <p className="text-sm text-slate-300 break-all">info@gaighatahs.edu.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Attribution & Legal */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 animate-slideUp" style={{ animationDelay: '0.5s' }}>
            <div className="text-[11px] font-bold uppercase tracking-widest flex items-center gap-4">
              <span className="opacity-40">&copy; {currentYear} Gaighata High School (H.S.)</span>
              <span className="w-1 h-1 rounded-full bg-white/20"></span>
              <span className="opacity-40">All Rights Reserved</span>
            </div>

            <div className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[11px] font-bold tracking-[0.1em]">
              Designed with <span className="text-red-500 animate-pulse mx-1">❤️</span> by
              <span className="text-white font-black ml-2 shadow-glow-primary">Nilarya Mallick</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
