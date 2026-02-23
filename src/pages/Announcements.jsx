import Hero from "../components/Hero";
import { Link } from "react-router-dom";

function Announcements() {
  const announcements = [
    { date: 'February 15, 2026', category: 'Admissions', title: 'Admission Open for 2026-27', description: 'Applications open for all classes with limited seats. Scholarship opportunities available for meritorious students.', icon: "📝" },
    { date: 'February 10, 2026', category: 'Event', title: 'Annual Sports Day', description: 'Sports day celebration on February 20th with exciting competitions, athletic meets, and medal ceremonies.', icon: "🏅" },
    { date: 'February 5, 2026', category: 'Academic', title: 'Parent-Teacher Meeting', description: 'PTM scheduled from February 18-22 for all classes to discuss student progress and future curriculum goals.', icon: "👥" },
    { date: 'January 30, 2026', category: 'Achievement', title: 'Science Olympiad Winners', description: 'Congratulations to our brilliant students for winning state-level medals in the National Science Olympiad!', icon: "🔬" },
    { date: 'January 25, 2026', category: 'Event', title: 'Foundation Day', description: 'Celebrating 22 years of educational excellence and community service in Gaighata region.', icon: "🏛️" },
    { date: 'January 20, 2026', category: 'Academic', title: 'Digital LMS Integration', description: 'All students now have access to our high-speed Digital Learning Management System for offline study resources.', icon: "💻" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Notice Board"
        subtitle="Stay updated with the latest happenings at Gaighata H.S."
      />

      {/* Announcements List */}
      <section className="py-24 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              Latest Updates
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-heading tracking-tight mb-4 leading-tight">Institutional <span className="text-primary italic">Intelligence.</span></h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-100 p-8 rounded-[2rem] hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 animate-slideUp"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    {announcement.icon}
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="text-sm font-bold text-primary opacity-70 uppercase tracking-widest">{announcement.date}</span>
                      <span className="px-3 py-1 rounded-full bg-slate-200 text-[10px] font-black uppercase text-slate-600 tracking-tighter">
                        {announcement.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-heading mb-3 group-hover:text-primary transition-colors leading-tight">
                      {announcement.title}
                    </h3>

                    <p className="text-body text-base leading-relaxed opacity-80 max-w-2xl">
                      {announcement.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0 self-center hidden md:block">
                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 group-hover:text-primary group-hover:border-primary transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section (Matching About Page Style) */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary text-white relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.4s' }}>
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-highlight/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto mb-12 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-highlight uppercase bg-white/10 backdrop-blur-sm rounded-full">
              Stay Informed
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">Never Miss an <br /> <span className="text-highlight">Important Update</span></h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto italic">Get real-time notifications about school events, academic deadlines, and institutional news directly.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <Link to="/contact" className="bg-white text-primary font-bold py-3.5 px-10 rounded-full hover:bg-highlight hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-highlight/20">
              Subscribe to News
            </Link>
            <a href="#top" className="bg-primary-dark/30 backdrop-blur-md text-white border border-white/30 font-bold py-3.5 px-10 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
              View Archives
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Announcements
