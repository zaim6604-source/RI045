export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white py-24 px-6">
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(#1e3a5f 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="reveal text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-5 text-center">
          Our Story
        </p>

        <h2 className="reveal font-playfair text-4xl md:text-5xl font-bold text-[#1e3a5f] text-center leading-[1.2] mb-14">
          Built on Trust,<br />
          <span className="italic">Driven by Purpose</span>
        </h2>

        <div className="space-y-8">
          <div className="reveal reveal-delay-1">
            <p className="text-[#374151] text-lg leading-relaxed">
              <span className="font-playfair font-semibold text-[#1e3a5f] text-xl">Ali Zafar Recruiting Agency</span> is
              a fully licensed overseas employment agency based in Karachi, Pakistan. Authorized under License No. 0700 / KAR,
              we specialize in placing qualified Pakistani professionals with reputable employers across the Gulf, Middle East,
              and beyond.
            </p>
          </div>

          <div className="reveal reveal-delay-2 h-px bg-gradient-to-r from-transparent via-[#e2ddd6] to-transparent" />

          <div className="reveal reveal-delay-2">
            <p className="text-[#6b7280] text-base md:text-lg leading-[1.85]">
              We work closely with both job seekers and international employers to ensure the right match — every time.
              Our team handles the full recruitment cycle: from sourcing and screening candidates, processing documentation
              and visas, to coordinating directly with employers abroad. We believe that every placement is more than a
              transaction — it is a life-changing opportunity.
            </p>
          </div>

          <div className="reveal reveal-delay-3">
            <p className="text-[#6b7280] text-base md:text-lg leading-[1.85]">
              Our reputation has been built over years of diligent service and thousands of successful placements.
              Candidates trust us because we are transparent, accountable, and committed to their well-being. Employers
              trust us because we deliver qualified, ready-to-work talent with all documentation in order.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="reveal reveal-delay-3 mt-16 grid grid-cols-3 gap-8 border-t border-[#e2ddd6] pt-10">
          {[
            { num: '1000+', label: 'Candidates Placed' },
            { num: '15+', label: 'Countries Served' },
            { num: '100%', label: 'Licensed & Verified' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-playfair text-3xl md:text-4xl font-bold text-[#1e3a5f]">{s.num}</p>
              <p className="text-xs text-[#9ca3af] tracking-wide mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
