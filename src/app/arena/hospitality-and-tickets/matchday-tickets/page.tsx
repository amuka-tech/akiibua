import PageLayout from "@/components/PageLayout";

export default function MatchdayTicketsPage() {
  return (
    <PageLayout
      title="Matchday Tickets"
      subtitle="Single match tickets"
      image="/vip_lounge_premium.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Hospitality & Tickets", href: "/arena/hospitality-and-tickets" }]}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors">
          <p className="text-white/70">Matchday tickets for AkiiBua MÃ¼nchen home games are available through the official ticket portal. Prices vary by category and opponent.</p>
        </div>
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors">
          <h3 className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors mb-2">Ticket Categories</h3>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>âUGX ¢ Category 1: Main grandstand (center)</li>
            <li>âUGX ¢ Category 2: Main grandstand (side)</li>
            <li>âUGX ¢ Category 3: Behind the goals (lower)</li>
            <li>âUGX ¢ Category 4: Behind the goals (upper)</li>
            <li>âUGX ¢ Category 5: Corner sections</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}




