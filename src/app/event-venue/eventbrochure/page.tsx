import PageLayout from "@/components/PageLayout";

export default function EventBrochurePage() {
  return (
    <PageLayout
      title="Event Brochure"
      subtitle="Download our event brochure"
      image="/event_conference.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Event venue", href: "/event-venue" }]}
    >
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <p className="text-white/70">Download the Akii-Bua Olympic Stadium event brochure to learn more about hosting your event at this iconic venue.</p>
        <a href="#" className="inline-block bg-arena-red text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-red-700 transition">Download Brochure (PDF)</a>
      </div>
    </PageLayout>
  );
}
