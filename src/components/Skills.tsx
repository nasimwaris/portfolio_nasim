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

const proficiencyData = [
  { skill: "React.js / Next.js", percentage: 92 },
  { skill: "Node.js / Express.js", percentage: 90 },
  { skill: "TypeScript / JavaScript", percentage: 93 },
  { skill: "Java / Spring Boot", percentage: 85 },
  { skill: "NestJS", percentage: 85 },
  { skill: "PostgreSQL / MongoDB", percentage: 88 },
  { skill: "AI / LLM Integration", percentage: 88 },
  { skill: "Docker / AWS", percentage: 75 },
  { skill: "REST APIs / Microservices", percentage: 90 },
];

const categoryColors: Record<Exclude<FilterType, "all">, { text: string; bg: string; border: string; dot: string }> = {
  languages: { text: "text-blue-500 dark:text-blue-400", bg: "hover:bg-blue-500/10", border: "border-blue-500/20 dark:border-blue-500/30", dot: "bg-blue-500" },
  "frontend-backend": { text: "text-cyan-500 dark:text-cyan-400", bg: "hover:bg-cyan-500/10", border: "border-cyan-500/20 dark:border-cyan-500/30", dot: "bg-cyan-500" },
  databases: { text: "text-red-500 dark:text-red-400", bg: "hover:bg-red-500/10", border: "border-red-500/20 dark:border-red-500/30", dot: "bg-red-500" },
  backend: { text: "text-amber-500 dark:text-amber-400", bg: "hover:bg-amber-500/10", border: "border-amber-500/20 dark:border-amber-500/30", dot: "bg-amber-500" },
  ai: { text: "text-purple-500 dark:text-purple-400", bg: "hover:bg-purple-500/10", border: "border-purple-500/20 dark:border-purple-500/30", dot: "bg-purple-500" },
  cloud: { text: "text-emerald-500 dark:text-emerald-400", bg: "hover:bg-emerald-500/10", border: "border-emerald-500/20 dark:border-emerald-500/30", dot: "bg-emerald-500" },
  tools: { text: "text-pink-500 dark:text-pink-400", bg: "hover:bg-pink-500/10", border: "border-pink-500/20 dark:border-pink-500/30", dot: "bg-pink-500" },
};

export default function Skills() {
  const groupedSkills = (Object.keys(FILTER_LABELS) as FilterType[])
    .filter((cat) => cat !== "all")
    .map((category) => ({
      category,
      label: FILTER_LABELS[category],
      skills: skillsData.filter((s) => s.category === category),
      colors: categoryColors[category as Exclude<FilterType, "all">],
    }));

  return (
    <section id="skills" className="py-24 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
            Skills & Technologies
          </h2>
          <div className="mt-4 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Proficiency Levels */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1.5 h-6 bg-cyan-400 rounded-full" />
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100">
                Proficiency Levels
              </h3>
            </div>

            <div className="space-y-7">
              {proficiencyData.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                      {item.skill}
                    </span>
                    <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800/80 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: All Technologies */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1.5 h-6 bg-indigo-500 rounded-full" />
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100">
                All Technologies
              </h3>
            </div>

            <div className="space-y-8">
              {groupedSkills.map((group, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className={`w-1.5 h-1.5 rounded-full ${group.colors.dot} shadow-sm`} />
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      {group.label}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg border bg-transparent ${group.colors.text} ${group.colors.border} ${group.colors.bg} transition-colors cursor-default`}
                      >
                        {skill.name}
                      </span>
                    ))}
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
