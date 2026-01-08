"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string };

export function SiteHeader({
  brand,
  nav,
}: {
  brand: { name: string; logo: string };
  nav: NavItem[];
}) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--card)]/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={120}
              height={32}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
            {nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    active
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-900"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/search"
              className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Search
            </Link>
            <Link
              href="https://themeforest.net"
              className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 sm:inline-flex"
              target="_blank"
              rel="noreferrer"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
