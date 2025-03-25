import { Content, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio Website",
  description: "This is a portfolio website created by Richard Pius! and here is the link to both my github and linkdin profiles : https://github.com/richard-pius  https://www.linkedin.com/in/richard-pius-2b4248322?utm_source=share&utm_campaign=share_via&utm_content=profile",
  Content: "[Richard Pius] , [richard-pius] , https://github.com/richard-pius , https://www.linkedin.com/in/richard-pius-2b4248322?utm_source=share&utm_campaign=share_via&utm_content=profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
