import { Globe, FileText, ClipboardList, Handshake } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Overseas Recruitment',
    desc: 'Sourcing and placing skilled Pakistani professionals with trusted employers worldwide.',
  },
  {
    icon: FileText,
    title: 'Visa Processing',
    desc: 'End-to-end visa assistance ensuring smooth and timely processing for all destinations.',
  },
  {
    icon: ClipboardList,
    title: 'Documentation',
    desc: 'Complete document preparation, attestation, and compliance for international employment.',
  },
  {
    icon: Handshake,
    title: 'Employer Coordination',
    desc: 'Direct liaison with foreign employers to align expectations and guarantee successful placements.',
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
                <p className="text-[#6b7280] text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
