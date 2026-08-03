"use client";

import { User, MapPin, Mail, GraduationCap, Download, Rocket, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";

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

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">

          {/* Left Column: Image & Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 lg:col-span-5"
          >
            {/* Image Card */}
            <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 mix-blend-overlay z-10 transition-opacity group-hover:opacity-0" />
              <img
                src="/images/nasim image.jpeg"
                alt="Nasim Waris"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-md">
                <Rocket className="h-8 w-8 text-indigo-400" />
                <div>
                  <p className="text-sm font-bold text-white">PreepX</p>
                  <p className="text-xs font-medium text-slate-300">Co-Founder</p>
                </div>
              </div>
            </div>

            {/* Quick Cards Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto w-full">
              <div className="flex flex-col gap-1 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 backdrop-blur-sm transition-all hover:border-indigo-500/50 hover:bg-slate-800/50">
                <MapPin className="h-5 w-5 text-indigo-400 mb-1" />
                <span className="text-xs text-slate-400 font-medium">Location</span>
                <span className="text-sm font-bold text-slate-200">Noida, India</span>
              </div>
              <div className="flex flex-col gap-1 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:bg-slate-800/50">
                <GraduationCap className="h-5 w-5 text-purple-400 mb-1" />
                <span className="text-xs text-slate-400 font-medium">Degree</span>
                <span className="text-sm font-bold text-slate-200">M.Tech CSE</span>
              </div>
              <div className="flex flex-col gap-1 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 backdrop-blur-sm transition-all hover:border-pink-500/50 hover:bg-slate-800/50">
                <Mail className="h-5 w-5 text-pink-400 mb-1" />
                <span className="text-xs text-slate-400 font-medium">Email</span>
                <span className="text-sm font-bold text-slate-200 truncate">nasimwaris189@gmail.com</span>
              </div>
              <div className="flex flex-col gap-1 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-slate-800/50">
                <Target className="h-5 w-5 text-emerald-400 mb-1" />
                <span className="text-xs text-slate-400 font-medium">Availability</span>
                <span className="text-sm font-bold text-emerald-400">Open for Roles</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-semibold mb-6 w-fit">
              <User size={16} />
              Who I Am
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Software Engineer, Startup Founder & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">AI Product Builder</span>
            </h3>

            <div className="space-y-6 text-base md:text-lg text-slate-400 leading-relaxed">
              <p>
                With over <strong className="text-slate-200">3 years of experience</strong> building scalable applications, I specialize in transforming complex business problems into elegant, high-performance software solutions.
              </p>

              <p>
                As the <strong className="text-slate-200">Co-Founder of PreepX</strong>, I lead the product architecture, backend engineering, AI integrations, and overall technical strategy. My focus is on building AI-powered platforms that deliver real value to users at scale.
              </p>

              <p>
                My technical foundation is rooted in <strong className="text-indigo-300">Next.js, NestJS, Java, Spring Boot, and Cloud infrastructure</strong>. I enjoy architecting microservices, designing robust system architectures, and integrating cutting-edge AI like OpenAI and Claude to automate workflows and enhance product capabilities.
              </p>
            </div>

            <div className="mt-10 p-6 rounded-3xl bg-slate-900 border border-slate-800 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Zap className="text-yellow-400" size={24} />
                What Drives Me
              </h4>
              <p className="text-slate-400 italic">
                &quot;I believe in building products that create measurable impact. Whether it&apos;s architecting a robust backend service or launching an AI feature that changes how users interact with a platform—I am driven by the intersection of innovative technology and solving real-world problems.&quot;
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:opacity-90 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
              >
                Download Resume
                <Download size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all hover:bg-slate-800 hover:border-slate-600 hover:-translate-y-0.5"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
