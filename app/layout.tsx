import React from 'react';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Richard Pius — Software Developer & DevOps Specialist',
    template: '%s | Richard Pius'
  },
  description: 'Portfolio of Richard Pius, Software Developer & DevOps Specialist. Available for freelance, contract development, AWS cloud infrastructure, full-stack web apps, and secure systems.',
  keywords: [
    'Richard Pius',
    'Richard Pius Santhigiri College',
    'Software Developer',
    'Freelance Software Engineer',
    'DevOps Engineer',
    'Cloud Architect AWS',
    'Next.js Developer',
    'Linux System Administrator',
    'Full Stack Developer Kerala',
    'Contract Developer',
    'Terraform IaC',
    'Docker CI/CD'
  ],
  authors: [{ name: 'Richard Pius' }],
  creator: 'Richard Pius',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/richard-pius',
    title: 'Richard Pius — Software Developer & DevOps Specialist',
    description: 'Personal portfolio of Richard Pius. Available for freelance engineering, AWS cloud deployments, Next.js web applications, and security-first systems.',
    siteName: 'Richard Pius Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Richard Pius — Software Developer & DevOps',
    description: 'Personal portfolio of Richard Pius. Available for freelance & contract engineering.',
    creator: '@richardpius'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Richard Pius",
    "alternateName": "Richard Pius Developer",
    "jobTitle": "Software Developer & DevOps Specialist",
    "url": "https://github.com/richard-pius",
    "sameAs": [
      "https://github.com/richard-pius",
      "https://www.linkedin.com/in/richard-pius-developer/"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Santhigiri College of Computer Science"
    },
    "knowsAbout": [
      "Software Engineering",
      "DevOps Automation",
      "Cybersecurity",
      "Linux System Administration",
      "Cloud Infrastructure AWS",
      "Full-Stack Web Development",
      "Flutter Mobile Development",
      "Freelance Software Architecture"
    ],
    "description": "Software Developer specializing in secure scalable systems, DevOps pipelines, Linux hardening, and full-stack web applications. Open to freelance and contract projects."
  };

  return (
    <html lang="en" className={`scroll-smooth ${sansFont.variable} ${monoFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-200 selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}

