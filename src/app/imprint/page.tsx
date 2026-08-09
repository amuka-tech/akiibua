import PageLayout from "@/components/PageLayout";

export default function ImprintPage() {
  return (
    <PageLayout
      title="Imprint"
      subtitle="Legal notice"
      image="/arena_night_hero_1782318185369.png"
    >
      <div className="max-w-3xl mx-auto text-arena-dark text-sm space-y-4 leading-relaxed">
        <p className="text-base font-bold">Akii-Bua Olympic Stadium Lira Stadion Ltd</p>
        <p>Akii-Bua Road<br />Lira City, Uganda</p>
        <p>Phone: +256 414 232 700<br />Email: info@akiibua.ug</p>
        <p>Registered at: Uganda Registration Services Bureau, No. 80002783<br />TIN: UG 1000234567</p>
      </div>
    </PageLayout>
  );
}
