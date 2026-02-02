"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, Award, Star, Code2 } from "lucide-react";
import {
  achievements as achievementsData,
  achievementStats,
  achievementsAwardImage,
  achievementsAwardCaption,
  achievementsSectionSubtitle,
  achievementsMilestonesTitle,
} from "@/data/personal";

const achievementIconMap = {
  trophy: Trophy,
  award: Award,
  star: Star,
  code2: Code2,
};

export function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/2 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Achievements & Milestones</span>
          </h2>
          <p className="text-slate-400 text-lg">
            {achievementsSectionSubtitle}
          </p>
        </motion.div>

        {/* Award Photo */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-xl font-semibold text-white mb-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Award Ceremony
          </motion.h3>
          <motion.div
            className="relative w-full aspect-video rounded-lg overflow-hidden glass group cursor-pointer glow-interactive hover:glow-accent hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.35)] transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{
              opacity: { duration: 0.6, delay: 0.15 },
              scale: { duration: 0.6, delay: 0.15 },
              y: { type: "spring", stiffness: 400, damping: 25 },
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"
              aria-hidden
            />
            <Image
              src={achievementsAwardImage}
              alt="Award Ceremony"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </motion.div>
          {achievementsAwardCaption && (
            <motion.p
              className="text-slate-400 text-sm text-center mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
            >
              {achievementsAwardCaption}
            </motion.p>
          )}
        </motion.div>

        {/* Milestones */}
        <h3 className="text-xl font-semibold text-white mb-8 text-center">
          {achievementsMilestonesTitle}
        </h3>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Vertical line */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 sm:translate-x-[-2px]" />

          {/* Timeline items */}
          <div className="space-y-8 sm:space-y-12">
            {achievementsData.map((achievement, index) => {
              const Icon = achievementIconMap[achievement.icon];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={achievement.id}
                  variants={itemVariants}
                  className={`flex gap-6 sm:gap-8 ${
                    !isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 sm:flex-1 pl-12 sm:pl-0">
                    <motion.div
                      className={`glass rounded-lg glow-interactive transition-all duration-300 ${achievement.image ? "overflow-hidden p-0" : "p-6"}`}
                      whileHover={{ y: -5 }}
                    >
                      {achievement.image && (
                        <div className="relative w-full aspect-video rounded-t-lg overflow-hidden">
                          <Image
                            src={achievement.image}
                            alt={achievement.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        </div>
                      )}
                      <div className={achievement.image ? "p-6" : ""}>
                        <div className="flex items-start gap-3 mb-3">
                          <div className="mt-1 p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20">
                            <Icon className="w-5 h-5 text-purple-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white">
                              {achievement.title}
                            </h3>
                            <p className="text-sm text-slate-400">
                              {achievement.date}
                            </p>
                          </div>
                        </div>
                        <p className="text-slate-300 mb-3">
                          {achievement.description}
                        </p>
                        <span className="inline-block px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {achievement.category}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 sm:left-1/2 top-6 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 sm:translate-x-[-6px] border-4 border-slate-900" />

                  {/* Spacer for desktop layout */}
                  <div className="hidden sm:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {achievementStats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass rounded-lg p-4 sm:p-6 text-center glow-primary transition-all duration-300 hover:glow-accent"
              whileHover={{ y: -5 }}
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                {stat.label}
              </div>
              <div className="text-xs sm:text-sm text-slate-400">
                {stat.value}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
