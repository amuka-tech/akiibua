import PageLayout from "@/components/PageLayout";
import SimpleCard from "@/components/SimpleCard";

const galleries = [
  { title: "Arena Exterior", image: "/arena_exterior_daytime_1786244226683.jpg", href: "#" },
  { title: "Arena Interior", image: "/arena_interior.png", href: "#" },
  { title: "Matchday Atmosphere", image: "/arena_matchday_atmosphere_1786244244176.jpg", href: "#" },
  { title: "Concerts & Events", image: "/arena_events_concerts_1786244264192.jpg", href: "#" },
  { title: "Facade Illumination", image: "/arena_facade_illumination_1786244280641.jpg", href: "#" },
  { title: "Construction History", image: "/arena_construction_history_1786244295976.jpg", href: "#" },
];

export default function GalleriesPage() {
  return (
    <PageLayout
      title="Picture Galleries"
      subtitle="Photo galleries of the Akii-Bua Olympic Stadium"
      image="/arena_night_hero_1782318185369.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Arena", href: "/arena" }, { label: "Pictures", href: "/arena/pictures/galleries" }]}
    >
      <div className="grid md:grid-cols-3 gap-6">
        {galleries.map((g) => <SimpleCard key={g.title} {...g} />)}
      </div>
    </PageLayout>
  );
}
