"use client";

import { motion } from "framer-motion";
import { Award, Newspaper, GraduationCap, Trophy, Globe } from "lucide-react";

const features = [
  { name: "Top 1% on LinkedIn", icon: Trophy, bg: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { name: "Published Research (IJFMR)", icon: Globe, bg: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  { name: "M.Tech CSE Scholar", icon: GraduationCap, bg: "bg-pink-500/10 text-pink-400 border-pink-500/20" },
  { name: "Tech Community Leader", icon: Newspaper, bg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" }
];

export default function FeaturedIn() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500 mb-10">
          Featured In & Recognized By
        </h3>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl border bg-slate-950 shadow-sm ${feature.bg} transition-all hover:scale-105`}
              >
                <Icon size={20} />
                <span className="font-bold text-sm">{feature.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
