import PageLayout from "@/components/PageLayout";

export default function ServicesDownloadsPage() {
  return (
    <PageLayout
      title="Services & Downloads"
      subtitle="Resources for event planners"
      image="/event_conference.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Event venue", href: "/event-venue" }]}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        {[
          { title: "Technical Specifications", desc: "Download venue technical specifications including lighting, sound, and power details." },
          { title: "Floor Plans", desc: "Detailed floor plans of all event spaces within the Akii-Bua Olympic Stadium." },
          { title: "Catering Menu", desc: "View our catering options provided by DO & CO." },
          { title: "Terms & Conditions", desc: "Download the general terms and conditions for event bookings." },
        ].map((item) => (
          <div key={item.title} className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors">
            <h3 className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}



