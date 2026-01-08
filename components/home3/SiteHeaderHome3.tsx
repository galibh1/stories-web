"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string; kind?: "link" | "dropdown" | "mega" };

type MegaItem = {
  title: string;
  date: string;
  read: string;
  views: string;
  tags: string[];
  image: string;
  href: string;
};

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        "relative inline-flex items-center gap-2 px-1 py-4 text-sm font-semibold " +
        (active ? "text-slate-900" : "text-slate-600 hover:text-slate-900")
      }
    >
      <span>{label}</span>
      <span
        className={
          "absolute -bottom-px left-0 h-0.5 w-full origin-left scale-x-0 bg-slate-900 transition group-hover:scale-x-100 " +
          (active ? "scale-x-100" : "")
        }
      />
    </Link>
  );
}

export function SiteHeaderHome3({
  brand,
  nav,
  megaItems,
}: {
  brand: { name: string; logo: string };
  nav: NavItem[];
  megaItems: MegaItem[];
}) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      {/* top row */}
      <div className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src={brand.logo} alt={brand.name} width={150} height={40} priority />
            </Link>

            <div className="hidden items-center gap-8 text-sm font-semibold text-slate-500 md:flex">
              <div className="group relative">
                <button className="inline-flex items-center gap-2 hover:text-slate-900">
                  Layouts <i className="fa-solid fa-angle-down text-xs" />
                </button>
                <div className="invisible absolute right-0 top-full z-20 mt-2 w-56 rounded-2xl border border-[var(--border)] bg-white p-2 shadow-soft opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <Link href="/" className="block rounded-xl px-4 py-2 text-sm hover:bg-slate-50">Home 3</Link>
                  <Link href="/category/grid" className="block rounded-xl px-4 py-2 text-sm hover:bg-slate-50">Category Grid</Link>
                  <Link href="/post/default" className="block rounded-xl px-4 py-2 text-sm hover:bg-slate-50">Single Post</Link>
                </div>
              </div>
              <Link href="/typography" className="inline-flex items-center gap-2 hover:text-slate-900">
                <i className="fa-regular fa-file-lines" /> Document
              </Link>
              <Link href="/search" className="inline-flex items-center gap-2 hover:text-slate-900">
                <i className="fa-solid fa-magnifying-glass" /> Search
              </Link>
              <Link
                href="https://themeforest.net"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl bg-[var(--brand)] px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:brightness-95"
              >
                Buy Now
              </Link>
            </div>

            {/* mobile */}
            <div className="flex items-center gap-3 md:hidden">
              <Link href="/search" className="grid h-10 w-10 place-items-center rounded-full bg-slate-100">
                <i className="fa-solid fa-magnifying-glass text-slate-600" />
              </Link>
              <button className="grid h-10 w-10 place-items-center rounded-full bg-slate-100">
                <i className="fa-solid fa-bars text-slate-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* nav row */}
      <div className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="flex h-14 items-center justify-between">
            <nav className="hidden items-center gap-7 md:flex">
              {nav.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                if (item.label.toLowerCase().includes("mega")) {
                  return (
                    <div key={item.label} className="group relative">
                      <button className="relative inline-flex items-center gap-2 px-1 py-4 text-sm font-semibold text-slate-600 hover:text-slate-900">
                        <span className="inline-flex h-2 w-2 rounded-full bg-[var(--brand)]" />
                        {item.label}
                      </button>

                      <div className="invisible absolute left-0 top-full z-30 mt-0 w-[920px] rounded-2xl border border-[var(--border)] bg-white p-6 shadow-soft opacity-0 transition group-hover:visible group-hover:opacity-100">
                        <div className="grid grid-cols-3 gap-6">
                          {megaItems.slice(0, 3).map((m) => (
                            <Link key={m.title} href={m.href} className="rounded-2xl p-4 hover:bg-slate-50">
                              <h4 className="text-xl font-bold leading-snug text-slate-900">{m.title}</h4>
                              <p className="mt-4 text-xs font-semibold text-slate-500">
                                {m.date} &nbsp;•&nbsp; {m.read} &nbsp;•&nbsp; {m.views}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={item.href} className="group relative">
                    <NavLink href={item.href} label={item.label} active={active} />
                    {item.label === "Home" ? (
                      <div className="invisible absolute left-0 top-full z-20 mt-0 w-56 rounded-2xl border border-[var(--border)] bg-white p-2 shadow-soft opacity-0 transition group-hover:visible group-hover:opacity-100">
                        <Link href="/" className="block rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Homepage 3</Link>
                        <Link href="/category/grid" className="block rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Category</Link>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <Link href="#" className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200">
                <i className="fa-brands fa-facebook-f" />
              </Link>
              <Link href="#" className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200">
                <i className="fa-brands fa-twitter" />
              </Link>
              <Link href="#" className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200">
                <i className="fa-brands fa-pinterest-p" />
              </Link>
              <button className="ml-1 grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200">
                <i className="fa-solid fa-bars" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
