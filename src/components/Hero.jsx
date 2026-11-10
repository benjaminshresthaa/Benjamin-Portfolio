import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-20">
        
        {/* Left: Profile Photo (Exact Prateek Singh styling) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="shrink-0"
        >
          <img
            src={personalInfo.image}
            alt={personalInfo.name}
            width={320}
            height={420}
            className="w-64 sm:w-72 md:w-[320px] h-[340px] sm:h-[380px] md:h-[420px] rounded-2xl object-cover shadow-2xl"
          />
        </motion.div>

        {/* Right: Intro Details (Clean & Minimal) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          {/* Eyebrow: Plain text, uppercase, tracking-widest, no badges */}
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {personalInfo.eyebrow}
          </p>

          {/* Heading */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
            {personalInfo.name}
          </h1>

          {/* Tagline / Pitch */}
          <p className="mb-10 max-w-lg text-lg text-muted-foreground leading-relaxed">
            Most videos get watched.<br />
            Few get remembered.<br />
            Fewer still make someone buy.<br /><br />
            Specializing in the gap between those three.
          </p>

          {/* Single Action Button */}
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            <span>View My Work</span>
            <ArrowDown size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
