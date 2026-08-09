import PageLayout from "@/components/PageLayout";
import Image from "@/components/ImageWrapper";

export default function WebcamPage() {
  return (
    <PageLayout
      title="Webcams"
      subtitle="See the Akii-Bua Olympic Stadium live"
      image="/arena_night_hero_1782318185369.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Arena", href: "/arena" }]}
    >
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { label: "North View", img: "/arena_exterior_daytime_1786244226683.jpg" },
          { label: "South View", img: "/arena_matchday_atmosphere_1786244244176.jpg" },
          { label: "East View", img: "/arena_facade_illumination_1786244280641.jpg" },
          { label: "West View", img: "/arena_night_hero_1782318185369.png" },
        ].map(({ label, img }) => (
          <div key={label} className="bg-white rounded-lg overflow-hidden shadow-card">
            <div className="relative h-64 overflow-hidden">
              <Image src={img} alt={label} fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors">{label}</h3>
              <p className="text-xs text-white/70 mt-1">Live feed</p>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

