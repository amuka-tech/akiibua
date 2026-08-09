import HeroSection from "@/components/HeroSection";
import Image from "@/components/ImageWrapper";

export default function MuseumArenaTourPage() {
  return (
    <>
      <HeroSection
        title="Museum + Arena Tour"
        subtitle="A Double Dose of Football Fascination"
        image="/museum_tour_1782318204191.png"
      />

      {/* Overview & Itinerary Section - Dark */}
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
                This is the most comprehensive tour available. It combines a behind-the-scenes guided walk through the Akii-Bua Olympic Stadium from the players&apos; perspective with a self-guided visit to the club museum to explore the history, trophies, and interactive exhibits.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mt-12">
                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wider mb-6 flex items-center gap-3">
                  Duration & Timing
                </h3>
                <ul className="space-y-4 text-gray-500">
                  <li className="flex justify-between items-center border-b border-gray-200 pb-4">
                    <span className="font-bold uppercase tracking-wider text-sm">Total Recommended</span>
                    <span className="text-arena-primary font-black">Approx. 2.5 hrs</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-200 pb-4">
                    <span className="font-bold uppercase tracking-wider text-sm">Arena Tour (Guided)</span>
                    <span className="font-bold text-gray-900">60 minutes</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-200 pb-4">
                    <span className="font-bold uppercase tracking-wider text-sm">Museum (Self-guided)</span>
                    <span className="font-bold text-gray-900">1 - 1.5 hrs</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-arena-red/10 border border-arena-primary/20 rounded-lg text-sm text-gray-700">
                  <span className="text-arena-primary font-bold uppercase tracking-wider block mb-1">Special Timing Rule</span>
                  For tours starting from 16:15 onwards, the visit to the museum must take place <em>before</em> the stadium tour.
                </div>
              </div>
            </div>

            {/* Right: Itinerary Timeline */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wider">Tour Itinerary</h2>
                <div className="h-1 bg-arena-red flex-1 max-w-[100px] rounded" />
              </div>
              
              <div className="relative pl-8 space-y-8 before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-arena-red before:via-arena-red/50 before:to-transparent">
                {[
                  "Middle tier in the heart of the South Curve",
                  "Lower tier of the main stand",
                  "Press conference area",
                  "Players' changing rooms",
                  "The players' tunnel",
                  "Pitch perimeter and dugouts",
                  "Explanation of the stadium's famous outer faÃ§ade",
                  "Self-guided visit to the AkiiBua Museum"
                ].map((stop, index) => (
                  <div key={index} className="relative">
                    <div className="absolute left-[-37px] w-4 h-4 rounded-full bg-white border-2 border-arena-primary mt-1.5" />
                    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                      <p className="text-gray-900 font-medium">{stop}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 italic mt-8">
                * Note: The itinerary is subject to closures at short notice due to safety reasons or stadium events.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section - Light */}
      <section className="bg-slate-50 py-20 px-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-arena-navy uppercase tracking-tight mb-4">Detailed <span className="text-arena-primary">Pricing</span></h2>
            <p className="text-arena-muted max-w-2xl mx-auto">
              Secure your spot on the most comprehensive tour available. We offer special rates for children, students, and families.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100/50 text-arena-navy text-sm uppercase tracking-wider border-b border-gray-200">
                    <th className="p-6 font-bold">Ticket Category</th>
                    <th className="p-6 font-bold">Price</th>
                    <th className="p-6 font-bold">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-bold text-arena-navy">Adults <span className="block text-xs text-arena-muted font-normal mt-1">(14+ years)</span></td>
                    <td className="p-6 text-arena-primary font-black text-xl whitespace-nowrap">UGX 30,000</td>
                    <td className="p-6 text-arena-muted text-sm">Standard adult rate.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-bold text-arena-navy">Concessions</td>
                    <td className="p-6 text-arena-primary font-black text-xl whitespace-nowrap">UGX 25,000</td>
                    <td className="p-6 text-arena-muted text-sm">Students, pensioners, apprentices, schoolchildren, club members, and people with disabilities (Valid ID required).</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-bold text-arena-navy">Children <span className="block text-xs text-arena-muted font-normal mt-1">(6-13 years)</span></td>
                    <td className="p-6 text-arena-primary font-black text-xl whitespace-nowrap">UGX 15,000</td>
                    <td className="p-6 text-arena-muted text-sm">Youth rate.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-bold text-arena-navy">Infants <span className="block text-xs text-arena-muted font-normal mt-1">(0-5 years)</span></td>
                    <td className="p-6 text-arena-primary font-black text-xl whitespace-nowrap">Free</td>
                    <td className="p-6 text-arena-muted text-sm">Must be accompanied by an adult/guardian. A zero-cost ticket booking is still required.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors bg-arena-red/5">
                    <td className="p-6 font-bold text-arena-navy">Family Ticket</td>
                    <td className="p-6 text-arena-primary font-black text-xl whitespace-nowrap">UGX 75,000</td>
                    <td className="p-6 text-arena-muted text-sm">Includes <strong>two adults</strong> + an <strong>unlimited amount of children</strong> (up to 16 years old) living in the same household.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-200 text-center">
              <a href="https://momoticketing.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-arena-red text-white font-bold uppercase tracking-wider py-4 px-12 rounded hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Book Tickets Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Info Section - Slate */}
      <section className="bg-arena-gray py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-arena-navy uppercase tracking-wider">Important Information</h2>
            <div className="h-1 bg-arena-red flex-1 max-w-[100px] rounded" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-10 h-1 bg-arena-red mb-4 rounded" />
              <h4 className="font-bold text-arena-navy uppercase tracking-wider mb-2">1. Booking is Essential</h4>
              <p className="text-sm text-arena-muted leading-relaxed">
                You can only guarantee a spot by booking in advance through the Online Ticket Shop. Because of high demand, it is <strong>often NOT possible to buy tickets on the day</strong>. You can also book by telephone at +49 (0)89 699 31-222.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-10 h-1 bg-arena-red mb-4 rounded" />
              <h4 className="font-bold text-arena-navy uppercase tracking-wider mb-2">2. Meeting Point</h4>
              <p className="text-sm text-arena-muted leading-relaxed">
                You must gather at the waiting area with your ticket <strong>15 minutes before</strong> the tour starts. The meeting point is usually the <strong>North VIP Entrance</strong>.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-10 h-1 bg-arena-red mb-4 rounded" />
              <h4 className="font-bold text-arena-navy uppercase tracking-wider mb-2">3. Dress Code & Access</h4>
              <p className="text-sm text-arena-muted leading-relaxed">
                You must wear appropriate, comfortable shoes as you will walk a considerable distance and navigate stairs. Note: Buggies/Prams <strong>cannot</strong> be taken on the stadium tour.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-10 h-1 bg-arena-red mb-4 rounded" />
              <h4 className="font-bold text-arena-navy uppercase tracking-wider mb-2">4. Age Restrictions</h4>
              <p className="text-sm text-arena-muted leading-relaxed">
                Children under the age of 14 can only participate if accompanied by an adult (unless the specific tour is designated solely for adults).
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-10 h-1 bg-arena-red mb-4 rounded" />
              <h4 className="font-bold text-arena-navy uppercase tracking-wider mb-2">5. Operating Days</h4>
              <p className="text-sm text-arena-muted leading-relaxed">
                Tours run every day of the year, <strong>except</strong> on Christmas Day, New Year&apos;s Eve, and New Year&apos;s Day. Check the schedule for Matchday restrictions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



