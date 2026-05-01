export default function LegalContentSection({ intro, sections }) {
  return (
    <section className="vbs-section bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="vbs-card p-8 lg:p-12">
          {intro ? (
            <p className="max-w-4xl text-lg leading-8 text-slate-600">{intro}</p>
          ) : null}

          <div className={`${intro ? "mt-10" : ""} grid gap-6`}>
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] lg:p-8"
              >
                <h2 className="font-heading text-3xl leading-tight text-slate-950">
                  {section.title}
                </h2>

                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-base leading-8 text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.list?.length ? (
                  <ul className="mt-5 grid gap-3">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="rounded-[1.1rem] border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-base leading-7 text-slate-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {section.contactEmail ? (
                  <a
                    href={`mailto:${section.contactEmail}`}
                    className="mt-5 inline-block text-base font-semibold text-[#2563EB] transition hover:text-[#1E3A8A]"
                  >
                    {section.contactEmail}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
