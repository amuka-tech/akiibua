import HeroSection from "@/components/HeroSection";
import VirtualCard from "@/components/VirtualCard";
import InfoCard from "@/components/InfoCard";

const schedules = [
  { day: "Monday - Friday", hours: "10:00 - 18:00", note: "Arena Tours & Museum" },
  { day: "Saturday", hours: "09:00 - 18:00", note: "Arena Tours & Museum" },
  { day: "Sunday & Public Holidays", hours: "10:00 - 16:00", note: "Arena Tours & Museum" },
  { day: "Matchdays", hours: "Varies", note: "Open 3 hours before kickoff" },
  { day: "Event Days", hours: "Varies", note: "Depends on event schedule" },
  { day: "AkiiBua Store", hours: "10:00 - 18:00", note: "Extended hours on matchdays" },
];

export default function EventsPage() {
  return (
    <>
      <HeroSection
        title="Events & Matches"
        subtitle="Discover upcoming matches and exhibitions at the Akii-Bua Olympic Stadium"
        image="/concert_event_1782318250313.png"
      />
      
      {/* Major Matches - Dark Section */}
      <section className="bg-arena-navy py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-end mb-10">
            <div className="lg:w-2/3">
              <span className="text-blue-300 font-bold tracking-[3px] uppercase text-xs mb-3 block">Live Matches</span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-4">
                Summer Matches <span className="text-arena-primary">2026</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
                Experience the biggest international matches live. The Akii-Bua Olympic Stadium hosts spectacular football events this June.
              </p>
            </div>
            <div className="lg:w-1/3 flex lg:justify-end pb-2">
              <a href="https://momoticketing.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-transparent border border-white/20 text-white font-bold px-8 py-3 hover:bg-white hover:text-arena-navy transition-colors text-xs uppercase tracking-wider rounded">
                Check Ticket Availability
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <VirtualCard
              title="AkiiBua vs Real Madrid"
              subtitle="June 11, 2026"
              image="/rock_concert.png"
              href="#"
            />
            <VirtualCard
              title="AkiiBua vs Juventus"
              subtitle="June 17, 2026"
              image="/rock_concert.png"
              href="#"
            />
            <VirtualCard
              title="AkiiBua vs PSG"
              subtitle="June 25, 2026"
              image="/pop_concert.png"
              href="#"
            />
          </div>
        </div>
      </section>

      {/* Exhibition & Tours - Light Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-black text-arena-navy uppercase tracking-tight leading-none mb-6">
                Exhibitions &<br />
                <span className="text-arena-primary">Tours</span>
              </h2>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
                <h4 className="font-bold text-arena-navy text-sm uppercase tracking-wider mb-2">Ticket Alert (June)</h4>
                <ul className="text-sm text-arena-muted space-y-2">
                  <li><strong className="text-arena-primary">June 24 - 26:</strong> No tours available.</li>
                  <li><strong className="text-arena-navy">June 27 - 29:</strong> Tickets are limited.</li>
                  <li><strong className="text-arena-navy">June 30:</strong> Tickets available.</li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
              <InfoCard
                title="20 Years of Akii-Bua Olympic Stadium"
                subtitle="SPECIAL EXHIBITION"
                cta="View Exhibition"
                image="/exhibition.png"
                href="/tours-museum/akiibua-museum"
              />
              <InfoCard
                title="AkiiBua Museum"
                subtitle="DAILY OPENING"
                cta="Book Tickets"
                image="/museum_exhibition.png"
                href="/tours-museum"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Football Note - Slate Section */}
      <section className="bg-arena-gray py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-10 rounded-2xl shadow-card border border-gray-100 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 shrink-0 bg-arena-navy rounded-full flex items-center justify-center text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-arena-navy mb-2">AkiiBua Matches</h3>
              <p className="text-arena-muted leading-relaxed">
                There are no AkiiBua FC football matches currently scheduled for June 2026 due to the FUFA Premier League mid-season break. The season typically pauses in June and resumes in August. Please check back later for the new season fixtures!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Opening Times Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-arena-navy uppercase tracking-wider">Opening Times</h2>
            <div className="h-1 bg-arena-red flex-1 max-w-[100px] rounded" />
          </div>
          <div className="bg-white rounded-xl shadow-card border border-gray-100 overflow-hidden">
            {schedules.map((item) => (
              <div key={item.day} className="group flex items-center justify-between p-5 border-b border-gray-100 last:border-0 hover:bg-slate-50 transition-colors">
                <div>
                  <h3 className="font-semibold text-arena-navy group-hover:text-arena-primary transition-colors">{item.day}</h3>
                  <p className="text-xs text-arena-muted">{item.note}</p>
                </div>
                <span className="text-arena-primary font-semibold text-sm">{item.hours}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-arena-muted mt-6 text-center">
            Opening times may vary. Please check before your visit.
          </p>
        </div>
      </section>
    </>
  );
}
