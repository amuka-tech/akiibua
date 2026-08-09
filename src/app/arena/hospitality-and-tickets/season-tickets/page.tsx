import PageLayout from "@/components/PageLayout";

export default function SeasonTicketsPage() {
  return (
    <PageLayout
      title="Season Tickets"
      subtitle="Season ticket information"
      image="/vip_lounge_premium.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Hospitality & Tickets", href: "/arena/hospitality-and-tickets" }]}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors">
          <p className="text-white/70">Season tickets for AkiiBua Lira home matches are available with priority for existing season ticket holders. Waiting lists may apply for new applications.</p>
        </div>
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors">
          <h3 className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors mb-2">Benefits</h3>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>✔ Guaranteed seat for all FUFA Premier League home matches</li>
            <li>✔ Priority access to FUFA Cup home tickets</li>
            <li>✔ Discounted ticket prices</li>
            <li>✔ Exclusive season ticket holder events</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}




