'use client';

import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { skills, experiences, educationList } from '../constants/data';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-300">
      <div className="mx-auto max-w-5xl space-y-20">
        
        {/* About & Skills split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Summary */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-indigo-500 uppercase font-bold">// Overview</span>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Biography</h2>
            <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              I am a dedicated BCA student who loves mapping systems, full stack development, and server infrastructures. Eager to solve complex challenges and implement continuous delivery pipelines.
            </p>
          </div>

          {/* Skills Badges */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-mono tracking-widest text-indigo-500 uppercase font-bold">// Skill Set</span>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map(lang => (
                    <span key={lang} className="text-xs px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300">{lang}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map(frame => (
                    <span key={frame} className="text-xs px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300">{frame}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Tools & Databases</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map(tool => (
                    <span key={tool} className="text-xs px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-950/40 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-300">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work & Education side-by-side grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
          
          {/* Work Experience */}
          <div id="experience" className="space-y-6">
            <div className="flex items-center gap-3">
              <Briefcase size={20} className="text-indigo-500" />
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">Work Experience</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-200 dark:before:bg-zinc-800">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-8 space-y-2">
                  {/* Timeline point */}
                  <span className="absolute left-2.5 top-1.5 w-2.5 h-2.5 rounded-full border-2 border-indigo-500 bg-white dark:bg-zinc-950" />
                  
                  <span className="text-[10px] font-mono text-zinc-400">{exp.period}</span>
                  <h4 className="text-base font-bold text-zinc-950 dark:text-white">{exp.role}</h4>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">{exp.company}</p>
                  
                  <ul className="list-disc pl-4 text-xs text-zinc-500 dark:text-zinc-400 space-y-1 font-light leading-relaxed">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education timeline */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <GraduationCap size={20} className="text-indigo-500" />
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">Education</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-200 dark:before:bg-zinc-800">
              {educationList.map((edu, idx) => (
                <div key={idx} className="relative pl-8 space-y-1.5">
                  <span className="absolute left-2.5 top-1.5 w-2.5 h-2.5 rounded-full border-2 border-indigo-500 bg-white dark:bg-zinc-950" />
                  
                  <span className="text-[10px] font-mono text-zinc-400">{edu.period}</span>
                  <h4 className="text-base font-bold text-zinc-950 dark:text-white">{edu.school}</h4>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">{edu.degree}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light">{edu.details}</p>
                  <p className="text-[10px] text-zinc-400 italic">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
