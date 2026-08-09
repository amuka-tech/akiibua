import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import CardGrid from "@/components/ui/CardGrid";
import { rooms } from "@/data/rooms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Rooms | Akii-Bua Olympic Stadium",
  description: "Find the perfect space for your corporate or private event at the Akii-Bua Olympic Stadium.",
};

export default function RoomsPage() {
  return (
    <>
      <HeroSection
        title="Event Rooms"
        subtitle="Find the perfect space for your corporate or private event"
        image="/presenterbox.png"
       size="small" />
      
      {/* Roomfinder & Rooms Grid - Light Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Roomfinder UI Mock */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-arena-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <h2 className="text-2xl font-black text-arena-navy uppercase tracking-wider">Roomfinder</h2>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <label className="block text-xs font-bold text-arena-navy uppercase tracking-wider mb-2">Capacity</label>
                <select className="w-full bg-slate-50 border border-gray-200 text-arena-navy text-sm rounded-lg p-3 outline-none focus:border-arena-primary transition-colors">
                  <option>Any number of persons</option>
                  <option>Up to 20 persons</option>
                  <option>20 - 50 persons</option>
                  <option>50+ persons</option>
                </select>
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="block text-xs font-bold text-arena-navy uppercase tracking-wider mb-2">Size (sq m)</label>
                <select className="w-full bg-slate-50 border border-gray-200 text-arena-navy text-sm rounded-lg p-3 outline-none focus:border-arena-primary transition-colors">
                  <option>Any size</option>
                  <option>Up to 50 sq m</option>
                  <option>50 - 100 sq m</option>
                  <option>100+ sq m</option>
                </select>
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="block text-xs font-bold text-arena-navy uppercase tracking-wider mb-2">Seating Arrangement</label>
                <select className="w-full bg-slate-50 border border-gray-200 text-arena-navy text-sm rounded-lg p-3 outline-none focus:border-arena-primary transition-colors">
                  <option>Any arrangement</option>
                  <option>Standing Tables</option>
                  <option>Round Tables</option>
                  <option>Classroom</option>
                  <option>Theater</option>
                  <option>U-Form</option>
                </select>
              </div>
            </div>
          </div>

          {/* Rooms Grid */}
          <CardGrid 
            items={rooms}
            renderItem={(room, idx) => (
              <div key={room.title} className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={room.image} 
                    alt={room.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-arena-dark/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 right-6 text-xl font-bold text-white uppercase tracking-wider">
                    {room.title}
                  </h3>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-6 mb-6 pb-6 border-b border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-xs text-arena-muted uppercase tracking-wider font-semibold">Capacity</span>
                      <span className="text-lg font-black text-arena-navy">Max. {room.capacity}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-arena-muted uppercase tracking-wider font-semibold">Size</span>
                      <span className="text-lg font-black text-arena-navy">{room.size} mÂ²</span>
                    </div>
                  </div>
                  
                  <div className="mb-6 flex-1">
                    <span className="text-xs text-arena-primary uppercase tracking-wider font-bold mb-2 block">Ideal For</span>
                    <p className="text-sm text-arena-navy/80 leading-relaxed font-medium">
                      {room.idealFor}
                    </p>
                  </div>
                  
                  <button className="w-full py-3 bg-slate-50 text-arena-navy font-bold text-xs uppercase tracking-[2px] rounded hover:bg-arena-red hover:text-white transition-colors border border-gray-200 hover:border-transparent">
                    View Details
                  </button>
                </div>
              </div>
            )}
          />
          
          <div className="mt-12 text-center">
            <button className="bg-white text-arena-navy border-2 border-arena-navy font-bold px-8 py-3 hover:bg-arena-navy hover:text-white transition-colors text-xs uppercase tracking-wider rounded">
              Show More Rooms
            </button>
          </div>
        </div>
      </section>

      {/* DO & CO Contact - Dark Section */}
      <section className="bg-arena-navy py-20 px-6 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-arena-red/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-arena-primary font-bold tracking-[3px] uppercase text-xs mb-4 block">Official Hospitality Partner</span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-8">
            Book Your Event with DO & CO
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            The event spaces and hospitality services at the Akii-Bua Olympic Stadium are managed by our exclusive partner, DO & CO. For questions or to make a non-binding inquiry, please reach out directly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:+4989323764301" className="flex items-center gap-3 bg-arena-dark border border-white/20 text-white font-bold px-8 py-4 hover:border-white transition-colors rounded-lg w-full sm:w-auto justify-center">
              <svg className="w-5 h-5 text-arena-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +49 89 32376 4301
            </a>
            <button className="bg-arena-red text-white font-bold px-8 py-4 hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(220,5,45,0.3)] text-sm uppercase tracking-[2px] rounded-lg w-full sm:w-auto">
              Non-binding Inquiry
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
