import { Mail, ArrowUp } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, WhatsAppIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-100 bg-white px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        
        {/* Left: Copyright */}
        <div className="flex items-center gap-2">
          <img src="./logo.png" alt="Logo" className="h-5 w-5 object-contain" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        {/* Center: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <span>Back to Top</span>
          <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
        </button>

        {/* Right: Social Links */}
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${personalInfo.email}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-foreground hover:scale-110 transform"
          >
            <Mail size={20} />
          </a>

          <a
            href={personalInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground transition-colors hover:text-foreground hover:scale-110 transform"
          >
            <InstagramIcon size={20} />
          </a>

          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-muted-foreground transition-colors hover:text-foreground hover:scale-110 transform"
          >
            <WhatsAppIcon size={20} />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground hover:scale-110 transform"
          >
            <LinkedinIcon size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}
