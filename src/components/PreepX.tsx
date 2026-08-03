"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play, CheckCircle, Database, BrainCircuit, Layout, BarChart, Server, Fingerprint, Target, Eye, Map, ShieldCheck, FileSearch, Code, QrCode } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: BrainCircuit, title: "AI Mock Interviews", desc: "Real-time voice and text based interviews powered by OpenAI." },
  { icon: Fingerprint, title: "Resume Analyzer", desc: "ATS scoring and detailed feedback using LLM parsing." },
  { icon: Layout, title: "Recruiter Dashboard", desc: "Manage candidates, view analytics, and automate shortlisting." },
  { icon: CheckCircle, title: "AI Feedback", desc: "Detailed post-interview analysis on communication and technical skills." },
  { icon: BarChart, title: "Candidate Analytics", desc: "Track progress over time with visual performance charts." },
  { icon: Server, title: "Scalable Infrastructure", desc: "Built on AWS and NestJS for high availability and low latency." }
];

export default function PreepX() {
  return (
    <section id="preepx" className="py-24 bg-slate-900 relative overflow-hidden border-t border-slate-800">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900 to-slate-900 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-bold mb-4 uppercase tracking-wider">
              Featured Startup
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 flex flex-wrap items-center justify-center gap-3">
              Building <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">PreepX</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              An AI-powered Mock Interview & Placement Platform bridging the gap between education and employment.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Story & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Database className="text-indigo-400" /> The Founder Journey
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                I co-founded PreepX with a clear vision: to democratize interview preparation. We noticed that millions of students struggle to crack technical interviews simply because they lack access to high-quality mock interviews and constructive feedback.
              </p>
              <p className="text-slate-400 leading-relaxed text-lg">
                By leveraging advanced Large Language Models (LLMs), we built a platform that simulates real-world interviews, evaluates resumes against ATS standards, and provides actionable insights—giving every candidate a fair chance to succeed.
              </p>
            </div>

            <div className="space-y-4 mt-4">
              <h4 className="text-lg font-bold text-white">Technology Stack & Architecture</h4>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "NestJS", "TypeScript", "PostgreSQL", "OpenAI", "WebRTC", "AWS", "Docker"].map((tech, i) => (
                  <span key={i} className="px-4 py-2 rounded-xl text-sm font-semibold bg-slate-800 text-slate-300 border border-slate-700 transition-colors hover:border-indigo-500 hover:text-indigo-300 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="https://preepx.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:opacity-90 hover:shadow-indigo-500/40 hover:-translate-y-1"
              >
                Visit Website
                <ExternalLink size={18} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-8 py-4 text-sm font-bold text-white shadow-sm transition-all hover:bg-slate-700 hover:-translate-y-1"
              >
                <Play size={18} />
                View Product Demo
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visuals & Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Mockup Container */}
            <div className="w-[90%] lg:w-[85%] mx-auto">
              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl group">
                <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />
                <Image 
                  src="/images/projects/preepx_dashboard.png" 
                  alt="PreepX Dashboard" 
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl border border-slate-800/50 bg-slate-900/30 hover:bg-slate-800/50 transition-colors">
                    <div className="mt-1 p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Icon size={16} />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-200 text-sm mb-1">{feat.title}</h5>
                      <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* Extended PreepX Information */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Mission & Vision */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl"><Target size={24} /></div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                To democratize career preparation globally by providing accessible, hyper-realistic AI mock interviews and continuous learning tools that bridge the gap between academia and industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl"><Eye size={24} /></div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                To be the primary catalyst for 1 million successful career transitions by 2028, setting the global standard for AI-driven skill evaluation and placement automation.
              </p>
            </motion.div>
          </div>

          {/* Current Status & Roadmap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl"><Map size={24} /></div>
              <h3 className="text-2xl font-bold text-white">Roadmap & Status</h3>
            </div>
            
            <div className="relative pl-6 border-l-2 border-slate-800 space-y-8 flex-1">
              <div className="relative">
                <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-900" />
                <h4 className="text-emerald-400 font-bold mb-1">Q2 2024: Alpha Launch</h4>
                <p className="text-sm text-slate-400">Core AI interview engine and resume parsing deployed.</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                <h4 className="text-indigo-400 font-bold mb-1">Current Status: Beta Testing</h4>
                <p className="text-sm text-slate-400">Onboarding first 1000 users. Refining latency and ATS accuracy.</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-900" />
                <h4 className="text-slate-500 font-bold mb-1">Q4 2024: B2B Integration</h4>
                <p className="text-sm text-slate-400">Launch recruiter portal for university placement cells.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Research & Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-8 md:p-12 rounded-3xl bg-slate-950 border border-slate-800"
        >
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pink-500/10 text-pink-400 mb-3">Core Research</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Document Verification Architecture</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our underlying research incorporates cryptographic security and AI intelligence for foolproof document verification.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group flex-1">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 group-hover:border-indigo-500 group-hover:bg-indigo-500/10 transition-colors shadow-lg">
                <QrCode className="text-slate-400 group-hover:text-indigo-400" size={28} />
              </div>
              <h4 className="font-bold text-slate-200">QR Generation</h4>
              <p className="text-xs text-slate-500 mt-1">Embed data hashes</p>
            </div>
            
            <div className="hidden lg:block h-[1px] bg-slate-800 flex-1 border-b border-dashed border-slate-700" />
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group flex-1">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-colors shadow-lg">
                <FileSearch className="text-slate-400 group-hover:text-blue-400" size={28} />
              </div>
              <h4 className="font-bold text-slate-200">OCR Extraction</h4>
              <p className="text-xs text-slate-500 mt-1">Tesseract & OpenCV</p>
            </div>
            
            <div className="hidden lg:block h-[1px] bg-slate-800 flex-1 border-b border-dashed border-slate-700" />
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group flex-1">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 group-hover:border-purple-500 group-hover:bg-purple-500/10 transition-colors shadow-lg">
                <Code className="text-slate-400 group-hover:text-purple-400" size={28} />
              </div>
              <h4 className="font-bold text-slate-200">SHA & AES</h4>
              <p className="text-xs text-slate-500 mt-1">Crypto Hashing</p>
            </div>
            
            <div className="hidden lg:block h-[1px] bg-slate-800 flex-1 border-b border-dashed border-slate-700" />
            
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center group flex-1">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 group-hover:border-emerald-500 group-hover:bg-emerald-500/10 transition-colors shadow-lg">
                <ShieldCheck className="text-slate-400 group-hover:text-emerald-400" size={28} />
              </div>
              <h4 className="font-bold text-slate-200">AI Validation</h4>
              <p className="text-xs text-slate-500 mt-1">Entity Matching</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
