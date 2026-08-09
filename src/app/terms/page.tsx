import PageLayout from "@/components/PageLayout";

export default function TermsPage() {
  return (
    <PageLayout
      title="Terms and Conditions"
      subtitle="General terms and conditions"
      image="/arena_night_hero_1782318185369.png"
    >
      <div className="max-w-3xl mx-auto text-gray-600 text-sm space-y-4">
        <p>These general terms and conditions govern the use of the Akii-Bua Olympic Stadium website and services.</p>
        <h3 className="font-bold text-arena-dark text-base mt-6">1. Scope</h3>
        <p>These terms apply to all visits to the Akii-Bua Olympic Stadium and use of its services.</p>
        <h3 className="font-bold text-arena-dark text-base mt-6">2. Ticketing</h3>
        <p>Ticket purchases are subject to availability and the terms of the respective ticket provider.</p>
        <h3 className="font-bold text-arena-dark text-base mt-6">3. Liability</h3>
        <p>Akii-Bua Olympic Stadium Lira Stadion Ltd assumes no liability for personal injury or property damage unless caused by gross negligence.</p>
      </div>
    </PageLayout>
  );
}


