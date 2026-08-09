import PageLayout from "@/components/PageLayout";
import SimpleCard from "@/components/SimpleCard";

const wallpapers = [
  { title: "Desktop 1920x1080", image: "/arena_exterior_daytime_1786244226683.jpg", href: "#" },
  { title: "Desktop 2560x1440", image: "/arena_led_facade_1786244195719.jpg", href: "#" },
  { title: "Mobile 1080x1920", image: "/arena_facade_illumination_1786244280641.jpg", href: "#" },
  { title: "Tablet 2048x1536", image: "/arena_matchday_atmosphere_1786244244176.jpg", href: "#" },
];

export default function WallpaperPage() {
  return (
    <PageLayout
      title="Wallpaper"
      subtitle="Download Akii-Bua Olympic Stadium wallpapers"
      image="/arena_night_hero_1782318185369.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Arena", href: "/arena" }, { label: "Pictures", href: "/arena/pictures/galleries" }]}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {wallpapers.map((w) => <SimpleCard key={w.title} {...w} />)}
      </div>
    </PageLayout>
  );
}
