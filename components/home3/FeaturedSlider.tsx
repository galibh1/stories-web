"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import { CategoryBadges } from "./CategoryBadges";

export type FeaturedPost = {
  tags: string[];
  title: string;
  meta: string;
  image: string;
  href: string;
};

export function FeaturedSlider({ posts }: { posts: FeaturedPost[] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-soft">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={{ delay: 5200, disableOnInteraction: false }}
        loop
        navigation={{ prevEl: ".feat-prev", nextEl: ".feat-next" }}
        className="h-[320px] md:h-[360px]"
      >
        {posts.map((p) => (
          <SwiperSlide key={p.title}>
            <Link href={p.href} className="relative block h-full w-full">
              <Image src={p.image} alt={p.title} fill className="object-cover opacity-95" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

              <div className="absolute left-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-orange-500 text-white shadow-soft">
                <i className="fa-regular fa-star" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                <CategoryBadges tags={p.tags.slice(0, 2)} href="/category/grid" />
                <h3 className="mt-3 text-2xl font-bold leading-snug text-white md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-xs font-semibold text-white/80">{p.meta}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute bottom-6 right-6 z-10 flex items-center gap-2 text-white">
        <button aria-label="Previous" className="feat-prev pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-black/25 hover:bg-black/35">
          <i className="fa-solid fa-arrow-left" />
        </button>
        <button aria-label="Next" className="feat-next pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-black/25 hover:bg-black/35">
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
    </div>
  );
}
