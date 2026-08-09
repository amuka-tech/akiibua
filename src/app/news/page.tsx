import HeroSection from "@/components/HeroSection";
import NewsCard from "@/components/NewsCard";

const news = [
  { title: "Akii-Bua Olympic Stadium named 'Stadium of the Year 2025'", date: "June 15, 2026", category: "Arena", image: "/arena_stadium_of_year_1786244311009.jpg", href: "/news/stadium-of-the-year" },
  { title: "New parking system for matchdays announced", date: "June 10, 2026", category: "Getting here", image: "/arena_parking_new_system_1786244325909.jpg", href: "/news/parking-update" },
  { title: "Summer concert series lineup revealed", date: "June 5, 2026", category: "Events", image: "/arena_concert_season_1786244181303.jpg", href: "/news/summer-concerts" },
  { title: "AkiiBua Museum launches new interactive exhibit", date: "May 28, 2026", category: "Museum", image: "/arena_museum_exhibit_1786244342265.jpg", href: "/news/museum-exhibit" },
  { title: "Arena tours now available in 12 languages", date: "May 20, 2026", category: "Tours", image: "/arena_tours_languages_1786244358071.jpg", href: "/news/tours-languages" },
  { title: "Sustainability report 2025 published", date: "May 15, 2026", category: "Arena", image: "/arena_sustainability_1786244371014.jpg", href: "/news/sustainability" },
];

export default function NewsPage() {
  return (
    <>
      <HeroSection
        title="News"
        subtitle="Latest news from the Akii-Bua Olympic Stadium"
        image="/arena_interior.png"
       size="small" />
      <section className="bg-arena-navy py-20 px-6">
        <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}
        </div>
      </div>
      </section>
    </>
  );
}
