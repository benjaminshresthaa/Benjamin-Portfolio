import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function VideoModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isShort = project.isShort;
  const isPoster = project.type === 'image' || Boolean(project.imageUrl);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className={`relative ${
            isPoster
              ? 'w-full max-w-2xl'
              : isShort
              ? 'w-full max-w-sm'
              : 'w-full max-w-4xl'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 flex items-center gap-1.5 text-white/80 transition-colors hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full text-xs font-medium"
            aria-label="Close modal"
          >
            <span>Close</span>
            <X size={18} />
          </button>

          {/* Media Container */}
          {isPoster ? (
            <div className="flex justify-center overflow-hidden rounded-2xl bg-black/40 shadow-2xl">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="max-h-[75vh] w-auto object-contain rounded-2xl"
              />
            </div>
          ) : (
            <div
              className={`w-full overflow-hidden rounded-2xl bg-black shadow-2xl ${
                isShort ? 'aspect-[9/16]' : 'aspect-video'
              }`}
            >
              {project.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              ) : project.videoUrl ? (
                <video
                  src={project.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-contain bg-black"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-white/60">
                  <p>Media preview unavailable</p>
                </div>
              )}
            </div>
          )}

          {/* Title & Info Underneath */}
          <div className="mt-4 text-center px-2">
            <span className="mb-1 inline-block text-xs font-semibold uppercase tracking-wider text-accent">
              {project.category}
            </span>
            <h3 className="text-lg font-bold text-white sm:text-xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-white/70 max-w-lg mx-auto leading-relaxed">
              {project.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
