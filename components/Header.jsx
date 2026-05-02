"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/digital-skills", label: "Digital Skills" },
  { href: "/courses-certifications", label: "Courses & Certifications" },
  { href: "/career-guides", label: "Career Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/about-us", label: "About Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`sticky top-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-slate-200/50" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group relative z-[110] transition-transform hover:scale-[1.02]">
          <Image
            src="/vbs-logo.png"
            alt="Virginia Business Solutions"
            width={200}
            height={56}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        {/* Desktop Nav - Pill Design */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 bg-slate-100/60 backdrop-blur-md rounded-full border border-slate-200/50">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  isActive 
                    ? "bg-white text-[#1d4ed8] shadow-[0_2px_10px_rgba(29,78,216,0.1)] scale-[1.02]" 
                    : "text-slate-600 hover:text-[#1d4ed8] hover:bg-white/40"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block relative z-[110]">
          <Link
            href="/contact"
            className={`px-8 py-3 rounded-full text-sm font-extrabold transition-all duration-300 transform active:scale-95 shadow-md ${
              pathname === "/contact"
                ? "bg-[#1d4ed8] !text-white shadow-blue-500/30"
                : "bg-slate-900 !text-white hover:bg-[#1d4ed8] hover:shadow-xl hover:shadow-blue-500/20"
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="lg:hidden relative z-[110] p-2 rounded-xl bg-slate-100/50 text-slate-900 transition-colors hover:bg-slate-200/50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 z-[105] bg-white/98 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
            isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <div className="flex flex-col h-full pt-28 pb-10 px-8">
            <div className="flex flex-col gap-5">
              {[...navItems, { href: "/contact", label: "Contact Us" }].map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-3xl sm:text-4xl font-black transition-all duration-500 ${
                      isMobileMenuOpen 
                        ? "translate-x-0 opacity-100 scale-100" 
                        : "translate-x-12 opacity-0 scale-95"
                    } ${
                      isActive ? "text-[#1d4ed8]" : "text-slate-900 hover:text-[#1d4ed8]"
                    }`}
                    style={{ transitionDelay: `${idx * 75}ms` }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto">
              <div className="h-px bg-slate-100 mb-8" />
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                   <p className="text-xs font-black text-slate-900">Path Clarified</p>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
                   <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Support</p>
                   <p className="text-xs font-black text-blue-900">Expert Guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
