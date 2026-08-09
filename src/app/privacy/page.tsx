import PageLayout from "@/components/PageLayout";

export default function PrivacyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="Data protection information"
      image="/arena_night_hero_1782318185369.png"
    >
      <div className="max-w-3xl mx-auto text-gray-600 text-sm space-y-4">
        <p>Akii-Bua Olympic Stadium Lira Stadion Ltd takes the protection of your personal data very seriously.</p>
        <h3 className="font-bold text-arena-dark text-base mt-6">Data Collection</h3>
        <p>We collect personal data when you use our services, purchase tickets, or contact us. This includes name, email address, and payment information.</p>
        <h3 className="font-bold text-arena-dark text-base mt-6">Data Usage</h3>
        <p>Your data is used solely for processing your requests and improving our services. We do not share your data with third parties without your consent.</p>
        <h3 className="font-bold text-arena-dark text-base mt-6">Cookies</h3>
        <p>Our website uses cookies to enhance your browsing experience. You can manage cookie preferences in your browser settings.</p>
      </div>
    </PageLayout>
  );
}


