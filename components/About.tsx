'use client';

import { motion } from 'framer-motion';
import { Heart, Zap, Target, Lightbulb } from 'lucide-react';
import {
  aboutSubtitle,
  aboutBioParagraphs,
  aboutHighlights,
  aboutStats,
  aboutCtaText,
  aboutCtaButtonText,
} from '@/data/personal';

const aboutHighlightIcons = {
  lightbulb: Lightbulb,
  zap: Zap,
  target: Target,
  heart: Heart,
};

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 border-t border-white/10">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' as const }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' as const, delay: 1 }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {aboutSubtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left side - Main text */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="glass rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Who Am I?</h3>
              {aboutBioParagraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-slate-300 leading-relaxed text-justify ${i < aboutBioParagraphs.length - 1 ? 'mb-4' : ''}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right side - Highlights */}
          <motion.div className="space-y-4" variants={itemVariants}>
            {aboutHighlights.map((highlight, index) => {
              const Icon = aboutHighlightIcons[highlight.icon];
              return (
                <motion.div
                  key={index}
                  className="glass rounded-lg p-6 group glow-interactive transition-all duration-300 cursor-pointer hover:glow-accent relative overflow-hidden"
                  whileHover={{ y: -4, scale: 1.02 }}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 300, damping: 25 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <div className="flex gap-4 relative z-10">
                    <motion.div
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20">
                        <Icon className="w-6 h-6 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                      </div>
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-slate-400 mt-1">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Additional info cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {aboutStats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass rounded-lg p-6 text-center group glow-interactive transition-all duration-300 hover:glow-accent relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="text-3xl font-bold gradient-text mb-2 relative z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-slate-400 relative z-10">
                <p className="font-semibold text-white">{stat.label}</p>
                <p>{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 mb-4">
            {aboutCtaText}
          </p>
          <motion.button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:shadow-lg glow-primary transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">{aboutCtaButtonText}</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
