import HeroSection from "@/components/HeroSection";
import VirtualCard from "@/components/VirtualCard";
import InfoCard from "@/components/InfoCard";
import Image from "@/components/ImageWrapper";

export default function StoreCateringPage() {
  return (
    <>
      <HeroSection
        title="Store & Catering"
        subtitle="Shop official merchandise and enjoy premium stadium dining"
        image="/arena_catering.png"
      />
      
      {/* AkiiBua Megastore - Dark Section */}
      <section className="bg-arena-navy py-20 px-6 relative overflow-hidden">
        {/* Subtle background blur for premium effect */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-arena-red/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <span className="text-blue-300 font-bold tracking-[3px] uppercase text-xs mb-3 block">Shopping Experience</span>
              <h2 className="text-4xl font-black text-white uppercase tracking-tight leading-none mb-6">
                AkiiBua<br />Megastore
              </h2>
              <p className="text-white/70 mb-8 text-lg leading-relaxed">
                Immerse yourself in the world of AkiiBua. Discover the latest jerseys, exclusive fan merchandise, and unique souvenirs in our massive flagship store directly at the Akii-Bua Olympic Stadium.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/5 border border-white/10 rounded px-4 py-2 backdrop-blur-md">
                  <span className="block text-white/50 text-[10px] uppercase tracking-wider font-bold mb-1">Location</span>
                  <span className="text-white text-sm font-semibold">Level 3, North Curve</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded px-4 py-2 backdrop-blur-md">
                  <span className="block text-white/50 text-[10px] uppercase tracking-wider font-bold mb-1">Opening Hours</span>
                  <span className="text-white text-sm font-semibold">10:00 - 18:00 (Non-Matchdays)</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(220,5,45,0.15)] group">
                <Image 
                  src="/arena_catering.png" 
                  alt="AkiiBua Megastore" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-arena-navy/80 via-transparent to-transparent" />
                <a 
                  href="https://akiibua.com/store" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-arena-red/90 backdrop-blur-md px-6 py-4 rounded-xl text-white font-bold hover:bg-arena-red transition-colors shadow-lg"
                >
                  <span>VISIT THE ONLINE STORE</span>
                  <span>â†’</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catering & Dining - Light Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-black text-arena-navy uppercase tracking-wider">Stadium Catering</h2>
            <div className="h-1 bg-arena-red flex-1 max-w-[100px] rounded" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <InfoCard
              href="/event-venue/do-co"
              title="DO & CO Premium Dining"
              subtitle="HOSPITALITY"
              cta="Explore Menu"
              image="/arena_catering.png"
            />
            <InfoCard
              href="/arena/hospitality-and-tickets"
              title="Matchday Kiosks"
              subtitle="STADIUM FOOD"
              cta="View Locations"
              image="/arena_interior.png"
            />
            <InfoCard
              href="/events/concerts"
              title="Event Catering"
              subtitle="SPECIAL EVENTS"
              cta="Learn More"
              image="/arena_catering.png"
            />
            <InfoCard
              href="/store-catering"
              title="Arena Bistro"
              subtitle="NON-MATCHDAY"
              cta="Opening Hours"
              image="/vip_lounge.png"
            />
          </div>
        </div>
      </section>
    </>
  );
}

