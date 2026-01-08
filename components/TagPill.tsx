import Link from "next/link";

export function TagPill({ label }: { label: string }) {
  return (
    <Link
      href="/category/grid"
      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-200"
    >
      {label}
    </Link>
  );
}
