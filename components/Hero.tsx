'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, ExternalLink, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile, contactInfo } from '@/data/personal';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  external: ExternalLink,
  phone: Phone,
  zalo: MessageCircle,
};

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: [0, -20, 0],
      transition: {
        duration: 3,
        ease: 'easeInOut' as const,
        repeat: Infinity,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-900/20 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        className="w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Avatar */}
        <motion.div
          className="flex justify-center mb-8"
          variants={floatingVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-32 h-32">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-1 glow-primary"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl font-bold">
                {profile.avatarLetter}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main text */}
        <motion.div className="text-center" variants={itemVariants}>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 gradient-text">
            {profile.name}
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-2">
            {profile.title}
          </p>
          <p className="text-lg text-slate-400">
            {profile.subtitle}
          </p>
        </motion.div>

        {/* Social icons */}
        <motion.div
          className="flex justify-center gap-6 my-12"
          variants={itemVariants}
        >
          {contactInfo.socialLinks.map((social) => {
            const Icon = iconMap[social.icon];
            return Icon ? (
              <motion.a
                key={social.label}
                href={social.href}
                className="group relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-lg group-hover:bg-purple-500/40 transition-all duration-300" />
                <div className="relative p-4 rounded-full glass glow-interactive hover:glow-accent transition-all duration-300">
                  <Icon className="w-5 h-5 text-purple-400" />
                </div>
              </motion.a>
            ) : null;
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:shadow-lg glow-primary transition-all duration-300"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              className="px-8 py-3 rounded-lg font-semibold border-purple-500/50 text-purple-400 hover:bg-purple-500/10 bg-transparent"
              onClick={() => {
                document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See Achievements
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
