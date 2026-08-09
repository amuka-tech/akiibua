import PageLayout from "@/components/PageLayout";

export default function VouchersPage() {
  return (
    <PageLayout
      title="Tour Vouchers"
      subtitle="Give the gift of an unforgettable experience."
      image="/museum_exhibition.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Tours & Museum", href: "/tours-museum" }]}
    >
      <div className="max-w-3xl mx-auto space-y-8">
        <p className="text-gray-600 text-lg leading-relaxed">
          Our tour vouchers make the perfect gift. They are valid for 3 years from the date of purchase and can be redeemed for any of our available tour experiences.
        </p>

        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8">
          <div className="w-10 h-1 bg-arena-red mb-6 rounded" />
          <h3 className="font-bold text-gray-900 uppercase tracking-wider text-lg mb-5">Available Voucher Types</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-arena-red mt-2 shrink-0" />
              AkiiBua Museum + Arena Tour voucher
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-arena-red mt-2 shrink-0" />
              AkiiBua Museum Only voucher
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-arena-red mt-2 shrink-0" />
              VIP Tour voucher
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-arena-red mt-2 shrink-0" />
              Open-value voucher (redeemable for any tour)
            </li>
          </ul>
        </div>

        <div className="text-center pt-4">
          <a href="https://momoticketing.com/" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-arena-red text-white font-bold uppercase tracking-wider py-4 px-12 rounded hover:bg-red-700 transition-colors shadow-lg">
            Buy a Voucher
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
