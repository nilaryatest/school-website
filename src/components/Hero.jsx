function Hero({ title, subtitle, children, category = "Gaighata High School", className = "" }) {
    return (
        <section className={`relative bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-28 md:py-36 overflow-hidden animate-fadeIn ${className}`}>
            {/* Luminous Glass Blurs (Premium Depth without "Darkness") */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-highlight/20 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/3"></div>

            {/* Institutional Blueprint Grid (Vibrant Academic feel) */}
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                {/* Re-integrated Institutional Badge (The "VIP" detail) */}
                <div className="inline-flex items-center gap-3 px-5 py-2 mb-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full animate-slideUp shadow-xl shadow-black/5">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/90">{category}</span>
                </div>

                <h1 className="text-5xl md:text-8xl font-black mb-8 animate-slideUp tracking-tighter leading-[0.9] drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]">
                    {title}
                </h1>

                {subtitle && (
                    <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-slideUp text-white/80 font-medium leading-relaxed drop-shadow-sm" style={{ animationDelay: '0.15s' }}>
                        {subtitle}
                    </p>
                )}

                {children && (
                    <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slideUp items-center" style={{ animationDelay: '0.3s' }}>
                        {children}
                    </div>
                )}
            </div>

            {/* Elegant bottom curve or transition */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/5 to-transparent"></div>
        </section>
    )
}

export default Hero
