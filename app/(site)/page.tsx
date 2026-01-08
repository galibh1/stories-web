import Image from "next/image";
import Link from "next/link";
import home3 from "../data/home-3.json";
import { Container } from "../../components/Container";
import { Card } from "../../components/home3/Card";
import { HeroSlider } from "../../components/home3/HeroSlider";
import { FeaturedSlider } from "../../components/home3/FeaturedSlider";
import { SectionHeading } from "../../components/home3/SectionHeading";
import { CategoryBadges } from "../../components/home3/CategoryBadges";
import { SidebarHome3 } from "../../components/home3/SidebarHome3";

function MetaLine({ text }: { text: string }) {
  const parts = String(text).split("·").map((s) => s.trim());
  return (
    <p className="mt-4 text-xs font-semibold text-slate-500">
      {parts.map((p, i) => (
        <span key={i}>
          {p}
          {i < parts.length - 1 ? <span className="mx-3 text-slate-300">•</span> : null}
        </span>
      ))}
    </p>
  );
}

export default function HomePage() {
  const hero = home3.hero.slice(0, 3);
  const featuredMain = home3.featured.big;
  const featuredRight = home3.featured.list[0];
  const textCards = [
    {
      tags: ["Fashion"],
      title: "Put Yourself in Your Customers Shoes",
      meta: "17 July · 8 mins read · 12k views",
      accent: "text-orange-500",
    },
    {
      tags: ["Travel"],
      title: "Life and Death in the Empire of the Tiger",
      meta: "7 August · 15 mins read · 500 views",
      accent: "text-rose-500",
    },
    {
      tags: ["Lifestyle"],
      title: "When Two Wheels Are Better Than Four",
      meta: "15 Jun · 9 mins read · 1.2k views",
      accent: "text-emerald-700",
    },
  ];

  return (
    <div className="pb-8">
      <div className="py-8">
        <Container>
          {/* HERO */}
          <HeroSlider posts={hero as any} />

          {/* FEATURED */}
          <section className="mt-14">
            <SectionHeading
              title="Featured Posts"
              right={
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <i className="fa-solid fa-tags" />
                    Hot tags:
                  </span>
                  {home3.featured.hotTags.map((t) => (
                    <Link key={t} href="/category/grid" className="hover:text-slate-900">
                      {t}
                    </Link>
                  ))}
                </div>
              }
            />

            <div className="mt-7 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <FeaturedSlider posts={featuredMain as any} />
              </div>

              <Card className="overflow-hidden">
                <Link href={featuredRight.href} className="group block">
                  <div className="relative h-48 w-full">
                    <Image src={featuredRight.image} alt={featuredRight.title} fill className="object-cover transition duration-300 group-hover:scale-[1.03]" />
                    <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-emerald-600 text-white shadow-soft">
                      <i className="fa-solid fa-camera" />
                    </div>
                  </div>
                  <div className="p-7">
                    <CategoryBadges tags={featuredRight.tags.slice(0, 2)} />
                    <h3 className="mt-3 text-2xl font-bold leading-snug text-slate-900 group-hover:underline">
                      {featuredRight.title}
                    </h3>
                    <MetaLine text={featuredRight.meta} />
                  </div>
                </Link>
              </Card>
            </div>

            {/* 3 text cards */}
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {textCards.map((c) => (
                <Card key={c.title} className="p-8">
                  <p className={"text-xs font-bold " + c.accent}>{c.tags[0]} <span className="text-slate-300">·</span></p>
                  <h3 className="mt-4 text-2xl font-bold leading-snug text-slate-900">
                    {c.title}
                  </h3>
                  <MetaLine text={c.meta} />
                </Card>
              ))}
            </div>
          </section>

          {/* MAIN CONTENT + SIDEBAR (single sticky sidebar like the original template) */}
          <section className="mt-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                {/* TRAVEL TIPS */}
                <SectionHeading title="Travel Tips" />
                <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-2">
                  {home3.travelTips.slice(0, 2).map((p) => (
                    <Card key={p.title} className="overflow-hidden">
                      <Link href={p.href} className="group block">
                        <div className="relative h-56">
                          <Image src={p.image} alt={p.title} fill className="object-cover transition duration-300 group-hover:scale-[1.03]" />
                        </div>
                        <div className="p-7">
                          <CategoryBadges tags={p.tags.slice(0, 2)} />
                          <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900 group-hover:underline">
                            {p.title}
                          </h3>
                          <p className="mt-4 text-sm leading-6 text-slate-600 line-clamp-3">{p.excerpt}</p>
                          <MetaLine text={p.meta} />
                        </div>
                      </Link>
                    </Card>
                  ))}
                </div>

                {/* 2 big cards (matches screenshot area before Latest Posts) */}
                <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
                  {home3.latest.slice(0, 2).map((p) => (
                    <Card key={p.title} className="overflow-hidden">
                      <Link href={p.href} className="group block">
                        <div className="relative h-52">
                          <Image src={p.image} alt={p.title} fill className="object-cover transition duration-300 group-hover:scale-[1.03]" />
                          <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-slate-900/20 text-white shadow-soft">
                            <i className="fa-regular fa-heart" />
                          </div>
                        </div>
                        <div className="p-7">
                          <CategoryBadges tags={p.tags.slice(0, 2)} />
                          <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900 group-hover:underline">
                            {p.title}
                          </h3>
                          <p className="mt-4 text-sm leading-6 text-slate-600 line-clamp-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed tempor condimentum metus non tempor.
                          </p>
                          <MetaLine text={p.meta} />
                        </div>
                      </Link>
                    </Card>
                  ))}
                </div>

                {/* LATEST POSTS (list) */}
                <div className="mt-16">
                  <SectionHeading title="Latest Posts" />
                  <div className="mt-7 space-y-8">
                    {home3.travelTips.slice(2, 6).map((p) => (
                      <Card key={p.title} className="p-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[220px_1fr] sm:items-center">
                          <Link
                            href={p.href}
                            className="group relative h-40 overflow-hidden rounded-xl border border-[var(--border)]"
                          >
                            <Image
                              src={p.image}
                              alt={p.title}
                              fill
                              className="object-cover transition duration-300 group-hover:scale-[1.03]"
                            />
                          </Link>
                          <div>
                            <CategoryBadges tags={p.tags.slice(0, 2)} />
                            <Link href={p.href} className="mt-2 block text-2xl font-bold leading-snug text-slate-900 hover:underline">
                              {p.title}
                            </Link>
                            <MetaLine text={p.meta} />
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="lg:col-span-4">
                <div className="sticky top-28">
                  <SidebarHome3
                    data={{
                      about: home3.sidebar.about,
                      popular: home3.sidebar.popular.map((p, idx) => ({
                        ...p,
                        image: home3.sidebar.instagram[idx % home3.sidebar.instagram.length],
                      })),
                      comments: home3.sidebar.comments.slice(0, 3),
                      instagram: home3.sidebar.instagram,
                    }}
                  />
                </div>
              </aside>
            </div>
          </section>

          {/* DESTINATIONS / LIFESTYLE / PHOTOGRAPHY */}
          <section className="mt-16">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {(
                [
                  { title: "Destinations", items: home3.sidebar.destinations },
                  { title: "Lifestyle", items: home3.sidebar.lifestyle },
                  { title: "Photography", items: home3.sidebar.photography },
                ] as const
              ).map((col, colIdx) => (
                <div key={col.title}>
                  <SectionHeading title={col.title} />
                  <div className="mt-7 space-y-6">
                    {col.items.slice(0, 3).map((it: any, idx: number) => (
                      <div key={it.title} className="flex items-center gap-4">
                        <div className="relative h-16 w-16 flex-none overflow-hidden rounded-xl border border-[var(--border)] shadow-soft">
                          <Image src={home3.sidebar.instagram[(colIdx * 2 + idx) % home3.sidebar.instagram.length]} alt={it.title} fill className="object-cover" />
                        </div>
                        <div className="min-w-0">
                          <Link href="/post/default" className="line-clamp-2 text-sm font-bold text-slate-900 hover:underline">
                            {it.title}
                          </Link>
                          <p className="mt-2 text-xs font-semibold text-slate-500">{it.date} &nbsp;&nbsp;•&nbsp;&nbsp; {it.views}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Categories */}
            <div className="mt-16">
              <SectionHeading title="Categories" />
              <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-3">
                {[
                  { name: "Travel Tips", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", img: home3.sidebar.instagram[0] },
                  { name: "Lifestyle", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", img: home3.sidebar.instagram[1] },
                  { name: "Foody", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", img: home3.sidebar.instagram[2] },
                ].map((c) => (
                  <Card key={c.name} className="p-8">
                    <div className="flex items-center gap-5">
                      <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[var(--border)] shadow-soft">
                        <Image src={c.img} alt={c.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{c.name}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{c.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </Container>
      </div>
    </div>
  );
}
