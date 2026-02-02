'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ImageLightbox } from '@/components/ImageLightbox';
import { Github, ExternalLink, Star, Users, Zap } from 'lucide-react';
import type { Project } from '@/data/personal';

interface ProjectDetailProps {
  project: Project;
}

/** Display project details (images, description, stats, features, technologies, buttons). */
export function ProjectDetail({ project }: ProjectDetailProps) {
  const description = project.longDescription ?? project.description;
  const technologies = project.technologies ?? project.tags;
  const hasStats = project.stats != null;
  const hasFeatures = project.features != null && project.features.length > 0;
  const galleryImages = project.galleryImages ?? [];
  const mainImage =
    galleryImages[0] ?? project.image ?? null;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Project image — fixed size, not stretched too wide/tall */}
        <motion.div
          className="relative w-full max-h-[360px] lg:max-h-[400px] aspect-video rounded-lg overflow-hidden glass group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={() => mainImage && openLightbox(0)}
        >
          {mainImage ? (
            <Image
              src={mainImage}
              alt={project.title}
              fill
              className="object-contain bg-slate-900/50"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <Zap className="w-16 h-16 mx-auto mb-4 text-purple-400" />
                  <p className="text-lg font-semibold">{project.title}</p>
                </div>
              </div>
            </>
          )}
        </motion.div>

        {/* Project details */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <span className="inline-block px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-4">
              {project.category}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {project.title}
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {description}
            </p>
          </div>

          {/* Stats — only display when project has stats */}
          {hasStats && project.stats && (
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                className="glass rounded-lg p-4 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center gap-1 text-yellow-400 mb-2">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold">{project.stats.rating}</span>
                </div>
                <p className="text-xs text-slate-400">{project.stats.reviews} reviews</p>
              </motion.div>
              <motion.div
                className="glass rounded-lg p-4 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-cyan-400 font-bold text-lg mb-2">
                  {project.stats.downloads}
                </div>
                <p className="text-xs text-slate-400">Downloads</p>
              </motion.div>
              <motion.div
                className="glass rounded-lg p-4 text-center"
                whileHover={{ y: -5 }}
              >
                <Users className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                <p className="text-xs text-slate-400">Active Users</p>
              </motion.div>
            </div>
          )}

          {/* Features — only display when available */}
          {hasFeatures && project.features && (
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {project.features.map((feature) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-2 text-slate-300 text-sm"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                    {feature}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies (fallback: tags) */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-purple-500/50 transition-colors cursor-default"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action buttons — use repoUrl/demoUrl if available */}
          <div className="flex gap-4 pt-4">
            {project.repoUrl != null ? (
              <motion.a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold px-6 py-3 hover:shadow-lg transition-all duration-300">
                  <Github className="w-5 h-5" />
                  View Code
                </Button>
              </motion.a>
            ) : (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold px-6 py-3 hover:shadow-lg transition-all duration-300 cursor-not-allowed opacity-80">
                  <Github className="w-5 h-5" />
                  View Code
                </Button>
              </motion.div>
            )}
            {project.demoUrl != null ? (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 bg-transparent px-6 py-3 transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </Button>
              </motion.a>
            ) : (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-cyan-500/50 text-cyan-400 bg-transparent px-6 py-3 cursor-not-allowed opacity-80"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Gallery — display all project images from public/img/projetct */}
      {galleryImages.length > 0 && (
        <motion.section
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-white mb-6">Project Gallery</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <motion.button
                type="button"
                key={src}
                className="relative aspect-video rounded-lg overflow-hidden glass text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                whileHover={{ scale: 1.03 }}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={src}
                  alt={`${project.title} - image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
              </motion.button>
            ))}
          </div>
        </motion.section>
      )}

      {/* Professional Lightbox with navigation, counter, keyboard support */}
      <ImageLightbox
        images={galleryImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={project.title}
      />
    </motion.div>
  );
}
