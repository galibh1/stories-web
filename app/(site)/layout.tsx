import home3 from "../data/home-3.json";
import { SiteHeaderHome3 } from "../../components/home3/SiteHeaderHome3";
import { SiteFooterHome3 } from "../../components/home3/SiteFooterHome3";
import { ScrollToTop } from "../../components/home3/ScrollToTop";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh">
      <SiteHeaderHome3
        brand={home3.brand}
        nav={[
          { label: "Home", href: "/" },
          { label: "Travel", href: "/category/grid" },
          { label: "Mega Menu", href: "#", kind: "mega" },
          { label: "Guides", href: "/category/list" },
          { label: "Food", href: "/category/grid" },
          { label: "Hotels", href: "/category/list" },
          { label: "Review", href: "/category/big" },
          { label: "Healthy", href: "/category/grid" },
          { label: "Lifestyle", href: "/category/masonry" },
          { label: "Blog", href: "/category/list" }
        ]}
        megaItems={(
          (home3 as any).megaMenu ??
          (home3.featured?.list ?? []).slice(0, 3).map((p: any) => {
            const parts = String(p.meta ?? "").split("·").map((s) => s.trim());
            return {
              title: p.title,
              tags: p.tags ?? [],
              image: p.image,
              href: p.href,
              date: parts[0] ?? "",
              read: parts[1] ?? "",
              views: parts[2] ?? "",
            };
          })
        )}
      />
      <main>{children}</main>
      <SiteFooterHome3 />
      <ScrollToTop />
    </div>
  );
}
