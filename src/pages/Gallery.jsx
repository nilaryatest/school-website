import { useState } from "react"
import { Link } from "react-router-dom"
import Hero from "../components/Hero"

function Gallery() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Sports', 'Events', 'Academics', 'Facilities'];

  const galleryItems = [
    { id: 1, category: 'Sports', title: 'Annual Sports Meet', image: 'https://images.unsplash.com/photo-1461896756913-af05dc9b9572?auto=format&fit=crop&q=80&w=800' },
    { id: 2, category: 'Events', title: 'Cultural Festival 2024', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800' },
    { id: 3, category: 'Academics', title: 'Science Exhibition', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800' },
    { id: 4, category: 'Facilities', title: 'Modern Computer Lab', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800' },
    { id: 5, category: 'Events', title: 'Foundation Day', image: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=800' },
    { id: 6, category: 'Sports', title: 'Football Championship', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800' },
    { id: 7, category: 'Academics', title: 'Chemistry Workshop', image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&q=80&w=800' },
    { id: 8, category: 'Events', title: 'Awards Ceremony', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800' },
    { id: 9, category: 'Facilities', title: 'Central Library', image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800' }
  ];

  const filteredItems = activeTab === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Visual Journey"
        subtitle="Exploring the vibrant life and legacy of Gaighata High School through our lens."
      />


      {/* Gallery Exhibition Grid */}
      <section className="py-24 bg-white animate-fadeIn">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              Photo Archives
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-heading mb-6 tracking-tight leading-tight">Institutional <span className="text-primary italic">Memoirs.</span></h2>
            <div className="w-20 h-1 bg-primary/20 mx-auto rounded-full mb-12"></div>

            {/* Integrated Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 sticky top-24 z-30 pb-4">
              {categories.map((cat, idx) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 shadow-sm ${activeTab === cat
                    ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-105'
                    : 'bg-white text-muted hover:bg-slate-50 hover:text-primary border border-slate-100'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-[2.5rem] bg-slate-900 animate-slideUp"
                style={{ animationDelay: `${(index % 3) * 0.1}s` }}
              >
                {/* Image Container with Sophisticated Zoom */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-90 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100 group-hover:rotate-1"
                  />
                </div>

                {/* The "Premium Portrait" Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-4 py-1.5 bg-highlight text-primary text-[10px] font-black uppercase rounded-full mb-4 tracking-[0.2em] shadow-lg">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-3xl mb-4 leading-tight tracking-tight">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-4 text-white/70">
                      <div className="w-12 h-0.5 bg-highlight/50 rounded-full"></div>
                      <span className="text-xs font-bold uppercase tracking-widest">Enlarge Story</span>
                    </div>
                  </div>
                </div>

                {/* Hover Glow / Selection Border */}
                <div className="absolute inset-0 border-[1.5rem] border-white/0 group-hover:border-white/5 rounded-[2.5rem] transition-all duration-700 pointer-events-none"></div>

                {/* Corner Accent */}
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-32 animate-slideUp">
              <div className="text-6xl mb-6 opacity-20">🎞️</div>
              <h3 className="text-2xl font-bold text-heading mb-2">Portfolio Pending</h3>
              <p className="text-muted italic">Capturing memories for this collection soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Global Signature CTA Block */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary text-white relative overflow-hidden animate-fadeIn" style={{ animationDelay: '0.4s' }}>
        {/* Brand Blurs for Continuity */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-highlight/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto mb-12 animate-slideUp">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-highlight uppercase bg-white/10 backdrop-blur-sm rounded-full">
              Take the Next Step
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">Step Into <span className="text-highlight">Our World.</span></h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto italic">Experience our vibrant campus and modern facilities firsthand. We welcome visitors for institutional tours.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <Link to="/contact" className="bg-white text-primary font-bold py-3.5 px-10 rounded-full hover:bg-highlight hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-highlight/20">
              BOOK A TOUR
            </Link>
            <Link to="/academics" className="bg-primary-dark/30 backdrop-blur-md text-white border border-white/30 font-bold py-3.5 px-10 rounded-full hover:bg-white/10 transition-all duration-300">
              ACADEMIC OVERVIEW
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery