import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white/80 backdrop-blur-md overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-12 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-heading text-base font-bold tracking-[0.12em] text-[#0b1a42] uppercase">
            Virginia Business Solutions
          </p>
          <p className="mt-2 max-w-2xl text-slate-600">
            Clear, structured guidance for digital skills, courses, and
            career decisions.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 lg:items-end">
          <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
            <Link
              href="/terms-and-conditions"
              className="transition hover:text-[#1d4ed8]"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="transition hover:text-[#1d4ed8]"
            >
              Privacy Policy
            </Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Virginia Business Solutions.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
