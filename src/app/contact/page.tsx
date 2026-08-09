import PageLayout from "@/components/PageLayout";

export default function ContactPage() {
  return (
    <PageLayout
      title="Contact Us"
      subtitle="We are here to help."
      image="/arena_interior.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]}
    >
      <div className="max-w-5xl mx-auto mt-4">
        <p className="text-gray-500 text-lg mb-12 text-center max-w-3xl mx-auto">
          Whether you have a question about matchday tickets, museum tours, or hosting an event at the stadium, our dedicated support teams are ready to assist you.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* General Inquiries */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-arena-primary/50 transition-colors group">
            <div className="w-10 h-1 bg-arena-red mb-6 rounded" />
            <h3 className="font-bold text-2xl text-gray-900 uppercase tracking-wider mb-2 group-hover:text-arena-primary transition-colors">General Inquiries</h3>
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">Akii-Bua Olympic Stadium</p>

            <div className="space-y-4 text-gray-700">
              <div className="flex gap-4">
                <div className="font-bold uppercase tracking-wider text-sm w-24 shrink-0 text-gray-400">Address</div>
                <div>Lira Sports Complex<br />P.O. Box 1234, Lira<br />Uganda</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold uppercase tracking-wider text-sm w-24 shrink-0 text-gray-400">Phone</div>
                <div>+256 414 123 456</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold uppercase tracking-wider text-sm w-24 shrink-0 text-gray-400">Email</div>
                <a href="mailto:info@akiibua.ug" className="text-arena-primary hover:text-red-700 transition-colors font-semibold">info@akiibua.ug</a>
              </div>
            </div>
          </div>

          {/* Specialized Departments */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-arena-primary/50 transition-colors group">
              <div className="w-10 h-1 bg-arena-red mb-6 rounded" />
              <h3 className="font-bold text-xl text-gray-900 uppercase tracking-wider mb-4 group-hover:text-arena-primary transition-colors">Event Hosting</h3>
              <p className="text-gray-500 text-sm mb-4">
                Planning a corporate event or gala dinner? Contact our premium events team.
              </p>
              <a href="mailto:events@akiibua.ug" className="text-arena-primary font-bold tracking-wider text-sm hover:text-red-700 transition-colors flex items-center gap-2">
                events@akiibua.ug <span className="text-lg">→</span>
              </a>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-arena-primary/50 transition-colors group">
              <div className="w-10 h-1 bg-arena-red mb-6 rounded" />
              <h3 className="font-bold text-xl text-gray-900 uppercase tracking-wider mb-4 group-hover:text-arena-primary transition-colors">Press & Media</h3>
              <p className="text-gray-500 text-sm mb-4">
                For media inquiries, accreditation, and press materials.
              </p>
              <a href="mailto:press@akiibua.ug" className="text-arena-primary font-bold tracking-wider text-sm hover:text-red-700 transition-colors flex items-center gap-2">
                press@akiibua.ug <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
