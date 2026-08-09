import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barrier-Free Arena | Akii-Bua Olympic Stadium",
  description: "Information about accessible facilities and barrier-free access at the Akii-Bua Olympic Stadium.",
};
import Link from "next/link";

const features = [
  {
    title: "Premium Seating",
    detail: "324 Spaces",
    category: "Inside the Arena",
    description: "Allocated to people with wheelchairs and one carer along the side and in the north curve, on the top row of the lower tier.",
    image: "/arena_interior.png",
  },
  {
    title: "Hearing & Vision",
    detail: "Available",
    category: "Matchdays",
    description: "Subtitles via smartphone and headphones with a report for people with visual impairments for an unrestricted soccer experience.",
    image: "/matchday_exterior.png",
  },
  {
    title: "AkiiBua Museum",
    detail: "Barrier-Free",
    category: "Exhibition",
    description: "The entire exhibition is on one level. Generous provision of space and clear routing makes travelling through history a fascinating experience.",
    image: "/museum_exhibition.png",
  },
  {
    title: "Guided Tours",
    detail: "Non-Matchdays",
    category: "Groups",
    description: "For groups, guided tours for people with disabilities are operated on non-matchdays. Guided tours must be booked in advance.",
    image: "/museum_tour_1782318204191.png",
  },
  {
    title: "Accessible Facilities",
    detail: "Level 2",
    category: "Inside the Arena",
    description: "The entire Level 2 with kiosks and disabled toilets (accessible with EURO key) is barrier-free. One toilet is fitted with a hoist.",
    image: "/vip_lounge_premium.png",
  },
  {
    title: "Special Buses",
    detail: "Entrances S0 & S1",
    category: "Transport",
    description: "Wheelchair users may use designated special buses to enter the security zone. Lifts are available here for Promenade Level E2.",
    image: "/arena_night_hero_1782318185369.png",
  }
];

export default function BarrierFreePage() {
  return (
    <>
      <HeroSection
        title="Barrier-free Arena"
        subtitle="Accessibility for all visitors at the Akii-Bua Olympic Stadium"
        image="/arena_night_hero_1782318185369.png"
        size="small"
      />
      
      {/* Information & Features - Light Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Info UI Mock (Like Roomfinder) */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 mb-12">
            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-6">
              <svg className="w-8 h-8 text-arena-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <h2 className="text-3xl font-black text-arena-navy uppercase tracking-wider">Getting Here & Parking</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 text-arena-navy/80 leading-relaxed text-sm">
              <div className="space-y-4">
                <p>
                  <strong>130 parking spaces</strong> for people with disabilities are located on Level 3 of car park P1 (clearly signposted) and are the closest parking spaces to the Arena. From this point, people with wheelchairs have unhindered and quick access to their viewing position in the stands. A further 20 parking spaces are available for visiting fans.
                </p>
                <p>
                  Vehicles of people with disabilities higher than 2 metres must park in the bus parking spaces. Such vehicles park free of charge with a blue badge.
                </p>
                <p>
                  There is also unrestricted access to the stadium for all fans from the FrÃ¶ttmaning underground station via the Esplanade. Visitors requiring lifts should use the access to the southern end of the platform.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-arena-navy uppercase tracking-wider mb-2">Parking Permits & QR Code</h3>
                <p>
                  People with disabilities with an official blue EU parking permit (wheelchair symbol) can park free of charge on match days in car park P1, level 3. The permit is only valid in conjunction with your disabled person&apos;s pass.
                </p>
                <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
                  <ol className="list-decimal pl-5 space-y-2 font-medium">
                    <li>Scan the QR code given by security or go to <a href="https://akiibua.com/parken/qr" className="text-arena-primary hover:underline" target="_blank" rel="noopener noreferrer">akiibua.com/parken/qr</a></li>
                    <li>Enter the registration number for exit on match day</li>
                  </ol>
                  <p className="mt-3 text-xs text-arena-muted">Need help? The Rollwagerl-SHOP on Level 2 near Block A (Kiosk 1) will assist you.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid (Like Rooms Grid) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={feature.image} 
                    alt={feature.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-arena-dark/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 right-6 text-xl font-bold text-white uppercase tracking-wider">
                    {feature.title}
                  </h3>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-6 mb-6 pb-6 border-b border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-xs text-arena-muted uppercase tracking-wider font-semibold">Detail</span>
                      <span className="text-lg font-black text-arena-navy">{feature.detail}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-arena-muted uppercase tracking-wider font-semibold">Category</span>
                      <span className="text-lg font-black text-arena-navy">{feature.category}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6 flex-1">
                    <span className="text-xs text-arena-primary uppercase tracking-wider font-bold mb-2 block">Information</span>
                    <p className="text-sm text-arena-navy/80 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links & Contact - Dark Section */}
      <section className="bg-arena-navy py-20 px-6 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-arena-red/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-arena-primary font-bold tracking-[3px] uppercase text-xs mb-4 block">Additional Resources</span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-8">
            Helpful Information & Links
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            For health and safety reasons, access for people with wheelchairs is only possible with a special wheelchair ticket. For more details on accessibility in Lira and at the stadium, check the resources below.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#" className="flex items-center gap-3 bg-arena-dark border border-white/20 text-white font-bold px-8 py-4 hover:border-white transition-colors rounded-lg w-full sm:w-auto justify-center text-sm">
              MVV Transport Info
            </a>
            <a href="#" className="bg-arena-red text-white font-bold px-8 py-4 hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(220,5,45,0.3)] text-sm uppercase tracking-[2px] rounded-lg w-full sm:w-auto">
              Rollwagerl 93 e.V. Fan Club
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
