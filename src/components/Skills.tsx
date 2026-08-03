"use client";

import { Code2, Server, Database, Cloud, Wrench, BrainCircuit, Globe, Layers } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    skills: ["TypeScript", "JavaScript", "Java", "Python", "SQL", "HTML/CSS"]
  },
  {
    title: "Frontend Development",
    icon: Globe,
    color: "from-pink-500 to-rose-500",
    iconColor: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Redux", "Angular"]
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "from-emerald-500 to-teal-500",
    iconColor: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    skills: ["Node.js", "NestJS", "Express", "Spring Boot", "REST APIs", "WebSockets", "Microservices"]
  },
  {
    title: "AI & LLM",
    icon: BrainCircuit,
    color: "from-purple-500 to-indigo-500",
    iconColor: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    skills: ["OpenAI API", "Claude AI", "Gemini", "LangChain", "RAG", "Prompt Engineering"]
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-orange-500 to-amber-500",
    iconColor: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "TypeORM"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-sky-500 to-blue-600",
    iconColor: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    skills: ["AWS", "Docker", "Linux", "CI/CD", "Vercel", "Render"]
  },
  {
    title: "Tools & Utilities",
    icon: Wrench,
    color: "from-slate-400 to-slate-600",
    iconColor: "text-slate-400",
    bg: "bg-slate-500/10",
    border: "border-slate-500/20",
    skills: ["Git", "GitHub", "Postman", "Swagger", "Jira", "VS Code"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden border-t border-slate-800">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-semibold mb-4">
              <Layers size={14} />
              Technical Arsenal
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Skills & Technologies
            </h2>
            <div className="mt-6 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-3xl border border-slate-800 bg-slate-950/50 backdrop-blur-sm overflow-hidden transition-all hover:border-slate-700 hover:bg-slate-900 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Glow effect on hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className={`w-12 h-12 rounded-2xl ${category.bg} ${category.border} border flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={24} className={`${category.iconColor} drop-shadow-md`} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 relative z-10">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-800 hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
