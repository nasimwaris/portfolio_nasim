"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location?: string;
  type?: string;
  description?: string | string[];
}
const experienceData: ExperienceItem[] = [
  {
    company: "Codefork Technologies / SDLC Corp",
    role: "Full Stack Developer",
    duration: "Sep 2025 - Present",
    location: "Noida",
    type: "Full-time",
    description: [
      "Engineered AI-powered full-stack applications including astrology platforms, job portals, and gaming solutions using Next.js, NestJS, TypeScript, and MongoDB.",
      "Architected scalable microservice-based backend services and integrated OpenAI and Claude AI APIs to enable AI chat, workflow automation, and intelligent content generation.",
      "Implemented secure subscription and one-time payment gateway integrations with webhook handling, JWT/OAuth2 authentication, Redis caching, and optimized database queries.",
      "Partnered with product managers, designers, and QA teams in Agile environments to translate business requirements into scalable technical solutions.",
      "Improved code quality by writing unit and integration tests, conducting code reviews, and optimizing application performance."
    ],
  },
  {
    company: "Impactsure Technologies",
    role: "Associate Software Developer",
    duration: "Jan 2024 - Aug 2025",
    location: "Mumbai",
    type: "Full-time",
    description: [
      "Built enterprise-level banking automation systems.",
      "Developed secure microservices with JWT/OAuth2 authentication and Redis caching.",
      "Automated document workflows with AI/ML integrations, improving processing efficiency.",
      "Built responsive frontend applications.",
      "Optimized backend performance and scalable workflow architecture."
    ],
  },
  {
    company: "Rablik",
    role: "Full Stack Developer",
    duration: "Sep 2023 - Dec 2023",
    location: "Bhopal",
    type: "Internship",
    description: [
      "Developed responsive and user-friendly web pages using HTML, CSS, and JavaScript, ensuring compatibility across different devices and screen sizes.",
      "Implemented dynamic features and integrated REST APIs to enable seamless communication between the frontend and backend.",
      "Debugged, optimized, and maintained clean, reusable, and well-structured code to improve application performance and maintainability.",
      "Collaborated with the development team to build real-world web applications, strengthening frontend development skills and gaining hands-on experience with modern web development practices."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50/50 dark:bg-slate-900/20 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
            Work Experience
          </h2>
          <div className="mt-4 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Display Panel */}
        <div>
          <div className="space-y-8">
                <div className="relative space-y-6">
                  {experienceData.map((exp, index) => (
                    <div key={index} className="relative group">
                      <div className="p-6 md:p-8 rounded-2xl border border-slate-200/50 bg-white dark:border-slate-800/50 dark:bg-[#0a0a0f] shadow-sm transition-all duration-300 hover:border-indigo-500/30">
                        
                        {/* Header Row */}
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                          {/* Left Side Labels */}
                          <div className="flex items-center gap-3">
                            {exp.type && (
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400 border border-indigo-500/20">
                                {exp.type}
                              </span>
                            )}
                            {(exp.duration.toLowerCase().includes('present') || exp.duration.toLowerCase().includes('ongoing')) && (
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                Current
                              </span>
                            )}
                          </div>

                          {/* Right Side Info */}
                          <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs font-medium">
                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 dark:bg-slate-800/50 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50">
                              <Calendar size={13} className="text-slate-500 dark:text-slate-400" />
                              <span>{exp.duration}</span>
                            </div>
                            {exp.location && (
                              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 dark:bg-slate-800/50 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50">
                                <MapPin size={13} className="text-slate-500 dark:text-slate-400" />
                                <span>{exp.location}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Title & Subtitle */}
                        <div className="mt-5">
                          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                            {exp.role}
                          </h3>
                          <p className="text-base font-medium text-slate-600 dark:text-slate-300 mt-1">
                            {exp.company}
                          </p>
                        </div>

                        <div className="w-full h-px bg-slate-100 dark:bg-slate-800/60 my-6 transition-colors"></div>

                        {/* Description List */}
                        {exp.description && (
                          <ul className="space-y-4">
                            {Array.isArray(exp.description) ? exp.description.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                <CheckCircle2 size={18} className="text-indigo-500 shrink-0 mt-0.5 opacity-80" />
                                <span>{item}</span>
                              </li>
                            )) : (
                              <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                <CheckCircle2 size={18} className="text-indigo-500 shrink-0 mt-0.5 opacity-80" />
                                <span>{exp.description}</span>
                              </li>
                            )}
                          </ul>
                        )}

                      </div>
                    </div>
                  ))}
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}
