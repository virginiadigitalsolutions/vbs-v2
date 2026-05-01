import SectionEyebrow from "@/components/digital-skills/section-eyebrow";
import { aiExamples } from "@/components/digital-skills/digital-skills-data";

export default function DigitalSkillsAiSection() {
  return (
    <section className="vbs-section bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="vbs-card overflow-hidden p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionEyebrow>How AI Is Reshaping Digital Skills</SectionEyebrow>
              <h2 className="vbs-heading mt-6 max-w-[14ch]">
                AI is not removing digital skills. It is redefining how they
                are applied.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  Tasks that once required manual effort are becoming automated,
                  while strategic thinking, interpretation, and judgment are
                  becoming more valuable.
                </p>
                <p>
                  The shift is not about competing with automation, but learning
                  how to integrate it effectively.
                </p>
                <p>
                  Digital professionals who understand how AI augments their
                  skill set are better positioned for long-term adaptability.
                </p>
                <p>
                  When evaluating a skill today, it is no longer enough to ask
                  whether it is in demand. The more important question is how
                  that skill evolves alongside intelligent tools.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {aiExamples.map((example) => (
                <div
                  key={example}
                  className="rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
                >
                  <p className="text-base leading-7 text-slate-700">{example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
