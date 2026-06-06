"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Mail, Trophy, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "Software Engineer",
  "Software Developer",
  "Web Developer",
];

// Custom brand icon components due to missing exports in this lucide-react version
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width={props.width || 20} height={props.height || 20}>
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
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-6 py-4 md:px-4"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -left-[10%] h-[800px] w-[800px] rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-500/5" />
        <div className="absolute -bottom-[30%] -right-[10%] h-[800px] w-[800px] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-500/5" />
      </div>

      <div className="mx-auto grid max-w-7xl w-full grid-cols-1 items-center gap-12 md:grid-cols-12 px-4">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center md:col-span-7 md:items-start md:text-left"
        >
          <span className="mb-3 rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-semibold text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
            Welcome to my space
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight">
            Hello, I&apos;m <br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Nasim Waris
            </span>
          </h1>

          <div className="mt-4 h-8 text-xl font-medium text-slate-700 dark:text-slate-300">
            I&apos;m a <span className="text-indigo-500 dark:text-indigo-400">{displayText}</span>
            <span className="animate-pulse font-light">|</span>
          </div>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Passionate Full-Stack Software Developer specializing in building scalable, high-performance web applications using React.js, Next.js, TypeScript, Java, Spring Boot, and modern web technologies. Focused on creating clean, efficient, and user-friendly digital experiences that help businesses grow.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#about"
              className="group flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/35 hover:-translate-y-0.5 active:translate-y-0"
            >
              About Me
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/nasim-waris/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-indigo-400 dark:hover:bg-indigo-950/30 dark:hover:text-indigo-400"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com/nasimwaris"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:border-slate-800 hover:bg-slate-50 hover:text-black dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-white dark:hover:bg-slate-800 dark:hover:text-white"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="mailto:nasimwaris189@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:border-pink-500 hover:bg-pink-50 hover:text-pink-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-pink-400 dark:hover:bg-pink-950/30 dark:hover:text-pink-400"
              aria-label="Mail"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.hackerrank.com/nasimwaris189"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-emerald-400 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-400"
              aria-label="HackerRank"
            >
              <Trophy size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:col-span-5"
        >
          <div className="relative group flex items-center justify-center">
            {/* Glowing Ring */}
            <div className="absolute inset-0 -m-4 animate-spin-slow rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 blur-md transition-all group-hover:scale-105" />

            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-slate-50 bg-slate-100 dark:border-slate-950 dark:bg-slate-900 md:h-80 md:w-80 shadow-2xl">
              <Image
                src="/images/nasim image.jpeg"
                alt="Nasim Waris"
                fill
                priority
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover transition-transform duration-500 group-hover:scale-105 dark:hidden"
              />
              <Image
                src="/images/nasim image.jpeg"
                alt="Nasim Waris"
                fill
                priority
                sizes="(max-width: 768px) 256px, 320px"
                className="hidden object-cover transition-transform duration-500 group-hover:scale-105 dark:block"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
