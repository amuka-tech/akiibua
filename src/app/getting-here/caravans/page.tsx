import PageLayout from "@/components/PageLayout";

export default function CaravansPage() {
  return (
    <PageLayout
      title="Parking for Caravans"
      subtitle="Getting here and entry"
      image="/matchday_parking.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Getting here", href: "/getting-here/matchday" }]}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors">
          <h3 className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors text-lg mb-3">Non-Matchday</h3>
          <p className="text-gray-600 text-sm">Caravan parking is available on the north bus park on non-matchdays. Overnight stay: UGX 5,000 per night.</p>
        </div>
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors">
          <h3 className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors text-lg mb-3">Matchday</h3>
          <p className="text-gray-600 text-sm">Pre-matchday parking only until 7:00 pm. On matchdays limited parking in guest sector. Fee: UGX 5,000. Caravan drivers must leave after match.</p>
        </div>
      </div>
    </PageLayout>
  );
}



