'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Award } from 'lucide-react';
import { personalData, certifications, honors } from '../constants/data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Visitor Name: ${formData.name}\nEmail Address: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:${personalData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-300">
      <div className="mx-auto max-w-5xl space-y-16">
        
        {/* Section title & split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Metadata & Certifications */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-indigo-500 uppercase font-bold">// Connect</span>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Contact</h2>
              <p className="text-zinc-500 dark:text-zinc-400 font-light text-sm">
                Collaborate, discuss a security check project, or get in touch.
              </p>
            </div>

            <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-indigo-500" />
                <span>{personalData.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-indigo-500" />
                <span>{personalData.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-indigo-500" />
                <span>{personalData.location}</span>
              </div>
            </div>

            {/* Certifications and honors */}
            <div id="certs" className="space-y-4 pt-6 border-t border-zinc-100 dark:border-zinc-900">
              <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-sm">
                <Award size={18} className="text-indigo-500" />
                <span>Certifications & Honors</span>
              </div>
              
              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex justify-between items-baseline text-xs">
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">{cert.name}</span>
                    <span className="text-[10px] font-mono text-zinc-400">{cert.issuer}</span>
                  </div>
                ))}
              </div>

              {honors.map((honor, idx) => (
                <div key={idx} className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 text-xs mt-4">
                  <p className="font-bold text-zinc-900 dark:text-white">{honor.event}</p>
                  <p className="text-zinc-500 dark:text-zinc-400 font-light mt-1">{honor.details}</p>
                  <span className="inline-block mt-2 text-[10px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold">{honor.ranking}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="What's your name?"
                  className="w-full text-sm px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white outline-none focus:border-indigo-500 transition-colors"
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="What's your email?"
                  className="w-full text-sm px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white outline-none focus:border-indigo-500 transition-colors"
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Your Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="What do you want to say?"
                  className="w-full text-sm px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white outline-none focus:border-indigo-500 transition-colors"
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-indigo-500/20"
              >
                Send Transmission
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
