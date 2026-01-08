import Image from "next/image";
import Link from "next/link";
import { Card } from "./Card";
import { SectionHeading } from "./SectionHeading";

type SidebarData = {
  about: { name: string; bio: string; image: string };
  popular: { title: string; date: string; views: string; image?: string }[];
  comments: { name: string; date: string; text: string; avatar: string }[];
  instagram: string[];
};

export function SidebarHome3({ data }: { data: SidebarData }) {
  const displayName = (() => {
    const raw = (data.about?.name ?? "").trim();
    if (!raw) return "";
    // Accept either "Steven" or "Hello, I'm Steven" style values.
    const m = raw.match(/i['’]?m\s+(.+)$/i);
    const cleaned = (m?.[1] ?? raw).trim();
    return cleaned.replace(/^[,\s]+|[,\s]+$/g, "");
  })();

  return (
    <div className="space-y-8">
      {/* About */}
      <Card className="p-8 text-center">
        <div className="mx-auto mb-5 h-20 w-20 overflow-hidden rounded-full border border-[var(--border)]">
          <Image src={data.about.image} alt={data.about.name} width={80} height={80} className="h-full w-full object-cover" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">
          Hello, I&apos;m <span className="font-extrabold">{displayName}</span>
        </h3>
        <p className="mt-4 text-sm leading-6 text-slate-600">
          {data.about.bio}
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="text-sm font-semibold text-slate-900">Follow me:</span>
          <div className="flex items-center gap-2">
            <Link href="#" className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200">
              <i className="fa-brands fa-facebook-f" />
            </Link>
            <Link href="#" className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200">
              <i className="fa-brands fa-twitter" />
            </Link>
            <Link href="#" className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200">
              <i className="fa-brands fa-pinterest-p" />
            </Link>
          </div>
        </div>
      </Card>

      {/* Most Popular */}
      <div>
        <SectionHeading title="Most Popular" />
        <div className="mt-6 space-y-6">
          {data.popular.map((p) => (
            <Card key={p.title} className="p-5">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 flex-none overflow-hidden rounded-xl border border-[var(--border)]">
                  <Image src={p.image ?? data.instagram[0]} alt={p.title} fill className="object-cover" />
                </div>
                <div className="min-w-0">
                  <Link href="/post/default" className="line-clamp-2 text-sm font-bold text-slate-900 hover:underline">
                    {p.title}
                  </Link>
                  <p className="mt-2 text-xs font-semibold text-slate-500">
                    {p.date} &nbsp;&nbsp;•&nbsp;&nbsp; {p.views}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Last Comments */}
      <div>
        <SectionHeading title="Last Comments" />
        <div className="mt-6 space-y-6">
          {data.comments.map((c) => (
            <Card key={c.name + c.date} className="p-5">
              <div className="flex items-start gap-4">
                <div className="relative h-14 w-14 flex-none overflow-hidden rounded-full border border-[var(--border)]">
                  <Image src={c.avatar} alt={c.name} fill className="object-cover" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-bold text-slate-900">{c.name}</span>
                    <span className="text-slate-400">•</span>
                    <span className="font-semibold text-slate-500">{c.date}</span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-600">{c.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Instagram */}
      <div>
        <SectionHeading title="Instagram" />
        <div className="mt-6 grid grid-cols-3 gap-3">
          {data.instagram.slice(0, 6).map((src) => (
            <Link key={src} href="/post/default" className="group relative aspect-square overflow-hidden rounded-xl border border-[var(--border)] shadow-soft">
              <Image src={src} alt="Instagram" fill className="object-cover transition duration-300 group-hover:scale-[1.03]" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
