'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowUp, Phone, MessageCircle } from 'lucide-react';
import {
  contactInfo,
  footerInfo,
  profile,
  getEmailFromContact,
  getDisplayUrl,
} from '@/data/personal';

const footerSocialIcons: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  external: ExternalLink,
  phone: Phone,
  zalo: MessageCircle,
};

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative py-20 px-4 sm:px-6 border-t border-white/10">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Contact section */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left content */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Let's Connect</span>
            </h2>
            <p className="text-slate-400 mb-6 text-lg">
              {contactInfo.message}
            </p>
            <motion.a
              href={contactInfo.socialLinks.find((s) => s.icon === 'mail')?.href ?? '#'}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-lg glow-primary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Send Me an Email
            </motion.a>
          </motion.div>

          {/* Right content - Contact info */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="glass rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-4 text-slate-300">
                {contactInfo.socialLinks.map((link) => {
                  const Icon = footerSocialIcons[link.icon];
                  const display =
                    link.icon === 'mail'
                      ? getEmailFromContact(contactInfo)
                      : link.icon === 'phone'
                        ? link.href.replace(/^tel:/i, '')
                        : getDisplayUrl(link.href);
                  const iconClass =
                    link.icon === 'mail'
                      ? 'w-5 h-5 text-purple-400'
                      : link.icon === 'linkedin'
                        ? 'w-5 h-5 text-cyan-400'
                        : link.icon === 'phone' || link.icon === 'zalo'
                          ? 'w-5 h-5 text-slate-300'
                          : 'w-5 h-5 text-slate-300';
                  return Icon ? (
                    <div key={link.icon} className="flex items-center gap-3">
                      <Icon className={iconClass} />
                      {link.icon === 'mail' ? (
                        <span>{display}</span>
                      ) : (
                        <a
                          href={link.href}
                          className="hover:text-white transition-colors"
                        >
                          {display}
                        </a>
                      )}
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            ...contactInfo.socialLinks,
            { label: 'Portfolio', href: '#home', icon: 'external' as const },
          ].map((link) => {
            const Icon = footerSocialIcons[link.icon];
            return Icon ? (
              <motion.a
                key={link.label}
                href={link.href}
                className="glass rounded-lg p-6 flex flex-col items-center justify-center gap-3 group glow-interactive transition-all duration-300 hover:glow-accent"
                whileHover={{
                  y: -5,
                  scale: 1.05,
                }}
                variants={itemVariants}
              >
                <Icon className="w-6 h-6 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                  {link.label}
                </span>
              </motion.a>
            ) : null;
          })}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom info */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <p className="text-slate-400">
              © {footerInfo.copyrightYear} {profile.name}. {footerInfo.tagline}
              <span className="text-purple-400 mx-1">♦</span>
              and built with Next.js
            </p>
          </motion.div>

          {/* Scroll to top button */}
          <motion.button
            onClick={handleScrollTop}
            className="p-3 rounded-full glass hover:border-purple-400/50 transition-colors glow-interactive"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            <ArrowUp className="w-5 h-5 text-purple-400" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
