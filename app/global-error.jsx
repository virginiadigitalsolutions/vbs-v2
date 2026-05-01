"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <main className="min-h-screen bg-[linear-gradient(180deg,_#f8fbff_0%,_#ffffff_22%,_#f5f7fa_100%)]">
          <section className="vbs-section">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
              <div className="vbs-card bg-white p-8 text-center lg:p-12">
                <p className="text-sm font-bold tracking-[0.2em] text-[#1d4ed8] uppercase">
                  Something Went Wrong
                </p>
                <h1 className="mt-6 font-heading text-4xl leading-tight text-slate-950 lg:text-5xl">
                  The page ran into a runtime error
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Please try again. If the problem continues, restart the dev
                  server and reopen the page.
                </p>
                {error?.message ? (
                  <p className="mt-6 rounded-[1rem] border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-slate-600">
                    {error.message}
                  </p>
                ) : null}
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => reset()}
                    className="vbs-button-primary"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
