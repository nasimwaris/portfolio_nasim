import { Mail, Phone, MapPin, ChevronRight, Heart } from "lucide-react";

// Custom brand icon components due to missing exports in this lucide-react version
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width={props.width || 18} height={props.height || 18}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width={props.width || 18} height={props.height || 18}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width={props.width || 18} height={props.height || 18}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width={props.width || 18} height={props.height || 18}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-slate-300 dark:bg-slate-950/60 border-t border-slate-800">

      {/* Upper Grid Area */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* About Summary Box */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Nasim Portfolio
          </h3>
          <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
            Building scalable software. Creating AI-powered products. Solving real-world problems.
            <br /><br />
            As a Co-Founder @ PreepX and Full Stack Engineer, I&apos;m always open to exciting opportunities, startup collaborations, and impactful engineering challenges. Let&apos;s build the future together. 🚀
          </p>
        </div>

        {/* Quick Links Box */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-white">Quick Links</h3>
          <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
            {[
              { label: "Projects", href: "#project" },
              { label: "Resume", href: "/resume.pdf" },
              { label: "GitHub", href: "https://github.com/nasimwaris" },
              { label: "LinkedIn", href: "https://linkedin.com/in/nasim-waris" },
              { label: "PreepX", href: "https://preepx.in" },
              { label: "Email", href: "mailto:nasimwaris189@gmail.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center gap-1.5 text-sm hover:text-indigo-400 transition-colors"
              >
                <ChevronRight size={14} className="text-slate-600 group-hover:text-indigo-400 transition-transform group-hover:translate-x-0.5" />
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact Info & Socials */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-white">Contact Info</h3>
          <div className="flex flex-col gap-3 text-sm">

            <a href="tel:+917277743910" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
              <Phone size={16} className="text-indigo-400" />
              <span>+91 7277743910</span>
            </a>

            <a href="mailto:nasimwaris189@gmail.com" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
              <Mail size={16} className="text-indigo-400" />
              <span>nasimwaris189@gmail.com</span>
            </a>

            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-indigo-400 mt-0.5 shrink-0" />
              <span>Noida, Uttar Pradesh, India - 201303</span>
            </div>

          </div>

          {/* Social shares */}
          <div className="flex items-center gap-3 mt-4">

            <a
              href="https://www.linkedin.com/in/nasim-waris/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-indigo-600 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>

            <a
              href="https://github.com/nasimwaris"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-slate-950 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>

            <a
              href="mailto:nasimwaris189@gmail.com"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-pink-600 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>

            <a
              href="https://www.facebook.com/nasimwarsi189/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>

            <a
              href="https://www.instagram.com/nasimthewarrior/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-pink-500 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>

          </div>
        </div>

      </div>

      {/* Credit Line bottom area */}
      <div className="border-t border-slate-800/60 bg-slate-950/40 py-6 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Nasim Waris. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed with <Heart size={13} className="text-red-500 fill-red-500 animate-pulse" /> by{" "}
            <a
              href="https://www.linkedin.com/in/nasim-waris/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-slate-400 hover:text-indigo-400 transition-colors"
            >
              Nasim Waris
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
}
