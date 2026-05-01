import Link from "next/link";
import { frameworkSteps } from "@/components/home/home-data";

export default function FrameworkSection() {
  return (
    <section className="vbs-section relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_52%,#ffffff_100%)]">
      <div className="absolute left-0 top-20 h-56 w-56 rounded-full bg-[#1d4ed8]/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#0f766e]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-[#1d4ed8] uppercase opacity-0 animate-fade-in-up">
            A Clear Framework
          </p>
          <h2 className="vbs-heading mt-6 opacity-0 animate-fade-in-up delay-100">
            Follow a sequence that turns confusion into direction.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 opacity-0 animate-fade-in-up delay-200">
            Instead of reacting to noise, move through a structured path:
            understand the skill, evaluate where to learn it, and then connect it
            to real career outcomes.
          </p>
        </div>

        <div className="mt-14 rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_18px_40px_rgba(29,78,216,0.08)] backdrop-blur-md lg:p-8">
          <div className="grid gap-5 md:grid-cols-3">
            {frameworkSteps.map((step, index) => (
              <div
                key={step.title}
                className={`relative opacity-0 animate-fade-in-up delay-${(index + 3) * 100}`}
              >
                {index < frameworkSteps.length - 1 ? (
                  <div className="hidden md:flex absolute right-[-28px] top-1/2 z-20 h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                    <span className="text-2xl font-bold text-[#0f766e]">&rarr;</span>
                  </div>
                ) : null}

                <article className="vbs-card h-full bg-white p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-black tracking-[0.18em] text-[#1d4ed8] uppercase">
                        Step {step.number}
                      </p>
                      <h3 className="mt-4 font-heading text-3xl text-slate-950">
                        {step.title}
                      </h3>
                    </div>
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#eef2ff_0%,#e6fffb_100%)] text-xl font-black text-[#1d4ed8] shadow-inner">
                      {step.icon}
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.25rem] bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_100%)] p-5">
                    <p className="text-base leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-[1.1rem] border border-slate-200 bg-[#f8fafc] px-4 py-3">
                    <span className="text-sm font-semibold text-slate-500">
                      Next action
                    </span>
                    <Link
                      href={step.href}
                      className="inline-flex items-center text-sm font-bold text-[#1d4ed8] transition hover:text-[#0f766e]"
                    >
                      Know More <span className="ml-2">&rarr;</span>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
