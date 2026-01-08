import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-14 border-t border-[var(--border)] bg-[var(--card)]">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} Stories. Built with Next.js + Tailwind.
            </p>
            <p className="mt-1 text-xs text-slate-500">
              UI inspired by AliThemes Stories template.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-semibold">
            <Link href="/about" className="text-slate-600 hover:text-slate-900">
              About
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-slate-900">
              Contact
            </Link>
            <Link href="/typography" className="text-slate-600 hover:text-slate-900">
              Typography
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
