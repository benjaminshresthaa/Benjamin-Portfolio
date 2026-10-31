import { motion } from 'framer-motion';
import { testimonials } from '../data/portfolioData';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted px-6 py-24 scroll-mt-12 border-t border-gray-100">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
            Social Proof
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Creators & Founders Say
          </h2>
          <p className="mx-auto mb-16 max-w-md text-muted-foreground leading-relaxed">
            Real feedback from YouTube channels and digital brands who trusted me with their content.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <Quote size={18} className="text-gray-200" />
                </div>

                {/* Quote Content */}
                <p className="text-sm text-foreground/80 leading-relaxed italic mb-6">
                  "{t.content}"
                </p>
              </div>

              {/* Client Info with Avatar */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-gray-100 bg-gray-100"
                />
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    {t.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
