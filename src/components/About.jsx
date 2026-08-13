import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Sparkles } from 'lucide-react';
import { resumeData, fadeInUp } from '../data/resumeData';

export default function About() {
  return (
    <section id="about" className="relative z-10 py-16 bg-slate-100/50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">About & Education</h2>
          <div className="mt-2 w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{resumeData.education.degree}</h3>
                <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">{resumeData.education.institution} • {resumeData.education.location}</p>
              </div>
            </div>

            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {resumeData.education.coursework.map((course, i) => (
                <span key={i} className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {course}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Professional Goal</h3>
                  <p className="text-sm text-indigo-500 font-medium">Internship Aspirations</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Passionate about combining hardware insights with modern web development. Equipped with hands-on exposure to embedded microcontrollers, SQL database integration, and reactive UI component design.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500">
              <Sparkles size={14} className="text-amber-500" />
              <span>Ready to adapt to fast-paced technical environments and contribute actively.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}