import SectionEyebrow from "@/components/career-guides/section-eyebrow";
import { aiCareerPoints } from "@/components/career-guides/career-guides-data";

export default function CareerGuidesAiSection() {
  return (
    <section className="vbs-section bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionEyebrow>How AI Is Influencing Digital Career Paths</SectionEyebrow>
            <h2 className="vbs-heading mt-6 max-w-[14ch]">
              Career resilience now includes technological adaptability.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                AI is the new now tech. It is meant to be around for a while. It
                will not wipe out careers or jobs, it will enhance productivity
                and make space for more jobs.
              </p>
              <p>
                Automation is changing workflows across marketing, analytics,
                and creative production. However, AI typically enhances roles
                rather than eliminates them.
              </p>
            </div>
          </div>

          <div className="vbs-card bg-white p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
              Professionals who adapt well usually:
            </p>
            <ul className="mt-5 space-y-3 text-base leading-7 text-slate-600">
              {aiCareerPoints.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
