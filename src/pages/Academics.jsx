import { Link } from "react-router-dom"
import Hero from "../components/Hero"

function Academics() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Academic Programs"
        subtitle="Excellence in Education Across All Levels"
      />

      {/* Programs Overview */}
      <section className="py-24 bg-white relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.1s' }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              Educational Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-heading mb-6 tracking-tight leading-tight">Our Academic <span className="text-primary italic">Streams.</span></h2>
            <p className="text-body text-lg max-w-2xl mx-auto italic opacity-80">We offer a comprehensive curriculum designed to nurture talent and curiosity at every developmental stage.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📚",
                grade: "Primary",
                years: "Grades 1 - 5",
                desc: "Building strong foundations in core subjects through interactive and play-based learning.",
                features: ["Conceptual learning", "Interactive teaching", "Skill development", "Creative expression"],
                color: "from-blue-500 to-indigo-600"
              },
              {
                icon: "🎓",
                grade: "Secondary",
                years: "Grades 6 - 10",
                desc: "Focusing on analytical thinking and academic rigor to prepare students for higher challenges.",
                features: ["Holistic curriculum", "Lab-based learning", "Career guidance", "Competitive exam prep"],
                color: "from-indigo-500 to-purple-600"
              },
              {
                icon: "🏆",
                grade: "Higher Secondary",
                years: "Grades 11 - 12",
                desc: "Specialized education in Science, Arts, and Commerce to shape future career paths.",
                features: ["Subject expertise", "Advanced labs", "University prep", "Individual mentoring"],
                color: "from-purple-500 to-primary"
              }
            ].map((program, idx) => (
              <div key={idx} className="group relative bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 animate-slideUp" style={{ animationDelay: `${0.1 * idx}s` }}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} text-white text-3xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                  {program.icon}
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-black text-heading mb-1 group-hover:text-primary transition-colors">{program.grade}</h3>
                  <span className="text-sm font-bold uppercase tracking-widest text-primary/70">{program.years}</span>
                </div>
                <p className="text-body text-base mb-8 leading-relaxed opacity-90">{program.desc}</p>
                <div className="space-y-4">
                  {program.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-4 group/item">
                      <div className="w-2 h-2 rounded-full bg-primary/30 group-hover/item:bg-primary transition-colors"></div>
                      <span className="text-sm md:text-base font-bold text-heading/90 italic">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-24 bg-slate-50 relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.3s' }}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Header Side */}
            <div className="lg:col-span-5 animate-slideInLeft">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
                Learning Pillars
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-heading mb-8 tracking-tight leading-tight">
                Academic <br /> <span className="text-primary italic">Highlights.</span>
              </h2>
              <p className="text-body text-lg leading-relaxed mb-8 border-l-4 border-primary/20 pl-6 italic">
                Our curriculum is designed not just to teach, but to inspire. We blend traditional values with modern methodologies.
              </p>
            </div>

            {/* Checklist Side */}
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: "🌐", title: "STEM Focus", desc: "Integrated learning of Science, Tech, Engineering & Math." },
                  { icon: "📖", title: "Language Skills", desc: "Emphasis on communicative English and regional excellence." },
                  { icon: "💻", title: "Digital Literacy", desc: "Modern coding labs and practical computer training." },
                  { icon: "🏅", title: "Values Education", desc: "Developing civic sense and character for a better world." }
                ].map((highlight, idx) => (
                  <div key={idx} className="group flex items-start gap-5 animate-slideUp" style={{ animationDelay: `${0.1 * idx}s` }}>
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 text-3xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-heading group-hover:text-primary transition-colors text-lg mb-2">{highlight.title}</h3>
                      <p className="text-sm text-body leading-relaxed opacity-80">{highlight.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section (Matching Home/About Style) */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary text-white relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.4s' }}>
        {/* Repeating the brand blur effects for consistency */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-highlight/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto mb-12 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-highlight uppercase bg-white/10 backdrop-blur-sm rounded-full">
              Admissions Open
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">Secure Your Child's <span className="text-highlight">Future</span></h2>
            <p className="text-lg text-white/80">Join our community of excellence. We are accepting applications for the upcoming academic session.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { icon: "📄", title: "Enquiry", content: "Submit an online enquiry for admission details", delay: "0.1s" },
              { icon: "🏫", title: "Campus Tour", content: "Visit our facilities and meet our educators", delay: "0.2s" },
              { icon: "🤝", title: "Counseling", content: "Understand how our curriculum fits your child", delay: "0.3s" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl hover:bg-white/20 transition-all duration-500 group animate-slideUp" style={{ animationDelay: item.delay }}>
                <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-lg font-bold mb-1 text-highlight">{item.title}</h3>
                <p className="text-xs font-medium leading-relaxed opacity-90">{item.content}</p>
              </div>
            ))}
          </div>

          <div className="animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold py-3.5 px-10 rounded-full hover:bg-highlight hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-highlight/20"
            >
              APPLY NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Academics
