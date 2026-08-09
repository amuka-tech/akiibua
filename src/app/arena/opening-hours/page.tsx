import PageLayout from "@/components/PageLayout";

const schedules = [
  { day: "Monday - Friday", hours: "10:00 - 18:00" },
  { day: "Saturday", hours: "09:00 - 18:00" },
  { day: "Sunday & Public Holidays", hours: "10:00 - 16:00" },
  { day: "Matchdays", hours: "3 hours before kickoff" },
  { day: "Event Days", hours: "Varies by event" },
];

export default function OpeningHoursPage() {
  return (
    <PageLayout
      title="Opening Hours"
      subtitle="AkiiBua Store & visitor services"
      image="/arena_night_hero_1782318185369.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Arena", href: "/arena" }]}
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors overflow-hidden">
          {schedules.map((item) => (
            <div key={item.day} className="flex justify-between p-5 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
              <span className="font-semibold text-gray-900 group-hover:text-arena-primary transition-colors">{item.day}</span>
              <span className="text-arena-primary font-medium text-sm">{item.hours}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-white/70 mt-4">Opening times may vary. Please check before your visit.</p>
      </div>
    </PageLayout>
  );
}



