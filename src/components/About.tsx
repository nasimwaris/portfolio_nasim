"use client";

import { useState } from "react";
import Image from "next/image";
import { User, Phone, Mail, MapPin, Download, Check, Copy } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/20 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="inline-flex items-center gap-3 text-3xl font-bold tracking-tight sm:text-4xl">
            <User className="text-indigo-500" />
            About <span className="text-indigo-500">Me</span>
          </h2>
          <div className="mt-2 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">

          {/* Left Column: Image with interactive hover */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-3">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                <Image
                  src="/images/NASIM image.png"
                  alt="Nasim Waris Professional Image"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Decorative design corner */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-colors" />
            </div>
          </motion.div>

          {/* Right Column: Bio Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              I&apos;m Nasim Waris
            </h3>
            <span className="mt-1 text-sm font-semibold uppercase tracking-wider text-indigo-500">
              Computer Science & Engineering
            </span>

            <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Results-driven Full-Stack Software Engineer with 3+ years of experience building scalable web applications and robust RESTful APIs.
              Skilled in React.js, Next.js, TypeScript, Java, Spring Boot, Node.js, and PostgreSQL, with a strong focus on performance, security, and clean architecture.
              Passionate about developing modern, user-centric digital solutions that deliver seamless experiences and real business impact through clean, maintainable, and efficient code.

            </p>

            {/* Quick Details Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl text-left">

              {/* Email */}
              <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-200/60 bg-white dark:border-slate-800/60 dark:bg-slate-950 shadow-sm">
                <Mail className="h-5 w-5 text-indigo-500 shrink-0" />
                <div className="min-w-0 flex-1">
                  <span className="block text-xs text-slate-400 font-medium uppercase">Email</span>
                  <span className="block text-sm font-semibold truncate text-slate-700 dark:text-slate-200">
                    nasimwaris189@gmail.com
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard("nasimwaris189@gmail.com", "email")}
                  className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-slate-400 hover:text-slate-600"
                  title="Copy Email"
                >
                  {copiedText === "email" ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-200/60 bg-white dark:border-slate-800/60 dark:bg-slate-950 shadow-sm">
                <Phone className="h-5 w-5 text-indigo-500 shrink-0" />
                <div className="min-w-0 flex-1">
                  <span className="block text-xs text-slate-400 font-medium uppercase">Phone</span>
                  <span className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    +91 7277743910
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard("+917277743910", "phone")}
                  className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-slate-400 hover:text-slate-600"
                  title="Copy Phone"
                >
                  {copiedText === "phone" ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Place */}
              <div className="sm:col-span-2 flex items-center gap-3 p-4 rounded-xl border border-slate-200/60 bg-white dark:border-slate-800/60 dark:bg-slate-950 shadow-sm">
                <MapPin className="h-5 w-5 text-indigo-500 shrink-0" />
                <div className="min-w-0 flex-1">
                  <span className="block text-xs text-slate-400 font-medium uppercase">Place</span>
                  <span className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Noida, Uttar Pradesh, India - 201303
                  </span>
                </div>
              </div>
            </div>

            {/* Resume Button */}
            <div className="mt-8">
              <a
                href="/docs/Waris_Nasim_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-200 px-6 py-3 text-sm font-semibold shadow-md transition-transform hover:-translate-y-0.5"
              >
                View Resume
                <Download size={16} />
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
