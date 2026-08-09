import HeroSection from "@/components/HeroSection";

export default function LuggageStoragePage() {
  return (
    <>
      <HeroSection
        title="Luggage Storage"
        subtitle="Secure your bags at the Akii-Bua Olympic Stadium"
        image="/transport_public.png"
       size="small" />
      
      {/* The Bag Policy - Light Section */}
      <section className="bg-slate-50 py-20 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-10 rounded-2xl shadow-xl border-l-8 border-arena-primary relative overflow-hidden">
            <h2 className="text-3xl font-black text-arena-navy uppercase tracking-tight mb-4">
              The Bag Policy
            </h2>
            <p className="text-xl text-arena-navy font-medium mb-6">
              Generally, only bags up to <strong className="text-arena-primary">DIN A4 size</strong> are allowed inside the stadium.
            </p>
            <p className="text-arena-muted leading-relaxed">
              For security and space reasons, larger backpacks, suitcases, and other bulky items are strictly prohibited from entering the stadium seating and concourse areas. If you bring an oversized bag, you <strong>must</strong> leave it at one of the designated storage points outside the gates.
            </p>
          </div>
        </div>
      </section>

      {/* Storage Locations - Dark Section */}
      <section className="bg-arena-navy py-24 px-6 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-arena-red/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-4">
              Storage <span className="text-arena-primary">Locations</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Our storage facilities open with the museum and close approximately one hour after the end of a match.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Matchday Storage */}
            <div className="bg-arena-dark p-10 rounded-2xl border border-white/10 shadow-xl">
              <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-wider flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-arena-red block"></span> Matchdays & Events
              </h3>
              <p className="text-white/60 mb-8 pb-8 border-b border-white/10">Designated drop-off points for massive crowds.</p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">The Esplanade (South Side)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    For fans arriving via the main public walkways and transit drop-offs, the primary storage facilities are located here.
                  </p>
                  <ul className="text-arena-primary font-medium space-y-1">
                    <li>â†’ Service Point 2</li>
                    <li>â†’ Service Point 3</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Guest Entrance (North Side)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    There is also a permanent storage point located at the North Side, ideal for fans arriving by coach or using the visitor parking.
                  </p>
                </div>
              </div>
            </div>

            {/* Non-Matchday Storage */}
            <div className="bg-arena-dark p-10 rounded-2xl border border-white/10 shadow-xl">
              <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-wider flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-blue-500 block"></span> Non-Matchdays
              </h3>
              <p className="text-white/60 mb-8 pb-8 border-b border-white/10">Peaceful days visiting the museum or taking a tour.</p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Museum Entrance Lockers</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    If you are visiting the stadium on a non-matchday for a guided tour or to visit the club museum, you do not need to use the outdoor Service Points.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    There are convenient, secure lockers available directly in the museum&apos;s entrance area for standard carry-on luggage and backpacks.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Fees & Recommendations - Slate Section */}
      <section className="bg-arena-gray py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          
          {/* Fees */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
            <h2 className="text-3xl font-black text-arena-navy uppercase tracking-tight mb-4">Storage Fee</h2>
            <div className="w-12 h-1 bg-arena-red mb-8"></div>
            
            <div className="flex items-end gap-2 mb-6">
              <span className="text-5xl font-black text-arena-primary">UGX 5,000</span>
              <span className="text-arena-muted font-bold pb-2 uppercase tracking-wider">/ per item</span>
            </div>
            
            <p className="text-arena-muted leading-relaxed">
              A flat fee is charged for each item checked into the Service Points. These facilities can generally accommodate larger items like full-sized suitcases. Please ensure you collect your items promptly after the match!
            </p>
          </div>

          {/* Recommendations */}
          <div className="bg-arena-navy p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-arena-red/10 rounded-full blur-2xl"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-4">Our Recommendation</h2>
            <div className="w-12 h-1 bg-arena-red mb-8"></div>
            
            <p className="text-white/80 leading-relaxed mb-6">
              Because these storage areas can become incredibly busy as 40,000+ fans arrive for a match, we highly recommend:
            </p>
            
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <span className="w-6 h-6 rounded-full bg-arena-red text-white flex items-center justify-center font-bold shrink-0">1</span>
                <span className="text-white/90 font-medium">Arriving early to secure a spot before the rush.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="w-6 h-6 rounded-full bg-arena-red text-white flex items-center justify-center font-bold shrink-0">2</span>
                <span className="text-white/90 font-medium">If possible, leave unnecessary luggage at your hotel or a storage facility in the Lira city center to completely avoid the queues at the stadium gates.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}

