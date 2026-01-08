import type { PropsWithChildren } from "react";

export function Card({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={
        "rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-soft transition hover:-translate-y-[2px] hover:shadow-soft-lg " +
        className
      }
    >
      {children}
    </div>
  );
}
