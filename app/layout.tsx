import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ParticleBackground from "@/components/ParticleBackground";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Richard Pius — Just a DEV",
  description:
    "Richard Pius. BCA Student, Developer & Cybersecurity Enthusiast. Building fun software and exploring computer science.",
  keywords: [
    "Richard Pius",
    "Developer",
    "BCA Student",
    "Cybersecurity Enthusiast",
    "Portfolio",
    "Kerala",
    "India",
  ],
  authors: [{ name: "Richard Pius" }],
  openGraph: {
    title: "Richard Pius — Just a DEV",
    description:
      "BCA Student, Developer & Cybersecurity Enthusiast. Building fun software.",
    url: "https://richardpius.vercel.app",
    siteName: "Richard Pius",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richard Pius — Just a DEV",
    description:
      "BCA Student, Developer & Cybersecurity Enthusiast.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-black text-white antialiased relative font-sans">
        <div className="grain-overlay" />
        <ParticleBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
