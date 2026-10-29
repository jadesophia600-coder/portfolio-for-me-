import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { ArrowUpRight, Check, Copy, Mail, Send, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { developer } = PORTFOLIO_CONFIG;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'New Custom Website',
    budgetRange: '$5,000 – $10,000',
    description: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const projectTypes = [
    'New Custom Website',
    'Web Application / SaaS',
    'E-Commerce Storefront',
    'Performance & Redesign',
    'AI Feature Integration',
  ];

  const budgetRanges = [
    '$3,500 – $5,000',
    '$5,000 – $10,000',
    '$10,000 – $20,000',
    '$20,000+',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name or company.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid work email address.';
    }
    if (!formData.description.trim() || formData.description.trim().length < 15) {
      errs.description = 'Please describe your project vision or timeline in at least 15 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable asynchronous dispatch & state feedback
    // In production, hook this to Formspree, Resend, or your serverless API endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developer.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} [${formData.name || 'New Client'}]`);
    const body = encodeURIComponent(
      `Hi ${developer.name},\n\nI would like to discuss a project with your studio:\n\n` +
      `- Client: ${formData.name}\n` +
      `- Email: ${formData.email}\n` +
      `- Project Type: ${formData.projectType}\n` +
      `- Budget Range: ${formData.budgetRange}\n\n` +
      `Overview:\n${formData.description}\n\n` +
      `Looking forward to connecting.`
    );
    window.location.href = `mailto:${developer.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-36 bg-[#111215] text-[#FAF8F5] relative overflow-hidden">
      {/* Subtle Background Glow & Accent Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#1447E6]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#CEF241]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="text-xs font-mono text-[#CEF241] uppercase tracking-wider mb-2 font-semibold">
              [ 07 // INITIATE COLLABORATION ]
            </div>
            <h2 className="text-3xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
              LET’S SHAPE SOMETHING <span className="font-serif italic font-normal text-[#1447E6]">unforgettable.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-sm font-normal leading-relaxed">
            Currently accepting commissions for {developer.availability.period}. Responses guaranteed within 24 hours.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Availability Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-6 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs text-white/50">Direct Studio Channel</span>
                <span className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Available Now
                </span>
              </div>

              <div>
                <div className="text-xs font-mono text-white/60 uppercase">Studio Email</div>
                <div className="mt-1 flex items-center justify-between">
                  <a
                    href={`mailto:${developer.email}`}
                    className="text-lg sm:text-xl font-mono font-bold text-white hover:text-[#1447E6] transition-colors"
                  >
                    {developer.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedEmail && (
                  <div className="text-[11px] font-mono text-emerald-400 mt-1.5 animate-in fade-in">
                    &bull; Copied to clipboard!
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="text-xs font-mono text-white/60 uppercase mb-2">Social &amp; Repositories</div>
                <div className="grid grid-cols-2 gap-2">
                  {developer.socials.map((s, idx) => (
                    <a
                      key={idx}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-xs font-mono text-white/80 hover:text-white transition-all flex items-center justify-between"
                    >
                      <span>{s.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/40" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Integration Notice / Documentation Callout */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs font-mono text-white/60">
              <AlertCircle className="w-4 h-4 text-[#CEF241] shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-semibold block mb-0.5">Form Integration Architecture:</span>
                This form includes client-side validation, state transitions, and a direct mail fallback. Connect directly to Formspree, Resend API, or Supabase in `src/components/ContactSection.tsx`.
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Commission Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="p-8 sm:p-12 rounded-2xl bg-white/5 border border-emerald-500/30 text-center space-y-6 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white">
                  Commission Inquiry Received
                </h3>
                <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed font-sans">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your brief for a <span className="text-white font-semibold">{formData.projectType}</span> ({formData.budgetRange}) has been registered. I will review your requirements and respond to <span className="text-[#1447E6] font-mono">{formData.email}</span> within 24 hours.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={handleMailtoDirect}
                    className="px-5 py-2.5 rounded-md bg-[#1447E6] text-white font-mono text-xs font-semibold hover:bg-[#0C35B8] transition-colors flex items-center gap-2"
                  >
                    <span>Send Backup Copy via Mail Client</span>
                    <Mail className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'New Custom Website',
                        budgetRange: '$5,000 – $10,000',
                        description: '',
                      });
                    }}
                    className="px-5 py-2.5 rounded-md border border-white/20 text-white font-mono text-xs hover:bg-white/10 transition-colors"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 sm:p-10 rounded-2xl bg-white/5 border border-white/10 space-y-8 backdrop-blur-sm"
              >
                {/* 1. Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                      Your Name / Organization <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Elena Rostova or Studio Acme"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#1447E6] focus:ring-1 focus:ring-[#1447E6] transition-colors font-sans text-sm"
                    />
                    {errors.name && (
                      <p className="text-xs font-mono text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                      Work Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="elena@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#1447E6] focus:ring-1 focus:ring-[#1447E6] transition-colors font-sans text-sm"
                    />
                    {errors.email && (
                      <p className="text-xs font-mono text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* 2. Project Type Selector */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-3">
                    Project Classification
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`px-3.5 py-2 rounded-full text-xs font-mono transition-all ${
                          formData.projectType === type
                            ? 'bg-[#1447E6] text-white font-semibold shadow-sm'
                            : 'bg-white/5 text-white/70 border border-white/10 hover:border-white/30'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Budget Range Selector */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-3">
                    Target Investment Range (USD)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetRanges.map((range) => (
                      <button
                        type="button"
                        key={range}
                        onClick={() => setFormData({ ...formData, budgetRange: range })}
                        className={`py-2 px-3 rounded-lg text-xs font-mono transition-all text-center ${
                          formData.budgetRange === range
                            ? 'bg-[#1447E6] text-white font-bold border border-[#1447E6]'
                            : 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/10'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Project Vision / Scope */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                    Project Vision &amp; Key Objectives <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your product, desired timeline, target audience, and any reference sites you admire..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#1447E6] focus:ring-1 focus:ring-[#1447E6] transition-colors font-sans text-sm resize-y"
                  />
                  {errors.description && (
                    <p className="text-xs font-mono text-red-400 mt-1">{errors.description}</p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="text-xs font-mono text-white/50">
                    * NDA-protected consultation &bull; No obligation
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-7 py-3.5 rounded-lg bg-[#1447E6] text-white font-mono text-xs font-semibold hover:bg-[#0C35B8] transition-all flex items-center justify-center gap-2 shadow-hover-pop active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Brief...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Commission Brief</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

