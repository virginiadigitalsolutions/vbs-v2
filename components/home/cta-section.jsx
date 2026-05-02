import Link from "next/link";
import CTAButton from "@/components/ui/cta-button";
import { ctaData } from "@/components/home/home-data";

export default function CtaSection() {
  return (
    <section className="vbs-section relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-[linear-gradient(135deg,#0b1a42_0%,#1d4ed8_72%,#0f766e_100%)] p-12 text-center text-white lg:p-20 shadow-[0_30px_60px_-15px_rgba(29,78,216,0.3)]">
          {/* Background patterns */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_60%)] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.2)_0%,transparent_60%)] -translate-x-1/4 translate-y-1/4 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto opacity-0 animate-fade-in-up">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-sm">
              {ctaData.heading.prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-200">{ctaData.heading.highlight}</span> {ctaData.heading.suffix}
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-blue-100 max-w-2xl mx-auto font-medium">
              {ctaData.description}
            </p>
            
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <CTAButton href={ctaData.button.href} variant="light">
                {ctaData.button.label}
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
