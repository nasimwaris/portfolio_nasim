"use client";

import Image from "next/image";
import { GraduationCap, Calendar, Award, MapPin, BookOpen, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  status: "Pursuing" | "Completed";
  logoUrl: string;
  location: string;
  icon: LucideIcon;
  color: string;
  border: string;
  shadow: string;
}

const educationData: EducationItem[] = [
  {
    degree: "M.Tech | Computer Science & Engineering",
    institution: "Sagar Institute of Research and Technology, Bhopal",
    duration: "2024 - 2026",
    grade: "8.25 CGPA",
    status: "Pursuing",
    logoUrl: "/images/education/rgpv_logo.jpg",
    location: "Bhopal, Madhya Pradesh",
    icon: GraduationCap,
    color: "text-indigo-400",
    border: "border-indigo-500",
    shadow: "shadow-indigo-500/40"
  },
  {
    degree: "B.Tech | Computer Science & Engineering",
    institution: "IES College of Technology, Bhopal",
    duration: "2020 - 2024",
    grade: "8.26 CGPA",
    status: "Completed",
    logoUrl: "/images/education/rgpv_logo.jpg",
    location: "Bhopal, Madhya Pradesh",
    icon: GraduationCap,
    color: "text-pink-400",
    border: "border-pink-500",
    shadow: "shadow-pink-500/40"
  },
  {
    degree: "12th | Senior Secondary School Certificate",
    institution: "A.N.D Public School Khapura, Chapra, Bihar (CBSE)",
    duration: "2019",
    grade: "75.4 %",
    status: "Completed",
    logoUrl: "/images/education/cbse_logo.jpg",
    location: "Chapra, Bihar",
    icon: BookOpen,
    color: "text-purple-400",
    border: "border-purple-500",
    shadow: "shadow-purple-500/40"
  },
  {
    degree: "10th | Secondary School Certificate",
    institution: "J.D Public School Bangra, Chapra, Bihar (CBSE)",
    duration: "2017",
    grade: "8.8 CGPA",
    status: "Completed",
    logoUrl: "/images/education/cbse_logo.jpg",
    location: "Chapra, Bihar",
    icon: BookOpen,
    color: "text-emerald-400",
    border: "border-emerald-500",
    shadow: "shadow-emerald-500/40"
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-semibold mb-4">
              <GraduationCap size={14} />
              Academic Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Education
            </h2>
            <div className="mt-6 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-pink-500 to-transparent opacity-30 hidden md:block" />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-12"
              >
                {/* Timeline Dot */}
                <div className={`hidden md:flex absolute left-8 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-[3px] ${item.border} z-10 mt-8 shadow-[0_0_15px_var(--tw-shadow-color)] ${item.shadow} items-center justify-center transition-transform hover:scale-110`}>
                  <item.icon size={18} className={item.color} />
                </div>

                {/* Content Card */}
                <div className="md:ml-16 flex-1 group">
                  <div className="relative p-8 rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:bg-slate-800/80 shadow-xl overflow-hidden">
                    
                    {/* Hover Glow */}
                    <div className="absolute -inset-10 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 blur-2xl group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10 flex flex-col lg:flex-row gap-6">
                      
                      {/* Logo Box */}
                      <div className="shrink-0 hidden sm:flex items-center justify-center w-20 h-20 rounded-2xl bg-white border border-slate-700 overflow-hidden p-2">
                        <div className="relative w-full h-full">
                          <Image
                            src={item.logoUrl}
                            alt={`${item.institution} Logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                              {item.degree}
                            </h3>
                            <p className="text-lg font-medium text-slate-300 mt-1">
                              {item.institution}
                            </p>
                          </div>

                          <div className="shrink-0 flex flex-col gap-2 items-start md:items-end">
                            <span className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider border ${
                              item.status === "Pursuing"
                                ? "bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
                                : "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                            }`}>
                              {item.status}
                            </span>
                          </div>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                          <div className="flex items-center gap-2 text-slate-400 bg-slate-950/50 p-3 rounded-xl border border-slate-800">
                            <Calendar size={16} className="text-indigo-400" />
                            <span className="text-sm font-medium">{item.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400 bg-slate-950/50 p-3 rounded-xl border border-slate-800">
                            <Award size={16} className="text-pink-400" />
                            <span className="text-sm font-bold text-white">{item.grade}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400 bg-slate-950/50 p-3 rounded-xl border border-slate-800">
                            <MapPin size={16} className="text-purple-400" />
                            <span className="text-sm font-medium line-clamp-1">{item.location}</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
