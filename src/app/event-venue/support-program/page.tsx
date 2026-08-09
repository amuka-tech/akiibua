import PageLayout from "@/components/PageLayout";

export default function SupportProgramPage() {
  return (
    <PageLayout
      title="Support Program"
      subtitle="Additional services for your event"
      image="/event_conference.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Event venue", href: "/event-venue" }]}
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {[
          { title: "Arena Tours", desc: "Add a guided arena tour to your event program." },
          { title: "Museum Visit", desc: "Include a visit to the AkiiBua Museum." },
          { title: "Photo Packages", desc: "Professional photography services during your event." },
          { title: "Technical Support", desc: "On-site AV and IT support throughout your event." },
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



