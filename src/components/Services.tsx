"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, Server, Workflow, Cloud, Lightbulb } from "lucide-react";

const services = [
  {
    title: "Full Stack Development",
    description: "Building scalable, high-performance web applications from robust backend architectures to engaging frontend experiences.",
    icon: Code2,
    color: "from-indigo-500 to-cyan-500",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    iconColor: "text-indigo-400"
  },
  {
    title: "AI Product Development",
    description: "Integrating LLMs (OpenAI, Claude) to build intelligent features, automate workflows, and create next-gen SaaS products.",
    icon: BrainCircuit,
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    iconColor: "text-purple-400"
  },
  {
    title: "Microservices",
    description: "Designing decoupled, scalable backend systems using Java Spring Boot, NestJS, and event-driven architectures.",
    icon: Server,
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-400"
  },
  {
    title: "System Design",
    description: "Architecting systems for high availability, fault tolerance, and performance to support thousands of concurrent users.",
    icon: Workflow,
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    iconColor: "text-orange-400"
  },
  {
    title: "Cloud Deployment",
    description: "Deploying and managing applications on AWS/GCP, utilizing Docker containers, and optimizing CI/CD pipelines.",
    icon: Cloud,
    color: "from-blue-500 to-indigo-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    iconColor: "text-blue-400"
  },
  {
    title: "Technical Leadership",
    description: "Leading engineering teams, defining technical roadmaps, and mentoring developers to deliver quality products on time.",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-500",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    iconColor: "text-yellow-400"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-semibold mb-4">
              <Workflow size={14} />
              Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              What I Build
            </h2>
            <div className="mt-6 h-1 w-12 bg-purple-500 mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-8 rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm overflow-hidden transition-all hover:border-slate-700 hover:bg-slate-800/50 hover:shadow-2xl hover:-translate-y-1`}
              >
                {/* Glow effect on hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />
                
                <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.border} border flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`w-7 h-7 ${service.iconColor} drop-shadow-md`} strokeWidth={2} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
