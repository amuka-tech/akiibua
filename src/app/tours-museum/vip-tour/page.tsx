import PageLayout from "@/components/PageLayout";

export default function VipTourPage() {
  return (
    <PageLayout
      title="Arena VIP Tour"
      subtitle="Experience the stadium like a VIP guest."
      image="/museum_tour_1782318204191.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Tours & Museum", href: "/tours-museum" }]}
    >
      <div className="max-w-3xl mx-auto space-y-8">
        <p className="text-gray-600 text-lg leading-relaxed">
          Experience the atmosphere of the Akii-Bua Olympic Stadium exclusively from the perspective of a VIP guest. Visit the dressing rooms, VIP areas, and the pitch side — places normally reserved for players and special guests.
        </p>

        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8">
          <div className="w-10 h-1 bg-arena-red mb-6 rounded" />
          <h3 className="font-bold text-gray-900 uppercase tracking-wider text-lg mb-5">Tour Details</h3>
          <ul className="space-y-4 divide-y divide-gray-100">
            <li className="flex justify-between items-center pt-4 first:pt-0">
              <span className="font-bold text-gray-500 uppercase tracking-wider text-sm">Price (Adults)</span>
              <span className="font-black text-arena-primary text-lg">UGX 50,000</span>
            </li>
            <li className="flex justify-between items-center pt-4">
              <span className="font-bold text-gray-500 uppercase tracking-wider text-sm">Duration</span>
              <span className="font-semibold text-gray-900">Approx. 3 hours</span>
            </li>
            <li className="flex justify-between items-center pt-4">
              <span className="font-bold text-gray-500 uppercase tracking-wider text-sm">Availability</span>
              <span className="font-semibold text-gray-900">By request</span>
            </li>
            <li className="flex justify-between items-center pt-4">
              <span className="font-bold text-gray-500 uppercase tracking-wider text-sm">Languages</span>
              <span className="font-semibold text-gray-900">English & Local</span>
            </li>
          </ul>
        </div>

        <div className="text-center pt-4">
          <a href="https://momoticketing.com/" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-arena-red text-white font-bold uppercase tracking-wider py-4 px-12 rounded hover:bg-red-700 transition-colors shadow-lg">
            Book VIP Tour
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
