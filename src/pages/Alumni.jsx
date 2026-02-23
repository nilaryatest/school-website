import { Link } from "react-router-dom"
import Hero from "../components/Hero"

function Alumni() {
  const alumni = [
    { batch: '2015', profession: 'Software Engineer', name: 'Raj Kumar', company: 'Google' },
    { batch: '2018', profession: 'Chartered Accountant', name: 'Priya Sharma', company: 'EY' },
    { batch: '2016', profession: 'Doctor', name: 'Amit Patel', company: 'AIIMS' },
    { batch: '2017', profession: 'Entrepreneur', name: 'Sarah Khan', company: 'StartUp Founder' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Alumni Network"
        subtitle="Join a Network of Successful Graduates"
      />

      {/* Alumni Stats */}
      <section className="py-24 bg-white relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.1s' }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              Global Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-heading mb-6 tracking-tight leading-tight">Our Legacy <span className="text-primary italic">Worldwide.</span></h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: "500+", label: "Active Alumni", sub: "Global Network", icon: "🌐", delay: "0.1s" },
              { val: "50+", label: "Countries", sub: "Global Presence", icon: "📍", delay: "0.2s" },
              { val: "100+", label: "Companies", sub: "Elite Institutions", icon: "🏢", delay: "0.3s" },
              { val: "75+", label: "Years Legacy", sub: "Excellence Since 1948", icon: "🏛️", delay: "0.4s" }
            ].map((stat, idx) => (
              <div key={idx} className="group bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 text-left animate-slideUp relative overflow-hidden" style={{ animationDelay: stat.delay }}>
                <div className="flex justify-between items-center mb-6">
                  <div className="text-4xl font-black text-primary tracking-tighter transform group-hover:translate-x-1 transition-transform">{stat.val}</div>
                  <div className="text-5xl opacity-70 group-hover:opacity-100 group-hover:scale-125 group-hover:rotate-6 transition-all duration-700">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-lg font-bold text-heading mb-1">{stat.label}</div>
                <div className="text-muted text-xs uppercase tracking-widest font-bold opacity-80 italic">{stat.sub}</div>

                {/* Decorative bottom bar */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Alumni */}
      <section className="py-24 bg-slate-50 relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-heading mb-6 tracking-tight leading-tight">Leaders making <br /><span className="text-primary italic">a Difference.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {alumni.map((member, index) => (
              <div key={index} className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 animate-slideUp text-center" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                <div className="w-24 h-24 rounded-full bg-slate-100 mx-auto mb-8 flex items-center justify-center text-5xl group-hover:scale-110 group-hover:rotate-6 transition-all shadow-sm border-4 border-white">
                  �‍🎓
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-black text-heading mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary opacity-70">Batch of {member.batch}</span>
                </div>
                <div className="w-10 h-1 bg-secondary/20 mx-auto mb-6 group-hover:w-16 transition-all duration-500"></div>
                <p className="text-heading font-bold text-sm mb-1">{member.profession}</p>
                <p className="text-muted text-xs uppercase tracking-widest font-black opacity-60 italic">{member.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Alumni / Opportunities */}
      <section className="py-24 bg-white relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.3s' }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Header Side */}
            <div className="lg:col-span-6 animate-slideInLeft">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
                Alumni Hub
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-heading mb-8 tracking-tight leading-tight">
                Empowering the <br /> <span className="text-primary italic">Next Generation.</span>
              </h2>
              <p className="text-body text-lg leading-relaxed mb-10 border-l-4 border-primary/20 pl-6 italic">
                Our legacy lives through our graduates who actively mentor students and provide gateways to global opportunities.
              </p>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-1 bg-primary/20 group-hover:w-20 transition-all duration-500"></div>
                <span className="text-muted text-sm font-bold uppercase tracking-widest">Bridging Past and Future</span>
              </div>
            </div>

            {/* Icons Side */}
            <div className="lg:col-span-6">
              <div className="grid gap-6">
                {[
                  { icon: "💼", title: "Mentorship Program", desc: "One-on-one sessions with industry leaders to guide your career path." },
                  { icon: "🎓", title: "Global Internships", desc: "Exclusive access to placements across top multinational corporations." },
                  { icon: "🤝", title: "Networking Events", desc: "Annual summits and digital meetups with our global family." }
                ].map((item, idx) => (
                  <div key={idx} className="group flex items-center gap-6 p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 animate-slideUp" style={{ animationDelay: `${0.1 * idx}s` }}>
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-heading text-xl mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-sm text-body opacity-80 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (Matching Global Style) */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary text-white relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.5s' }}>
        {/* Repeating the brand blur effects for consistency */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-highlight/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto mb-12 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-highlight uppercase bg-white/10 backdrop-blur-sm rounded-full">
              Reconnect
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">Unity Across <span className="text-highlight">Generations.</span></h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto italic">Join our global network to mentor future leaders and reconnect with your batchmates.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <Link
              to="/contact"
              className="bg-white text-primary font-bold py-3.5 px-10 rounded-full hover:bg-highlight hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-highlight/20 text-lg"
            >
              JOIN THE NETWORK
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Alumni