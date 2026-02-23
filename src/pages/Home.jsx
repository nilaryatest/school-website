import { Link } from "react-router-dom"
import Hero from "../components/Hero"

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Gaighata High School (H.S.)"
        subtitle="Empowering students with knowledge, character, and excellence for a brighter future"
      >
        <Link to="/about" className="bg-white hover:bg-highlight hover:text-white text-primary font-black px-10 py-4 rounded-full text-[11px] uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-white/20">
          Learn Our Legacy
        </Link>
        <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-black px-10 py-4 rounded-full text-[11px] uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105">
          Contact Portal
        </Link>
      </Hero>

      {/* Quick Stats Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              Our Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-heading mb-6 tracking-tight">
              A Legacy of <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-lg text-body leading-relaxed">
              For over seven decades, we have been dedicated to nurturing young minds and fostering a community of lifelong learners.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {/* Stat 1: Students */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center relative overflow-hidden animate-slideUp" style={{ animationDelay: '0.1s' }}>
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full transform translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="text-4xl mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <div className="text-4xl font-extrabold text-heading mb-1 tracking-tight">1000+</div>
              <div className="text-muted font-medium uppercase tracking-wider text-xs">Total Students</div>
            </div>

            {/* Stat 2: Teachers */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center relative overflow-hidden animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/5 rounded-bl-full transform translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="text-4xl mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-secondary/10 text-secondary group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
              </div>
              <div className="text-4xl font-extrabold text-heading mb-1 tracking-tight">50+</div>
              <div className="text-muted font-medium uppercase tracking-wider text-xs">Expert Teachers</div>
            </div>

            {/* Stat 3: Experience */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center relative overflow-hidden animate-slideUp" style={{ animationDelay: '0.3s' }}>
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-bl-full transform translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="text-4xl mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 text-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="text-4xl font-extrabold text-heading mb-1 tracking-tight">75+</div>
              <div className="text-muted font-medium uppercase tracking-wider text-xs">Years Legacy</div>
            </div>

            {/* Stat 4: Pass Rate */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center relative overflow-hidden animate-slideUp" style={{ animationDelay: '0.4s' }}>
              <div className="absolute top-0 right-0 w-16 h-16 bg-highlight/10 rounded-bl-full transform translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="text-4xl mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-highlight/20 text-indigo-600 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </div>
              <div className="text-4xl font-extrabold text-heading mb-1 tracking-tight">95%</div>
              <div className="text-muted font-medium uppercase tracking-wider text-xs">Pass Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.3s' }}>
        {/* Decorative background element */}
        <div className="absolute -left-20 top-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Side */}
            <div className="animate-slideInLeft relative z-10">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-heading mb-6 tracking-tight leading-tight">
                Building Futures <br /> <span className="text-secondary font-medium italic">Together.</span>
              </h2>

              <div className="space-y-6">
                <p className="text-body text-lg leading-relaxed">
                  Gaighata High School (H.S.) has been a cornerstone of education in our community for over seven decades.
                  We are committed to providing quality education that nurtures both academic excellence and character development.
                </p>

                {/* Feature highlights */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                  {[
                    "Dedicated Faculty",
                    "Modern Science Labs",
                    "Rich Sports Heritage",
                    "Holistic Development"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-body">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-body leading-relaxed">
                  Our dedicated faculty, modern facilities, and comprehensive curriculum prepare students for success in higher education
                  and life beyond school.
                </p>

                <Link to="/about" className="group flex items-center gap-3 bg-primary text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 inline-block">
                  Discover Our Mission
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative animate-slideInRight">
              {/* Main Image Container */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <div className="bg-slate-200 aspect-[4/5] flex items-center justify-center text-slate-400">
                  <span className="text-lg font-medium italic">School Campus Photo</span>
                </div>
                {/* Overlay brand accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>

              {/* Decorative accent box behind image */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-3xl -z-10 translate-x-2 translate-y-2"></div>

              {/* Floating "Since" Badge */}
              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 animate-bounce-slow">
                <div className="text-primary font-bold text-3xl leading-none">75+</div>
                <div className="text-muted text-[10px] uppercase font-bold tracking-widest mt-1">Years of Legacy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-24 bg-slate-50 relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.4s' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              Pathways to Success
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-heading mb-6 tracking-tight">Academic <span className="text-primary">Streams</span></h2>
            <p className="text-lg text-body">Discover our comprehensive curriculum designed to nurture talent and foster intellectual growth at every stage.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Primary Education",
                icon: "📚",
                desc: "Comprehensive primary education focusing on foundational skills and holistic development.",
                color: "bg-blue-500",
                delay: "0.1s"
              },
              {
                title: "Secondary Education",
                icon: "🎓",
                desc: "Advanced curriculum preparing students for higher secondary education and competitive exams.",
                color: "bg-purple-600",
                delay: "0.2s"
              },
              {
                title: "Higher Secondary",
                icon: "🏆",
                desc: "Specialized streams in Science, Commerce, and Arts with career guidance and counseling.",
                color: "bg-indigo-700",
                delay: "0.3s"
              }
            ].map((program, idx) => (
              <div key={idx} className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative overflow-hidden animate-slideUp" style={{ animationDelay: program.delay }}>
                <div className={`absolute top-0 left-0 w-2 h-full ${program.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 inline-block bg-slate-50 p-4 rounded-2xl">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-heading mb-4 group-hover:text-primary transition-colors">{program.title}</h3>
                <p className="text-body mb-8 leading-relaxed">
                  {program.desc}
                </p>
                <Link to="/academics" className="inline-flex items-center gap-2 text-primary font-bold group/btn">
                  Learn More
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News/Announcements */}
      <section className="py-24 bg-white animate-fadeIn" style={{ animationDelay: '0.5s' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 animate-slideUp">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-secondary uppercase bg-secondary/10 rounded-full">
                What's Happening
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-heading tracking-tight leading-tight">Latest <span className="text-secondary">Updates</span></h2>
            </div>
            <Link to="/announcements" className="text-secondary font-bold flex items-center gap-2 hover:gap-4 transition-all pb-2 border-b-2 border-secondary/20 hover:border-secondary">
              View All News <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { date: "Jan 15, 2026", title: "Admission Open for 2026-27", tag: "Admission", desc: "Applications are now open for the academic year 2026-27. Limited seats available.", delay: "0.1s" },
              { date: "Jan 10, 2026", title: "Annual Sports Day", tag: "Events", desc: "Join us for the Annual Sports Day celebration on February 20th, 2026.", delay: "0.2s" },
              { date: "Jan 05, 2026", title: "Parent-Teacher Meeting", tag: "Meetings", desc: "Scheduled parent-teacher meetings for all classes. Check schedule for your ward.", delay: "0.3s" }
            ].map((news, idx) => (
              <div key={idx} className="group bg-slate-50 p-8 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-500 animate-slideUp" style={{ animationDelay: news.delay }}>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-bold text-muted uppercase tracking-tighter bg-white px-3 py-1 rounded-full shadow-sm">{news.date}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-secondary bg-secondary/10 px-2 py-1 rounded">{news.tag}</span>
                </div>
                <h3 className="text-xl font-bold text-heading mb-4 leading-snug group-hover:text-secondary transition-colors">{news.title}</h3>
                <p className="text-body text-sm mb-6 line-clamp-2">
                  {news.desc}
                </p>
                <Link to="/announcements" className="text-heading font-black text-xs uppercase tracking-widest flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                  Read Article <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.6s' }}>
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              Explore More
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-heading tracking-tight mb-4">Quick <span className="text-primary">Access</span></h2>
            <p className="text-body max-w-xl mx-auto italic">Everything you need to know about our institution is just a click away.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { to: "/teachers", icon: "👨‍🏫", title: "Our Teachers", sub: "Meet our faculty", delay: "0.1s", color: "text-blue-600", bg: "bg-blue-50" },
              { to: "/gallery", icon: "📸", title: "Gallery", sub: "Life at Gaighata", delay: "0.2s", color: "text-purple-600", bg: "bg-purple-50" },
              { to: "/alumni", icon: "🎓", title: "Alumni", sub: "Success network", delay: "0.3s", color: "text-indigo-600", bg: "bg-indigo-50" },
              { to: "/contact", icon: "📞", title: "Contact Us", sub: "Get in touch", delay: "0.4s", color: "text-cyan-600", bg: "bg-cyan-50" }
            ].map((link, idx) => (
              <Link key={idx} to={link.to} className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center animate-slideUp" style={{ animationDelay: link.delay }}>
                <div className={`text-4xl mb-4 w-16 h-16 ${link.bg} ${link.color} mx-auto rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {link.icon}
                </div>
                <h3 className="font-bold text-lg text-heading mb-1 group-hover:text-primary transition-colors">{link.title}</h3>
                <p className="text-xs text-muted font-medium uppercase tracking-tight">{link.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Contact Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary text-white relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.7s' }}>
        {/* Repeating the brand blur effects for consistency */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-highlight/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto mb-12 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-highlight uppercase bg-white/10 backdrop-blur-sm rounded-full">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">Visit Our <span className="text-highlight">Campus</span></h2>
            <p className="text-lg text-white/80">Experience our vibrant learning environment firsthand. We welcome parents and students for personalized tours.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { icon: "📍", title: "Address", content: "Gaighata, West Bengal, India - 743249", delay: "0.1s" },
              { icon: "📞", title: "Phone", content: "+91 12345 67890 / +91 98765 43210", delay: "0.2s" },
              { icon: "✉️", title: "Email", content: "info@gaighatahs.edu.in", delay: "0.3s" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl hover:bg-white/20 transition-all duration-500 group animate-slideUp" style={{ animationDelay: item.delay }}>
                <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-lg font-bold mb-1 text-highlight">{item.title}</h3>
                <p className="text-xs font-medium leading-relaxed opacity-90">{item.content}</p>
              </div>
            ))}
          </div>

          <div className="animate-slideUp" style={{ animationDelay: '0.5s' }}>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold py-3.5 px-10 rounded-full hover:bg-highlight hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-highlight/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
              GET DIRECTIONS
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
