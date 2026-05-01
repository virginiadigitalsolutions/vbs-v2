import SectionEyebrow from "@/components/career-guides/section-eyebrow";
import { roleExamples } from "@/components/career-guides/career-guides-data";

export default function CareerGuidesRolesSection() {
  return (
    <section className="vbs-section bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>How Digital Skills Translate Into Roles</SectionEyebrow>
          <h2 className="vbs-heading mt-6 max-w-[15ch]">
            Behind every role is a combination of skills working together.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Digital careers rarely rely on just one skill. They usually combine
            several related capabilities. When you understand that connection,
            career decisions become less confusing.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {roleExamples.map((role) => (
            <article key={role.title} className="vbs-card p-7">
              <div
                className={`rounded-[1.35rem] bg-gradient-to-br ${role.accent} p-5`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sm font-black text-[#1d4ed8] shadow-sm">
                  {role.icon}
                </div>
                <h3 className="mt-5 font-heading text-3xl text-slate-900">
                  {role.title}
                </h3>
              </div>
              <p className="mt-6 text-base leading-7 text-slate-600">
                {role.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
