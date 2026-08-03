"use client";

import { motion } from "framer-motion";

import { Briefcase, Building2, Rocket, Brain } from "lucide-react";

const journey = [
  { year: "2023", role: "Rablik", desc: "Started internship", icon: Briefcase, color: "text-blue-400", border: "border-blue-500", shadow: "group-hover:shadow-blue-500/20" },
  { year: "2024", role: "Impactsure", desc: "Enterprise systems", icon: Building2, color: "text-purple-400", border: "border-purple-500", shadow: "group-hover:shadow-purple-500/20" },
  { year: "2025", role: "Codefork", desc: "Full stack scaling", icon: Rocket, color: "text-pink-400", border: "border-pink-500", shadow: "group-hover:shadow-pink-500/20" },
  { year: "Present", role: "PreepX", desc: "Co-founding AI startup", icon: Brain, color: "text-indigo-400", border: "border-indigo-500", shadow: "group-hover:shadow-indigo-500/20" }
];

export default function TechJourney() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Tech <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Journey</span>
            </h2>
            <div className="mt-6 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto mt-12">
          {/* Horizontal Line */}
          <div className="absolute top-[74px] left-8 right-8 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-50 hidden md:block z-0 rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {journey.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Year */}
                  <div className={`text-2xl font-black ${step.color} mb-4 transition-transform group-hover:-translate-y-1`}>
                    {step.year}
                  </div>
                  
                  {/* Node Circle with Icon */}
                  <div className={`w-14 h-14 rounded-full bg-slate-950 border-4 ${step.border} mb-6 hidden md:flex items-center justify-center relative z-10 shadow-lg transition-transform group-hover:scale-110`}>
                    <Icon size={20} className={step.color} />
                  </div>
                  
                  {/* Info Card */}
                  <div className={`p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800 w-full hover:bg-slate-800 transition-all duration-300 shadow-xl ${step.shadow} group-hover:-translate-y-2`}>
                    <h3 className={`text-lg font-bold text-white mb-2 transition-colors`}>{step.role}</h3>
                    <p className="text-sm text-slate-400 font-medium">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
