"use client";

import { useState } from "react";
import { Briefcase, Award, Calendar, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description?: string | string[];
}

interface CertificateItem {
  title: string;
  issuer: string;
  duration: string;
  imageSrc: string;
}

const experienceData: ExperienceItem[] = [
  {
    company: "Codefork Technologies Private Limited - SDLC Corp, Noida",
    role: "Full Stack Developer",
    duration: "Sep 2025 - Ongoing",
    description: [
      "Developed AI-driven full-stack applications using Next.js, NestJS, TypeScript, and MongoDB",
      "Integrated secure payment gateways and subscription systems using REST APIs",
      "Designed scalable backend services and microservice-based architecture",
      "Built responsive frontend interfaces with optimized performance",
      "Improved application workflows and automation systems"
    ],
  },
  {
    company: "Impactsure Technologies Private Limited, Mumbai",
    role: "Associate Software Developer",
    duration: "Jan 2024 - Aug 2025",
    description: [
      "Built enterprise-level banking automation systems",
      "Developed secure microservices with JWT/OAuth2 authentication and Redis caching",
      "Automated document workflows with AI/ML integrations, improving processing efficiency",
      "Built responsive frontend applications",
      "Optimized backend performance and scalable workflow architecture"
    ],
  },
  {
    company: "Rablik Private Limited, Bhopal",
    role: "Full Stack Developer",
    duration: "Sep 2023 - Dec 2023",
    description: [
      "Developed responsive and user-friendly web pages using HTML, CSS, and JavaScript, ensuring compatibility across different devices and screen sizes.",
      "Implemented dynamic features and integrated REST APIs to enable seamless communication between the frontend and backend.",
      "Debugged, optimized, and maintained clean, reusable, and well-structured code to improve application performance and maintainability.",
      "Collaborated with the development team to build real-world web applications, strengthening frontend development skills and gaining hands-on experience with modern web development practices."
    ],
  },
];

const certificatesData: CertificateItem[] = [
  {
    title: "Full Stack Development",
    issuer: "SCA Live",
    duration: "July 2023 - Completed",
    imageSrc: "/images/certificates/java_programming.jpeg",
  },
  {
    title: "Computer Network",
    issuer: "IIT KHARAGPUR",
    duration: "April 2023 - Completed",
    imageSrc: "/images/certificates/nptel_certificate.jpeg",
  },
  {
    title: "Gen AI",
    issuer: "Udemy",
    duration: "January 2026 - Present",
    imageSrc: "/images/certificates/udemy_python.jpeg",
  },
  {
    title: "HTML 5",
    issuer: "Udemy",
    duration: "December 2021",
    imageSrc: "/images/certificates/udemy_html.jpeg",
  },
  {
    title: "CSS 3",
    issuer: "Udemy",
    duration: "March 2022 - Present",
    imageSrc: "/images/certificates/udemy_css.jpeg",
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"experience" | "certificates">("experience");
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string>("");

  return (
    <section id="experience" className="py-20 bg-slate-50/50 dark:bg-slate-900/20 scroll-mt-10">

      {/* Anchor for certificates navigation */}
      <div id="certificate" className="scroll-mt-24" />
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Tab Selector Header */}
        <div className="flex justify-center items-center gap-6 mb-16 border-b border-slate-200 dark:border-slate-800 max-w-md mx-auto">

          <button
            onClick={() => setActiveTab("experience")}
            className={`flex items-center gap-2 pb-4 text-lg font-bold border-b-2 transition-all ${activeTab === "experience"
              ? "border-indigo-500 text-indigo-500"
              : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
              }`}
          >
            <Briefcase size={20} />
            Experience
          </button>

          <button
            onClick={() => setActiveTab("certificates")}
            className={`flex items-center gap-2 pb-4 text-lg font-bold border-b-2 transition-all ${activeTab === "certificates"
              ? "border-indigo-500 text-indigo-500"
              : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
              }`}
          >
            <Award size={20} />
            Certificates
          </button>

        </div>

        {/* Dynamic Display Panel */}
        <div>
          <AnimatePresence mode="wait">

            {activeTab === "experience" && (
              <motion.div
                key="experience-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="relative space-y-6">
                  {experienceData.map((exp, index) => (
                    <div key={index} className="relative group">

                      <div className="p-6 rounded-2xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-indigo-500/20">
                        <div className="flex flex-wrap justify-between items-start gap-2">
                          <div>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                              {exp.company}
                            </h3>
                            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                              {exp.role}
                            </p>
                          </div>

                          <div className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                            <Calendar size={13} />
                            <span>{exp.duration}</span>
                          </div>
                        </div>

                        {exp.description && (
                          Array.isArray(exp.description) ? (
                            <ul className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed list-disc list-outside ml-4 space-y-1">
                              {exp.description.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                              {exp.description}
                            </p>
                          )
                        )}
                      </div>

                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "certificates" && (
              <motion.div
                key="certificates-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {certificatesData.map((cert, index) => (
                  <div
                    key={index}
                    className="group flex flex-col justify-between p-6 rounded-2xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-500/20"
                  >
                    <div>
                      <span className="inline-flex rounded-lg bg-indigo-50 dark:bg-indigo-950/30 p-2 text-indigo-500">
                        <Award size={24} />
                      </span>

                      <h3 className="mt-4 text-base font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                        {cert.title}
                      </h3>

                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {cert.issuer}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-900 flex justify-between items-center gap-4">
                      <span className="text-xs text-slate-400 font-medium">
                        {cert.duration}
                      </span>

                      <button
                        onClick={() => {
                          setModalImage(cert.imageSrc);
                          setModalTitle(cert.title);
                        }}
                        className="flex items-center gap-1 text-xs font-semibold text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"
                      >
                        View Certificate
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal for Certificate Previews */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-3xl w-full rounded-2xl bg-white dark:bg-slate-900 overflow-hidden shadow-2xl p-6 border border-slate-200 dark:border-slate-800"
            >

              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  {modalTitle} - Certificate
                </h3>
                <button
                  onClick={() => setModalImage(null)}
                  className="rounded-full p-1 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Certificate Image Frame */}
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-950 flex items-center justify-center border border-slate-200/50 dark:border-slate-800/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={modalImage}
                  alt={modalTitle}
                  className="max-h-[60vh] object-contain"
                  onError={(e) => {
                    // Fallback visual display if certificate isn't uploaded yet
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      const placeholder = parent.querySelector(".fallback-container");
                      if (placeholder) {
                        (placeholder as HTMLElement).style.display = "flex";
                      }
                    }
                  }}
                />

                {/* Fallback layout */}
                <div className="fallback-container hidden absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-slate-50 dark:bg-slate-950">
                  <Award size={48} className="text-indigo-500 animate-bounce mb-3" />
                  <h4 className="text-base font-bold text-slate-700 dark:text-slate-300">
                    Certificate Image Preview Pending
                  </h4>
                  <p className="text-xs text-slate-400 max-w-sm mt-1.5">
                    The certificate file path `<span className="font-mono">{modalImage}</span>` is configured. Once the file is uploaded, the image preview will render here.
                  </p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
