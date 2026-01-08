import Image from "next/image";
import Link from "next/link";
import { PostCard } from "./PostCard";

type SidebarData = {
  about: { name: string; bio: string; image: string };
  popular: { title: string; date: string; views: string }[];
  comments: { name: string; date: string; text: string; avatar: string }[];
  instagram: string[];
  destinations: { title: string; date: string; views: string }[];
  lifestyle: { title: string; date: string; views: string }[];
  photography: { title: string; date: string; views: string }[];
};

function Widget({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-700">
        {title}
      </h3>
      {children}
    </section>
  );
}

export function Sidebar({ data }: { data: SidebarData }) {
  return (
    <div className="space-y-6">
      <Widget title="About me">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-[var(--border)]">
            <Image src={data.about.image} alt={data.about.name} fill className="object-cover" />
          </div>
          <div>
            <p className="font-serif text-base font-semibold text-slate-900">{data.about.name}</p>
            <p className="mt-1 line-clamp-3 text-sm text-slate-600">{data.about.bio}</p>
          </div>
        </div>
      </Widget>

      <Widget title="Most popular">
        <div className="space-y-4">
          {data.popular.map((p) => (
            <div key={p.title} className="border-b border-[var(--border)] pb-4 last:border-b-0 last:pb-0">
              <Link href="/post/default" className="font-serif text-sm font-semibold text-slate-900 hover:underline">
                {p.title}
              </Link>
              <p className="mt-1 text-xs text-slate-500">
                {p.date} · {p.views}
              </p>
            </div>
          ))}
        </div>
      </Widget>

      <Widget title="Last comments">
        <div className="space-y-4">
          {data.comments.map((c) => (
            <div key={c.name + c.date} className="flex gap-3">
              <div className="relative h-10 w-10 flex-none overflow-hidden rounded-xl border border-[var(--border)]">
                <Image src={c.avatar} alt={c.name} fill className="object-cover" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-900">
                  {c.name} <span className="font-normal text-slate-500">· {c.date}</span>
                </p>
                <p className="mt-1 line-clamp-2 text-sm text-slate-600">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Widget>

      <Widget title="Instagram">
        <div className="grid grid-cols-3 gap-2">
          {data.instagram.map((src) => (
            <Link
              key={src}
              href="/post/default"
              className="group relative aspect-square overflow-hidden rounded-xl border border-[var(--border)]"
            >
              <Image src={src} alt="Instagram" fill className="object-cover transition group-hover:scale-[1.02]" />
            </Link>
          ))}
        </div>
      </Widget>

      <Widget title="Destinations">
        <div className="space-y-3">
          {data.destinations.map((p) => (
            <PostCard
              key={p.title}
              variant="mini"
              post={{
                title: p.title,
                href: "/post/default",
                image: data.instagram[0],
                meta: `${p.date} · ${p.views}`,
              }}
            />
          ))}
        </div>
      </Widget>

      <Widget title="Lifestyle">
        <div className="space-y-3">
          {data.lifestyle.map((p) => (
            <PostCard
              key={p.title}
              variant="mini"
              post={{
                title: p.title,
                href: "/post/default",
                image: data.instagram[1],
                meta: `${p.date} · ${p.views}`,
              }}
            />
          ))}
        </div>
      </Widget>

      <Widget title="Photography">
        <div className="space-y-3">
          {data.photography.map((p) => (
            <PostCard
              key={p.title}
              variant="mini"
              post={{
                title: p.title,
                href: "/post/default",
                image: data.instagram[2],
                meta: `${p.date} · ${p.views}`,
              }}
            />
          ))}
        </div>
      </Widget>
    </div>
  );
}
