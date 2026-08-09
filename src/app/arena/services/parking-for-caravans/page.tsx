import PageLayout from "@/components/PageLayout";

export default function ParkingCaravansPage() {
  return (
    <PageLayout
      title="Parking for Caravans"
      subtitle="Caravan and motorhome parking at the Akii-Bua Olympic Stadium"
      image="/arena_night_hero_1782318185369.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Arena", href: "/arena" }]}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors">
          <h2 className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors text-lg mb-3">Non-Matchday Parking</h2>
          <p className="text-white/70">Caravan parking is available on the north bus park on non-matchdays. The overnight flat rate is â‚¬20.00.</p>
        </div>
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors">
          <h2 className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors text-lg mb-3">Matchday Parking</h2>
          <p className="text-white/70">On matchdays, limited parking is available in the guest sector for caravans. The matchday parking fee is â‚¬20.00. Caravan drivers must leave the guest area after the match. The regular caravan park opens again approximately 2 hours after the match ends.</p>
        </div>
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors">
          <h2 className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors text-lg mb-3">Important Information</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>âUGX ¢ Pre-matchday parking is only possible until 7:00 pm</li>
            <li>âUGX ¢ Fan coaches use these lots from early morning on matchdays</li>
            <li>âUGX ¢ Follow the instructions of parking and security service on site</li>
            <li>âUGX ¢ No camping facilities available âUGX ” parking only</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}




