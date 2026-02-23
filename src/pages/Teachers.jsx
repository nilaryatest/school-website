import Hero from "../components/Hero"
import { Link } from "react-router-dom"

function Teachers() {
  const leadershipData = [
    { id: 1, name: 'Dr. Suresh Maharaj', position: 'President (School)', email: 'suresh.maharaj@gaighata.edu', phone: '+91 9876543200', role: 'President', icon: '👑', qualification: 'Ph.D, M.A' },
    { id: 2, name: 'Mr. Sanjay Dutta', position: 'Head Teacher', email: 'sanjay.dutta@gaighata.edu', phone: '+91 9876543201', role: 'Head Sir', icon: '🎓', qualification: 'M.A, M.Ed, Ph.D', subject: 'History' },
    { id: 3, name: 'Ms. Geeta Gupta', position: 'Assistant Head Teacher', email: 'geeta.gupta@gaighata.edu', phone: '+91 9876543202', role: 'Asst Head Sir', icon: '📋', qualification: 'M.Sc, B.Ed', subject: 'Mathematics' },
    { id: 4, name: 'Mr. Rajesh Pandey', position: 'Managing Committee Member', email: 'rajesh.pandey@gaighata.edu', phone: '+91 9876543203', role: 'Committee', icon: '👔', qualification: 'M.Com' },
    { id: 5, name: 'Ms. Kavya Singh', position: 'Managing Committee Member', email: 'kavya.singh@gaighata.edu', phone: '+91 9876543204', role: 'Committee', icon: '👔', qualification: 'M.A' },
  ]

  const teachersData = [
    { id: 1, name: 'Mr. Rajesh Kumar', subject: 'Mathematics', email: 'rajesh.kumar@gaighata.edu', phone: '+91 9876543210', qualification: 'M.Sc, B.Ed' },
    { id: 2, name: 'Ms. Priya Sharma', subject: 'English', email: 'priya.sharma@gaighata.edu', phone: '+91 9876543211', qualification: 'M.A, B.Ed' },
    { id: 3, name: 'Dr. Amit Patel', subject: 'Physics', email: 'amit.patel@gaighata.edu', phone: '+91 9876543212', qualification: 'Ph.D, M.Sc, B.Ed' },
    { id: 4, name: 'Ms. Sneha Singh', subject: 'Chemistry', email: 'sneha.singh@gaighata.edu', phone: '+91 9876543213', qualification: 'M.Sc, B.Ed' },
    { id: 5, name: 'Mr. Vikram Das', subject: 'Biology', email: 'vikram.das@gaighata.edu', phone: '+91 9876543214', qualification: 'M.Sc, B.Ed' },
    { id: 6, name: 'Ms. Anjali Verma', subject: 'History', email: 'anjali.verma@gaighata.edu', phone: '+91 9876543215', qualification: 'M.A, B.Ed' },
    { id: 7, name: 'Mr. Arun Malik', subject: 'Computer Science', email: 'arun.malik@gaighata.edu', phone: '+91 9876543216', qualification: 'M.Tech, B.Ed' },
    { id: 8, name: 'Ms. Divya Nair', subject: 'Geography', email: 'divya.nair@gaighata.edu', phone: '+91 9876543217', qualification: 'M.Sc, B.Ed' },
    { id: 9, name: 'Mr. Rohan Chakraborty', subject: 'Hindi', email: 'rohan.chakraborty@gaighata.edu', phone: '+91 9876543218', qualification: 'M.A, B.Ed' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Distinguished Faculty"
        subtitle="Dedicated Educators Committed to Academic Excellence and Student Development"
      />

      {/* Faculty Strengths - Premium Plaques */}
      <section className="py-24 bg-white animate-fadeIn" style={{ animationDelay: '0.1s' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-20 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              Institutional Core
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-heading mb-6 tracking-tight leading-tight">Faculty <span className="text-secondary italic">Excellence.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🎓", title: "Highly Qualified", sub: "Subject Expertise", desc: "Masters and PhD holders committed to deep academic rigour." },
              { icon: "📚", title: "Experienced", sub: "Legacy of Teaching", desc: "A combined heritage of over 500 years of pedagogical experience." },
              { icon: "💡", title: "Innovative", sub: "Modern Approach", desc: "Utilizing digital tools and modern teaching methodologies." },
              { icon: "❤️", title: "Dedicated", sub: "Student Centric", desc: "Passionate mentors focused on individual student growth." }
            ].map((strength, idx) => (
              <div key={idx} className="group bg-slate-50 p-8 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 text-left animate-slideUp relative overflow-hidden" style={{ animationDelay: `${0.1 * idx}s` }}>
                <div className="text-5xl mb-6 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 font-bold opacity-80 group-hover:opacity-100">{strength.icon}</div>
                <h3 className="text-xl font-extrabold text-heading mb-1 group-hover:text-primary transition-colors">{strength.title}</h3>
                <div className="text-muted text-xs uppercase tracking-widest font-black opacity-60 mb-4">{strength.sub}</div>
                <p className="text-body text-sm leading-relaxed">{strength.desc}</p>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Leadership - Premium Profile Display */}
      <section className="py-24 bg-slate-50 relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              Governance
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-heading mb-6 tracking-tight leading-tight">School <span className="text-primary font-medium italic">Leadership.</span></h2>
            <p className="text-body text-lg italic border-l-4 border-primary/20 pl-6 mx-auto max-w-xl">"Visionary leaders guiding our institution towards new horizons of educational excellence."</p>
          </div>

          {/* VIP Leadership Tier (Head & Assistant Head) */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
            {leadershipData.filter(l => l.id === 2 || l.id === 3).map((leader, index) => (
              <div key={leader.id} className="group bg-white rounded-[3rem] shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-700 animate-slideUp relative" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="h-80 relative overflow-hidden">
                  <img
                    src={leader.id === 2
                      ? "https://images.unsplash.com/photo-1544168190-79c17527004f?auto=format&fit=crop&q=80&w=800&h=1000"
                      : "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1000"
                    }
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>

                  {/* VIP Badge */}
                  <div className="absolute top-8 left-8 bg-highlight text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg z-20">
                    Senior Administration
                  </div>
                </div>

                <div className="p-10 text-center">
                  <h3 className="text-3xl font-black text-heading mb-1 tracking-tight group-hover:text-primary transition-colors">{leader.name}</h3>
                  <div className="flex flex-col gap-1 mb-8">
                    <p className="text-secondary font-bold text-sm uppercase tracking-widest leading-tight">{leader.position}</p>
                    <p className="text-primary font-black text-xs uppercase tracking-[0.2em]">{leader.subject}</p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-6 group-hover:bg-primary/5 transition-colors space-y-4">
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🎓</span>
                        <div className="text-xs font-black text-muted uppercase tracking-tighter opacity-70">Credentials</div>
                      </div>
                      <div className="text-sm font-bold text-heading">{leader.qualification}</div>
                    </div>

                    <div className="w-12 h-px bg-slate-200 mx-auto"></div>

                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">📞</span>
                        <div className="text-xs font-black text-muted uppercase tracking-tighter opacity-70">Phone</div>
                      </div>
                      <div className="text-lg font-bold text-heading">{leader.phone}</div>
                    </div>

                    <div className="w-12 h-px bg-slate-200 mx-auto"></div>

                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">✉️</span>
                        <div className="text-xs font-black text-muted uppercase tracking-tighter opacity-70">Email</div>
                      </div>
                      <div className="text-sm font-bold text-heading break-all leading-tight">{leader.email}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary Leadership Tier */}
          <div className="grid md:grid-cols-3 gap-8">
            {leadershipData.filter(l => l.id !== 2 && l.id !== 3).map((leader, index) => (
              <div key={leader.id} className="group bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-700 animate-slideUp" style={{ animationDelay: `${0.1 * (index + 2)}s` }}>
                <div className="bg-slate-50 h-40 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                  <div className="text-6xl group-hover:scale-125 transition-transform duration-1000 relative z-10">{leader.icon}</div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-lg font-black text-heading mb-1 tracking-tight group-hover:text-primary transition-colors">{leader.name}</h3>
                  <p className="text-secondary font-bold text-xs uppercase tracking-widest mb-4 h-8 flex items-center justify-center leading-tight">{leader.position}</p>

                  <div className="bg-slate-50 rounded-xl p-3 group-hover:bg-primary/5 transition-colors space-y-2">
                    <div className="flex items-center gap-2 justify-center">
                      <span className="text-xs">📞</span>
                      <div className="text-xs font-bold text-heading">{leader.phone}</div>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <span className="text-xs">✉️</span>
                      <div className="text-xs font-bold text-heading transition-colors break-all">{leader.email}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments - Streamlined Archives */}
      <section className="py-24 bg-white animate-fadeIn" style={{ animationDelay: '0.3s' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-secondary uppercase bg-secondary/10 rounded-full">
              Knowledge Domains
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-heading mb-6 tracking-tight leading-tight">Academic <span className="text-secondary italic">Departments.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "📖", title: "Languages", desc: "English, Hindi, and Regional Language mastery corridors." },
              { icon: "🔢", title: "Mathematics", desc: "The core of logic: Algebra, Geometry, and Advanced Calculus." },
              { icon: "🔬", title: "Science", desc: "Investigating the universe through Physics, Chemistry, and Biology." },
              { icon: "📜", title: "Social Studies", desc: "Global perspectives through History, Geography, and Civics." },
              { icon: "💻", title: "Computer Science", desc: "Future-ready programming and digital architecture studies." },
              { icon: "🎨", title: "Arts & PE", desc: "Cultural expression and athletic excellence development." }
            ].map((dept, idx) => (
              <div key={idx} className="group p-10 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100 animate-slideUp" style={{ animationDelay: `${0.1 * idx}s` }}>
                <div className="text-4xl mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all">{dept.icon}</div>
                <h3 className="text-xl font-extrabold text-heading mb-2 group-hover:text-secondary transition-colors">{dept.title}</h3>
                <p className="text-body text-sm leading-relaxed">{dept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Profiles - High-Impact Cards */}
      <section className="py-24 bg-slate-50 relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.4s' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              Our Faculty
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-heading mb-6 tracking-tight leading-tight">Meet Our <span className="text-primary italic">Mentors.</span></h2>
            <p className="text-body text-lg italic">The dedicated team of educators shaping the future of Gaighata High School.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teachersData.map((teacher, index) => (
              <div key={teacher.id} className="group bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-700 animate-slideUp" style={{ animationDelay: `${0.05 * index}s` }}>
                <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 h-48 flex items-center justify-center relative overflow-hidden">
                  <div className="text-9xl opacity-80 group-hover:scale-110 transition-transform duration-1000">👨‍🏫</div>

                  {/* Floating Badge */}
                  <div className="absolute top-6 right-6 px-4 py-1.5 bg-white/80 backdrop-blur-md rounded-full border border-primary/10 text-xs font-bold text-primary uppercase tracking-widest shadow-sm">
                    Expert Faculty
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-heading mb-1 tracking-tight group-hover:text-primary transition-colors">{teacher.name}</h3>
                    <p className="text-primary font-bold text-sm uppercase tracking-widest">{teacher.subject}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl group-hover:bg-primary/5 transition-colors">
                      <span className="text-xl">🎓</span>
                      <div>
                        <p className="text-xs font-black text-muted uppercase tracking-tighter opacity-70 mb-0.5">Credentials</p>
                        <p className="text-sm font-bold text-heading">{teacher.qualification}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl group-hover:bg-primary/5 transition-colors">
                      <span className="text-xl">📞</span>
                      <div>
                        <p className="text-xs font-black text-muted uppercase tracking-tighter opacity-70 mb-0.5">Phone</p>
                        <p className="text-sm font-bold text-heading">{teacher.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl group-hover:bg-primary/5 transition-colors">
                      <span className="text-xl">✉️</span>
                      <div>
                        <p className="text-xs font-black text-muted uppercase tracking-tighter opacity-70 mb-0.5">Email</p>
                        <p className="text-sm font-bold text-heading break-all">{teacher.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Final CTA - Signature Style */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary text-white relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.5s' }}>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-highlight/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto mb-12 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-highlight uppercase bg-white/10 backdrop-blur-sm rounded-full">
              Begin Your Journey
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter leading-none">The Future <span className="text-highlight">starts here.</span></h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed italic mb-10">Connect with our institutional coordinators to learn more about the Gaighata academic experience.</p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-white text-primary font-black px-12 py-5 rounded-full text-xs uppercase tracking-widest hover:bg-highlight hover:text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-highlight/20">
                Contact Us
              </Link>
              <div className="flex items-center justify-center gap-3 px-8 py-5 rounded-full border border-white/30 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-highlight animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-widest text-white/90">Admissions Active</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Teachers
