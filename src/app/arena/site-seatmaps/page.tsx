import HeroSection from "@/components/HeroSection";
import MapGridClient from "./MapGridClient";
import { availableMaps } from "@/data/maps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site & Seat Maps | Akii-Bua Olympic Stadium",
  description: "Navigate your way around the Akii-Bua Olympic Stadium with our site and seat maps.",
};

export default function SiteSeatmapsPage() {

  return (
    <>
      <HeroSection
        title="Site & Seat Maps"
        subtitle="Navigate your way around the Akii-Bua Olympic Stadium"
        image="/arena_interior.png"
        size="small"
      />

      {/* Seating Plan Overview - Light Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* General Overview Card */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-6">
                <svg className="w-8 h-8 text-arena-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <h2 className="text-3xl font-black text-arena-navy uppercase tracking-wider">Seating Plan Overview</h2>
              </div>
              
              <p className="text-arena-navy/70 leading-relaxed mb-8">
                The Akii-Bua Olympic Stadium features a clear and logical navigation system designed to help visitors locate their seats with ease. The stadium is divided into the following categories:
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 flex-1">
                <div className="bg-slate-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="text-arena-primary font-bold text-xs uppercase tracking-[2px] mb-3">Tiers</h4>
                  <ul className="space-y-2 font-semibold text-arena-navy">
                    <li>Lower Tier</li>
                    <li>Middle Tier</li>
                    <li>Upper Tier</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="text-arena-primary font-bold text-xs uppercase tracking-[2px] mb-3">Sections</h4>
                  <ul className="space-y-2 font-semibold text-arena-navy">
                    <li>North Stand</li>
                    <li>South Stand</li>
                    <li>East Stand</li>
                    <li>West Stand</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="text-arena-primary font-bold text-xs uppercase tracking-[2px] mb-3">Types</h4>
                  <ul className="space-y-2 font-semibold text-arena-navy">
                    <li>Seating Areas</li>
                    <li>Standing Areas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Visiting Fans Card */}
            <div className="bg-arena-navy p-8 md:p-12 rounded-2xl shadow-sm border border-arena-navy/50 relative overflow-hidden h-full flex flex-col">
              {/* Abstract decorative graphic */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-arena-red/10 rounded-full blur-[60px] pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6 relative z-10">
                <svg className="w-8 h-8 text-arena-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h2 className="text-3xl font-black text-white uppercase tracking-wider">Visiting Fans Section</h2>
              </div>
              
              <p className="text-white/70 leading-relaxed mb-8 relative z-10">
                The designated sections for visiting supporters ensure a safe and fantastic matchday experience, providing excellent views of the pitch from the East Side.
              </p>
              
              <div className="space-y-6 relative z-10 flex-1">
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white font-bold text-lg">Standard Allocation</h4>
                    <span className="bg-arena-red text-white text-xs font-bold uppercase tracking-wider py-1 px-2 rounded">Always Active</span>
                  </div>
                  <ul className="text-white/80 space-y-1">
                    <li><strong className="text-white">Location:</strong> Upper Tier, East Side</li>
                    <li><strong className="text-white">Blocks:</strong> 347 to 340</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl">
                  <h4 className="text-white font-bold text-lg mb-2">Additional Allocation</h4>
                  <ul className="text-white/80 space-y-1 mb-3">
                    <li><strong className="text-white">Location:</strong> Middle Tier</li>
                    <li><strong className="text-white">Block:</strong> 242</li>
                  </ul>
                  <p className="text-arena-primary text-xs font-medium uppercase tracking-wider">
                    * Note: This extra block is only made available based on visiting club demand (League & Cup matches).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mb-12">
            <h2 className="text-4xl font-black text-arena-navy uppercase tracking-wider mb-4">Available Maps & Plans</h2>
            <div className="h-1 bg-arena-red w-24 rounded" />
          </div>

          {/* Maps Grid Client Component */}
          <MapGridClient maps={availableMaps} />
        </div>
      </section>

      {/* Custom Section Note - Dark Section */}
      <section className="bg-arena-navy py-20 px-6 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-arena-red/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-arena-primary font-bold tracking-[3px] uppercase text-xs mb-4 block">Ugandan Stadium Project</span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-8">
            Tailor Your Seating Layout
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Would you like to adapt this seating map structure for your 20,000-seat Ugandan stadium project? We can organize your specific layout into similar logical sections and create a visitor-friendly navigation system customized to your needs.
          </p>
          
          <button className="bg-arena-red text-white font-bold px-8 py-4 hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(220,5,45,0.3)] text-sm uppercase tracking-[2px] rounded-lg w-full sm:w-auto">
            Contact Us to Adapt Plan
          </button>
        </div>
      </section>
    </>
  );
}

