import Link from "next/link";

function SectionBlock({ section }) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <h2 className="font-heading text-4xl leading-tight text-slate-950">
        {section.title}
      </h2>

      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-5 text-lg leading-8 text-slate-600">
          {paragraph}
        </p>
      ))}

      {section.list?.length ? (
        <ul className="mt-6 grid gap-3">
          {section.list.map((item) => (
            <li
              key={item}
              className="rounded-[1.2rem] border border-slate-200 bg-[#F8FAFC] px-5 py-4 text-base leading-7 text-slate-700"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      {section.skillCards?.length ? (
        <div className="mt-8 grid gap-6">
          {section.skillCards.map((skill, index) => (
            <article key={skill.title} className="vbs-card bg-white p-7 lg:p-8">
              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#E0ECFF] text-lg font-bold text-[#1E3A8A]">
                  {index + 1}
                </span>
                <h3 className="font-heading text-3xl leading-tight text-slate-950">
                  {skill.title}
                </h3>
              </div>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                {skill.description}
              </p>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <p className="text-sm font-bold tracking-[0.18em] text-[#2563EB] uppercase">
                    What It Includes
                  </p>
                  <ul className="mt-4 grid gap-3">
                    {skill.bullets.map((item) => (
                      <li
                        key={item}
                        className="rounded-[1.05rem] border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-base leading-7 text-slate-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-bold tracking-[0.18em] text-[#0F766E] uppercase">
                    Where It Fits
                  </p>
                  <ul className="mt-4 grid gap-3">
                    {skill.whereItFits.map((item) => (
                      <li
                        key={item}
                        className="rounded-[1.05rem] border border-slate-200 bg-[#ECFDF5] px-4 py-3 text-base leading-7 text-slate-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {skill.suits ? (
                <p className="mt-6 text-base leading-7 text-slate-600">
                  <span className="font-semibold text-slate-900">Who it suits:</span>{" "}
                  {skill.suits}
                </p>
              ) : null}
              {skill.note ? (
                <p className="mt-4 rounded-[1.15rem] border border-[#BFDBFE] bg-[#EFF6FF] px-5 py-4 text-base leading-7 text-slate-700">
                  <span className="font-semibold text-slate-900">Reality check:</span>{" "}
                  {skill.note}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      ) : null}

      {section.decisionCards?.length ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {section.decisionCards.map((item, index) => (
            <article
              key={item}
              className={`vbs-card p-6 ${
                index % 2 === 0 ? "bg-white" : "bg-[#E0ECFF]/70"
              }`}
            >
              <p className="text-base leading-7 text-slate-700">{item}</p>
            </article>
          ))}
        </div>
      ) : null}

      {section.stageCards?.length ? (
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {section.stageCards.map((item) => (
            <article key={item} className="vbs-card bg-white p-6">
              <p className="text-base leading-7 text-slate-700">{item}</p>
            </article>
          ))}
        </div>
      ) : null}

      {section.splitCards?.length ? (
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {section.splitCards.map((card, index) => (
            <article
              key={card.title}
              className={`vbs-card p-7 ${
                index === 0 ? "bg-white" : "bg-[#E0ECFF]/75"
              }`}
            >
              <h3 className="font-heading text-3xl text-slate-950">{card.title}</h3>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                {card.description}
              </p>
              <ul className="mt-5 grid gap-3">
                {card.bullets.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.05rem] border border-slate-200 bg-white/80 px-4 py-3 text-base leading-7 text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-base leading-7 text-slate-600">
                {card.footer}
              </p>
            </article>
          ))}
        </div>
      ) : null}

      {section.mistakeCards?.length ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {section.mistakeCards.map((card) => (
            <article key={card.title} className="vbs-card bg-white p-7">
              <h3 className="font-heading text-2xl leading-tight text-slate-950">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      ) : null}

      {section.closing ? (
        <p className="mt-6 text-lg leading-8 text-slate-600">{section.closing}</p>
      ) : null}
    </section>
  );
}

export default function BlogPostBody({ post }) {
  return (
    <section className="vbs-section bg-[#F5F7FA]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.72fr_0.28fr] lg:px-8">
        <div className="vbs-card bg-white p-8 lg:p-12">
          {/* Intro paragraphs */}
          {post.intro?.length > 0 && (
            <div className="mb-12 space-y-5 text-lg leading-8 text-slate-600">
              {post.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
          <div className="grid gap-14">
            {post.sections.map((section) => (
              <SectionBlock key={section.id} section={section} />
            ))}
          </div>

          <div className="mt-14 rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#1E3A8A_0%,#2563EB_65%,#14B8A6_100%)] p-8 text-white lg:p-10">
            <p className="text-sm font-bold tracking-[0.18em] text-blue-100 uppercase">
              Continue The Next Step
            </p>
            <h2 className="mt-5 font-heading text-4xl leading-tight">
              Turn skill clarity into structured learning and career direction
            </h2>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/digital-skills" className="vbs-button-secondary">
                Explore Digital Skills
              </Link>
              <Link
                href="/courses-certifications"
                className="rounded-full border border-white/30 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1E3A8A]"
              >
                View Courses & Certifications
              </Link>
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="vbs-card bg-white p-6">
            <p className="text-sm font-bold tracking-[0.2em] text-[#1d4ed8] uppercase">
              Table Of Contents
            </p>
            <div className="mt-5 grid gap-3">
              {post.toc.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-[1rem] border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm font-medium leading-6 text-slate-700 transition hover:border-[#BFDBFE] hover:bg-[#EFF6FF] hover:text-[#1E3A8A]"
                >
                  <span className="mr-2 text-[#2563EB]">{index + 1}.</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
