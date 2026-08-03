"use client";

import { motion } from "framer-motion";

const techStack = [
  "Next.js", "React", "NestJS", "Java", "Spring Boot", 
  "PostgreSQL", "MongoDB", "Docker", "AWS", "Redis", 
  "OpenAI", "Claude", "Gemini", "GitHub"
];

export default function TechSlider() {
  return (
    <div className="w-full overflow-hidden bg-slate-950/50 py-8 border-y border-slate-800/50 backdrop-blur-sm">
      <div className="relative flex max-w-[100vw] overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 z-10 w-24 h-full bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
        
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
          className="flex whitespace-nowrap items-center gap-12 px-6"
        >
          {/* We repeat the array 3 times to ensure smooth infinite scrolling */}
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <span
              key={index}
              className="text-lg md:text-xl font-bold text-slate-400 opacity-50 hover:opacity-100 hover:text-indigo-400 transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
        
        {/* Right fade */}
        <div className="absolute right-0 top-0 z-10 w-24 h-full bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
