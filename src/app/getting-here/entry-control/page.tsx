import HeroSection from "@/components/HeroSection";

export default function EntryControlPage() {
  return (
    <>
      <HeroSection
        title="Entry Control"
        subtitle="Security rules and regulations for the Akii-Bua Olympic Stadium"
        image="/transport_public.png"
       size="small" />
      
      {/* General Rules - Light Section */}
      <section className="bg-slate-50 py-20 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-arena-primary font-bold tracking-[3px] uppercase text-xs mb-4 block">Important Information</span>
            <h2 className="text-3xl md:text-5xl font-black text-arena-navy uppercase tracking-tight leading-none mb-6">
              General Entry Rules
            </h2>
            <p className="text-arena-navy/70 text-lg leading-relaxed">
              To ensure the safety and security of all visitors at the Akii-Bua Olympic Stadium, strict entry controls are in place. Please familiarize yourself with the following regulations before your visit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <h3 className="text-xl font-bold text-arena-navy mb-4 uppercase tracking-wider">Tickets</h3>
              <div className="w-8 h-0.5 bg-arena-red mx-auto mb-4"></div>
              <p className="text-arena-muted text-sm leading-relaxed">
                Every individual visitor must possess a valid ticket to pass through the entrance turnstiles.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <h3 className="text-xl font-bold text-arena-navy mb-4 uppercase tracking-wider">Children</h3>
              <div className="w-8 h-0.5 bg-arena-red mx-auto mb-4"></div>
              <p className="text-arena-muted text-sm leading-relaxed">
                For health and safety, children are <strong>not</strong> allowed to sit on laps. Every child must have their own separate seat and valid ticket.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <h3 className="text-xl font-bold text-arena-navy mb-4 uppercase tracking-wider">Concessions</h3>
              <div className="w-8 h-0.5 bg-arena-red mx-auto mb-4"></div>
              <p className="text-arena-muted text-sm leading-relaxed">
                Use designated turnstiles for concessionary tickets. You can upgrade to a normal ticket by paying the difference to a steward inside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Allowed vs Prohibited - Dark Section */}
      <section className="bg-arena-navy py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-arena-red/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-4">
              Item <span className="text-arena-primary">Regulations</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Allowed Items */}
            <div className="bg-arena-dark p-10 rounded-2xl border border-white/10 shadow-xl">
              <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-wider flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-green-500 block"></span> Allowed Items
              </h3>
              <p className="text-white/60 mb-8 pb-8 border-b border-white/10">You are permitted to bring the following items into the stadium.</p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-3">Cameras</h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>âUGX ¢ Digital and SLR cameras with standard lenses (up to 200 mm)</li>
                    <li>âUGX ¢ Must be for <strong>private use only</strong></li>
                    <li>âUGX ¢ No telephoto lenses, tripods, or extra camera bags</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-3">Fan Items</h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>âUGX ¢ Flags with wooden poles (max 1.50m long, 2cm diameter)</li>
                    <li>âUGX ¢ Flags with flexible plastic poles (max 1.50m long, 3cm diameter)</li>
                    <li>âUGX ¢ Fan club flags (max 1 meter)</li>
                    <li>âUGX ¢ Drums (must be open at the bottom for visual inspection)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-3">Personal Items</h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>âUGX ¢ Empty, transparent PET bottles (up to 0.5 liters)</li>
                    <li>âUGX ¢ Clearly labeled medicines</li>
                    <li>âUGX ¢ Binoculars (max magnification 10x50)</li>
                    <li>âUGX ¢ Seat cushions and blankets</li>
                    <li>âUGX ¢ Umbrellas <strong>without</strong> metal tips</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Prohibited Items */}
            <div className="bg-arena-dark p-10 rounded-2xl border border-arena-primary/30 shadow-[0_0_40px_rgba(220,5,45,0.05)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-arena-red"></div>
              <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-wider flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-arena-red block"></span> Prohibited Items
              </h3>
              <p className="text-white/60 mb-8 pb-8 border-b border-white/10">These items will be strictly confiscated at the entrance controls.</p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-arena-primary uppercase tracking-wider mb-3">Liquids, Food & Containers</h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>âUGX ¢ Liquids of all kinds (including e-cigarette refills)</li>
                    <li>âUGX ¢ Glass/plastic bottles, Tetra Paks, thermoses, cups, cans</li>
                    <li>âUGX ¢ Baby bottles of all sizes</li>
                    <li>âUGX ¢ Any fruit (e.g., apples, bananas)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-arena-primary uppercase tracking-wider mb-3">Bags & Bulky Items</h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>âUGX ¢ Any bag <strong>larger than A4 size</strong></li>
                    <li>âUGX ¢ Ladders, stools, boxes, suitcases, bulky items</li>
                    <li>âUGX ¢ Pushchairs, wheeled walkers, scooters, helmets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-arena-primary uppercase tracking-wider mb-3">Weapons & Sharp Objects</h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>âUGX ¢ Weapons of any kind, spray cans, flammable items</li>
                    <li>âUGX ¢ Knives of any size, scissors, nail files, tools</li>
                    <li>âUGX ¢ Studded bracelets, metal chains over 50 cm</li>
                    <li>âUGX ¢ Umbrellas with metal tips</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-arena-primary uppercase tracking-wider mb-3">Stadium Disruptions</h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>âUGX ¢ Laser pointers, megaphones, air horns</li>
                    <li>âUGX ¢ Professional camera equipment, selfie sticks</li>
                    <li>âUGX ¢ Banners with offensive, political, or racist slogans</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Authorization & Violations - Slate Section */}
      <section className="bg-arena-gray py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-black text-arena-navy uppercase tracking-tight mb-4">Prior Authorization</h2>
            <div className="w-12 h-1 bg-arena-red mb-8"></div>
            <p className="text-arena-muted mb-6">
              Specific promotional or fan display items must be registered in writing with the Stadium Fan Support Department at least <strong>one week before the match</strong>:
            </p>
            <ul className="text-arena-navy font-medium space-y-3 mb-8">
              <li>âUGX ¢ Banners or posters (provide text and size)</li>
              <li>âUGX ¢ Larger flags (provide details)</li>
              <li>âUGX ¢ Choreographies (provide design and materials)</li>
              <li>âUGX ¢ Flyers, brochures, fan magazines (provide contents)</li>
              <li>âUGX ¢ Confetti and streamers</li>
            </ul>
            <div className="bg-slate-50 p-6 rounded-xl border border-gray-200">
              <h4 className="font-bold text-arena-navy uppercase tracking-wider text-xs mb-3">Contact Fan Support</h4>
              <p className="text-sm text-arena-muted mb-1"><strong>Email:</strong> fanclubs@akii-bua-stadium.com</p>
              <p className="text-sm text-arena-muted mb-1"><strong>Address:</strong> Akii-Bua Olympic Stadium, Fan Support, Lira</p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-red-100 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>
            <h2 className="text-3xl font-black text-red-600 uppercase tracking-tight mb-4">Severe Violations</h2>
            <div className="w-12 h-1 bg-red-600 mb-8"></div>
            <p className="text-xl text-arena-navy font-bold mb-6 leading-relaxed">
              If security finds any of the following items, they will be confiscated and the <span className="text-red-600">police will be immediately informed</span>.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">!</span>
                <span className="text-arena-muted"><strong>Pyrotechnics:</strong> Fireworks or flares of any kind.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">!</span>
                <span className="text-arena-muted"><strong>Illegal Symbols:</strong> Flags or items displaying offensive or illegal symbols.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">!</span>
                <span className="text-arena-muted"><strong>Dangerous Weapons:</strong> Static knives (blades &gt; 10cm), butterfly knives, throwing stars, knuckledusters.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">!</span>
                <span className="text-arena-muted"><strong>Suspicious Items:</strong> Tablets or powders hidden in plastic bags or unusual containers.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}

