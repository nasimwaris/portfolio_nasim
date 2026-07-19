"use client";

import Image from "next/image";
import { Laptop, Eye, Code, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  viewLink: string;
  codeLink?: string;
}

const projectsData: Project[] = [
  {
    title: "AI Interview Platform",
    description: "An intelligent online interview platform that conducts automated technical interviews, evaluates candidates in real-time using advanced LLMs, and provides comprehensive feedback and scoring.",
    imageSrc: "/images/projects/ai_interview.png",
    tags: ["React", "Node.js", "Claude", "Gemini", "MongoDB", "Payment Gateway", "LLM"],
    viewLink: "https://interview-coch-zyx8.vercel.app/",
  },
  {
    title: "Food Ordering & Management Platform",
    description: "Developed and deployed a live food management platform for a non-veg restaurant, featuring menu management, order handling, secure authentication, and real-time customer interactions.",
    imageSrc: "/images/projects/food_delivery1.png",
    tags: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "JWT"],
    viewLink: "https://mba-biryani-frontend.vercel.app/",
  },
  {
    title: "Document Verification System",
    description: "Developed a document verification platform enabling users to upload and verify documents for authenticity with secure authentication and validation features.",
    imageSrc: "/images/projects/document_verification.png",
    tags: ["Next.js", "Node.js", "Express", "PostgreSQL", "JWT"],
    viewLink: "https://document-verification-system-fronte.vercel.app/",
  }

];

export default function Projects() {
  return (
    <section id="project" className="py-20 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="inline-flex items-center gap-3 text-3xl font-bold tracking-tight sm:text-4xl">
            <Laptop className="text-indigo-500" />
            Projects <span className="text-indigo-500">Made</span>
          </h2>
          <div className="mt-2 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col h-full rounded-2xl overflow-hidden border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
            >

              {/* Project Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-200/40 dark:border-slate-800/40">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  // Fallback for missing/dummy images
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop";
                  }}
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.viewLink !== "#" && (
                    <a
                      href={project.viewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-indigo-600 rounded-full shadow-lg hover:scale-110 transition-transform"
                      title="Live Preview"
                    >
                      <Eye size={20} />
                    </a>
                  )}
                  {project.codeLink && project.codeLink !== "#" && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
                      title="Source Code"
                    >
                      <Code size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-col flex-1 p-6">

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400 flex-1">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-indigo-50/50 dark:bg-indigo-950/20 px-2 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-900 flex justify-between gap-4">
                  {project.viewLink !== "#" ? (
                    <a
                      href={project.viewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:opacity-80 transition-opacity"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-slate-400 dark:text-slate-600 cursor-not-allowed">
                      Demo Unavailable
                    </span>
                  )}

                  {project.codeLink && project.codeLink !== "#" && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <Code size={16} />
                      View Code
                    </a>
                  )}
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
