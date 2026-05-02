import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative border-t border-slate-200 bg-white pt-16 pb-8 overflow-hidden">
      {/* Decorative Top Gradient Line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-teal-400 to-blue-600 opacity-20" />
      
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-50/50 to-transparent rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-teal-50/50 to-transparent rounded-full blur-3xl pointer-events-none -translate-x-1/4 translate-y-1/4" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          
          {/* Brand Section */}
          <div className="max-w-md">
            <Link href="/" className="inline-block group">
              <p className="font-heading text-lg font-black tracking-[0.15em] text-slate-900 uppercase group-hover:text-blue-700 transition-colors">
                Virginia Business Solutions
              </p>
            </Link>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Clear, structured guidance for digital skills, courses, and
              career decisions. Building a foundation for sustainable professional growth.
            </p>
            
            <div className="mt-8 flex gap-3">
              {['Twitter', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current" style={{ maskImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"12\"/></svg>')", WebkitMaskImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"12\"/></svg>')" }}></div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Section */}
          <div className="flex flex-col items-start lg:items-end gap-6">
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold text-slate-700">
              <Link
                href="/about-us"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-blue-600 after:transition-transform after:duration-300 hover:text-blue-700 hover:after:origin-bottom-left hover:after:scale-x-100 pb-1"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-blue-600 after:transition-transform after:duration-300 hover:text-blue-700 hover:after:origin-bottom-left hover:after:scale-x-100 pb-1"
              >
                Contact
              </Link>
              <Link
                href="/terms-and-conditions"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-blue-600 after:transition-transform after:duration-300 hover:text-blue-700 hover:after:origin-bottom-left hover:after:scale-x-100 pb-1"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy-policy"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-blue-600 after:transition-transform after:duration-300 hover:text-blue-700 hover:after:origin-bottom-left hover:after:scale-x-100 pb-1"
              >
                Privacy Policy
              </Link>
            </div>
            
            <div className="mt-auto pt-6 lg:pt-0 flex flex-col lg:items-end gap-1 text-sm text-slate-500">
              <p>&copy; {currentYear} Virginia Business Solutions.</p>
              <p>All rights reserved.</p>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
