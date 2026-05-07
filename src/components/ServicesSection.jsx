import { Globe, FileText, ClipboardList, Handshake } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Overseas Recruitment',
    desc: 'Connecting Pakistani professionals with reliable employers across the Gulf, Middle East, and international markets.',
  },
  {
    icon: FileText,
    title: 'Visa Processing',
    desc: 'Complete visa guidance and processing support to ensure a smooth overseas employment journey.',
  },
  {
    icon: ClipboardList,
    title: 'Documentation',
    desc: 'Professional assistance with employment paperwork, attestation, and travel documentation.',
  },
  {
    icon: Handshake,
    title: 'Employer Coordination',
    desc: 'Direct communication and coordination with overseas companies for secure and transparent hiring.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#f8f6f1] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            What We Offer
          </p>

          <h2 className="reveal font-playfair text-4xl md:text-5xl font-bold text-[#1e3a5f]">
            Our Services
          </h2>

          <p className="reveal reveal-delay-1 text-[#6b7280] text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Rawal International provides complete overseas employment solutions,
            helping skilled candidates build successful careers abroad with trusted employers.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${i + 1} group flex gap-6 items-start`}
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white border border-[#e2ddd6] flex items-center justify-center group-hover:bg-[#1e3a5f] group-hover:border-[#1e3a5f] transition-colors duration-300 shadow-sm">
                <s.icon
                  size={20}
                  className="text-[#1e3a5f] group-hover:text-white transition-colors duration-300"
                />
              </div>

              <div>
                <h3 className="font-playfair font-semibold text-xl text-[#1e3a5f] mb-2 group-hover:text-[#c9a84c] transition-colors duration-300">
                  {s.title}
                </h3>

                <div className="h-px w-8 bg-[#c9a84c] mb-3 group-hover:w-full transition-all duration-500" />

                <p className="text-[#6b7280] text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="reveal reveal-delay-4 mt-20 border-t border-[#e2ddd6] pt-10 text-center">
          <p className="font-playfair text-2xl text-[#1e3a5f] mb-3">
            Licensed Overseas Employment Promoter
          </p>

          <p className="text-[#6b7280] text-sm tracking-wide">
            License No. 0848 / LHR — Lahore, Punjab, Pakistan
          </p>
        </div>
      </div>
    </section>
  );
}

