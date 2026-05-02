import Link from "next/link";

export default function CTAButton({
  href,
  onClick,
  children,
  type = "button",
  variant = "primary",
  className = "",
  showArrow = true,
  ...props
}) {
  const baseClasses = "group relative inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-base font-bold transition-all duration-300";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-700 to-teal-600 text-white shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1",
    secondary: "bg-white border border-slate-200 text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:shadow-md hover:-translate-y-1",
    light: "bg-white text-blue-700 shadow-xl hover:bg-slate-50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20"
  };

  const spanColorClasses = {
    primary: "!text-white",
    secondary: "text-slate-700",
    light: "text-blue-700"
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const arrowIcon = showArrow && (
    <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        <span className={`relative z-10 ${spanColorClasses[variant]}`}>{children}</span>
        {arrowIcon}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      <span className={`relative z-10 ${spanColorClasses[variant]}`}>{children}</span>
      {arrowIcon}
    </button>
  );
}
