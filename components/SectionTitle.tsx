import type { PropsWithChildren } from "react";

export function SectionTitle({ children }: PropsWithChildren) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700">
        {children}
      </h2>
      <div className="h-px flex-1 bg-[var(--border)]" />
    </div>
  );
}
