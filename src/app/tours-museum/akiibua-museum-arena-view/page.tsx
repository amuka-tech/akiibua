import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { CreditCard, Accessibility } from "lucide-react";

export default function MuseumArenaViewPage() {
  return (
    <PageLayout
      title="AkiiBua Museum + Arena View"
      subtitle="Enjoy the perfect mix of past and present with the Arena View"
      image="/museum_tour_1782318204191.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Tours & Museum", href: "/tours-museum" }]}
    >
      <div className="max-w-5xl mx-auto space-y-16 py-8">
        {/* Intro */}
        <section className="bg-arena-dark rounded-2xl p-8 md:p-12 shadow-card-hover border border-arena-navy/50">
          <p className="text-white/90 text-lg leading-relaxed mb-8">
            Relax in the North Stand for as long as you like, take in the stadium and discover its secrets with your audio guide. Afterwards, immerse yourself in the world of Uganda&apos;s record champions in the AkiiBua Museum. Uganda&apos;s largest club museum takes you from the founding in 1900 to today&apos;s successes — with countless trophies, fascinating exhibits and interactive media.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-between border-t border-white/10 pt-8">
            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <p className="text-white/50 text-sm uppercase tracking-wider mb-1">Price from</p>
                <p className="text-3xl font-bold text-white">UGX 1,000 <span className="text-lg font-normal text-white/50">per adult</span></p>
              </div>
              <div className="hidden sm:block w-px bg-white/10"></div>
              <div>
                <p className="text-white/50 text-sm uppercase tracking-wider mb-1">Availability</p>
                <p className="text-xl font-medium text-white">Daily <span className="text-base font-normal text-white/50">(~1.5 hours)</span></p>
              </div>
            </div>
            <Link href="#" className="bg-arena-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded uppercase tracking-wider transition-all transform hover:-translate-y-1 shadow-card-hover text-center w-full sm:w-auto">
              Online Ticket Shop
            </Link>
          </div>
        </section>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left Column */}
          <div className="space-y-12">
            
            {/* Itinerary */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-8 bg-arena-red rounded-full"></div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Itinerary</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "North Stand lower tier",
                  "Background information via audio guide (available free via the AkiiBua Arena mobile experience)",
                  "Visit to AkiiBua Museum"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 bg-arena-navy/50 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                    <span className="text-arena-primary font-bold">✓</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/40 text-sm mt-4 italic">*Subject to change in exceptional circumstances</p>
            </section>

            {/* Duration */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-8 bg-arena-red rounded-full"></div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Duration & Times</h3>
              </div>
              <div className="bg-arena-navy/50 rounded-xl border border-white/5 p-6 space-y-4">
                <p className="text-white font-medium pb-4 border-b border-white/10">
                  Recommended total duration: <span className="text-arena-primary">approx. 1.5 to 2 hours</span>
                </p>
                <ul className="space-y-4 text-white/80 mt-4">
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <span className="text-white/60">Arena View:</span>
                    <span className="font-medium text-white">30-45 mins</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <span className="text-white/60">AkiiBua Museum:</span>
                    <span className="font-medium text-white">1 to 1.5 hours</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <span className="text-white/60">Museum opening times:</span>
                    <span className="font-medium text-white bg-white/10 px-3 py-1 rounded">10:00 – 18:00</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 pt-2 border-t border-white/5">
                    <span className="text-arena-primary/90">Last entry (View / Museum):</span>
                    <span className="font-medium text-arena-primary">17:00 / 17:15</span>
                  </li>
                </ul>
              </div>
            </section>
            
            {/* Times */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-8 bg-arena-red rounded-full"></div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Opening Times</h3>
              </div>
              <div className="p-6 bg-arena-navy/50 rounded-xl border border-white/5 text-white/80 leading-relaxed">
                <p>Arena View on non-matchdays from <strong className="text-white">10:00 to 17:30</strong> (not before Champions League matchdays). More information can be found in the Ticket Shop.</p>
              </div>
            </section>

          </div>

          {/* Right Column */}
          <div className="space-y-12">
            
            {/* Prices */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-8 bg-arena-red rounded-full"></div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Prices</h3>
              </div>
              <div className="bg-arena-navy/50 rounded-xl border border-white/5 overflow-hidden">
                <div className="divide-y divide-white/10">
                  <div className="p-5 flex justify-between items-center hover:bg-white/5 transition-colors group">
                    <div>
                      <p className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors">Adults</p>
                      <p className="text-sm text-white/50">14 years and above</p>
                    </div>
                    <span className="text-xl font-bold text-arena-primary">UGX 1,000</span>
                  </div>
                  
                  <div className="p-5 hover:bg-white/5 transition-colors group">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <p className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors">Concessions</p>
                      </div>
                      <span className="text-xl font-bold text-arena-primary">UGX 9,000</span>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">Students, pensioners, apprentices, schoolchildren, club members and people with disabilities. On presentation of a valid ID.</p>
                  </div>
                  
                  <div className="p-5 flex justify-between items-center hover:bg-white/5 transition-colors group">
                    <div>
                      <p className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors">Children</p>
                      <p className="text-sm text-white/50">6-13 years</p>
                    </div>
                    <span className="text-xl font-bold text-arena-primary">UGX 6,000</span>
                  </div>
                  
                  <div className="p-5 hover:bg-white/5 transition-colors group">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <p className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors">Young Children</p>
                        <p className="text-sm text-white/50">0-5 years</p>
                      </div>
                      <span className="font-bold text-arena-dark bg-white px-3 py-1 rounded-full text-sm">Free</span>
                    </div>
                    <p className="text-sm text-white/50">Must be accompanied by an adult or legal guardian. A ticket booking is still required.</p>
                  </div>
                  
                  <div className="p-5 hover:bg-white/5 transition-colors group">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <p className="font-bold text-gray-900 group-hover:text-arena-primary transition-colors">Family ticket</p>
                      </div>
                      <span className="text-xl font-bold text-arena-primary">UGX 3,500</span>
                    </div>
                    <p className="text-sm text-white/50">Two adults + unlimited amount of children up to 16 years old, living in the same household.</p>
                  </div>
                  
                  <div className="p-5 hover:bg-white/5 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <p className="font-bold text-white">Museum audio guide</p>
                      </div>
                      <span className="text-xl font-bold text-arena-primary">UGX 1,500</span>
                    </div>
                    <p className="text-sm text-arena-primary/80">Due to ongoing renovation work, there are currently some inaccuracies. We apologise for any inconvenience this may cause.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment & Accessibility */}
            <div className="space-y-6">
              <section className="bg-arena-dark rounded-xl p-6 border border-white/5 shadow-lg">
                <h4 className="font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-white" /> Payment Options
                </h4>
                <div className="space-y-4 text-sm text-white/80">
                  <div className="pb-3 border-b border-white/5">
                    <p className="font-bold text-white mb-1">In the online shop:</p>
                    <p>PayPal, Credit cards</p>
                  </div>
                  <div className="pb-3 border-b border-white/5">
                    <p className="font-bold text-white mb-1">At the AkiiBua Museum ticket office:</p>
                    <p>Debit card, Credit cards, NFC payment (e.g. Apple Pay and Google Pay)</p>
                  </div>
                  <p className="text-arena-primary font-medium italic">We recommend purchasing tickets online in advance.</p>
                </div>
              </section>

              <section className="bg-arena-navy/80 rounded-xl p-6 border border-white/5">
                <h4 className="font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-3">
                  <Accessibility className="w-6 h-6 text-white" /> Accessibility
                </h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  <strong className="text-white">Note for wheelchair users:</strong> Please report to the ticket office in the AkiiBua Museum foyer when you arrive. From there, our trained staff will take you by lift to the Arena View. At the end of the tour, the staff will take you back to the ticket office area from a prearranged meeting point. Booking by telephone or email in advance of the visit is not necessary.
                </p>
              </section>
            </div>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}


