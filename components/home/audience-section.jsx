import Image from "next/image";
import SectionLabel from "@/components/home/section-label";
import { audienceCards } from "@/components/home/home-data";

export default function AudienceSection() {
  return (
    <section className="vbs-section relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f1f5f9]/50 -z-10" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel className="mx-auto">Who This Guidance Helps</SectionLabel>
          <h2 className="vbs-heading mt-6 opacity-0 animate-fade-in-up delay-100">
            Built for learners at different stages, not one generic audience.
          </h2>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {audienceCards.map((card, idx) => (
            <article
              key={card.title}
              className={`vbs-card group p-8 opacity-0 animate-fade-in-up delay-${(idx + 2) * 100}`}
            >
              <div
                className={`absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl opacity-40 ${card.tint} transition-transform group-hover:scale-150 duration-700`}
              />

              <div className="relative overflow-hidden rounded-[1.5rem] bg-white p-4 shadow-sm border border-slate-100 z-10">
                <div
                  className={`absolute left-4 top-4 rounded-full px-4 py-2 text-sm font-black shadow-sm ${card.iconWrap}`}
                >
                  {card.icon}
                </div>
                <Image
                  src={card.image}
                  alt={`${card.title} illustration`}
                  width={560}
                  height={360}
                  className="h-48 w-full rounded-[1rem] object-cover"
                />
              </div>
              <h3 className="mt-8 font-heading text-3xl text-slate-900 relative z-10 group-hover:text-[#1d4ed8] transition-colors">
                {card.title}
              </h3>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 relative z-10">
                {card.points.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
