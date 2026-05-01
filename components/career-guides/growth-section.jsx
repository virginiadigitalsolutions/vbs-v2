import SectionEyebrow from "@/components/career-guides/section-eyebrow";
import { growthFactors } from "@/components/career-guides/career-guides-data";

export default function CareerGuidesGrowthSection() {
  return (
    <section className="vbs-section bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="vbs-card overflow-hidden p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionEyebrow>Growth and Earning Potential</SectionEyebrow>
              <h2 className="vbs-heading mt-6 max-w-[14ch]">
                Growth in digital careers follows capability, not a fixed
                ladder.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  If you&apos;re investing time in building digital skills, it is
                  natural to wonder where it can lead, both professionally and
                  financially.
                </p>
                <p>
                  As your skills deepen and your impact becomes measurable,
                  opportunities tend to expand alongside them.
                </p>
                <p>
                  Entry-level positions often prioritize learning exposure.
                  Mid-level roles reward measurable contribution. Senior roles
                  reflect leadership and strategic impact.
                </p>
                <p>
                  Long-term growth depends less on certificates and more on
                  demonstrable capability and adaptability.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {growthFactors.map((factor, index) => (
                <div
                  key={factor}
                  className="rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
                >
                  <p className="text-sm font-black tracking-[0.18em] text-[#1d4ed8] uppercase">
                    Factor 0{index + 1}
                  </p>
                  <p className="mt-3 text-base leading-7 text-slate-700">{factor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
