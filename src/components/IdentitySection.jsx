export default function IdentitySection() {
  return (
    <section
      id="identity"
      className="relative bg-[#f8f6f1] pt-16 pb-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          
          {/* Left: Bold heading */}
          <div className="reveal">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Who We Are
            </p>

            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1e3a5f] leading-[1.2]">
              A Trusted Name<br />
              in Overseas<br />
              <span className="italic">Employment</span>
            </h2>

            <div className="mt-6 h-1 w-12 bg-[#c9a84c] rounded" />
          </div>

          {/* Right: Details */}
          <div className="reveal reveal-delay-2 space-y-6 pt-2">
            <Detail label="Company" value="Rawal International" />

            <div className="h-px bg-[#e2ddd6]" />

            <Detail label="License No." value="0848 / LHR" />

            <div className="h-px bg-[#e2ddd6]" />

            <Detail label="Headquarters" value="Lahore, Punjab" />

            <div className="h-px bg-[#e2ddd6]" />

            <Detail label="Industry" value="Overseas Employment" />

            <div className="h-px bg-[#e2ddd6]" />

            <Detail label="Office Location" value="Allama Iqbal Town, Lahore" />

            <div className="h-px bg-[#e2ddd6]" />

            <Detail label="Established" value="Serving with professionalism & trust" />
          </div>
        </div>
      </div>

      {/* Overlap into next section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 C360 50 1080 50 1440 0 L1440 50 L0 50Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

function Detail({ label, value }) {
  return (
    <div className="flex justify-between items-baseline gap-4">
      <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#9ca3af]">
        {label}
      </span>

      <span className="font-playfair text-lg font-medium text-[#1e3a5f] text-right">
        {value}
      </span>
    </div>
  );
}