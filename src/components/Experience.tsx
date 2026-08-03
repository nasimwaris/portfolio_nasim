"use client";

import { Briefcase, MapPin, Calendar, ExternalLink, ChevronRight, Brain, Code2, Server } from "lucide-react";
import { motion } from "framer-motion";

const experienceData = [
  {
    company: "PreepX",
    role: "Co-Founder & Lead Engineer",
    duration: "Jan 2025 - Present",
    location: "Noida, India",
    type: "Startup",
    logo: "/images/preepx-logo.png",
    overview: "Building an AI-powered mock interview and placement platform to bridge the gap between education and employment.",
    contributions: [
      "Architected the entire platform from scratch using Next.js and NestJS.",
      "Integrated OpenAI and Claude APIs for real-time intelligent interview feedback.",
      "Built scalable microservices to handle concurrent video processing and resume parsing."
    ],
    tech: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "OpenAI", "AWS"],
    highlights: "Reached 1000+ early users and formed key partnerships with educational institutions.",
    icon: Brain,
    color: "text-indigo-400",
    border: "border-indigo-500",
    shadow: "shadow-indigo-500/40"
  },
  {
    company: "Codefork Technologies / SDLC Corp",
    role: "Full Stack Developer",
    duration: "Sep 2025 - Present",
    location: "Noida, India",
    type: "Full-time",
    logo: "/images/codefork-logo.png",
    overview: "Engineering AI-powered full-stack applications including astrology platforms, job portals, and gaming solutions.",
    contributions: [
      "Architected scalable microservice-based backend services.",
      "Implemented secure payment gateways and subscription handling.",
      "Partnered with product managers to translate requirements into scalable solutions."
    ],
    tech: ["React", "Node.js", "MongoDB", "Redis", "Docker", "Stripe"],
    highlights: "Reduced API response time by 40% through Redis caching and optimized database queries.",
    icon: Code2,
    color: "text-pink-400",
    border: "border-pink-500",
    shadow: "shadow-pink-500/40"
  },
  {
    company: "Impactsure Technologies",
    role: "Associate Software Developer",
    duration: "Jan 2024 - Aug 2025",
    location: "Mumbai, India",
    type: "Full-time",
    logo: "/images/impactsure-logo.png",
    overview: "Built enterprise-level banking automation systems and secure microservices.",
    contributions: [
      "Developed secure backend services with JWT/OAuth2 authentication.",
      "Automated document workflows with AI/ML integrations.",
      "Built responsive frontend applications for internal tools."
    ],
    tech: ["Java", "Spring Boot", "Angular", "MySQL", "Git"],
    highlights: "Improved document processing efficiency by automating manual workflows.",
    icon: Server,
    color: "text-purple-400",
    border: "border-purple-500",
    shadow: "shadow-purple-500/40"
  },
  {
    company: "Rablik",
    role: "Full Stack Developer Intern",
    duration: "Sep 2023 - Dec 2023",
    location: "Bhopal, India",
    type: "Internship",
    logo: "/images/rablik-logo.png",
    overview: "Developed responsive web pages and integrated REST APIs for real-world web applications.",
    contributions: [
      "Implemented dynamic frontend features ensuring cross-device compatibility.",
      "Debugged and maintained clean, well-structured codebase.",
      "Collaborated with senior developers on agile sprints."
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "REST API"],
    highlights: "Successfully delivered 3 core modules ahead of schedule.",
    icon: Briefcase,
    color: "text-blue-400",
    border: "border-blue-500",
    shadow: "shadow-blue-500/40"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />

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
              <Briefcase size={14} />
              Career Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Work Experience
            </h2>
            <div className="mt-6 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent opacity-30 hidden md:block" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-12"
              >
                {/* Timeline Dot */}
                <div className={`hidden md:flex absolute left-8 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-[3px] ${exp.border} z-10 mt-6 shadow-[0_0_15px_var(--tw-shadow-color)] ${exp.shadow} items-center justify-center transition-transform hover:scale-110`}>
                  <exp.icon size={18} className={exp.color} />
                </div>

                {/* Content Card */}
                <div className="md:ml-16 flex-1 group">
                  <div className="relative p-8 rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:bg-slate-800/80 shadow-xl">
                    
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                            {exp.role}
                          </h3>
                          {exp.type === "Startup" && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                              Founder
                            </span>
                          )}
                        </div>
                        <div className="text-lg font-medium text-slate-300 flex items-center gap-2">
                          {exp.company}
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2 lg:items-end text-sm font-medium">
                        <div className="flex items-center gap-2 text-slate-400 bg-slate-950/50 px-3 py-1.5 rounded-lg border border-slate-800 w-fit">
                          <Calendar size={14} className="text-indigo-400" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 bg-slate-950/50 px-3 py-1.5 rounded-lg border border-slate-800 w-fit">
                          <MapPin size={14} className="text-purple-400" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Overview */}
                    <p className="text-slate-400 mb-6 text-sm md:text-base leading-relaxed">
                      {exp.overview}
                    </p>

                    {/* Key Contributions */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                        <ChevronRight size={16} className="text-indigo-500" />
                        Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.contributions.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-400 text-sm md:text-base">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                        <ChevronRight size={16} className="text-purple-500" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 transition-colors hover:border-indigo-500/50">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact / Highlight */}
                    <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
                      <p className="text-indigo-200 text-sm italic">
                        <strong className="text-indigo-400">Impact:</strong> {exp.highlights}
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
