import PageLayout from "@/components/PageLayout";

export default function PictureServicePage() {
  return (
    <PageLayout
      title="Press Pictures"
      subtitle="Media and press picture service"
      image="/arena_night_hero_1782318185369.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Arena", href: "/arena" }, { label: "Pictures", href: "/arena/pictures/galleries" }]}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors">
          <h2 className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors text-lg mb-3">Press Accreditation</h2>
          <p className="text-white/70">Members of the press seeking accreditation for events at the Akii-Bua Olympic Stadium should contact the AkiiBua MÃ¼nchen media department.</p>
        </div>
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors">
          <h2 className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors text-lg mb-3">Image Usage</h2>
          <p className="text-white/70">Press images are available for editorial use only. Commercial use requires prior written approval from AkiiBua MÃ¼nchen AG.</p>
        </div>
        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8 hover:border-arena-primary/30 transition-colors">
          <h2 className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors text-lg mb-3">Contact</h2>
          <p className="text-white/70">For press inquiries, please contact the AkiiBua MÃ¼nchen press office.</p>
        </div>
      </div>
    </PageLayout>
  );
}



