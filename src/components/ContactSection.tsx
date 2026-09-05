import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Github, BarChart2, FileText, ArrowUp } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 600);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="Contact" className="relative py-24 bg-white/40 dark:bg-slate-900/30 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="portfolio-sub-title">
              Contact
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1D2043] dark:text-white tracking-tight leading-tight">
              Let’s unwrap insights from your{' '}
              <span className="text-[#558b85] dark:text-[#6eb7b0]">data maze.</span>
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Whether you are looking for an expert Business Intelligence specialist, an end-to-end data pipeline architect, or operational analytics solutions, feel free to reach out.
            </p>

            <div className="space-y-4 pt-4">
              {/* Phone */}
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 hover:border-[#558b85] dark:hover:border-[#6eb7b0] transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#558b85]/10 text-[#558b85] dark:text-[#6eb7b0] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">
                    Call / WhatsApp
                  </span>
                  <span className="text-sm font-bold text-[#1D2043] dark:text-white">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 hover:border-[#558b85] dark:hover:border-[#6eb7b0] transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#558b85]/10 text-[#558b85] dark:text-[#6eb7b0] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">
                    Direct Email
                  </span>
                  <span className="text-sm font-bold text-[#1D2043] dark:text-white">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80">
                <div className="w-11 h-11 rounded-xl bg-[#558b85]/10 text-[#558b85] dark:text-[#6eb7b0] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">
                    Base Location
                  </span>
                  <span className="text-sm font-bold text-[#1D2043] dark:text-white">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links & Resume Button */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-[#0a66c2] hover:border-[#0a66c2] transition-colors shadow-xs"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 transition-colors shadow-xs"
                title="GitHub Repositories"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumePdf}
                download="Stimson_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#558b85] hover:bg-[#467670] shadow-sm transition-colors ml-auto"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-lg">
              <h3 className="text-2xl font-bold font-display text-[#1D2043] dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Have a query or want to discuss analytics projects? Drop a note below.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-800 dark:text-emerald-200">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300">
                    Thank you for reaching out, Stimson will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 text-sm text-[#1D2043] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#558b85]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 text-sm text-[#1D2043] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#558b85]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. BI Opportunity / Dashboard Consulting"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 text-sm text-[#1D2043] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#558b85]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your team or project requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 text-sm text-[#1D2043] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#558b85]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="portfolio-theme-btn w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer matching original copyright statement: © 2025 Stimson — Created with HTML & CSS */}
        <div className="mt-20 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2025 Stimson — Created with HTML, CSS & Modern React</p>

          <div className="flex items-center gap-6">
            <a href="#About" className="hover:text-[#558b85] dark:hover:text-[#6eb7b0] transition-colors">
              About
            </a>
            <a href="#Skills" className="hover:text-[#558b85] dark:hover:text-[#6eb7b0] transition-colors">
              Skills
            </a>
            <a href="#Resume" className="hover:text-[#558b85] dark:hover:text-[#6eb7b0] transition-colors">
              Experience
            </a>
            <a href="#Weapons" className="hover:text-[#558b85] dark:hover:text-[#6eb7b0] transition-colors">
              Weapons
            </a>
            <a href="#Portfolio" className="hover:text-[#558b85] dark:hover:text-[#6eb7b0] transition-colors">
              Projects
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              title="Scroll to top"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#558b85] hover:text-white dark:hover:bg-[#558b85] transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
