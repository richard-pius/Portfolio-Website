'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../constants/data';
import { ExternalLink } from 'lucide-react';
import { Github as BrandGithub } from './BrandIcons';

export default function Projects() {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-2">Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Selected Works.
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-foreground text-background'
                    : 'bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group p-8 rounded-3xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors flex flex-col justify-between space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono font-medium text-muted-foreground">{project.id}</span>
                    <span className="text-xs font-medium text-accent px-2 py-1 bg-accent/10 rounded-full">{project.category}</span>
                  </div>
                  
                  <h4 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium text-muted-foreground bg-background px-2 py-1 rounded-md border border-border/50">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
                        <BrandGithub /> Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
