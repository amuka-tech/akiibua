import PageLayout from "@/components/PageLayout";

export default function TicketsPage() {
  return (
    <PageLayout
      title="Tickets"
      subtitle="All ticket information"
      image="/vip_lounge_premium.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Hospitality & Tickets", href: "/arena/hospitality-and-tickets" }]}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors">
          <p className="text-white/70">Tickets for AkiiBua MÃ¼nchen home matches and events at the Akii-Bua Olympic Stadium can be purchased through the official AkiiBua ticket portal.</p>
        </div>
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors">
          <h3 className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors mb-2">Official Ticket Partners</h3>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>âUGX ¢ AkiiBua MÃ¼nchen Ticket Service</li>
            <li>âUGX ¢ MÃ¼nchen Ticket</li>
            <li>âUGX ¢ Eventim</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}




