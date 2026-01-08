import type { PropsWithChildren } from "react";

export function SectionHeading({
  title,
  right,
}: PropsWithChildren<{ title: string; right?: React.ReactNode }>) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="relative">
        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-800">
          {title}
        </h2>
        <div className="mt-3 h-px w-[140px] bg-slate-200">
          <div className="h-px w-[44px] bg-slate-900" />
        </div>
      </div>
      {right ? <div className="flex items-center gap-2">{right}</div> : null}
    </div>
  );
}
