"use client";

import { Trophy, Code2, GraduationCap, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: Trophy,
    title: "Co-Founder @ PreepX",
    color: "from-amber-400 to-orange-500",
    bg: "bg-orange-500/10 border-orange-500/20"
  },
  {
    icon: Code2,
    title: "3+ Years Experience",
    color: "from-blue-400 to-indigo-500",
    bg: "bg-indigo-500/10 border-indigo-500/20"
  },
  {
    icon: GraduationCap,
    title: "M.Tech CSE",
    color: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-500/10 border-emerald-500/20"
  },
  {
    icon: Sparkles,
    title: "AI Product Builder",
    color: "from-pink-400 to-rose-500",
    bg: "bg-pink-500/10 border-pink-500/20"
  },
  {
    icon: Users,
    title: "25K+ LinkedIn Community",
    color: "from-purple-400 to-fuchsia-500",
    bg: "bg-purple-500/10 border-purple-500/20"
  }
];

export default function Achievements() {
  return (
    <section className="py-20 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Milestones & <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <div className="mt-6 h-1 w-12 bg-orange-500 mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col items-center text-center p-6 rounded-3xl border ${item.bg} backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className={`p-4 rounded-full bg-gradient-to-br ${item.color} mb-4 shadow-lg`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="font-bold text-slate-200 text-sm md:text-base">{item.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
