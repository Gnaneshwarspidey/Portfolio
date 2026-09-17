import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolio360Data';
import { Github, Linkedin } from '../components/SocialIcons';
import { Mail, Phone, ArrowUpRight, Send, Check, Copy, MessageSquare } from 'lucide-react';

export const ContactEditorial = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Portfolio Website',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-28 bg-dark-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
              // 06. CONTACT & INQUIRIES
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">
              Have An Idea? Let's Build It.
            </h2>
          </div>
          <div className="max-w-md text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Whether you're looking for a premium portfolio, business website, or custom digital product, let's create something people remember.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-dark-900/60 border border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-3">
                Direct Contact
              </span>

              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">EMAIL</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-semibold hover:text-blue-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">PHONE</span>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-semibold hover:text-blue-400 transition-colors">
                      +91 {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-all border border-white/10"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-all border border-white/10"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-xs text-slate-400 font-mono leading-relaxed">
              ⚡ Open to full-time engineering roles, high-impact freelance projects, and creative collaborations.
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl bg-dark-900/60 border border-white/10 space-y-5">
              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-2">
                Start A Project
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">YOUR NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">YOUR EMAIL *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-2">PROJECT TYPE</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:outline-none focus:border-white transition-colors"
                >
                  <option>Premium Portfolio Website</option>
                  <option>AI-Powered Web Application</option>
                  <option>Custom Full-Stack Development</option>
                  <option>Interactive Web Experience</option>
                  <option>Business / Corporate Website</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-2">MESSAGE *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your goals, timeline, and vision..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                data-cursor="link"
                className="w-full py-4 rounded-full bg-white text-dark-950 font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition-all active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <span>Let's Build</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

