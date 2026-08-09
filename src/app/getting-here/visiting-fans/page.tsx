import PageLayout from "@/components/PageLayout";

export default function VisitingFansPage() {
  return (
    <PageLayout
      title="Visiting Fans"
      subtitle="Information for away supporters"
      image="/transport_public.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Getting here", href: "/getting-here/matchday" }]}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors">
          <h3 className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors text-lg mb-3">Arrival</h3>
          <p className="text-gray-600 text-sm">Visiting fans arriving by public transport should alight at the stadium stage on the Lira-Kamdini Highway. Follow the marshals&apos; signs towards the visiting fans entrance in the north-west.</p>
        </div>
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors">
          <h3 className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors text-lg mb-3">By Car / Coach</h3>
          <p className="text-gray-600 text-sm">The away fans car park is in the north. Access requires a valid away match ticket. Parking: UGX 5,000 for cars (online), UGX 5,000 for buses (on-site).</p>
        </div>
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors">
          <h3 className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors text-lg mb-3">Important Notes</h3>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• The visitors car park is for visiting fans only</li>
            <li>• Maximum vehicle height: 2m (cars), 4m (buses)</li>
            <li>• Car park opens from 10:00 am on matchday</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}




