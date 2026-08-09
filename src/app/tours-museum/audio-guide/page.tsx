import PageLayout from "@/components/PageLayout";

export default function AudioGuidePage() {
  return (
    <PageLayout
      title="Audio Guide"
      subtitle="Multilingual audio guides for your tour"
      image="/museum_tour_1782318204191.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Tours & Museum", href: "/tours-museum" }]}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-white/70">Audio guides are available for the AkiiBua Museum and Arena View tours, offering commentary in multiple languages.</p>
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors">
          <h3 className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors mb-3">Available Languages</h3>
          <p className="text-gray-600 text-sm">English, Luganda, Swahili, French, Arabic, Chinese, Japanese, Spanish, Portuguese</p>
        </div>
      </div>
    </PageLayout>
  );
}



