import HeroSection from "@/components/HeroSection";
import Image from "@/components/ImageWrapper";

export default function MuseumOnlyPage() {
  return (
    <>
      <HeroSection
        title="Akii-Bua Museum"
        subtitle="Uganda's premier sports museum"
        image="/museum_exhibition.png"
      />

      {/* Overview & Highlights Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Left: Overview */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wider">Overview</h2>
                <div className="h-1 bg-arena-red flex-1 max-w-[100px] rounded" />
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Immerse yourself in the history of the club! Spread across 3,000 square meters, the Akii-Bua Museum offers a fascinating journey from the club&apos;s foundation to its current glorious present. This self-guided experience lets you explore at your own pace.
              </p>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mt-12">
                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wider mb-6">
                  Visit Details
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex justify-between items-center border-b border-gray-200 pb-4">
                    <span className="font-bold uppercase tracking-wider text-sm text-gray-500">Recommended Time</span>
                    <span className="text-arena-primary font-black">Approx. 1.5 hrs</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-200 pb-4">
                    <span className="font-bold uppercase tracking-wider text-sm text-gray-500">Pacing</span>
                    <span className="font-bold">Self-guided</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-200 pb-4">
                    <span className="font-bold uppercase tracking-wider text-sm text-gray-500">Audio Guide</span>
                    <span className="font-bold text-arena-primary">11 Languages</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-lg text-sm text-gray-700">
                  <strong>Did you know?</strong> An audio guide significantly enhances your visit by providing exclusive interviews, background stories, and historical context as you navigate the exhibits.
                </div>
              </div>
            </div>

            {/* Right: Museum Highlights */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wider">Highlights</h2>
                <div className="h-1 bg-arena-red flex-1 max-w-[100px] rounded" />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:border-arena-primary/40 hover:shadow-card-hover transition-all">
                  <div className="w-8 h-1 bg-arena-red mb-4 rounded" />
                  <h4 className="text-gray-900 font-bold mb-2 uppercase tracking-wide">The Trophy Room</h4>
                  <p className="text-sm text-gray-500">Marvel at the original silver and gold hardware from decades of domestic and international triumphs.</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:border-arena-primary/40 hover:shadow-card-hover transition-all">
                  <div className="w-8 h-1 bg-arena-red mb-4 rounded" />
                  <h4 className="text-gray-900 font-bold mb-2 uppercase tracking-wide">Hall of Fame</h4>
                  <p className="text-sm text-gray-500">Discover the legendary players who shaped the club, featuring original jerseys and personal items.</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:border-arena-primary/40 hover:shadow-card-hover transition-all">
                  <div className="w-8 h-1 bg-arena-red mb-4 rounded" />
                  <h4 className="text-gray-900 font-bold mb-2 uppercase tracking-wide">Club Cinema</h4>
                  <p className="text-sm text-gray-500">Sit back and watch emotional, exclusive films highlighting the most dramatic moments in history.</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:border-arena-primary/40 hover:shadow-card-hover transition-all">
                  <div className="w-8 h-1 bg-arena-red mb-4 rounded" />
                  <h4 className="text-gray-900 font-bold mb-2 uppercase tracking-wide">Interactive Stations</h4>
                  <p className="text-sm text-gray-500">Test your knowledge and skills at various interactive displays designed for visitors of all ages.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-slate-50 py-20 px-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tight mb-4">Detailed <span className="text-arena-primary">Pricing</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Secure your entrance to the museum. We offer special rates for children, students, and club members.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-card border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider border-b border-gray-200">
                    <th className="p-6 font-bold">Ticket Category</th>
                    <th className="p-6 font-bold">Price</th>
                    <th className="p-6 font-bold">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-bold text-gray-900">Adults <span className="block text-xs text-gray-400 font-normal mt-1">(14+ years)</span></td>
                    <td className="p-6 text-arena-primary font-black text-xl whitespace-nowrap">UGX 3,000</td>
                    <td className="p-6 text-gray-500 text-sm">Standard adult rate.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-bold text-gray-900">Concessions</td>
                    <td className="p-6 text-arena-primary font-black text-xl whitespace-nowrap">UGX 2,000</td>
                    <td className="p-6 text-gray-500 text-sm">Students, pensioners, apprentices, schoolchildren, club members, and people with disabilities (Valid ID required).</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-bold text-gray-900">Children <span className="block text-xs text-gray-400 font-normal mt-1">(6–13 years)</span></td>
                    <td className="p-6 text-arena-primary font-black text-xl whitespace-nowrap">UGX 1,000</td>
                    <td className="p-6 text-gray-500 text-sm">Youth rate.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-bold text-gray-900">Infants <span className="block text-xs text-gray-400 font-normal mt-1">(0–5 years)</span></td>
                    <td className="p-6 text-arena-primary font-black text-xl whitespace-nowrap">Free</td>
                    <td className="p-6 text-gray-500 text-sm">Must be accompanied by an adult/guardian. A zero-cost ticket booking is still required.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-200 text-center">
              <a href="https://momoticketing.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-arena-red text-white font-bold uppercase tracking-wider py-4 px-12 rounded hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Book Museum Tickets
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Info Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wider">Important Information</h2>
            <div className="h-1 bg-arena-red flex-1 max-w-[100px] rounded" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-arena-primary/40 hover:shadow-card-hover transition-all">
              <div className="w-10 h-1 bg-arena-red mb-4 rounded" />
              <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-2">1. Booking is Essential</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                You can only guarantee a spot by booking in advance through the Online Ticket Shop. You can also book by telephone at +256 414 123 456.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-arena-primary/40 hover:shadow-card-hover transition-all">
              <div className="w-10 h-1 bg-arena-red mb-4 rounded" />
              <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-2">2. Entrance</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Please proceed directly to the Museum Entrance. You do not need to wait for a guided group since the museum is a self-guided experience.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-arena-primary/40 hover:shadow-card-hover transition-all">
              <div className="w-10 h-1 bg-arena-red mb-4 rounded" />
              <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-2">3. Audio Guides</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Audio guides can be picked up at the entrance desk. They are highly recommended for the full experience and are available in 11 languages.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-arena-primary/40 hover:shadow-card-hover transition-all">
              <div className="w-10 h-1 bg-arena-red mb-4 rounded" />
              <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-2">4. Age Restrictions</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Children under the age of 14 can only enter if accompanied by an adult. The museum features several kid-friendly interactive zones.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-arena-primary/40 hover:shadow-card-hover transition-all">
              <div className="w-10 h-1 bg-arena-red mb-4 rounded" />
              <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-2">5. Operating Days</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Open every day of the year, <strong>except</strong> on Christmas Day, New Year&apos;s Eve, and New Year&apos;s Day. Check the schedule for Matchday changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
