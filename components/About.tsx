'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { personalData, skillsCategorized } from '../constants/data';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12"
        >
          {/* Title Area */}
          <div className="md:col-span-4">
            <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-2">About</h2>
            <h3 className="text-3xl font-bold tracking-tight text-foreground">
              Welcome. I am a dedicated developer focused on craftsmanship and simplicity.
            </h3>
          </div>

          {/* Content Area */}
          <div className="md:col-span-8 space-y-12">
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
              <p className="leading-relaxed">
                {personalData.bio}
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {skillsCategorized.map((category, idx) => (
                <div key={idx} className="space-y-4">
                  <h4 className="text-sm font-semibold text-foreground tracking-tight">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-3 py-1.5 rounded-md bg-muted text-xs font-medium text-muted-foreground border border-border/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
