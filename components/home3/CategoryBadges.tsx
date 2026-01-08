import Link from "next/link";

function colorFor(label: string) {
  const l = label.toLowerCase();
  if (l.includes("travel")) return "text-sky-500";
  if (l.includes("food")) return "text-emerald-600";
  if (l.includes("hotel")) return "text-rose-500";
  if (l.includes("review")) return "text-purple-600";
  if (l.includes("lifestyle")) return "text-emerald-700";
  if (l.includes("healthy")) return "text-lime-600";
  if (l.includes("fashion")) return "text-orange-500";
  if (l.includes("animal")) return "text-orange-500";
  if (l.includes("cooking")) return "text-orange-500";
  return "text-slate-200";
}

export function CategoryBadges({
  tags,
  href = "/category/grid",
}: {
  tags: string[];
  href?: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
      {tags.map((t, idx) => (
        <span key={`${t}-${idx}`} className={colorFor(t)}>
          <Link href={href} className="hover:underline">
            {t}
          </Link>
          {idx < tags.length - 1 ? <span className="ml-2 text-slate-300">·</span> : null}
        </span>
      ))}
    </div>
  );
}
