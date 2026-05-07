import { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    job: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};

    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    if (!form.job.trim()) e.job = 'Job interest is required';
    if (!form.message.trim()) e.message = 'Message is required';

    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitted(true);

    const text = encodeURIComponent(
      `Hello Rawal International,\nName: ${form.name}\nPhone: ${form.phone}\nInterested In: ${form.job}\nMessage: ${form.message}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/923004427426?text=${text}`, '_blank');
    }, 600);
  };

  const field = (name, label, type = 'text', placeholder = '') => (
    <div>
      <label className="block text-xs font-semibold tracking-wide text-[#6b7280] uppercase mb-2">
        {label}
      </label>

      <input
        type={type}
        value={form[name]}
        onChange={(e) =>
          setForm({ ...form, [name]: e.target.value })
        }
        placeholder={placeholder}
        className={`w-full bg-transparent border-b py-2.5 text-[#1e3a5f] placeholder-[#9ca3af] text-sm outline-none transition-colors duration-300 focus:border-[#1e3a5f] ${
          errors[name] ? 'border-red-400' : 'border-[#d1cfc8]'
        }`}
      />

      {errors[name] && (
        <p className="text-red-400 text-xs mt-1">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <section id="contact" className="relative bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>

          <h2 className="reveal font-playfair text-4xl md:text-5xl font-bold text-[#1e3a5f]">
            Begin Your Journey
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left: contact info */}
          <div className="reveal space-y-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9ca3af] mb-3">
                Address
              </p>

              <div className="flex gap-3 items-start">
                <MapPin
                  size={18}
                  className="text-[#c9a84c] mt-0.5 flex-shrink-0"
                />

                <p className="text-[#374151] leading-relaxed text-sm">
                  House No. 249, Satluj Block,<br />
                  Allama Iqbal Town,<br />
                  Lahore, Punjab, Pakistan
                </p>
              </div>
            </div>

            <div className="h-px bg-[#e2ddd6]" />

            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9ca3af] mb-3">
                Phone
              </p>

              <div className="flex flex-col gap-2">
                {['042-37804030', '0300-4427426'].map((ph) => (
                  <a
                    key={ph}
                    href={`tel:${ph.replace(/-/g, '')}`}
                    className="flex gap-3 items-center group"
                  >
                    <Phone size={16} className="text-[#c9a84c]" />

                    <span className="text-[#374151] text-sm group-hover:text-[#1e3a5f] transition-colors">
                      {ph}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="h-px bg-[#e2ddd6]" />

            <div className="bg-[#f8f6f1] rounded-2xl p-6">
              <p className="font-playfair font-semibold text-[#1e3a5f] text-lg mb-2">
                Working Hours
              </p>

              <p className="text-[#6b7280] text-sm leading-relaxed">
                Monday – Saturday<br />
                9:00 AM – 6:00 PM PKT
              </p>
            </div>

            <div className="bg-[#1e3a5f] rounded-2xl p-6 text-white">
              <p className="font-playfair text-xl font-semibold mb-2">
                Licensed Overseas Employment Promoter
              </p>

              <p className="text-sm text-white/80 leading-relaxed">
                License No. 0848 / LHR<br />
                Government of Pakistan
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal reveal-delay-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                <CheckCircle size={52} className="text-[#c9a84c]" />

                <p className="font-playfair text-2xl font-semibold text-[#1e3a5f]">
                  Message Sent!
                </p>

                <p className="text-[#6b7280] text-sm">
                  Redirecting you to WhatsApp…
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                {field('name', 'Full Name', 'text', 'Your full name')}

                {field(
                  'phone',
                  'Phone Number',
                  'tel',
                  '+92 300 0000000'
                )}

                {field(
                  'job',
                  'Job Interest',
                  'text',
                  'e.g. Driver, Electrician, Welder…'
                )}

                {/* Textarea */}
                <div>
                  <label className="block text-xs font-semibold tracking-wide text-[#6b7280] uppercase mb-2">
                    Message
                  </label>

                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us about your experience and goals…"
                    className={`w-full bg-transparent border-b py-2.5 text-[#1e3a5f] placeholder-[#9ca3af] text-sm outline-none resize-none transition-colors duration-300 focus:border-[#1e3a5f] ${
                      errors.message
                        ? 'border-red-400'
                        : 'border-[#d1cfc8]'
                    }`}
                  />

                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-3 bg-[#1e3a5f] text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-[#c9a84c] hover:text-[#1a1a2e] transition-all duration-300 shadow-lg group"
                >
                  <Send
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />

                  Send via WhatsApp
                </button>

                <p className="text-[#9ca3af] text-xs">
                  Your message will be sent directly to our WhatsApp for a faster response.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}