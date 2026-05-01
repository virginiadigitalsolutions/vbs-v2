import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/digital-skills", label: "Digital Skills" },
  { href: "/courses-certifications", label: "Courses & Certifications" },
  { href: "/career-guides", label: "Career Guides" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-xl shadow-sm transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href="/" className="group shrink-0">
          <Image
            src="/vbs-logo.png"
            alt="Virginia Business Solutions"
            width={220}
            height={64}
            className="h-12 w-auto transition-transform duration-300 group-hover:scale-[1.02] sm:h-14"
            priority
          />
        </Link>
        <nav className="hidden flex-wrap items-center justify-end gap-6 text-sm font-semibold text-slate-600 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition hover:text-[#1d4ed8] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#1d4ed8] after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
