import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Short Form Content',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-muted px-6 py-24 scroll-mt-12">
      <div className="mx-auto max-w-xl">
        
        {/* Section Header (Exact Prateek Singh styling) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mb-12 text-center text-muted-foreground leading-relaxed">
            Have a project in mind? Let's work together.
          </p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm"
        >
          {submitted ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground">Message Ready to Send!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your email client has been opened. If it didn't open automatically, send a direct email to{' '}
                <a href={`mailto:${personalInfo.email}`} className="text-accent underline font-medium">
                  {personalInfo.email}
                </a>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-full bg-gray-100 px-5 py-2 text-xs font-semibold text-foreground hover:bg-gray-200 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-foreground">
                  Project Type
                </label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                >
                  <option value="Short Form Content (TikTok/Reels/Shorts)">Short Form Content (TikTok / Reels / Shorts)</option>
                  <option value="YouTube Long Form Video">YouTube Long Form Video</option>
                  <option value="Motion Graphics & Product Demo">Motion Graphics & Product Demo</option>
                  <option value="Talking Head / Course Video">Talking Head / Course Video</option>
                  <option value="Monthly Retainer Channel Editing">Monthly Retainer Channel Editing</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Tell me about your project, timeline, and reference links..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark shadow-sm hover:shadow"
              >
                <span>Send Message</span>
                <Send size={16} />
              </button>

              {/* Modern Minimalist Direct Connect Bar (Replaces bulky cards with sleek inline pills) */}
              <div className="mt-4 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
                <span className="font-medium text-foreground/70">Or reach out directly:</span>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50/80 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:bg-sky-50 hover:text-accent hover:border-sky-200"
                    title={personalInfo.email}
                  >
                    <Mail size={13} className="text-accent" />
                    <span>Email</span>
                  </a>

                  <a
                    href={personalInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50/80 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200"
                    title={personalInfo.whatsapp}
                  >
                    <WhatsAppIcon size={13} className="text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50/80 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:bg-pink-50 hover:text-pink-700 hover:border-pink-200"
                    title={personalInfo.instagramHandle}
                  >
                    <InstagramIcon size={13} className="text-pink-600" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
