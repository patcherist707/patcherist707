import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { resumeData, fadeInUp } from '../data/resumeData';

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="relative z-10 min-h-screen flex items-center justify-center py-16 md:py-20"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">Contact Me</h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400">Feel free to reach out for internship opportunities or collaborations</p>
          <div className="mt-3 w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Centered Cards Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-6"
        >
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-500 shrink-0">
              <Mail size={24} />
            </div>
            <div className="overflow-hidden">
              <h4 className="text-xs uppercase text-slate-400 font-semibold tracking-wider">Email</h4>
              <a href={`mailto:${resumeData.personal.email}`} className="text-sm font-semibold hover:text-cyan-500 transition-colors truncate block">
                {resumeData.personal.email}
              </a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-indigo-500/10 text-indigo-500 shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="text-xs uppercase text-slate-400 font-semibold tracking-wider">Phone</h4>
              <p className="text-sm font-semibold">{resumeData.personal.phone}</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-purple-500/10 text-purple-500 shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="text-xs uppercase text-slate-400 font-semibold tracking-wider">Location</h4>
              <p className="text-sm font-semibold">{resumeData.personal.location}</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}