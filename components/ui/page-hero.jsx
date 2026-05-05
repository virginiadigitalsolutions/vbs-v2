import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  description,
  body,
  actions,
  meta,
  rightColumn,
  sectionClassName = "",
}) {
  return (
    <section
      className={`vbs-section relative overflow-hidden bg-white ${sectionClassName}`.trim()}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top_left,_rgba(29,78,216,0.12),_transparent_42%),radial-gradient(circle_at_top_right,_rgba(13,148,136,0.12),_transparent_40%),linear-gradient(180deg,rgba(248,250,252,0.9)_0%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-slate-200/60 via-transparent to-transparent" />
        <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:88px_88px] opacity-30" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center lg:px-8">
        <div className="max-w-3xl">
          {eyebrow}
          <div className="mt-6 space-y-6">
            <div className="max-w-3xl">{title}</div>
            {description ? (
              <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                {description}
              </p>
            ) : null}
          </div>

          {body ? (
            <div className="mt-8 rounded-[2rem] border border-slate-200/70 bg-white/85 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-8">
              {body}
            </div>
          ) : null}

          {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
          {meta ? <div className="mt-8">{meta}</div> : null}
        </div>

        <div className="relative">{rightColumn}</div>
      </div>
    </section>
  );
}

export function HeroVisualPanel({
  image,
  badge,
  floatingCards = [],
  bottomCard,
  imageClassName = "object-cover",
  containerClassName = "aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5]",
}) {
  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      <div className="absolute inset-0 rounded-[2.5rem] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(29,78,216,0.2),rgba(13,148,136,0.18),rgba(255,255,255,0.7),rgba(29,78,216,0.2))] blur-3xl opacity-70" />
      <div className="relative rounded-[2rem] border border-slate-200/80 bg-white/80 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-5">
        <div className="mb-4 flex items-center justify-between rounded-2xl border border-slate-200/70 bg-slate-50/80 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </div>
          {badge ? (
            <span className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white">
              {badge}
            </span>
          ) : null}
        </div>

        <div className={`relative overflow-hidden rounded-[1.6rem] bg-slate-100 ${containerClassName}`}>
          {image?.fill ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`transition-transform duration-700 hover:scale-[1.03] ${imageClassName}`.trim()}
              priority
            />
          ) : (
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width ?? 900}
              height={image.height ?? 720}
              className={`h-full w-full transition-transform duration-700 hover:scale-[1.03] ${imageClassName}`.trim()}
              priority
            />
          )}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/20 to-transparent" />
        </div>
      </div>

      {floatingCards.map((card, index) => (
        <div
          key={`${card.title}-${index}`}
          className={`absolute hidden rounded-[1.4rem] border border-white/80 bg-white/92 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.14)] backdrop-blur-md sm:block ${
            index === 0 ? "-left-8 top-10" : "-right-6 bottom-16"
          }`}
        >
          <div className="flex items-start gap-3">
            {card.iconPath ? (
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.iconPath} />
                </svg>
              </div>
            ) : null}
            <div>
              {card.label ? (
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  {card.label}
                </p>
              ) : null}
              <p className="text-sm font-bold text-slate-900">{card.title}</p>
              {card.subtitle ? <p className="mt-1 text-sm text-slate-600">{card.subtitle}</p> : null}
            </div>
          </div>
        </div>
      ))}

      {bottomCard ? (
        <div className="absolute -bottom-8 left-4 right-4 sm:left-10 sm:right-auto sm:max-w-sm">
          <div className="rounded-[1.5rem] border border-white/80 bg-white/94 p-5 shadow-[0_20px_48px_rgba(15,23,42,0.14)] backdrop-blur-md">
            {bottomCard}
          </div>
        </div>
      ) : null}
    </div>
  );
}
