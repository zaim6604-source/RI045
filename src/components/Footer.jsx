import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d1f35] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start pb-10 border-b border-white/10">
          {/* Left: brand */}
          <div>
            <p className="font-playfair font-bold text-2xl tracking-wide mb-1">Ali Zafar</p>
            <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase mb-5">Recruiting Agency</p>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Licensed overseas employment agency connecting Pakistan's workforce with global opportunities.
            </p>
            <p className="text-white/30 text-xs mt-4">License No: 0700 / KAR</p>
          </div>

          {/* Right: contact */}
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-3">Contact</p>
            <div className="flex gap-3 items-start">
              <MapPin size={15} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
              <p className="text-white/60 text-sm leading-relaxed">
                Building No. 709, 1st Floor, Room No. 2,<br />
                Mobilink Franchise Building,<br />
                Liaquatabad No. 10, Karachi
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              {['021-34122090', '0333-2145939'].map((ph) => (
                <a
                  key={ph}
                  href={`tel:${ph.replace(/-/g, '')}`}
                  className="flex items-center gap-3 text-white/60 hover:text-[#c9a84c] transition-colors text-sm"
                >
                  <Phone size={13} className="text-[#c9a84c]" />
                  {ph}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            &copy; {year} Ali Zafar Recruiting Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['About', 'Services', 'Contact'].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-white/40 hover:text-white/80 text-xs transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
