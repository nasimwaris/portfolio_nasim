"use client";

import Image from "next/image";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  status: "Pursuing" | "Completed";
  logoUrl: string;
  location: string;
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
  },
  {
    degree: "B.Tech | Computer Science & Engineering",
    institution: "IES College of Technology, Bhopal",
    duration: "2020 - 2024",
    grade: "8.26 CGPA",
    status: "Completed",
    logoUrl: "/images/education/rgpv_logo.jpg",
    location: "Bhopal, Madhya Pradesh",
  },
  {
    degree: "12th | Senior Secondary School Certificate",
    institution: "A.N.D Public School Khapura, Chapra, Bihar (CBSE)",
    duration: "2019",
    grade: "75.4 %",
    status: "Completed",
    logoUrl: "/images/education/cbse_logo.jpg",
    location: "Chapra, Bihar",
  },
  {
    degree: "10th | Secondary School Certificate",
    institution: "J.D Public School Bangra, Chapra, Bihar (CBSE)",
    duration: "2017",
    grade: "8.8 CGPA",
    status: "Completed",
    logoUrl: "/images/education/cbse_logo.jpg",
    location: "Chapra, Bihar",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50/50 dark:bg-slate-900/20 scroll-mt-10">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-6">
          <h2 className="inline-flex items-center gap-3 text-3xl font-bold tracking-tight sm:text-4xl">
            <GraduationCap className="text-indigo-500" />
            My <span className="text-indigo-500">Education</span>
          </h2>
          <div className="mt-2 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
        </div>

        <p className="text-center italic text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-16 text-sm">
          &ldquo;Education is not the learning of facts, but the training of the mind to think.&rdquo;
        </p>

        {/* Education List Container */}
        <div className="relative space-y-6 max-w-4xl mx-auto">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Education Card */}
              <div className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-500/30">
                
                {/* Logo Image */}
                <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-xl overflow-hidden bg-slate-50 p-1 flex-shrink-0 border border-slate-100 dark:border-slate-900">
                  <Image
                    src={item.logoUrl}
                    alt={`${item.institution} Logo`}
                    fill
                    className="object-contain p-1"
                  />
                </div>

                {/* Card Text Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                      {item.degree}
                    </h3>
                    
                    {/* Status badge */}
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      item.status === "Pursuing"
                        ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-400"
                        : "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-400"
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <p className="mt-1.5 text-base font-semibold text-slate-600 dark:text-slate-300">
                    {item.institution}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={15} className="text-indigo-500" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Award size={15} className="text-indigo-500" />
                      <span className="font-bold text-slate-700 dark:text-slate-300">{item.grade}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={15} className="text-indigo-500" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
