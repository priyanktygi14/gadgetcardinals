import React, { useState } from 'react';
import { FAQS } from '../data/store';
import { MessageCircle, Mail, MapPin, Clock, Send, ChevronDown, CheckCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderId: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', orderId: '', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="w-full bg-[#050505] min-h-screen py-10 sm:py-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="mb-12 lg:mb-16 max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#DFFF00] uppercase font-mono">
              [ 24/7 SUPPORT & ASSISTANCE ]
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display uppercase tracking-tight text-white leading-none">
            GET IN TOUCH <span className="text-[#DFFF00]">WITH US</span>
          </h1>
          <p className="text-sm sm:text-base text-[#8E8E93] mt-3">
            Have questions about product specifications, order tracking, or custom requirements? Our team responds within minutes.
          </p>
        </div>

        {/* 2-Column Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-3xl bg-[#09090C] border border-[#222226] flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-black flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-base font-black font-display text-white uppercase">WhatsApp Instant Support</h3>
                <p className="text-xs text-[#8E8E93] mt-1">Chat directly with our product concierge.</p>
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-xs font-bold text-[#DFFF00] hover:underline mt-2 inline-block">
                  +91 98765 43210 →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#09090C] border border-[#222226] flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#6D28FF] text-white flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-base font-black font-display text-white uppercase">Email Enquiries</h3>
                <p className="text-xs text-[#8E8E93] mt-1">For corporate, bulk orders & tracking issues.</p>
                <a href="mailto:support@gadgetcartels.in" className="text-xs font-bold text-[#DFFF00] hover:underline mt-2 inline-block">
                  support@gadgetcartels.in →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#09090C] border border-[#222226] flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#20D9E8] text-black flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-base font-black font-display text-white uppercase">Operating Hours</h3>
                <p className="text-xs text-[#8E8E93] mt-1">Monday – Sunday: 10:00 AM – 11:00 PM IST</p>
                <span className="text-[11px] font-bold text-[#20D9E8] mt-1 block">Live Dispatch 7 Days a Week</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#09090C] border border-[#222226] flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF7A00] text-black flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-base font-black font-display text-white uppercase">Dispatch Hubs</h3>
                <p className="text-xs text-[#8E8E93] mt-1">Fulfillment centers in Mumbai, Delhi & Bangalore for express deliveries.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#09090C] border border-[#222226]">
              <h2 className="text-2xl font-black font-display text-white uppercase mb-2">
                SEND US A MESSAGE
              </h2>
              <p className="text-xs text-[#8E8E93] mb-6">
                Fill out the form below and our team will get back to you within 30 minutes.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#121216] border border-[#DFFF00] text-center space-y-3 animate-fade-in">
                  <CheckCircle className="w-12 h-12 text-[#DFFF00] mx-auto" />
                  <h3 className="text-lg font-black font-display text-white uppercase">Message Sent Successfully!</h3>
                  <p className="text-xs text-[#A1A1AA]">
                    Thank you {formData.name || 'there'}! Our team has received your query and will contact you via WhatsApp/Email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-black tracking-wider text-[#A1A1AA] uppercase block mb-1.5">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-[#121216] border border-[#27272A] rounded-xl text-white text-xs font-semibold placeholder:text-[#52525B] focus:outline-none focus:border-[#DFFF00]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-black tracking-wider text-[#A1A1AA] uppercase block mb-1.5">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-[#121216] border border-[#27272A] rounded-xl text-white text-xs font-semibold placeholder:text-[#52525B] focus:outline-none focus:border-[#DFFF00]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-black tracking-wider text-[#A1A1AA] uppercase block mb-1.5">
                        PHONE / WHATSAPP (OPTIONAL)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-[#121216] border border-[#27272A] rounded-xl text-white text-xs font-semibold placeholder:text-[#52525B] focus:outline-none focus:border-[#DFFF00]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-black tracking-wider text-[#A1A1AA] uppercase block mb-1.5">
                        ORDER ID (IF APPLICABLE)
                      </label>
                      <input
                        type="text"
                        value={formData.orderId}
                        onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                        placeholder="#GC-9821"
                        className="w-full px-4 py-3 bg-[#121216] border border-[#27272A] rounded-xl text-white text-xs font-semibold placeholder:text-[#52525B] focus:outline-none focus:border-[#DFFF00]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-black tracking-wider text-[#A1A1AA] uppercase block mb-1.5">
                      HOW CAN WE HELP? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your question or request..."
                      className="w-full px-4 py-3 bg-[#121216] border border-[#27272A] rounded-xl text-white text-xs font-semibold placeholder:text-[#52525B] focus:outline-none focus:border-[#DFFF00]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#DFFF00] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(223,255,0,0.35)]"
                  >
                    <Send className="w-4 h-4 stroke-[2.5]" />
                    <span>SEND MESSAGE</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* FAQs Accordion */}
        <div id="faqs" className="pt-10 border-t border-[#18181B] max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight text-white">
              FREQUENTLY ASKED <span className="text-[#DFFF00]">QUESTIONS</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#8E8E93] mt-2">
              Everything you need to know about first-copy quality, warranties, and orders.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[#222226] bg-[#09090C] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-sm font-bold text-white uppercase font-sans">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#DFFF00] shrink-0 transition-transform duration-200 ${
                      openFaqIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === i && (
                  <div className="px-5 pb-5 text-xs text-[#A1A1AA] leading-relaxed border-t border-[#18181B] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
