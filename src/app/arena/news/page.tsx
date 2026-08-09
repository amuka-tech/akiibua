import PageLayout from "@/components/PageLayout";
import NewsCard from "@/components/NewsCard";

const arenaNews = [
  { title: "Akii-Bua Olympic Stadium transformed for concert season 2026", date: "June 1, 2026", category: "Arena", image: "/arena_concert_season_1786244181303.jpg", href: "/news" },
  { title: "New LED facade system installed", date: "May 25, 2026", category: "Arena", image: "/arena_led_facade_1786244195719.jpg", href: "/news" },
  { title: "Arena celebrates 20th anniversary", date: "May 15, 2026", category: "Arena", image: "/arena_20_years_1786244211995.jpg", href: "/news" },
];

export default function ArenaNewsPage() {
  return (
    <PageLayout
      title="Arena News"
      subtitle="Latest updates from the Akii-Bua Olympic Stadium"
      image="/arena_interior.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Arena", href: "/arena" }]}
    >
      <div className="grid md:grid-cols-3 gap-6">
        {arenaNews.map((item) => <NewsCard key={item.title} {...item} />)}
      </div>
    </PageLayout>
  );
}
