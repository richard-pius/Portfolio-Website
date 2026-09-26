'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { freelancedWork } from '../constants/data';
import { ExternalLink, Check } from 'lucide-react';

export default function Freelance() {
  return (
    <section id="freelance" className="py-24 sm:py-32 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-2">Freelance Work</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Selected Client Projects.
            </h3>
          </div>

          {/* Project List */}
          <div className="space-y-12">
            {freelancedWork.map((project, idx) => (
              <div 
                key={project.id} 
                className="group relative flex flex-col md:flex-row gap-8 md:gap-16 items-start py-8 border-t border-border/50"
              >
                {/* Meta */}
                <div className="md:w-1/3 space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-muted-foreground">{project.period}</p>
                    <h4 className="text-xl font-semibold tracking-tight text-foreground">{project.client}</h4>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">{project.role}</p>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline mt-4"
                    >
                      View Live Site <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                {/* Content */}
                <div className="md:w-2/3 space-y-8">
                  <h5 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
                    {project.title}
                  </h5>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.overview}
                  </p>

                  <div className="space-y-4">
                    <h6 className="text-sm font-semibold tracking-tight text-foreground">Key Deliverables</h6>
                    <ul className="space-y-2">
                      {project.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check size={16} className="text-accent shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs font-medium bg-background text-muted-foreground border border-border rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
