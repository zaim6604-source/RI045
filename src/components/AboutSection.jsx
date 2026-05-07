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
          Connecting Talent,<br />
          <span className="italic">Creating Global Opportunities</span>
        </h2>

        <div className="space-y-8">
          <div className="reveal reveal-delay-1">
            <p className="text-[#374151] text-lg leading-relaxed">
              <span className="font-playfair font-semibold text-[#1e3a5f] text-xl">
                Rawal International
              </span>{' '}
              is a government licensed overseas employment promoter based in Lahore, Pakistan.
              Operating under License No. 0848 / LHR, we specialize in recruiting skilled,
              semi-skilled, and professional manpower for reputable international employers.
            </p>
          </div>

          <div className="reveal reveal-delay-2 h-px bg-gradient-to-r from-transparent via-[#e2ddd6] to-transparent" />

          <div className="reveal reveal-delay-2">
            <p className="text-[#6b7280] text-base md:text-lg leading-[1.85]">
              At Rawal International, we are committed to connecting talented Pakistani workers
              with rewarding opportunities abroad. Our recruitment process focuses on transparency,
              professionalism, and efficiency — ensuring both employers and candidates receive
              reliable and dependable services throughout every stage of hiring.
            </p>
          </div>

          <div className="reveal reveal-delay-3">
            <p className="text-[#6b7280] text-base md:text-lg leading-[1.85]">
              From candidate sourcing and screening to documentation and overseas deployment,
              our experienced team manages the complete recruitment cycle with care and precision.
              We take pride in building long-term trust with clients and helping individuals
              achieve successful international careers.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="reveal reveal-delay-3 mt-16 grid grid-cols-3 gap-8 border-t border-[#e2ddd6] pt-10">
          {[
            { num: '0848', label: 'Government License' },
            { num: '24/7', label: 'Client Support' },
            { num: '100%', label: 'Verified Agency' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-playfair text-3xl md:text-4xl font-bold text-[#1e3a5f]">
                {s.num}
              </p>
              <p className="text-xs text-[#9ca3af] tracking-wide mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}