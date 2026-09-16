import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Linkedin, Github } from '../components/SocialIcons';
import { 
  Mail, 
  Phone, 
  Send, 
  Copy, 
  Check, 
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-dark-900/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Something Meaningful"
          subtitle="Interested in AI, software development, data, or automation? I'm open to opportunities, collaborations, and conversations around building practical technology solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Details & Links (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-card p-5 rounded-2xl flex items-center justify-between border border-slate-800/90 group">
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono text-slate-400 uppercase">Email Directly</div>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`} 
                    className="text-sm font-semibold text-white hover:text-blue-400 truncate block transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 rounded-lg bg-dark-950 text-slate-400 hover:text-white border border-slate-800 shrink-0 ml-2"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card p-5 rounded-2xl flex items-center justify-between border border-slate-800/90 group">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Phone / Mobile</div>
                  <a 
                    href={`tel:${PERSONAL_INFO.phone}`} 
                    className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                  >
                    +91 {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2 rounded-lg bg-dark-950 text-slate-400 hover:text-white border border-slate-800 shrink-0"
                title="Copy Phone"
                aria-label="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-card glass-card-hover p-4 rounded-xl flex items-center gap-3 border border-slate-800 text-slate-200 hover:text-white"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-400">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold">LinkedIn</div>
                  <div className="text-[11px] text-slate-400 font-mono flex items-center gap-0.5">
                    Connect <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="glass-card glass-card-hover p-4 rounded-xl flex items-center gap-3 border border-slate-800 text-slate-200 hover:text-white"
              >
                <div className="w-9 h-9 rounded-lg bg-purple-600/10 flex items-center justify-center text-purple-400">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold">GitHub</div>
                  <div className="text-[11px] text-slate-400 font-mono flex items-center gap-0.5">
                    Profile <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </a>
            </div>

            {/* Quick Response Notice */}
            <div className="p-4 rounded-xl bg-dark-950/80 border border-slate-800 text-xs text-slate-400 font-mono leading-relaxed">
              ⚡ Available for software engineering, full-stack, and AI/ML opportunities. Typically responds within 24 hours.
            </div>

          </div>

          {/* Right Column: Clean Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/90 space-y-4"
            >
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                Send a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Opportunity / Collaboration / Project"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Gnaneshwar, I'd like to discuss..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              <div className="text-[11px] text-center text-slate-400 font-mono">
                Opens your default email client with pre-filled message directly to {PERSONAL_INFO.email}
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

