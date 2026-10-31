import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ZoomIn } from 'lucide-react';
import { projects } from '../data/portfolioData';
import VideoModal from './VideoModal';

function ProjectCard({ project, onClick }) {
  const isPoster = project.type === 'image' || project.category === 'Posters';
  const thumbnail = project.thumbnail || project.imageUrl || '/Poster1.png';

  return (
    <button
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-xl bg-white border border-gray-100 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
    >
      {/* Media Box */}
      <div
        className={`relative w-full overflow-hidden bg-gray-950 ${
          isPoster
            ? 'aspect-[3/4] bg-gray-100'
            : project.isShort
            ? 'aspect-[4/3] sm:aspect-video'
            : 'aspect-video'
        }`}
      >
        {/* Render snapshot image thumbnail (Prevents IDM browser download popups completely) */}
        <img
          src={thumbnail}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Subtle gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-30 group-hover:opacity-60 transition-opacity" />

        {/* Hover Overlay with Action Icon */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-foreground shadow-xl opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
            {isPoster ? (
              <ZoomIn size={22} className="text-foreground" />
            ) : (
              <Play size={22} className="ml-1 fill-current text-foreground" />
            )}
          </div>
        </div>

        {/* Category Tag on top of image */}
        <div className="absolute top-3 left-3">
          <span className="rounded-md bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium tracking-wide text-white">
            {project.category}
          </span>
        </div>

        {/* Format Badge */}
        {project.isShort && (
          <div className="absolute bottom-3 right-3">
            <span className="rounded-md bg-accent/90 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
              9:16 Reel
            </span>
          </div>
        )}
      </div>

      {/* Card Details */}
      <div className="p-4 sm:p-5">
        <span className="mb-1 inline-block text-xs font-semibold uppercase tracking-wider text-accent">
          {project.category}
        </span>
        <h3 className="text-base font-bold text-foreground line-clamp-1 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      </div>
    </button>
  );
}

export default function Work() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Long Form', 'Short Form', 'Motion Graphics', 'Posters'];

  const filteredProjects = projects.filter((project) => {
    if (activeTab === 'All') return project.category !== 'Posters';
    return project.category === activeTab;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const moreProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="work" className="bg-muted px-6 py-24 scroll-mt-12">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Work
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-muted-foreground leading-relaxed">
            Long-form edits, short-form content, and motion graphics for creators and brands.
          </p>

          {/* Filter Tabs */}
          <div className="mb-14 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-200 ${
                  activeTab === cat
                    ? 'bg-accent text-white shadow-sm'
                    : 'bg-white text-muted-foreground border border-gray-200 hover:text-foreground hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Section Header */}
        {featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 flex items-center justify-between border-b border-gray-200/60 pb-3"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Featured Work
            </p>
            <span className="text-xs text-muted-foreground font-mono">
              {featuredProjects.length} Projects
            </span>
          </motion.div>
        )}

        {/* Featured Grid */}
        {featuredProjects.length > 0 && (
          <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedMedia(project)}
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* More Work Section Header */}
        {moreProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center justify-between border-b border-gray-200/60 pb-3"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {activeTab === 'Posters' ? 'Poster & Graphic Designs' : 'More Work'}
            </p>
            <span className="text-xs text-muted-foreground font-mono">
              {moreProjects.length} Items
            </span>
          </motion.div>
        )}

        {/* More Work Grid */}
        {moreProjects.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {moreProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedMedia(project)}
                />
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Media Lightbox Modal */}
      <VideoModal
        project={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />
    </section>
  );
}
