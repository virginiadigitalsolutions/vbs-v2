import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/home/section-label";

export default function HeroSection() {
  return (
    <section className="vbs-section min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_at_top_left,_rgba(29,78,216,0.15),_transparent_50%),radial-gradient(ellipse_at_top_right,_rgba(15,118,110,0.15),_transparent_50%)]" />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 relative z-10">
        <div className="relative z-10 max-w-3xl">
          <SectionLabel>Guidance for Digital Careers</SectionLabel>
          <h1 className="mt-6 max-w-4xl font-heading text-6xl leading-[1.05] text-slate-900 sm:text-7xl opacity-0 animate-fade-in-up delay-100">
            Make Smarter Decisions About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d4ed8] to-[#0f766e]">
              Digital Skills
            </span>
            , <span className="text-[#0f766e]">Courses</span>, and Careers
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-600 opacity-0 animate-fade-in-up delay-200">
            Clear guidance for students and working professionals in India. No
            hype, no shortcuts, just structured paths to build real value.
          </p>
          <div className="mt-10 flex flex-wrap gap-5 opacity-0 animate-fade-in-up delay-300">
            <Link href="/digital-skills" className="vbs-button-primary">
              Explore Digital Skills
            </Link>
            <Link href="/courses-certifications" className="vbs-button-secondary">
              Compare Learning Paths
            </Link>
          </div>

          <div className="mt-16 grid max-w-2xl gap-5 sm:grid-cols-3 opacity-0 animate-fade-in-up delay-400">
            {[
              ["Foundations first", "Learn what matters before chasing tools."],
              ["Clear comparisons", "Evaluate courses with structure, not hype."],
              ["Career visibility", "See where each path can realistically lead."],
            ].map(([title, text]) => (
              <div key={title} className="vbs-mini-card group">
                <div className="mb-3 h-1 w-10 rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#0f766e] opacity-70 group-hover:opacity-100 transition-opacity" />
                <p className="text-sm font-bold text-slate-900">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative opacity-0 animate-fade-in-up delay-500">
          <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-[#1d4ed8]/20 to-[#0f766e]/20 blur-3xl" />
          <div className="vbs-card p-6 lg:p-8 !bg-white/40 !border-white/80">
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs font-bold tracking-widest text-[#1d4ed8] uppercase">
                Decision Snapshot
              </p>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#b45309] shadow-sm border border-white/60">
                Phase 1
              </span>
            </div>
            <div className="relative rounded-[1.5rem] overflow-hidden shadow-xl border border-white/50 bg-white/80 p-2">
              <Image
                src="/home-hero-guidance.svg"
                alt="Illustration showing a structured digital career decision dashboard."
                width={720}
                height={560}
                className="h-auto w-full rounded-[1rem]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
