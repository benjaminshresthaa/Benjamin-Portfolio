import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const skillsAndToolsList = [
    'Short Form Editing',
    'Long Form Editing',
    'Motion Graphics',
    'DaVinci Resolve',
    'Fusion',
    'Photoshop',
    'Talking Head Videos',
    'SaaS Launch Videos',
    'Color Grading',
  ];

  return (
    <section id="about" className="px-6 py-24 scroll-mt-12 bg-white">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <div className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground space-y-4">
            {personalInfo.about.map((para, idx) => (
              <p key={idx} className="text-left sm:text-center text-base sm:text-lg">
                {para}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Skills & Tools (Exact Prateek Singh styling) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Skills & Tools
          </h3>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skillsAndToolsList.map((item) => (
              <span
                key={item}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-foreground shadow-2xs hover:border-gray-300 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
