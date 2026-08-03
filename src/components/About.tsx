"use client";

import { User, MapPin, Mail, Phone, GraduationCap, Download, Rocket, Package, Zap, Target, Server, Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width={props.width || 20} height={props.height || 20}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width={props.width || 20} height={props.height || 20}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/20 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="inline-flex items-center gap-3 text-3xl font-bold tracking-tight sm:text-4xl">
            <User className="text-indigo-500" />
            About <span className="text-indigo-500">Me</span>
          </h2>
          <div className="mt-2 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
          
          {/* Left Column: Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 text-2xl font-bold text-slate-800 dark:text-slate-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-400">
                <User size={20} />
              </div>
              I&apos;m Nasim Waris
            </div>

            <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Results-driven Full-Stack Software Engineer with 3+ years of experience building scalable web applications and robust RESTful APIs. Skilled in React.js, Next.js, TypeScript, Java, Spring Boot, Node.js, and PostgreSQL, with a strong focus on performance, security, and clean architecture. Passionate about developing modern, user-centric digital solutions that deliver seamless experiences and real business impact through clean, maintainable, and efficient code.
            </p>

            {/* Quick Details List */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-indigo-500 shrink-0" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8 min-w-0">
                  <span className="text-sm text-slate-500 dark:text-slate-400 w-20">Location</span>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate">Noida, India - 201303</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-indigo-500 shrink-0" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8 min-w-0">
                  <span className="text-sm text-slate-500 dark:text-slate-400 w-20">Email</span>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate">nasimwaris189@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-indigo-500 shrink-0" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8 min-w-0">
                  <span className="text-sm text-slate-500 dark:text-slate-400 w-20">Phone</span>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate">+91 7277743910</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <GraduationCap className="h-5 w-5 text-indigo-500 shrink-0" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8 min-w-0">
                  <span className="text-sm text-slate-500 dark:text-slate-400 w-20">Degree</span>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate">M.Tech CSE</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/docs/Waris_Nasim_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:opacity-90 hover:shadow-cyan-500/35 hover:-translate-y-0.5"
              >
                View Resume
                <Download size={16} />
              </a>
              <a
                href="https://github.com/nasimwaris"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-transparent text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:-translate-y-0.5 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
                aria-label="GitHub Profile"
              >
                <GithubIcon width={20} height={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nasim-waris/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-transparent text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:-translate-y-0.5 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon width={20} height={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Stats and Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-950/50">
                <Rocket className="h-8 w-8 text-pink-500" />
                <span className="text-2xl font-bold text-slate-800 dark:text-white">3+</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Years Experience</span>
              </div>
              <a href="#projects" className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-950/50 dark:hover:border-indigo-500">
                <Package className="h-8 w-8 text-orange-400 group-hover:scale-110 transition-transform" />
                <span className="text-2xl font-bold text-indigo-500 dark:text-indigo-400">10+</span>
                <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                  Projects Shipped <LinkIcon size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>
              <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-950/50">
                <Zap className="h-8 w-8 text-indigo-500" />
                <span className="text-2xl font-bold text-slate-800 dark:text-white">15+</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Tech Stack</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-950/50">
                <Target className="h-8 w-8 text-emerald-500" />
                <span className="text-2xl font-bold text-slate-800 dark:text-white">100%</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Commitment</span>
              </div>
            </div>

            {/* List Cards */}
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-950/50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-400">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Performance First</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Strong focus on performance, security, and delivering seamless user experiences.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-950/50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20 dark:text-emerald-400">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Clean Architecture</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Building robust RESTful APIs with clean, maintainable, and efficient code patterns.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-950/50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-pink-500 dark:bg-pink-500/20 dark:text-pink-400">
                  <Server size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Modern Technologies</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">React.js, Next.js, TypeScript, Java, Spring Boot, Node.js, and PostgreSQL.</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
