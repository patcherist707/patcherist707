import React from 'react';
import { motion } from 'framer-motion';
import { resumeData, fadeInUp, staggerContainer } from '../data/resumeData';

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Technical Skills</h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400">Core technologies and tools acquired during computer engineering studies</p>
          <div className="mt-2 w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {resumeData.skills.map((skillGroup, index) => {
            const IconComponent = skillGroup.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-cyan-500/10 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-500">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100">{skillGroup.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}