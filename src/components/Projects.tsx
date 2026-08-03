"use client";

import Image from "next/image";
import { Laptop, ExternalLink, CheckCircle2, Layers, Server, Database, GitBranch, LayoutTemplate } from "lucide-react";
import { motion } from "framer-motion";

const GithubIcon = ({ size, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width={size || props.width || 20} height={size || props.height || 20} {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projectsData = [
  {
    title: "PreepX - AI Interview Platform",
    subtitle: "Featured Project",
    overview: "An intelligent online interview platform that conducts automated technical interviews, evaluates candidates in real-time using advanced LLMs, and provides comprehensive feedback and scoring.",
    problem: "Millions of students lack access to high-quality technical mock interviews, leaving them underprepared for real-world job placements.",
    solution: "Built a scalable platform powered by OpenAI and Claude that simulates real interviews, scores resumes, and provides actionable feedback.",
    features: ["Real-time AI voice/text interviews", "ATS Resume scoring", "Recruiter Dashboard", "Detailed Analytics"],
    tech: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "OpenAI", "WebRTC"],
    architecture: "Microservices architecture utilizing NestJS for core logic and Next.js for SSR frontend.",
    systemDesign: "Event-driven design with RabbitMQ for processing async video uploads and LLM inference.",
    apiFlow: "REST APIs with GraphQL federation for real-time interview state management via WebSockets.",
    database: "PostgreSQL for relational user data and Redis for caching interview sessions.",
    imageSrc: "/images/projects/ai_interview.png",
    screenshots: ["/images/projects/ai_interview.png"], // Dashboard placeholder
    viewLink: "https://preepx.in",
    codeLink: "#",
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Food Ordering & Management Platform",
    subtitle: "Live E-Commerce Application",
    overview: "Developed and deployed a live food management platform for a non-veg restaurant, featuring menu management, order handling, secure authentication, and real-time customer interactions.",
    problem: "The restaurant was relying on manual phone orders, leading to missed sales and chaotic kitchen management during peak hours.",
    solution: "Created a full-stack Next.js application with a dedicated admin panel for order tracking and a seamless customer-facing ordering app.",
    features: ["Real-time Order Tracking", "Admin Dashboard", "Stripe Payment Integration", "Role-based Authentication"],
    tech: ["Next.js", "Node.js", "MongoDB", "Redux", "Stripe", "TailwindCSS"],
    architecture: "Monorepo structure with Next.js App Router for frontend and Node.js/Express for backend.",
    systemDesign: "Client-server architecture optimized for real-time menu updates and order status syncing.",
    apiFlow: "Stripe Webhooks for payment confirmation and Socket.io for order status emissions.",
    database: "MongoDB for flexible menu items schemas and Redis for high-speed cart caching.",
    imageSrc: "/images/projects/food_delivery1.png",
    screenshots: ["/images/projects/food_delivery1.png"], // Dashboard placeholder
    viewLink: "https://mbabiryani.in",
    codeLink: "#",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Universal Document Verification System",
    subtitle: "Research & Security Application",
    overview: "A cryptographic document verification platform enabling users to upload and verify documents for authenticity with secure authentication and validation features.",
    problem: "Fraudulent certificates and documents are widespread, and existing verification methods are slow and easily manipulated.",
    solution: "Implemented a SHA-256 and AES-based digital signature architecture that allows instant verification of any uploaded document.",
    features: ["Cryptographic Hashing (SHA-256)", "AES Encryption", "QR Code Generation", "Instant Verification Portal"],
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Cryptography APIs"],
    architecture: "Secure 3-tier architecture with isolated cryptography service and public verification portal.",
    systemDesign: "Stateless verification flow ensuring no sensitive document data is retained post-hash generation.",
    apiFlow: "Secure REST endpoints with rate limiting and payload encryption for all verification requests.",
    database: "PostgreSQL for storing encrypted document metadata and audit logs.",
    imageSrc: "/images/projects/document_verification.png",
    screenshots: ["/images/projects/document_verification.png"], // Dashboard placeholder
    viewLink: "https://document-verification-system-fronte.vercel.app/",
    codeLink: "#",
    color: "from-emerald-500 to-teal-500"
  }
];

export default function Projects() {
  return (
    <section id="project" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-pink-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-semibold mb-4">
              <Laptop size={14} />
              Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <div className="mt-6 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
          </motion.div>
        </div>

        {/* Projects List */}
        <div className="space-y-32">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
              >
                
                {/* Image Container (Left or Right) */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className={`absolute -inset-4 bg-gradient-to-tr ${project.color} opacity-20 blur-2xl rounded-3xl transition-opacity duration-500 group-hover:opacity-40`} />
                  <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl flex items-center justify-center">
                    <div className="absolute inset-0 bg-slate-900/50 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      width={1200}
                      height={800}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop";
                      }}
                    />
                    
                    {/* Hover Overlay with Big Buttons */}
                    <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-4 z-20 backdrop-blur-sm">
                      {project.viewLink !== "#" && (
                        <a href={project.viewLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-slate-900 font-bold rounded-xl flex items-center gap-2 hover:scale-105 transition-transform">
                          <ExternalLink size={20} /> Live Demo
                        </a>
                      )}
                      {project.codeLink !== "#" && (
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-800 text-white font-bold rounded-xl border border-slate-700 flex items-center gap-2 hover:bg-slate-700 hover:scale-105 transition-all">
                          <GithubIcon size={20} /> Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  
                  <div className="mb-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border bg-gradient-to-r ${project.color} bg-clip-text text-transparent border-slate-800`}>
                      {project.subtitle}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-lg text-slate-400 leading-relaxed">
                      {project.overview}
                    </p>
                  </div>

                  {/* Problem & Solution */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
                      <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500" /> Problem
                      </h4>
                      <p className="text-sm text-slate-400">{project.problem}</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
                      <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" /> Solution
                      </h4>
                      <p className="text-sm text-slate-400">{project.solution}</p>
                    </div>
                  </div>

                  {/* Deep Dive: Architecture & System */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2 text-sm">
                        <LayoutTemplate size={16} className="text-indigo-400" /> Architecture
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{project.architecture}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2 text-sm">
                        <Server size={16} className="text-pink-400" /> System Design
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{project.systemDesign}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2 text-sm">
                        <GitBranch size={16} className="text-purple-400" /> API Flow
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{project.apiFlow}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2 text-sm">
                        <Database size={16} className="text-emerald-400" /> Database
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{project.database}</p>
                    </div>
                  </div>

                  {/* Screenshots preview (Placeholder for actual gallery) */}
                  <div className="mb-8">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-sm">
                      <Layers size={16} className="text-indigo-400" /> Dashboard & UI Screenshots
                    </h4>
                    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                      {project.screenshots.map((src, i) => (
                        <div key={i} className="relative shrink-0 w-32 h-20 rounded-lg overflow-hidden border border-slate-800 bg-slate-950 hover:border-indigo-500 transition-colors cursor-pointer group/img">
                          <Image src={src} alt="Screenshot" fill className="object-contain p-1 group-hover/img:scale-110 transition-transform duration-500" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Layers size={18} className="text-indigo-400" /> Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-indigo-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-xs font-semibold text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Inline Buttons for Mobile/Tablet */}
                  <div className="flex gap-4 lg:hidden">
                     {project.viewLink !== "#" && (
                        <a href={project.viewLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 bg-white text-slate-900 font-bold rounded-xl text-sm">
                          Live Demo
                        </a>
                      )}
                      {project.codeLink !== "#" && (
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 bg-slate-800 text-white font-bold rounded-xl border border-slate-700 text-sm">
                          Source Code
                        </a>
                      )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
