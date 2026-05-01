import Image from "next/image";
import SectionLabel from "@/components/home/section-label";
import { confusionPoints } from "@/components/home/home-data";

export default function ConfusionSection() {
  return (
    <section className="vbs-section relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <SectionLabel>The Core Problem</SectionLabel>
          <h2 className="vbs-heading mt-6 opacity-0 animate-fade-in-up delay-100">
            Too many choices.
            <br />
            Too much noise.
            <br />
            Too little structure.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600 opacity-0 animate-fade-in-up delay-200">
            The challenge today is not a lack of information. It is knowing how
            to separate foundational skills from temporary trends while AI and
            automation keep shifting expectations.
          </p>
          <div className="mt-10 space-y-5 opacity-0 animate-fade-in-up delay-300">
            {confusionPoints.map((point, index) => (
              <div key={point} className="vbs-mini-card flex gap-5 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef2ff] shadow-inner text-sm font-bold text-[#1d4ed8]">
                  0{index + 1}
                </div>
                <p className="text-base leading-relaxed text-slate-700 mt-1">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative opacity-0 animate-fade-in-up delay-400">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[2rem] transform rotate-3 scale-105 -z-10" />
          <div className="vbs-card !bg-white/80 p-6 lg:p-8 shadow-2xl shadow-slate-200/50">
            <Image
              src="/home-confusion-map.svg"
              alt="Illustration of many digital choices converging into a clearer decision path."
              width={760}
              height={620}
              className="h-auto w-full rounded-[1rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
