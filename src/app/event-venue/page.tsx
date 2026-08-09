import HeroSection from "@/components/HeroSection";
import VirtualCard from "@/components/VirtualCard";
import Link from "next/link";
import Image from "@/components/ImageWrapper";

export default function EventVenuePage() {
  return (
    <>
      <HeroSection
        title="Event Venue"
        subtitle="Host your event at a true Lira landmark"
        image="/event_conference.png"
      />
      
      {/* The Ambience - Light Section */}
      <section className="bg-slate-50 py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-arena-primary font-bold tracking-[3px] uppercase text-xs mb-4 block">The Ambience</span>
            <h2 className="text-3xl md:text-5xl font-black text-arena-navy uppercase tracking-tight leading-none mb-6">
              More than just a stadium
            </h2>
            <p className="text-arena-navy/70 text-lg leading-relaxed mb-6">
              The Akii-Bua Olympic Stadium, home of AkiiBua Lira, is an architectural masterpiece and a globally recognized landmark. It offers an inspiring and totally unique atmosphere for your next event.
            </p>
            <p className="text-arena-navy/70 text-lg leading-relaxed mb-8">
              Imagine welcoming your guests right on the <strong>touchline</strong> of the pitch, hosting a dinner inside the awe-inspiring <strong>AkiiBua Museum</strong>, or holding an exclusive workshop inside the actual <strong>players&apos; dressing rooms</strong>.
            </p>
            <div className="flex gap-4">
              <div className="flex-1 bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                <span className="block text-3xl font-black text-arena-primary mb-1">10</span>
                <span className="text-xs uppercase tracking-wider font-bold text-arena-muted">Min Guests</span>
              </div>
              <div className="flex-1 bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                <span className="block text-3xl font-black text-arena-primary mb-1">2,000</span>
                <span className="text-xs uppercase tracking-wider font-bold text-arena-muted">Max Guests</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
             <Image 
                src="/saebener_lounge.png" 
                alt="SÃ¤bener Lounge" 
                fill 
                className="object-cover"
              />
          </div>
        </div>
      </section>

      {/* Featured Rooms - Dark Section */}
      <section className="bg-arena-navy py-24 px-6 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-arena-red/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-arena-primary font-bold tracking-[3px] uppercase text-xs mb-4 block">Exclusive Spaces</span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
                Our Favourite <span className="text-arena-primary">Rooms</span>
              </h2>
            </div>
            <Link 
              href="/event-venue/rooms" 
              className="inline-block bg-white text-arena-navy font-bold px-8 py-3 hover:bg-gray-100 transition-colors text-xs uppercase tracking-wider rounded border border-transparent"
            >
              Open Roomfinder
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VirtualCard
              title="Business Club"
              subtitle="The ultimate premium space"
              image="/business_club.png"
              href="/event-venue/rooms"
            />
            <VirtualCard
              title="SÃ¤bener Lounge"
              subtitle="Sleek, modern VIP experience"
              image="/saebener_lounge.png"
              href="/event-venue/rooms"
            />
            <VirtualCard
              title="Eventbox 1"
              subtitle="Intimate & exclusive"
              image="/vip_lounge_premium.png"
              href="/event-venue/rooms"
            />
            <VirtualCard
              title="Presenterbox 3"
              subtitle="Perfect for workshops"
              image="/presenterbox.png"
              href="/event-venue/rooms"
            />
            <VirtualCard
              title="Cooking Lounge"
              subtitle="Interactive culinary events"
              image="/arena_catering.png"
              href="/event-venue/rooms"
            />
            <VirtualCard
              title="KALLEs Bar"
              subtitle="Stylish get-togethers"
              image="/event_gala.png"
              href="/event-venue/rooms"
            />
          </div>
        </div>
      </section>

      {/* Planning Support & DO & CO - Slate Section */}
      <section className="bg-arena-gray py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-12 md:p-16 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
            
            <div className="md:w-1/2">
              <span className="text-arena-primary font-bold tracking-[3px] uppercase text-xs mb-4 block">Full Support</span>
              <h2 className="text-3xl md:text-4xl font-black text-arena-navy uppercase tracking-tight mb-6">
                Planning made easy
              </h2>
              <p className="text-arena-muted leading-relaxed mb-6">
                Whether you are organizing an event independently, with your internal corporate team, or through an external agency, we provide comprehensive support.
              </p>
              <p className="text-arena-muted leading-relaxed font-medium">
                All event logistics and catering are managed by our official hospitality partner, <strong>DO & CO</strong>. They will provide tailored offers and guarantee seamless execution before, during, and after your event.
              </p>
            </div>

            <div className="md:w-1/2 w-full bg-slate-50 p-8 rounded-2xl border border-gray-200 text-center">
              <h3 className="text-xl font-bold text-arena-navy mb-6">Contact DO & CO</h3>
              
              <div className="space-y-4">
                <a href="mailto:events@akiibua.ug" className="flex items-center justify-center gap-3 bg-white border border-gray-200 text-arena-navy font-bold px-6 py-4 hover:border-arena-primary hover:text-arena-primary transition-all rounded-lg shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  events@akiibua.ug
                </a>
                
                <a href="tel:+4989323764301" className="flex items-center justify-center gap-3 bg-arena-navy text-white font-bold px-6 py-4 hover:bg-arena-red transition-all rounded-lg shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +49 89 32376 4301
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
