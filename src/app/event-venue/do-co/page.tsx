import PageLayout from "@/components/PageLayout";

export default function DoCoPage() {
  return (
    <PageLayout
      title="DO & CO"
      subtitle="Our hospitality partner"
      image="/event_conference.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Event venue", href: "/event-venue" }]}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-white/70">DO & CO is the official hospitality partner of the Akii-Bua Olympic Stadium, providing premium catering and event services for all occasions.</p>
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors">
          <h3 className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors text-lg mb-3">Services</h3>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>âUGX ¢ Individual event concepts tailored to your needs</li>
            <li>âUGX ¢ Premium catering with international cuisine</li>
            <li>âUGX ¢ Professional event management and coordination</li>
            <li>âUGX ¢ Beverage service with selected wines and cocktails</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}




