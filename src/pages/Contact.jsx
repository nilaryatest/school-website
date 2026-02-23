import { useState } from 'react';
import Hero from "../components/Hero"

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will contact you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Connect With Us"
        subtitle="Our administrative and academic team is here to assist you with every query."
      />

      {/* Contact Section */}
      <section className="py-24 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              Reach Out
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-heading mb-6 tracking-tight leading-tight">Institutional <span className="text-primary italic">Support.</span></h2>
            <div className="w-20 h-1 bg-primary/20 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Contact Information (Premium Plaques) */}
            <div className="lg:col-span-5 space-y-6">
              {[
                { icon: "📍", title: "Official Campus", detail: "Gaighata High School, Village Gaighata, Dist. North 24 Parganas, WB 743134", label: "Address", delay: "0.1s" },
                { icon: "📞", title: "Direct Helplines", detail: "+91 (033) 2442-1234 / +91 98765-43210", label: "Phones", delay: "0.2s" },
                { icon: "✉️", title: "Digital Correspondence", detail: "info@gaighatahighschool.edu / admissions@school.edu", label: "Email", delay: "0.3s" },
                { icon: "🕐", title: "Administration Hours", detail: "Mon - Fri: 9:00 AM - 5:00 PM / Sat: 10:00 AM - 2:00 PM", label: "Working", delay: "0.4s" }
              ].map((item, idx) => (
                <div key={idx} className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 animate-slideUp relative overflow-hidden" style={{ animationDelay: item.delay }}>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase text-primary tracking-widest opacity-60">{item.label}</span>
                      <h3 className="text-lg font-bold text-heading mb-1">{item.title}</h3>
                      <p className="text-sm text-muted leading-relaxed font-medium">{item.detail}</p>
                    </div>
                  </div>
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-primary/5 rounded-bl-[2rem] transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
                </div>
              ))}
            </div>

            {/* Contact Form (Glassmorphism Accents) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl shadow-primary/5 border border-slate-50 animate-slideUp relative overflow-hidden" style={{ animationDelay: '0.3s' }}>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-heading mb-8 tracking-tight">Send a <span className="text-primary italic">Direct Inquiry</span></h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-muted pl-4">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your identity"
                          required
                          className="w-full bg-slate-50/50 border border-slate-200 p-4 rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all focus:shadow-lg focus:shadow-primary/5"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-muted pl-4">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Contact point"
                          required
                          className="w-full bg-slate-50/50 border border-slate-200 p-4 rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all focus:shadow-lg focus:shadow-primary/5"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted pl-4">Subject of Inquiry</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        required
                        className="w-full bg-slate-50/50 border border-slate-200 p-4 rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all focus:shadow-lg focus:shadow-primary/5"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted pl-4">Detailed Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Explain your query in detail..."
                        rows="5"
                        required
                        className="w-full bg-slate-50/50 border border-slate-200 p-4 rounded-2xl focus:outline-none focus:border-primary focus:bg-white transition-all focus:shadow-lg focus:shadow-primary/5 resize-none font-medium"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-primary-dark text-white font-black py-5 rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl shadow-primary/30 uppercase tracking-[0.2em] text-sm"
                    >
                      Transmit Message
                    </button>
                  </form>
                </div>
                {/* Background decorative element */}
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 -z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Premium Digital Cartography) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden animate-fadeIn">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              Find Your Way
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-heading tracking-tight leading-tight">Digital <span className="text-primary italic">Cartography.</span></h2>
          </div>

          <div className="max-w-6xl mx-auto bg-white p-4 rounded-[3.5rem] shadow-2xl shadow-primary/5 animate-slideUp border border-slate-100 overflow-hidden" style={{ animationDelay: '0.1s' }}>
            <div className="bg-slate-100 rounded-[2.5rem] h-[35rem] relative overflow-hidden group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.43718773817!2d88.7358239!3d22.9341209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8b445ca143571%3A0xf2bf5d7cebd622ad!2sGaighata%20High%20School%20(H.S)!5e0!3m2!1sen!2sin!4v1771534063617!5m2!1sen!2sin"
                className="w-full h-full border-0 rounded-[2.5rem]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Global Signature CTA Block */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary text-white relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.4s' }}>
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-highlight/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto mb-12 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-highlight uppercase bg-white/10 backdrop-blur-sm rounded-full">
              Stay Connected
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">Unity across <span className="text-highlight">Channels.</span></h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto italic">Our dedicated team is committed to providing institutional support within 24 hours of contact.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <div className="px-10 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs font-black uppercase tracking-[0.2em]">
              Response Rate: Excellence
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
