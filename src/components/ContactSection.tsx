import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { ArrowUpRight, Check, Copy, Mail, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const { developer } = PORTFOLIO_CONFIG;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Application',
    description: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const projectTypes = [
    'Web Application',
    'Custom Website',
    'E-Commerce Storefront',
    'Frontend Redesign / Performance',
    'General Inquiry / Opportunity',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.description.trim() || formData.description.trim().length < 10) {
      errs.description = 'Please leave a brief description of what you are looking to build.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developer.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} [${formData.name || 'New Client'}]`);
    const body = encodeURIComponent(
      `Hi Victor,\n\nI would like to discuss a project with you:\n\n` +
      `- Name: ${formData.name}\n` +
      `- Email: ${formData.email}\n` +
      `- Type: ${formData.projectType}\n\n` +
      `Details:\n${formData.description}\n\n` +
      `Best regards.`
    );
    window.location.href = `mailto:${developer.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#111215] text-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10"
        >
          <div>
            <div className="text-xs font-mono text-[#60A5FA] uppercase tracking-wider mb-2 font-semibold">
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white leading-tight">
              Let's build something great.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/70 max-w-md font-normal leading-relaxed">
            Have a project in mind, looking to hire a frontend engineer, or just want to say hi? Reach out directly or fill in the form below.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-white/50">
                Direct Contact
              </div>

              {/* Email Card with 1-click copy */}
              <motion.div
                whileHover={{ y: -2 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-white/60">Email Address</span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 transition-colors text-white"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={`mailto:${developer.email}`}
                  className="block text-lg sm:text-xl font-mono font-bold text-white hover:text-[#60A5FA] transition-colors break-all"
                >
                  {developer.email}
                </a>
              </motion.div>
            </div>

            {/* Quick Details */}
            <div className="space-y-4 text-xs font-mono text-white/70">
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-white/50">Location</span>
                <span className="text-white font-medium">{developer.availability.location}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-white/50">Response Time</span>
                <span className="text-white font-medium">Within 24 Hours</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-white/50">Status</span>
                <span className="text-emerald-400 font-medium">Available for Opportunities</span>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-white/50">
                Online Profiles
              </div>
              <div className="flex flex-wrap gap-2">
                {developer.socials.map((s, idx) => (
                  <motion.a
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-1.5"
                  >
                    <span>{s.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-white/40" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-white/10 shadow-2xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-sans font-bold text-white">
                    Thank you for reaching out!
                  </h3>
                  <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                    Your message has been received. I will review your note and get back to you at <span className="text-white font-mono">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', projectType: 'Web Application', description: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe or Acme Corp"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#60A5FA] focus:ring-1 focus:ring-[#60A5FA] transition-colors"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-400 font-mono">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#60A5FA] focus:ring-1 focus:ring-[#60A5FA] transition-colors"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-400 font-mono">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-3.5 py-2.5 rounded-xl text-xs font-mono text-left transition-all border ${
                            formData.projectType === type
                              ? 'bg-white text-[#111215] font-semibold border-white shadow-xs'
                              : 'bg-white/5 border-white/10 text-white/70 hover:border-white/30'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-2">
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Tell me a bit about what you want to build, key goals, and any relevant timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#60A5FA] focus:ring-1 focus:ring-[#60A5FA] transition-colors resize-none"
                    />
                    {errors.description && (
                      <p className="mt-1 text-xs text-red-400 font-mono">{errors.description}</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-[#111215] hover:bg-neutral-200 text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={handleMailtoDirect}
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-transparent hover:bg-white/10 border border-white/20 text-xs font-mono text-white/80 hover:text-white transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Open in Mail Client</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/60" />
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
