import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  invert?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow && (
        <div
          className={`mb-4 inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${
            invert
              ? "border-white/20 text-[var(--orange)]"
              : "border-[var(--orange)]/30 text-[var(--orange)]"
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-heading text-3xl font-extrabold leading-tight md:text-5xl ${
          invert ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg ${
            invert ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
