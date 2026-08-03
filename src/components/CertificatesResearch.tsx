"use client";

import { useState, useEffect } from "react";
import { Award, ChevronRight, X, Bot, Monitor, Globe, Palette, Code, BookOpen, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CertificateItem {
  title: string;
  issuer: string;
  duration: string;
  imageSrc: string;
  icon: any;
  iconColor: string;
}

const certificatesData: CertificateItem[] = [
  {
    title: "Full Stack Development",
    issuer: "SCA Live",
    duration: "July 2023 - Completed",
    imageSrc: "/images/certificates/java_programming.jpeg",
    icon: Monitor,
    iconColor: "text-blue-500",
  },
  {
    title: "Computer Network",
    issuer: "IIT KHARAGPUR",
    duration: "April 2023 - Completed",
    imageSrc: "/images/certificates/nptel_certificate.jpeg",
    icon: Globe,
    iconColor: "text-cyan-500",
  },
  {
    title: "Gen AI",
    issuer: "Udemy",
    duration: "January 2026 - Present",
    imageSrc: "/images/certificates/udemy_python.jpeg",
    icon: Bot,
    iconColor: "text-pink-500",
  },
  {
    title: "HTML 5",
    issuer: "Udemy",
    duration: "December 2021",
    imageSrc: "/images/certificates/udemy_html.jpeg",
    icon: Palette,
    iconColor: "text-orange-500",
  },
  {
    title: "CSS 3",
    issuer: "Udemy",
    duration: "March 2022 - Present",
    imageSrc: "/images/certificates/udemy_css.jpeg",
    icon: Code,
    iconColor: "text-indigo-500",
  },
];

export default function CertificatesResearch() {
  const [activeTab, setActiveTab] = useState<"certificates" | "research">("certificates");
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string>("");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#certificate" || hash === "#certificates") {
        setActiveTab("certificates");
      } else if (hash === "#research") {
        setActiveTab("research");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section className="pb-20 pt-10 bg-slate-50/50 dark:bg-slate-900/20 scroll-mt-10">
      {/* Anchors for navigation */}
      <div id="certificate" className="scroll-mt-24" />
      <div id="research" className="scroll-mt-24" />
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Tab Selector Header */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-16 border-b border-slate-200 dark:border-slate-800 max-w-2xl mx-auto px-2">
          <button
            onClick={() => setActiveTab("certificates")}
            className={`flex items-center gap-2 pb-4 text-sm md:text-lg font-bold border-b-2 transition-all ${
              activeTab === "certificates"
                ? "border-indigo-500 text-indigo-500"
                : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
            }`}
          >
            <Award size={20} />
            Certificates
          </button>

          <button
            onClick={() => setActiveTab("research")}
            className={`flex items-center gap-2 pb-4 text-sm md:text-lg font-bold border-b-2 transition-all ${
              activeTab === "research"
                ? "border-indigo-500 text-indigo-500"
                : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
            }`}
          >
            <BookOpen size={20} />
            Research
          </button>
        </div>

        {/* Dynamic Display Panel */}
        <div>
          <AnimatePresence mode="wait">
            {activeTab === "certificates" && (
              <motion.div
                key="certificates-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {certificatesData.map((cert, index) => {
                  const Icon = cert.icon;
                  return (
                    <div
                      key={index}
                      className="group flex flex-col justify-between p-6 rounded-2xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-500/20"
                    >
                      <div>
                        <span className="inline-flex rounded-lg bg-indigo-50 dark:bg-indigo-950/30 p-2">
                          <Icon size={24} className={cert.iconColor} />
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
                  );
                })}
              </motion.div>
            )}

            {activeTab === "research" && (
              <motion.div
                key="research-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                <div className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 rounded-2xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-[#0a0a0f] shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-500/20 gap-6">
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl border border-indigo-200 dark:border-indigo-900/50 bg-indigo-50 dark:bg-indigo-900/20 shrink-0">
                      <BookOpen size={24} className="text-indigo-500" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors leading-relaxed">
                        A Hybrid Rule-Based and AI-Driven Framework for Multi-Document Identity Verification Using OCR, Entity Matching, and Cross-Document Consistency Analysis
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-medium">
                        Research Paper
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://www.ijfmr.com/research-paper.php?id=82978"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-sm"
                  >
                    View Paper
                    <ExternalLink size={16} />
                  </a>
                </div>

                <div className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 rounded-2xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-[#0a0a0f] shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-500/20 gap-6">
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl border border-indigo-200 dark:border-indigo-900/50 bg-indigo-50 dark:bg-indigo-900/20 shrink-0">
                      <BookOpen size={24} className="text-indigo-500" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors leading-relaxed">
                        An AI-Driven Document Intelligence Framework for Identity Verification with Entity Resolution and Fraud Detection
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-medium">
                        Research Paper
                      </p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-sm"
                  >
                    Coming Soon
                  </a>
                </div>
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
