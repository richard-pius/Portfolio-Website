'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Trophy } from 'lucide-react';
import { experiences, educationList, certifications, honors } from '../constants/data';

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'work' | 'education' | 'certifications'>('work');

  const tabs = [
    { id: 'work', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications & Honors' }
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto space-y-16">
        
        {/* Header & Tabs */}
        <div className="flex flex-col items-center text-center space-y-8">
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-2">Journey</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Background.
            </h3>
          </div>
          
          <div className="inline-flex p-1 bg-background rounded-full border border-border/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-foreground text-background shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {activeTab === 'work' && (
              <motion.div
                key="work"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 md:pl-0">
                    <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                      <div className="md:col-span-1 mb-2 md:mb-0 text-sm font-mono text-muted-foreground pt-1">
                        {exp.period || 'Present'}
                      </div>
                      <div className="md:col-span-3 space-y-4">
                        <div>
                          <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                          <div className="flex items-center gap-2">
                            <p className="text-base font-medium text-foreground">{exp.company}</p>
                            {exp.link && (
                              <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                                <ExternalLink size={14} />
                              </a>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{exp.location} &bull; {exp.type}</p>
                        </div>
                        <ul className="space-y-2 text-muted-foreground">
                          {exp.description.map((desc, i) => (
                            <li key={i} className="text-sm leading-relaxed">
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                {educationList.map((edu, idx) => (
                  <div key={idx} className="md:grid md:grid-cols-4 md:gap-8 items-start">
                    <div className="md:col-span-1 mb-2 md:mb-0 text-sm font-mono text-muted-foreground pt-1">
                      {edu.period}
                    </div>
                    <div className="md:col-span-3 space-y-3">
                      <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                      <p className="text-base font-medium text-foreground">{edu.school}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed pt-2">{edu.details}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'certifications' && (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {certifications.map((cert, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-background border border-border/50 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-foreground leading-snug">{cert.name}</h4>
                      {cert.link && (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors flex-shrink-0 mt-1">
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-foreground">{cert.issuer}</p>
                    <p className="text-xs font-mono text-muted-foreground">{cert.period}</p>
                  </div>
                ))}

                {honors.map((honor, idx) => (
                  <div key={`honor-${idx}`} className="sm:col-span-2 p-6 rounded-2xl bg-muted/50 border border-border/50 space-y-4">
                    <div className="flex items-center gap-3">
                      <Trophy size={20} className="text-accent" />
                      <h4 className="font-bold text-foreground text-lg">{honor.event}</h4>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">{honor.ranking}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{honor.details}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
