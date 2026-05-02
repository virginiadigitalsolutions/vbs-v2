export default function SectionEyebrow({ children, className = "" }) {
  if (!children) return null;
  return (
    <p className={`inline-block text-sm font-bold tracking-[0.2em] text-[#1d4ed8] uppercase ${className}`}>
      {children}
    </p>
  );
}
