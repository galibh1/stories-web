import Image from "next/image";
import Link from "next/link";
import { TagPill } from "./TagPill";

type Post = {
  title: string;
  href: string;
  image: string;
  tags?: string[];
  meta?: string;
  excerpt?: string;
};

export function PostCard({ post, variant }: { post: Post; variant?: "hero" | "row" | "mini" }) {
  const v = variant ?? "row";

  if (v === "mini") {
    return (
      <Link href={post.href} className="group flex gap-3">
        <div className="relative h-14 w-14 flex-none overflow-hidden rounded-lg border border-[var(--border)]">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
        <div className="min-w-0">
          <h4 className="line-clamp-2 text-sm font-semibold text-slate-900 group-hover:underline">
            {post.title}
          </h4>
          {post.meta ? <p className="mt-1 text-xs text-slate-500">{post.meta}</p> : null}
        </div>
      </Link>
    );
  }

  if (v === "hero") {
    return (
      <Link
        href={post.href}
        className="group relative flex min-h-[220px] overflow-hidden rounded-2xl border border-[var(--border)] bg-slate-900"
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-85 transition group-hover:scale-[1.02]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative mt-auto p-5">
          {post.tags?.length ? (
            <div className="mb-2 flex flex-wrap gap-2">
              {post.tags.slice(0, 2).map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
          <h3 className="font-serif text-xl font-semibold leading-snug text-white group-hover:underline">
            {post.title}
          </h3>
          {post.meta ? <p className="mt-2 text-xs text-white/80">{post.meta}</p> : null}
        </div>
      </Link>
    );
  }

  return (
    <article className="group flex gap-4">
      <Link
        href={post.href}
        className="relative hidden h-28 w-40 flex-none overflow-hidden rounded-2xl border border-[var(--border)] sm:block"
      >
        <Image src={post.image} alt={post.title} fill className="object-cover transition group-hover:scale-[1.02]" />
      </Link>

      <div className="min-w-0">
        {post.tags?.length ? (
          <div className="mb-2 flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((t) => (
              <TagPill key={t} label={t} />
            ))}
          </div>
        ) : null}

        <h3 className="font-serif text-lg font-semibold leading-snug text-slate-900 group-hover:underline">
          <Link href={post.href}>{post.title}</Link>
        </h3>
        {post.excerpt ? (
          <p className="mt-2 line-clamp-2 text-sm text-slate-600">{post.excerpt}</p>
        ) : null}
        {post.meta ? <p className="mt-2 text-xs text-slate-500">{post.meta}</p> : null}
      </div>
    </article>
  );
}
