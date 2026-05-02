import Link from "next/link";
import CTAButton from "@/components/ui/cta-button";
import AboutUsSectionEyebrow from "@/components/about-us/section-eyebrow";
import { ctaData } from "@/components/about-us/about-us-data";

export default function AboutUsCtaSection() {
  return (
    <section className="vbs-section bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#0b1a42_0%,#1d4ed8_72%,#0f766e_100%)] p-8 text-white lg:p-16 shadow-2xl">
          {/* Background patterns */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.2)_0%,transparent_70%)] -translate-x-1/4 translate-y-1/4 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            <AboutUsSectionEyebrow className="text-teal-200">{ctaData.eyebrow}</AboutUsSectionEyebrow>
            <h2 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-sm">
              {ctaData.heading.prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-200">{ctaData.heading.highlight}</span>
            </h2>
            
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-blue-100 max-w-3xl">
              {ctaData.paragraphs.map((p, i) => (
                <p key={i} className={i === ctaData.paragraphs.length - 1 ? "font-semibold text-white" : ""}>
                  {p}
                </p>
              ))}
            </div>
            
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
