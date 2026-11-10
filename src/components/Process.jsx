import { motion } from 'framer-motion';
import { processSteps } from '../data/portfolioData';
import { Layers, Scissors, Wand2, Rocket } from 'lucide-react';

const stepIcons = [Layers, Scissors, Wand2, Rocket];

export default function Process() {
  return (
    <section id="process" className="bg-white px-6 py-24 scroll-mt-12 border-b border-gray-100">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
            Workflow & Methodology
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How We Bring Your Vision to Life
          </h2>
          <p className="mx-auto mb-16 max-w-xl text-muted-foreground leading-relaxed">
            A battle-tested production process designed to eliminate revisions, maximize viewer retention, and hit delivery deadlines consistently.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, idx) => {
            const IconComponent = stepIcons[idx] || Layers;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col justify-between rounded-2xl border border-gray-100 bg-muted/50 p-6 sm:p-7 transition-all duration-300 hover:shadow-lg hover:border-gray-200 hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold tracking-tight text-accent/80 font-mono">
                      {step.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-gray-100 text-foreground shadow-sm">
                      <IconComponent size={18} className="text-accent" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom line marker */}
                <div className="mt-6 pt-4 border-t border-gray-200/50 flex items-center justify-between text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                  <span>Phase {step.number}</span>
                  <span className="text-accent">✓ Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
