'use client';

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../constants/data';
import ProjectThreeCanvas from './ProjectThreeCanvas';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-300">
      <div className="mx-auto max-w-5xl space-y-12">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <span className="text-[10px] font-mono tracking-widest text-indigo-500 uppercase font-bold">// Portfolio</span>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Recent Projects</h2>
          <p className="text-zinc-500 dark:text-zinc-400 font-light text-sm max-w-md">
            A curated list of repositories, experimental distributions, and mobile weather dashboards.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-zinc-200/80 hover:border-zinc-300 dark:border-zinc-800/80 dark:hover:border-zinc-700 bg-white dark:bg-zinc-950 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/[0.02]"
            >
              <div className="space-y-4">
                {/* 3D Visual Mesh Artifact */}
                <div className="h-40 w-full rounded-xl bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900/40 dark:to-zinc-950/20 flex items-center justify-center border border-zinc-100 dark:border-zinc-800/50 overflow-hidden relative">
                  <ProjectThreeCanvas projectId={project.id} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-4 pt-2 border-t border-zinc-100 dark:border-zinc-900">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white font-medium"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white font-medium"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
