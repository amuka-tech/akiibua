import PageLayout from "@/components/PageLayout";
import SimpleCard from "@/components/SimpleCard";

export default function HospitalityMainPage() {
  return (
    <PageLayout
      title="Hospitality & Tickets"
      subtitle="Premium experiences at the Akii-Bua Olympic Stadium"
      image="/vip_lounge_premium.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Arena", href: "/arena" }]}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Tickets", description: "Matchday and event tickets", href: "/arena/hospitality-and-tickets/tickets" },
          { title: "Skybox", description: "Exclusive skybox experience", href: "/arena/hospitality-and-tickets/skybox" },
          { title: "Matchday Tickets", description: "Single matchday tickets", href: "/arena/hospitality-and-tickets/matchday-tickets" },
          { title: "Season Tickets", description: "Season ticket information", href: "/arena/hospitality-and-tickets/season-tickets" },
          { title: "Business Club", description: "Premium business hospitality", href: "#" },
          { title: "VIP Tours", description: "Exclusive VIP arena tours", href: "/tours-museum/vip-tour" },
        ].map((item) => <SimpleCard key={item.title} {...item} />)}
      </div>
    </PageLayout>
  );
}
