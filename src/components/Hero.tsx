"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Mail, Trophy, ArrowDown, ExternalLink, Briefcase, Layers, MonitorSmartphone, Brain, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  "Building AI Products",
  "Building SaaS Platforms",
  "Building Scalable Systems",
];

// Custom brand icon components due to missing exports in this lucide-react version
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width={props.width || 24} height={props.height || 24}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width={props.width || 20} height={props.height || 20}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentWord) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-start overflow-hidden px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-10 md:pb-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-slate-950">
        <div className="absolute -top-[40%] -left-[10%] h-[800px] w-[800px] animate-pulse rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute -bottom-[30%] -right-[10%] h-[800px] w-[800px] animate-pulse rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="mx-auto grid max-w-7xl w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 mb-16">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left"
        >
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-4">
            <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-400 backdrop-blur-sm">
              Co-Founder @ PreepX
            </span>
            <span className="rounded-full bg-purple-500/10 border border-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-400 backdrop-blur-sm">
              Full Stack Engineer
            </span>
            <span className="rounded-full bg-pink-500/10 border border-pink-500/20 px-3 py-1 text-xs font-semibold text-pink-400 backdrop-blur-sm">
              AI Product Builder
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2">
            Hi, I&apos;m <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Nasim Waris
            </span>
          </h1>

          <div className="mt-2 h-10 text-xl md:text-2xl font-bold text-slate-300">
            <span className="text-indigo-400">{displayText}</span>
            <span className="animate-pulse font-light text-indigo-400/50">|</span>
          </div>

          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-slate-400">
            I build scalable web applications, AI-powered products, and modern SaaS platforms using Next.js, NestJS, Java, Spring Boot, PostgreSQL, and cloud technologies.
            <br /><br />
            <span className="text-slate-300 font-medium">Currently building PreepX</span> — an AI-powered mock interview and placement platform helping students prepare smarter.
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 w-full">
            <a
              href="#project"
              className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:opacity-90 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
            >
              Explore My Work
            </a>
            <a
              href="https://preepx.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-6 py-3 text-sm font-semibold text-indigo-300 shadow-sm transition-all hover:bg-indigo-500/20 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <ExternalLink size={16} />
              View PreepX
            </a>
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all hover:bg-slate-800 hover:border-slate-600 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Hire Me
            </a>
          </div>
        </motion.div>

        {/* Right Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="flex justify-center lg:col-span-5 relative mt-4 md:-mt-8 lg:-mt-16"
        >
          <div className="relative group flex items-center justify-center w-56 h-56 md:w-72 md:h-72 lg:w-[320px] lg:h-[320px]">
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-2xl transition-all group-hover:opacity-50" />

            <div className="relative w-full h-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl rotate-3 transition-transform duration-500 group-hover:rotate-0">
              <Image
                src="/images/nasim_profile.jpg"
                alt="Nasim Waris"
                fill
                priority
                sizes="(max-width: 768px) 224px, 320px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Glassmorphism overlay for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Metrics Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mx-auto w-full max-w-7xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 border-t border-slate-800/50 pt-8 mt-4"
      >
        <div className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm group hover:border-indigo-500/50 transition-colors">
          <Briefcase className="text-slate-400 mb-2 group-hover:text-indigo-400 transition-colors" size={24} />
          <span className="text-2xl md:text-3xl font-black text-white mb-1">3+</span>
          <span className="text-xs text-slate-400 font-medium">Years Experience</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm group hover:border-indigo-500/50 transition-colors">
          <Rocket className="text-indigo-400 mb-2 group-hover:text-indigo-300 transition-colors" size={24} />
          <span className="text-2xl md:text-3xl font-black text-indigo-400 mb-1">Co-Founder</span>
          <span className="text-xs text-slate-400 font-medium">@ PreepX</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm group hover:border-purple-500/50 transition-colors">
          <Layers className="text-slate-400 mb-2 group-hover:text-purple-400 transition-colors" size={24} />
          <span className="text-2xl md:text-3xl font-black text-white mb-1">15+</span>
          <span className="text-xs text-slate-400 font-medium">Technologies</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm group hover:border-purple-500/50 transition-colors">
          <MonitorSmartphone className="text-purple-400 mb-2 group-hover:text-purple-300 transition-colors" size={24} />
          <span className="text-2xl md:text-3xl font-black text-purple-400 mb-1">10+</span>
          <span className="text-xs text-slate-400 font-medium">Products Built</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm group hover:border-blue-500/50 transition-colors">
          <LinkedinIcon className="text-[#0077b5] mb-2 group-hover:scale-110 transition-transform" width={24} height={24} />
          <span className="text-2xl md:text-3xl font-black text-white mb-1">25K+</span>
          <span className="text-xs text-slate-400 font-medium">LinkedIn Community</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm group hover:border-pink-500/50 transition-colors">
          <Brain className="text-pink-400 mb-2 group-hover:text-pink-300 transition-colors" size={24} />
          <span className="text-2xl md:text-3xl font-black text-pink-400 mb-1">AI</span>
          <span className="text-xs text-slate-400 font-medium">Platform Builder</span>
        </div>
      </motion.div>

    </section>
  );
}
