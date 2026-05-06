export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0d1f35 0%, #1e3a5f 45%, #16304f 100%)',
      }}
    >
      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Soft glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl bg-[#c9a84c]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl bg-blue-400" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="reveal text-[#c9a84c] text-xs font-semibold tracking-[0.35em] uppercase mb-6">
          Overseas Employment &bull; Est. Karachi
        </p>

        {/* Main heading */}
        <h1 className="reveal reveal-delay-1 font-playfair text-5xl md:text-7xl font-bold text-white leading-[1.12] mb-6">
          Connecting People<br />
          <span className="italic text-[#c9a84c]">to Opportunities</span><br />
          Worldwide
        </h1>

        {/* Divider */}
        <div className="reveal reveal-delay-2 flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
          <div className="h-px w-16 bg-white/20" />
        </div>

        {/* Subtext */}
        <p className="reveal reveal-delay-2 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Ali Zafar Recruiting Agency bridges talented professionals with global employers.
          Licensed, trusted, and dedicated to your career journey.
        </p>

        {/* CTA buttons */}
        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-[#c9a84c] text-[#1a1a2e] font-semibold text-sm tracking-wide px-8 py-3.5 rounded-full hover:bg-white transition-colors duration-300 shadow-lg"
          >
            Start Your Journey
          </a>
          <a
            href="#about"
            className="border border-white/30 text-white/90 text-sm font-medium px-8 py-3.5 rounded-full hover:border-white hover:text-white transition-all duration-300 backdrop-blur-sm"
          >
            Learn More
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="reveal reveal-delay-4 mt-20 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>

      {/* Bottom overlap curve */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60 C360 0 1080 0 1440 60 L1440 60 L0 60Z" fill="#f8f6f1" />
        </svg>
      </div>
    </section>
  );
}
