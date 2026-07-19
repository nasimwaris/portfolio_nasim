"use client";

import { useState } from "react";
import {
  Laptop,
  Eye,
  Code2,
  ExternalLink
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const FILTER_LABELS = {
  all: "All Skills",
  languages: "Languages",
  "frontend-backend": "Frontend & Backend",
  databases: "Databases & ORM",
  backend: "Backend Technologies",
  ai: "AI & LLM",
  cloud: "Cloud & DevOps",
  tools: "Tools"
} as const;

type FilterType = keyof typeof FILTER_LABELS;

interface Skill {
  name: string;
  category: Exclude<FilterType, "all">;
  iconUrl: string;
  glowColor: string; // Tailored glow color for hover states
}

const skillsData: Skill[] = [
  // Languages
  { name: "TypeScript", category: "languages", iconUrl: "https://img.icons8.com/color/48/000000/typescript.png", glowColor: "group-hover:shadow-blue-500/20 group-hover:border-blue-500/40" },
  { name: "JavaScript", category: "languages", iconUrl: "https://img.icons8.com/color/48/000000/javascript--v1.png", glowColor: "group-hover:shadow-yellow-500/20 group-hover:border-yellow-500/40" },
  { name: "Java", category: "languages", iconUrl: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png", glowColor: "group-hover:shadow-red-600/20 group-hover:border-red-600/40" },
  { name: "Python", category: "languages", iconUrl: "https://img.icons8.com/color/48/000000/python--v1.png", glowColor: "group-hover:shadow-yellow-400/20 group-hover:border-yellow-400/40" },

  // Frontend & Backend
  { name: "React.js", category: "frontend-backend", iconUrl: "https://img.icons8.com/color/48/000000/react-native.png", glowColor: "group-hover:shadow-cyan-500/20 group-hover:border-cyan-500/40" },
  { name: "Next.js", category: "frontend-backend", iconUrl: "https://img.icons8.com/fluency/48/000000/nextjs.png", glowColor: "group-hover:shadow-slate-500/20 group-hover:border-slate-500/40 dark:group-hover:shadow-white/10 dark:group-hover:border-white/30" },
  { name: "Node.js", category: "frontend-backend", iconUrl: "https://img.icons8.com/color/48/000000/nodejs--v1.png", glowColor: "group-hover:shadow-green-500/20 group-hover:border-green-500/40" },
  { name: "NestJS", category: "frontend-backend", iconUrl: "https://img.icons8.com/color/48/000000/nestjs--v1.png", glowColor: "group-hover:shadow-red-500/20 group-hover:border-red-500/40" },
  { name: "Express.js", category: "frontend-backend", iconUrl: "https://img.icons8.com/?size=48&id=WNoJgbzDr3i2&format=png", glowColor: "group-hover:shadow-slate-500/20 group-hover:border-slate-500/40 dark:group-hover:shadow-white/10 dark:group-hover:border-white/30" },
  { name: "HTML5", category: "frontend-backend", iconUrl: "https://img.icons8.com/color/48/000000/html-5--v1.png", glowColor: "group-hover:shadow-orange-500/20 group-hover:border-orange-500/40" },
  { name: "CSS3", category: "frontend-backend", iconUrl: "https://img.icons8.com/color/48/000000/css3--v1.png", glowColor: "group-hover:shadow-blue-500/20 group-hover:border-blue-500/40" },
  { name: "Tailwind CSS", category: "frontend-backend", iconUrl: "https://img.icons8.com/?size=48&id=4PiNHtUJVbLs&format=png", glowColor: "group-hover:shadow-cyan-400/20 group-hover:border-cyan-400/40" },

  // Databases & ORM
  { name: "PostgreSQL", category: "databases", iconUrl: "https://img.icons8.com/color/48/000000/postgreesql--v1.png", glowColor: "group-hover:shadow-blue-400/20 group-hover:border-blue-400/40" },
  { name: "MongoDB", category: "databases", iconUrl: "https://img.icons8.com/color/48/000000/mongodb.png", glowColor: "group-hover:shadow-green-600/20 group-hover:border-green-600/40" },
  { name: "MySQL", category: "databases", iconUrl: "https://img.icons8.com/color/48/000000/mysql-logo.png", glowColor: "group-hover:shadow-blue-500/20 group-hover:border-blue-500/40" },
  { name: "SQL Server", category: "databases", iconUrl: "https://img.icons8.com/color/48/000000/microsoft-sql-server.png", glowColor: "group-hover:shadow-red-500/20 group-hover:border-red-500/40" },
  { name: "Prisma", category: "databases", iconUrl: "https://img.icons8.com/fluency/48/000000/prisma-orm.png", glowColor: "group-hover:shadow-slate-500/20 group-hover:border-slate-500/40 dark:group-hover:shadow-white/10 dark:group-hover:border-white/30" },
  { name: "TypeORM", category: "databases", iconUrl: "https://img.icons8.com/color/48/000000/database.png", glowColor: "group-hover:shadow-red-500/20 group-hover:border-red-500/40" },

  // Backend Technologies
  { name: "REST APIs", category: "backend", iconUrl: "https://img.icons8.com/color/48/000000/api-settings.png", glowColor: "group-hover:shadow-indigo-500/20 group-hover:border-indigo-500/40" },
  { name: "Microservices", category: "backend", iconUrl: "https://img.icons8.com/color/48/000000/network.png", glowColor: "group-hover:shadow-blue-500/20 group-hover:border-blue-500/40" },
  { name: "JWT", category: "backend", iconUrl: "https://img.icons8.com/?size=48&id=rHpveptSuwDz&format=png", glowColor: "group-hover:shadow-purple-500/20 group-hover:border-purple-500/40" },
  { name: "OAuth2", category: "backend", iconUrl: "https://img.icons8.com/color/48/000000/authentication.png", glowColor: "group-hover:shadow-orange-500/20 group-hover:border-orange-500/40" },
  { name: "WebSockets", category: "backend", iconUrl: "https://img.icons8.com/?size=48&id=jJ6E9DoaKjyH&format=png", glowColor: "group-hover:shadow-yellow-500/20 group-hover:border-yellow-500/40" },
  { name: "Redis", category: "backend", iconUrl: "https://img.icons8.com/?size=48&id=DUsKDDZsg8FT&format=png", glowColor: "group-hover:shadow-red-500/20 group-hover:border-red-500/40" },

  // AI & LLM
  { name: "OpenAI API", category: "ai", iconUrl: "https://img.icons8.com/?size=48&id=L5HOemp3WJOE&format=png", glowColor: "group-hover:shadow-green-500/20 group-hover:border-green-500/40" },
  { name: "Claude AI", category: "ai", iconUrl: "https://img.icons8.com/?size=48&id=zQjzFjPpT2Ek&format=png", glowColor: "group-hover:shadow-orange-700/20 group-hover:border-orange-700/40" },
  { name: "Generative AI", category: "ai", iconUrl: "https://img.icons8.com/color/48/000000/artificial-intelligence.png", glowColor: "group-hover:shadow-purple-500/20 group-hover:border-purple-500/40" },
  { name: "AI Agents", category: "ai", iconUrl: "https://img.icons8.com/color/48/000000/bot.png", glowColor: "group-hover:shadow-blue-500/20 group-hover:border-blue-500/40" },
  { name: "OCR", category: "ai", iconUrl: "https://img.icons8.com/?size=48&id=RElHr_DScWK4&format=png", glowColor: "group-hover:shadow-indigo-500/20 group-hover:border-indigo-500/40" },
  { name: "NLP", category: "ai", iconUrl: "https://img.icons8.com/?size=48&id=zV2k3jcJZiPb&format=png", glowColor: "group-hover:shadow-cyan-500/20 group-hover:border-cyan-500/40" },
  { name: "Google Vision API", category: "ai", iconUrl: "https://img.icons8.com/color/48/000000/google-logo.png", glowColor: "group-hover:shadow-red-500/20 group-hover:border-red-500/40" },
  { name: "Google Gemini", category: "ai", iconUrl: "https://img.icons8.com/?size=48&id=eoxMN35Z6JKg&format=png", glowColor: "group-hover:shadow-blue-500/20 group-hover:border-blue-500/40" },

  // Cloud & DevOps
  { name: "AWS", category: "cloud", iconUrl: "https://img.icons8.com/color/48/000000/amazon-web-services.png", glowColor: "group-hover:shadow-orange-500/20 group-hover:border-orange-500/40" },
  { name: "Docker", category: "cloud", iconUrl: "https://img.icons8.com/color/48/000000/docker.png", glowColor: "group-hover:shadow-blue-500/20 group-hover:border-blue-500/40" },
  { name: "Linux", category: "cloud", iconUrl: "https://img.icons8.com/color/48/000000/linux.png", glowColor: "group-hover:shadow-yellow-500/20 group-hover:border-yellow-500/40" },
  { name: "CI/CD", category: "cloud", iconUrl: "https://img.icons8.com/color/48/000000/rocket.png", glowColor: "group-hover:shadow-red-500/20 group-hover:border-red-500/40" },
  { name: "Vercel", category: "cloud", iconUrl: "https://img.icons8.com/?size=48&id=LZKTTiYmHpgq&format=png", glowColor: "group-hover:shadow-slate-500/20 group-hover:border-slate-500/40 dark:group-hover:shadow-white/10 dark:group-hover:border-white/30" },
  { name: "Render", category: "cloud", iconUrl: "https://img.icons8.com/?size=48&id=65231&format=png", glowColor: "group-hover:shadow-indigo-500/20 group-hover:border-indigo-500/40" },
  { name: "Neon", category: "cloud", iconUrl: "https://img.icons8.com/fluency/48/000000/database.png", glowColor: "group-hover:shadow-emerald-500/20 group-hover:border-emerald-500/40" },

  // Tools
  { name: "Git", category: "tools", iconUrl: "https://img.icons8.com/color/48/000000/git.png", glowColor: "group-hover:shadow-orange-500/20 group-hover:border-orange-500/40" },
  { name: "GitHub", category: "tools", iconUrl: "https://img.icons8.com/glyph-neue/48/000000/github.png", glowColor: "group-hover:shadow-slate-500/20 group-hover:border-slate-500/40 dark:group-hover:shadow-white/10 dark:group-hover:border-white/30" },
  { name: "Postman", category: "tools", iconUrl: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png", glowColor: "group-hover:shadow-orange-500/20 group-hover:border-orange-500/40" },
  { name: "VS Code", category: "tools", iconUrl: "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png", glowColor: "group-hover:shadow-blue-500/20 group-hover:border-blue-500/40" },
  { name: "Jira", category: "tools", iconUrl: "https://img.icons8.com/color/48/000000/jira.png", glowColor: "group-hover:shadow-blue-500/20 group-hover:border-blue-500/40" },
  { name: "Swagger", category: "tools", iconUrl: "https://img.icons8.com/?size=48&id=rdKV2dee9wxd&format=png", glowColor: "group-hover:shadow-green-500/20 group-hover:border-green-500/40" },
];

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
          {(Object.keys(FILTER_LABELS) as FilterType[]).map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${filter === t
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-105"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
                }`}
            >
              {FILTER_LABELS[t]}
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
                <span className="mt-4 text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors text-center">
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
