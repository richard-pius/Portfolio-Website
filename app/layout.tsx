import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Richard Pius — Software Developer & DevSecOps Enthusiast',
    template: '%s | Richard Pius'
  },
  description: 'Personal portfolio of Richard Pius, a Software Developer and BCA Student specializing in scaling secure systems, DevSecOps pipelines, Linux administration, and WebGL.',
  keywords: [
    'Richard Pius',
    'Software Developer',
    'DevSecOps',
    'Cloud Enthusiast',
    'Linux Administrator',
    'BCA Student',
    'Kottayam Kerala',
    'Cybersecurity',
    'React Developer',
    'Next.js Portfolio'
  ],
  authors: [{ name: 'Richard Pius' }],
  creator: 'Richard Pius',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/richard-pius',
    title: 'Richard Pius — Software Developer & DevSecOps Enthusiast',
    description: 'Personal portfolio of Richard Pius, a Software Developer and BCA Student specializing in scaling secure systems, DevSecOps pipelines, Linux administration, and WebGL.',
    siteName: 'Richard Pius Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Richard Pius — Software Developer & DevSecOps',
    description: 'Personal portfolio of Richard Pius, a Software Developer and BCA Student specializing in scaling secure systems.',
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
    "jobTitle": "Software Developer & DevSecOps Enthusiast",
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
      "Cybersecurity",
      "Linux System Administration",
      "Cloud Computing",
      "DevOps Automation",
      "Full-Stack Web Development",
      "Flutter Mobile Development"
    ],
    "description": "Software Developer and BCA student specializing in secure scalable systems, DevSecOps pipelines, Linux hardening, and web development."
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
