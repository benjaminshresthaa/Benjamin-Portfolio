import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data/portfolioData';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white px-6 py-20 border-t border-gray-100">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
            Got Questions?
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-gray-200/80 bg-white transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-foreground transition-colors hover:bg-gray-50/50"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-muted-foreground transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-accent' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="border-t border-gray-100 px-5 pt-3 pb-5 text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
