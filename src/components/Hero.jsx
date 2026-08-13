import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ChevronRight } from 'lucide-react';
import { resumeData, fadeInUp, staggerContainer } from '../data/resumeData';

export default function Hero() {
  return (
    <section id="home" className="relative z-10 pt-20 pb-16 md:pt-32 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex-1 text-center md:text-left"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              Seeking Computer Engineering Internship
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Welcome, <br />
            I'm <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">{resumeData.personal.name}</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="mt-4 text-xl font-medium text-slate-600 dark:text-slate-300">
              {resumeData.personal.title}
            </motion.p>

            <motion.p variants={fadeInUp} className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
              {resumeData.personal.about}
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all flex items-center gap-2"
              >
                Contact Me <ChevronRight size={18} />
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold transition-all"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-6 text-xs text-slate-500 dark:text-slate-400 justify-center md:justify-start">
              <span className="flex items-center gap-2"><MapPin size={14} className="text-cyan-500"/> {resumeData.personal.location}</span>
              <span className="flex items-center gap-2"><Mail size={14} className="text-cyan-500"/> {resumeData.personal.email}</span>
              <span className="flex items-center gap-2"><Phone size={14} className="text-cyan-500"/> {resumeData.personal.phone}</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-md"
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <span className="text-xs font-mono text-slate-400">patricia.config.json</span>
              </div>
              
              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <div className="text-cyan-500">{"{"}</div>
                <div className="pl-4"><span className="text-indigo-400">"status"</span>: <span className="text-green-400">"Ready for Internship"</span>,</div>
                <div className="pl-4"><span className="text-indigo-400">"major"</span>: <span className="text-amber-400">"Computer Engineering"</span>,</div>
                <div className="pl-4"><span className="text-indigo-400">"university"</span>: <span className="text-amber-400">"University of Mindanao"</span>,</div>
                <div className="pl-4">
                  <span className="text-indigo-400">"coreSkills"</span>: [
                    <div className="pl-4 text-slate-400">"ReactJS", "C++", "Python",<br />"ESP32 IoT", "Firebase", "SQL"</div>
                  ],
                </div>
                <div className="pl-4"><span className="text-indigo-400">"enthusiasm"</span>: <span className="text-cyan-400">100%</span></div>
                <div className="text-cyan-500">{"}"}</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}