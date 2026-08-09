import PageLayout from "@/components/PageLayout";

export default function MatchdaySiteSeatmapsPage() {
  return (
    <PageLayout
      title="Layouts"
      subtitle="Site and seat maps"
      image="/matchday_exterior.png"
      breadcrumbs={[{ label: "Home", href: "/" }]}
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors p-6">
          <p className="text-white/70 leading-relaxed">Downloadable site and seat maps for the Akii-Bua Olympic Stadium are available. These maps help you find your way around the venue on matchdays and event days.</p>
        </div>
      </div>
    </PageLayout>
  );
}



