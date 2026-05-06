import { MapPin } from 'lucide-react';

export default function LocationSection() {
  return (
    <section
      id="location"
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0d1f35 0%, #1e3a5f 60%, #16304f 100%)',
      }}
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-10 blur-3xl bg-[#c9a84c]" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="reveal inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#c9a84c]/40 mb-8">
          <MapPin size={24} className="text-[#c9a84c]" />
        </div>

        <p className="reveal text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
          Find Us
        </p>

        <h2 className="reveal font-playfair text-4xl md:text-5xl font-bold text-white leading-[1.2] mb-6">
          Rooted in Karachi,<br />
          <span className="italic text-[#c9a84c]">Reaching the World</span>
        </h2>

        <p className="reveal reveal-delay-1 text-white/60 text-lg leading-relaxed">
          Liaquatabad No. 10, Karachi
        </p>

        <div className="reveal reveal-delay-2 mt-10 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-white/15" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
          <div className="h-px w-16 bg-white/15" />
        </div>
      </div>
    </section>
  );
}
