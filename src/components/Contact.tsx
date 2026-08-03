"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Headset, User, Mail, Phone, MessageSquare, Send, CheckCircle2, AlertCircle, X, ExternalLink, MessageCircle, CalendarDays } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width={props.width || 24} height={props.height || 24}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width={props.width || 24} height={props.height || 24}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_default";
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_default";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key_default";

    try {
      if (publicKey === "public_key_default") {
        // Simulate sending for testing if not configured
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitStatus("success");
        setStatusMessage("Message sent successfully! (Demo Mode - Configure EmailJS env variables for live sending)");
        formRef.current.reset();
      } else {
        await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);
        setSubmitStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully.");
        formRef.current.reset();
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      setStatusMessage("Oops! Something went wrong. Please try again later or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="inline-flex items-center gap-3 text-3xl font-bold tracking-tight sm:text-5xl text-white">
              Let&apos;s Build Something <br className="hidden md:block"/> <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">Amazing Together.</span>
            </h2>
            <div className="mt-6 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
            <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
              Ready to start your next project or looking for a co-founder? Drop me a message or connect directly on any platform below.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white dark:bg-slate-950/20 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-8 md:p-12 shadow-sm">

          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4 w-full">
            <div className="grid grid-cols-2 gap-4">
              <a href="mailto:nasimwaris@example.com" className="group flex flex-col justify-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-all hover:-translate-y-1">
                <Mail size={24} className="text-indigo-400 mb-3" />
                <h4 className="text-white font-bold text-sm">Email</h4>
                <p className="text-xs text-slate-400 mt-1">Drop a line</p>
              </a>
              <a href="https://github.com/nasimwaris" target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-400 transition-all hover:-translate-y-1">
                <GithubIcon className="text-slate-300 mb-3" />
                <h4 className="text-white font-bold text-sm">GitHub</h4>
                <p className="text-xs text-slate-400 mt-1">View code</p>
              </a>
              <a href="https://linkedin.com/in/nasimwaris" target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-1">
                <LinkedinIcon className="text-blue-400 mb-3" />
                <h4 className="text-white font-bold text-sm">LinkedIn</h4>
                <p className="text-xs text-slate-400 mt-1">Connect professionally</p>
              </a>
              <a href="https://preepx.in" target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-pink-500/50 transition-all hover:-translate-y-1">
                <ExternalLink size={24} className="text-pink-400 mb-3" />
                <h4 className="text-white font-bold text-sm">PreepX</h4>
                <p className="text-xs text-slate-400 mt-1">My Startup</p>
              </a>
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all hover:-translate-y-1">
                <MessageCircle size={24} className="text-emerald-400 mb-3" />
                <h4 className="text-white font-bold text-sm">WhatsApp</h4>
                <p className="text-xs text-slate-400 mt-1">Quick chat</p>
              </a>
              <a href="#" className="group flex flex-col justify-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition-all hover:-translate-y-1">
                <CalendarDays size={24} className="text-purple-400 mb-3" />
                <h4 className="text-white font-bold text-sm">Calendly</h4>
                <p className="text-xs text-slate-400 mt-1">Book a meeting</p>
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7 w-full">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

              {/* Form Response Banner Removed - Using Modal instead */}

              {/* Name Field */}
              <div className="relative">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                    <User size={16} />
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-11 pr-4 text-sm font-medium outline-none transition-all focus:border-indigo-500 focus:bg-white dark:border-slate-800 dark:bg-slate-900/40 dark:focus:border-indigo-500 dark:focus:bg-slate-950"
                  />
                </div>
              </div>

              {/* Email & Phone side-by-side on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                      <Mail size={16} />
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-11 pr-4 text-sm font-medium outline-none transition-all focus:border-indigo-500 focus:bg-white dark:border-slate-800 dark:bg-slate-900/40 dark:focus:border-indigo-500 dark:focus:bg-slate-950"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    Phone (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                      <Phone size={16} />
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. +91 727*****10"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-11 pr-4 text-sm font-medium outline-none transition-all focus:border-indigo-500 focus:bg-white dark:border-slate-800 dark:bg-slate-900/40 dark:focus:border-indigo-500 dark:focus:bg-slate-950"
                    />
                  </div>
                </div>

              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Message
                </label>
                <div className="relative">
                  <span className="absolute top-3 left-4 text-slate-400">
                    <MessageSquare size={16} />
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Type your message here..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-11 pr-4 text-sm font-medium outline-none transition-all focus:border-indigo-500 focus:bg-white dark:border-slate-800 dark:bg-slate-900/40 dark:focus:border-indigo-500 dark:focus:bg-slate-950"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/35 disabled:opacity-75 disabled:cursor-not-allowed md:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Message
                      <Send size={15} />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {submitStatus !== "idle" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-950 rounded-2xl p-6 shadow-xl max-w-sm w-full border border-slate-200 dark:border-slate-800 relative"
            >
              <button
                onClick={() => setSubmitStatus("idle")}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                type="button"
              >
                <X size={20} />
              </button>
              <div className="flex flex-col items-center text-center mt-2">
                {submitStatus === "success" ? (
                  <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                  </div>
                ) : (
                  <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4">
                    <AlertCircle className="h-6 w-6 text-red-500" />
                  </div>
                )}
                <h3 className="text-lg font-bold mb-2">
                  {submitStatus === "success" ? "Success!" : "Error"}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                  {statusMessage}
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors"
                  type="button"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
