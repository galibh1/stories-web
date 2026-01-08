"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import { CategoryBadges } from "./CategoryBadges";

export type HeroPost = {
  tags: string[];
  title: string;
  meta: string;
  image: string;
  href: string;
};

export function HeroSlider({ posts }: { posts: HeroPost[] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-soft">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={{ delay: 4200, disableOnInteraction: false }}
        loop
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        className="h-[420px] md:h-[460px]"
      >
        {posts.map((p) => (
          <SwiperSlide key={p.title}>
            <Link href={p.href} className="relative block h-full w-full">
              <Image
                src={p.image}
                alt={p.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/10" />

              <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="max-w-3xl text-center">
                  <div className="mb-4 flex justify-center">
                    <CategoryBadges tags={p.tags} href="/category/grid" />
                  </div>
                  <h1 className="text-3xl font-bold leading-tight text-white drop-shadow md:text-5xl">
                    {p.title}
                  </h1>
                  <p className="mt-4 text-xs font-semibold text-white/85 md:text-sm">
                    {p.meta}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 text-white">
        <button
          aria-label="Previous"
          className="hero-prev pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-black/25 hover:bg-black/35"
        >
          <i className="fa-solid fa-arrow-left" />
        </button>
        <button
          aria-label="Next"
          className="hero-next pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-black/25 hover:bg-black/35"
        >
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
    </div>
  );
}
