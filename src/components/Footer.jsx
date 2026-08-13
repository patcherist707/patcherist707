import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Patricia Madeth Buna. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with <span className="text-cyan-500">ReactJS</span> & <span className="text-cyan-500">Tailwind CSS 4.1</span>
        </p>
      </div>
    </footer>
  );
}