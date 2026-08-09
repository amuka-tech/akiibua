import PageLayout from "@/components/PageLayout";

export default function DisabledTourPage() {
  return (
    <PageLayout
      title="Inclusive Tours"
      subtitle="Barrier-free tours for all visitors."
      image="/museum_tour_1782318204191.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Tours & Museum", href: "/tours-museum" }]}
    >
      <div className="max-w-3xl mx-auto space-y-8">
        <p className="text-gray-600 text-lg leading-relaxed">
          The Akii-Bua Olympic Stadium is committed to being fully inclusive. We offer specially designed tours for visitors with disabilities, ensuring that everyone can enjoy the full stadium experience.
        </p>

        <div className="bg-arena-gray rounded-xl border border-gray-100 p-8">
          <div className="w-10 h-1 bg-arena-red mb-6 rounded" />
          <h3 className="font-bold text-gray-900 uppercase tracking-wider text-lg mb-5">What is Included</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-arena-red mt-2 shrink-0" />
              Wheelchair-accessible tour routes throughout the stadium
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-arena-red mt-2 shrink-0" />
              Elevator access to all levels
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-arena-red mt-2 shrink-0" />
              Sign language interpretation available on request
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-arena-red mt-2 shrink-0" />
              Assisted listening devices
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-arena-red mt-2 shrink-0" />
              Trained tour guides for special needs groups
            </li>
          </ul>
        </div>

        <div className="text-center pt-4">
          <a href="/contact" className="inline-block border-2 border-arena-primary text-arena-primary font-bold uppercase tracking-wider py-3 px-8 rounded hover:bg-arena-red hover:text-white transition-colors">
            Contact Us to Book
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
