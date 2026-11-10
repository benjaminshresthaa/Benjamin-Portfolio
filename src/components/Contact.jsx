import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { InstagramIcon, WhatsAppIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Short-form Video',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Optional phone validation to keep clean numbers
    if (name === 'phone') {
      const onlyNumbers = value.replace(/\D/g, '');
      if (onlyNumbers.length > 15) return;
      setFormData((prev) => ({ ...prev, [name]: onlyNumbers }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      await emailjs.send(
        'email_benjamin',
        'template_71xujco',
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone || 'Not provided',
          selected_service: formData.service,
          message: formData.message,
        },
        'cdvWKcl1e0oNF47F_'
      );
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Short-form Video',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      const errText = error?.text || error?.message || '';
      if (errText.includes('Invalid grant') || errText.includes('reconnect')) {
        setErrorMessage(
          'Email service authorization expired. Please click below to send via your email client or WhatsApp.'
        );
      } else {
        setErrorMessage(
          'Failed to send message via EmailJS. Please send directly via email client or WhatsApp below.'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-muted px-6 py-24 scroll-mt-12">
      <div className="mx-auto max-w-xl">
        
        {/* Section Header */}
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
              <h3 className="text-xl font-bold text-foreground">Message Sent Successfully!</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                Thank you for reaching out! Your message has been delivered directly to Benjamin's inbox. You will receive a response shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-full bg-gray-100 px-5 py-2 text-xs font-semibold text-foreground hover:bg-gray-200 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {errorMessage && (
                <div className="flex flex-col gap-2 rounded-lg bg-red-50 p-4 text-xs text-red-700 border border-red-200">
                  <div className="flex items-start gap-2">
                    <AlertCircle size={16} className="shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{errorMessage}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={handleMailtoFallback}
                      className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-white hover:bg-accent-dark transition-colors shadow-2xs"
                    >
                      <Mail size={13} />
                      <span>Open Pre-filled Email</span>
                    </button>
                    <a
                      href={personalInfo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700 transition-colors shadow-2xs"
                    >
                      <WhatsAppIcon size={13} />
                      <span>Send via WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                  WhatsApp / Phone Number <span className="text-xs font-normal text-muted-foreground">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="e.g. 9869009104"
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-foreground">
                  Select Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                >
                  <option value="Short-form Video">Short-form Video (Reels / TikTok / Shorts)</option>
                  <option value="Long-form Video">Long-form Video (YouTube / Documentary)</option>
                  <option value="Motion Graphics & Dynamic Visuals">Motion Graphics & Dynamic Visuals</option>
                  <option value="Graphics Design">Graphics Design & Posters</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Tell me about your project, timeline, and goals..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark shadow-sm hover:shadow disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>

              {/* Modern Minimalist Direct Connect Bar */}
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
