export default function SectionLabel({ children, className = "" }) {
  if (!children) return null;
  return (
    <p
      className={`inline-block text-sm font-bold tracking-[0.2em] text-[#1d4ed8] uppercase opacity-0 animate-fade-in-up ${className}`}
    >
      {children}
    </p>
  );
}
