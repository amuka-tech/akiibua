import PageLayout from "@/components/PageLayout";

export default function SkyboxPage() {
  return (
    <PageLayout
      title="Skybox"
      subtitle="Exclusive skybox hospitality"
      image="/business_club.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Hospitality & Tickets", href: "/arena/hospitality-and-tickets" }]}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors">
          <h3 className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors text-lg mb-3">Skybox Experience</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>âUGX ¢ Private suite with premium seating</li>
            <li>âUGX ¢ Exclusive catering and bar service</li>
            <li>âUGX ¢ Dedicated hostess service</li>
            <li>âUGX ¢ VIP parking included</li>
            <li>âUGX ¢ Capacity: 12-20 guests per skybox</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}




