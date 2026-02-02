'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Zap, Palette, Cloud, BookOpen } from 'lucide-react';
import { skillCategories, skillsSubtitle, skillSummaryStats } from '@/data/personal';

const skillCategoryIcons = {
  palette: Palette,
  code2: Code2,
  database: Database,
  cloud: Cloud,
  zap: Zap,
  bookOpen: BookOpen,
};

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-1/3 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Technical proficiencies across various domains and technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => {
            const Icon = skillCategoryIcons[category.icon];

            return (
              <motion.div
                key={category.id}
                variants={categoryVariants}
                className="group"
              >
                <motion.div
                  className="glass rounded-lg p-6 h-full glow-interactive transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <motion.div
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        variants={skillVariants}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-300">
                            {skill.name}
                          </span>
                          <span className="text-xs text-purple-400 font-semibold">
                            {skill.proficiency}%
                          </span>
                        </div>

                        {/* Proficiency bar */}
                        <motion.div
                          className="h-2 bg-slate-800 rounded-full overflow-hidden"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 0.8, delay: 0.1 * index }}
                            viewport={{ once: true }}
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills summary */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {skillSummaryStats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass rounded-lg p-6 text-center glow-primary transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
                {stat.label}
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
