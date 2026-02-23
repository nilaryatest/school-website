import { Link } from "react-router-dom"
import Hero from "../components/Hero"

function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="About Gaighata High School (H.S.)"
        subtitle="Excellence in Education, Character in Development"
      />

      {/* History Section */}
      <section className="py-24 bg-white relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.1s' }}>
        {/* Decorative background element */}
        <div className="absolute -left-20 top-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Side */}
            <div className="animate-slideInLeft relative z-10">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
                Our Legacy
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-heading mb-6 tracking-tight leading-tight">
                Seven Decades of <br /> <span className="text-secondary font-medium italic">Academic Excellence.</span>
              </h2>

              <div className="space-y-6">
                <p className="text-body text-lg leading-relaxed">
                  Gaighata High School (H.S.) was established in 1948 with a vision to provide quality education to the students of Gaighata and surrounding areas. Over the past seven decades, we have grown into one of the premier educational institutions in the region.
                </p>
                <p className="text-body leading-relaxed">
                  Our journey has been marked by consistent academic excellence, infrastructure development, and a commitment to holistic education. We have successfully produced thousands of graduates who are now contributing meaningfully to society in various fields.
                </p>
                <p className="text-body leading-relaxed">
                  Today, we stand proud as a trusted name in education, known for our dedicated faculty, modern facilities, and student-centric approach to learning.
                </p>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative animate-slideInRight">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <div className="bg-slate-200 aspect-[4/5] flex items-center justify-center text-slate-400 font-medium italic">
                  Heritage Campus Building
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-3xl -z-10 translate-x-2 translate-y-2"></div>

              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 animate-bounce-slow">
                <div className="text-primary font-bold text-3xl leading-none">1948</div>
                <div className="text-muted text-[10px] uppercase font-bold tracking-widest mt-1">Founding Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              Our Compass
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-heading mb-6 tracking-tight">Mission & <span className="text-primary">Vision</span></h2>
            <p className="text-lg text-body italic">Defining our purpose and charting our course for a brighter tomorrow.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 animate-slideUp" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">🎯</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-body leading-relaxed">
                To provide quality, inclusive, and comprehensive education that empowers students to become responsible citizens, critical thinkers, and leaders capable of making positive contributions to society. We strive to foster an environment where every student can discover their potential and achieve academic excellence.
              </p>
            </div>
            <div className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform">🌟</div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
              <p className="text-body leading-relaxed">
                To be a leading educational institution that nurtures holistic development of students while maintaining highest standards of academic excellence. We envision a school where innovation, tradition, and values come together to shape future leaders and responsible global citizens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white animate-fadeIn" style={{ animationDelay: '0.3s' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-secondary uppercase bg-secondary/10 rounded-full">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-heading mb-6 tracking-tight">Our Core <span className="text-secondary">Values</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "📚", title: "Excellence", desc: "Pursuit of highest standards in academics and character.", color: "bg-blue-600" },
              { icon: "🤝", title: "Integrity", desc: "Commitment to honesty, ethics, and transparent principles.", color: "bg-purple-600" },
              { icon: "🌍", title: "Inclusivity", desc: "Creating a welcoming environment for all students.", color: "bg-indigo-600" },
              { icon: "💡", title: "Innovation", desc: "Continuous improvement through creativity.", color: "bg-cyan-600" }
            ].map((value, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-500 text-center animate-slideUp" style={{ animationDelay: `${0.1 * (idx + 1)}s` }}>
                <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-secondary transition-colors">{value.title}</h3>
                <p className="text-body text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.4s' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              Our Milestones
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-heading mb-6 tracking-tight">Pride of <span className="text-primary">Gaighata</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { val: "75+", label: "Years of Excellence", sub: "Serving since 1948", icon: "🏛️" },
              { val: "1000+", label: "Active Students", sub: "From grades 1 to 12", icon: "👥" },
              { val: "50+", label: "Expert Faculty", sub: "Qualified Educators", icon: "👨‍🏫" },
              { val: "95%", label: "Pass Rate", sub: "Board Exam Success", icon: "📈" },
              { val: "500+", label: "Success Stories", sub: "Global Alumni Network", icon: "🌍" },
              { val: "100+", label: "Activities", sub: "Beyond Academics", icon: "🏃" }
            ].map((stat, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 text-left animate-slideUp relative overflow-hidden" style={{ animationDelay: `${0.1 * idx}s` }}>
                <div className="flex justify-between items-center mb-6">
                  <div className="text-5xl font-black text-primary tracking-tighter transform group-hover:translate-x-1 transition-transform">{stat.val}</div>
                  <div className="text-6xl md:text-7xl opacity-70 group-hover:opacity-100 group-hover:scale-125 group-hover:rotate-6 transition-all duration-700">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-heading font-bold mb-1">{stat.label}</div>
                <div className="text-muted text-xs uppercase tracking-widest font-bold opacity-80">{stat.sub}</div>

                {/* Decorative bottom bar - uses original primary color */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-white animate-fadeIn" style={{ animationDelay: '0.5s' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              Learning Environment
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-heading mb-6 tracking-tight leading-tight">Modern <br /> <span className="text-secondary italic">Infrastructure.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🖥️", title: "Computer Labs", desc: "State-of-the-art facilities with the latest technology." },
              { icon: "🔬", title: "Science Labs", desc: "Well-equipped physics, chemistry, and biology laboratories." },
              { icon: "📖", title: "Resource Library", desc: "Vast collection of digital and print materials." },
              { icon: "🏃", title: "Sports Complex", desc: "Multi-purpose grounds for athletics and regional games." },
              { icon: "🎨", title: "Creative Studios", desc: "Dedicated spaces for art, music, and cultural growth." },
              { icon: "🍲", title: "Dining Pavilion", desc: "A dedicated separate complex for providing hygienic Mid-Day meals to our students." }
            ].map((facility, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-500 animate-slideUp" style={{ animationDelay: `${0.1 * idx}s` }}>
                <div className="text-4xl mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all">{facility.icon}</div>
                <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-primary transition-colors">{facility.title}</h3>
                <p className="text-body text-sm leading-relaxed">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.6s' }}>
        {/* Decorative background blur */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Header Side */}
            <div className="lg:col-span-5 animate-slideInLeft">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
                The Gaighata Advantage
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-heading mb-8 tracking-tight leading-tight">
                Why Choose <br /> <span className="text-primary italic">Our School?</span>
              </h2>
              <p className="text-body text-lg leading-relaxed mb-8 border-l-4 border-primary/20 pl-6 italic">
                "We provide a nurturing environment where academic excellence is balanced with character development and modern life skills."
              </p>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-1 bg-primary/20 group-hover:w-20 transition-all duration-500"></div>
                <span className="text-muted text-sm font-bold uppercase tracking-widest">A Legacy of Trust</span>
              </div>
            </div>

            {/* Checklist Side */}
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Academic Excellence", desc: "Proven success records and board results." },
                  { title: "Expert Faculty", desc: "Qualified teachers committed to student success." },
                  { title: "Infrastructure", desc: "Modern learning labs and digital resources." },
                  { title: "Holistic Growth", desc: "Focus on sports, arts, and character building." },
                  { title: "Student Focused", desc: "Personalized attention for every individual." },
                  { title: "Global Alumni", desc: "A vast network of successful graduates." }
                ].map((point, idx) => (
                  <div key={idx} className="group flex items-start gap-4 animate-slideUp" style={{ animationDelay: `${0.1 * idx}s` }}>
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-heading group-hover:text-primary transition-colors text-lg leading-none mb-2">{point.title}</h3>
                      <p className="text-sm text-body leading-relaxed opacity-80">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section (Matching Home Contact Style) */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary text-white relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.7s' }}>
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-highlight/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto mb-12 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-highlight uppercase bg-white/10 backdrop-blur-sm rounded-full">
              Join Us Today
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">Begin Your <span className="text-highlight">Journey</span></h2>
            <p className="text-lg text-white/80">Experience our vibrant learning environment firsthand. We welcome parents and students for personalized tours.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { icon: "🏛️", title: "Enroll", content: " Admissions now open for new session", delay: "0.1s" },
              { icon: "🏫", title: "Visit", content: "Schedule a personalized campus tour", delay: "0.2s" },
              { icon: "💬", title: "Query", content: "Get answers to all your concerns", delay: "0.3s" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl hover:bg-white/20 transition-all duration-500 group animate-slideUp" style={{ animationDelay: item.delay }}>
                <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-lg font-bold mb-1 text-highlight">{item.title}</h3>
                <p className="text-xs font-medium leading-relaxed opacity-90">{item.content}</p>
              </div>
            ))}
          </div>

          <div className="animate-slideUp" style={{ animationDelay: '0.5s' }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold py-3.5 px-10 rounded-full hover:bg-highlight hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-highlight/20"
            >
              ENROL TODAY
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
