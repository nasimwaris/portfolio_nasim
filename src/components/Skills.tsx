"use client";

import { useState } from "react";
import {
  Laptop,
  Eye,
  Code2,
  ExternalLink
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools";
  iconUrl: string;
  glowColor: string; // Tailored glow color for hover states
}

const skillsData: Skill[] = [
  // Frontend
  {
    name: "HTML",
    category: "frontend",
    iconUrl: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    glowColor: "group-hover:shadow-orange-500/20 group-hover:border-orange-500/40",
  },
  {
    name: "CSS",
    category: "frontend",
    iconUrl: "https://img.icons8.com/color/48/000000/css3--v1.png",
    glowColor: "group-hover:shadow-blue-500/20 group-hover:border-blue-500/40",
  },
  {
    name: "JavaScript",
    category: "frontend",
    iconUrl: "https://img.icons8.com/color/48/000000/javascript--v1.png",
    glowColor: "group-hover:shadow-yellow-500/20 group-hover:border-yellow-500/40",
  },
  {
    name: "React.js",
    category: "frontend",
    iconUrl: "https://img.icons8.com/color/48/000000/react-native.png",
    glowColor: "group-hover:shadow-cyan-500/20 group-hover:border-cyan-500/40",
  },
  {
    name: "Next.js",
    category: "frontend",
    iconUrl: "https://img.icons8.com/fluency/48/000000/nextjs.png",
    glowColor: "group-hover:shadow-slate-500/20 group-hover:border-slate-500/40 dark:group-hover:shadow-white/10 dark:group-hover:border-white/30",
  },
  {
    name: "AJAX",
    category: "frontend",
    iconUrl: "https://img.icons8.com/color/48/000000/api-settings.png", // Generic API/AJAX icon
    glowColor: "group-hover:shadow-indigo-500/20 group-hover:border-indigo-500/40",
  },


  // Backend
  {
    name: "Java",
    category: "backend",
    iconUrl: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png",
    glowColor: "group-hover:shadow-red-600/20 group-hover:border-red-600/40",
  },
  {
    name: "Nest.js",
    category: "backend",
    iconUrl: "https://img.icons8.com/color/48/000000/nestjs--v1.png",
    glowColor: "group-hover:shadow-red-500/20 group-hover:border-red-500/40",
  },
  {
    name: "Python",
    category: "backend",
    iconUrl: "https://img.icons8.com/color/48/000000/python--v1.png",
    glowColor: "group-hover:shadow-yellow-400/20 group-hover:border-yellow-400/40",
  },
  {
    name: "Node.js",
    category: "backend",
    iconUrl: "https://img.icons8.com/color/48/000000/nodejs--v1.png",
    glowColor: "group-hover:shadow-green-500/20 group-hover:border-green-500/40",
  },
  {
    name: "Spring Boot",
    category: "backend",
    iconUrl: "https://img.icons8.com/color/48/000000/spring-logo.png",
    glowColor: "group-hover:shadow-emerald-500/20 group-hover:border-emerald-500/40",
  },
  {
    name: "MySQL",
    category: "backend",
    iconUrl: "https://img.icons8.com/color/48/000000/mysql-logo.png",
    glowColor: "group-hover:shadow-blue-500/20 group-hover:border-blue-500/40",
  },
  {
    name: "SQL Server",
    category: "backend",
    iconUrl: "https://img.icons8.com/color/48/000000/microsoft-sql-server.png",
    glowColor: "group-hover:shadow-red-500/20 group-hover:border-red-500/40",
  },
  {
    name: "PostgreSQL",
    category: "backend",
    iconUrl: "https://img.icons8.com/color/48/000000/postgreesql--v1.png",
    glowColor: "group-hover:shadow-blue-400/20 group-hover:border-blue-400/40",
  },
  {
    name: "MongoDB",
    category: "backend",
    iconUrl: "https://img.icons8.com/color/48/000000/mongodb.png",
    glowColor: "group-hover:shadow-green-600/20 group-hover:border-green-600/40",
  },

  // Tools
  {
    name: "Git/GitHub",
    category: "tools",
    iconUrl: "https://img.icons8.com/glyph-neue/48/000000/github.png",
    glowColor: "group-hover:shadow-slate-500/20 group-hover:border-slate-500/40 dark:group-hover:shadow-white/10 dark:group-hover:border-white/30",
  },
  {
    name: "Docker",
    category: "tools",
    iconUrl: "https://img.icons8.com/color/48/000000/docker.png",
    glowColor: "group-hover:shadow-blue-500/20 group-hover:border-blue-500/40",
  },
  {
    name: "Postman",
    category: "tools",
    iconUrl: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png",
    glowColor: "group-hover:shadow-orange-500/20 group-hover:border-orange-500/40",
  },
];

type FilterType = "all" | "frontend" | "backend" | "tools";

export default function Skills() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredSkills = skillsData.filter(
    (skill) => filter === "all" || skill.category === filter
  );

  return (
    <section id="skills" className="py-20 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="inline-flex items-center gap-3 text-3xl font-bold tracking-tight sm:text-4xl">
            <Laptop className="text-indigo-500" />
            Skills & <span className="text-indigo-500">Abilities</span>
          </h2>
          <div className="mt-2 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {(["all", "frontend", "backend", "tools"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition-all duration-300 ${filter === t
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-105"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
                }`}
            >
              {t === "all" ? "All Skills" : t}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={skill.name}
                className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-200 bg-white dark:border-slate-800/80 dark:bg-slate-950/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${skill.glowColor}`}
              >
                {/* Skill Icon */}
                <div className="relative h-12 w-12 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={skill.iconUrl}
                    alt={`${skill.name} icon`}
                    className={`h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110 ${skill.name.includes("GitHub") ? "dark:invert" : ""
                      }`}
                    loading="lazy"
                  />
                </div>

                {/* Skill Title */}
                <span className="mt-4 text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                  {skill.name}
                </span>

                {/* Micro-glow Backdrop overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none bg-radial from-indigo-500 to-transparent" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
