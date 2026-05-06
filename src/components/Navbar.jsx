import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex flex-col leading-none group">
          <span
            className={`font-playfair font-bold text-lg tracking-wide transition-colors duration-300 ${
              scrolled ? 'text-[#1e3a5f]' : 'text-white'
            }`}
          >
            Ali Zafar
          </span>
          <span
            className={`text-xs tracking-[0.18em] uppercase transition-colors duration-300 ${
              scrolled ? 'text-[#c9a84c]' : 'text-[#c9a84c]'
            }`}
          >
            Recruiting Agency
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 relative after:absolute after:bottom-[-3px] after:left-0 after:h-[1px] after:w-0 after:bg-[#c9a84c] after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled
                    ? 'text-[#374151] hover:text-[#1e3a5f]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-[#1e3a5f] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#c9a84c] transition-colors duration-300"
            >
              Get Started
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors duration-300 ${scrolled ? 'text-[#1e3a5f]' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-72 py-4' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-2 px-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-[#374151] hover:text-[#1e3a5f]"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center bg-[#1e3a5f] text-white text-sm font-medium px-5 py-2 rounded-full"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
