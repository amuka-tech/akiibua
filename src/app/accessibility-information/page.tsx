import PageLayout from "@/components/PageLayout";

export default function AccessibilityPage() {
  return (
    <PageLayout
      title="Accessibility"
      subtitle="Accessibility information"
      image="/arena_night_hero_1782318185369.png"
    >
      <div className="max-w-3xl mx-auto text-gray-600 text-sm space-y-4">
        <p>Akii-Bua Olympic Stadium Lira Stadion Ltd is committed to making its website and venue accessible to all visitors.</p>
        <h3 className="font-bold text-arena-dark text-base mt-6">Website Accessibility</h3>
        <p>We strive to conform to WCAG 2.1 Level AA standards. If you encounter accessibility issues, please contact us.</p>
        <h3 className="font-bold text-arena-dark text-base mt-6">Venue Accessibility</h3>
        <p>The Akii-Bua Olympic Stadium is fully wheelchair accessible with designated parking, seating areas, and restrooms throughout the venue.</p>
        <h3 className="font-bold text-arena-dark text-base mt-6">Contact</h3>
        <p>For accessibility inquiries, please contact our customer service team at info@akiibua.ug.</p>
      </div>
    </PageLayout>
  );
}
